#!/usr/bin/env node

/**
 * OpenAPI Generator MCP Server
 * 
 * This MCP server provides tools for generating API code from OpenAPI specifications
 * and creating OpenAPI specs from code or descriptions.
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import SwaggerParser from 'swagger-parser';
import yaml from 'js-yaml';
import fs from 'fs/promises';
import path from 'path';

/**
 * MCP Server for OpenAPI operations
 */
class OpenAPIGeneratorServer {
  constructor() {
    this.server = new Server(
      {
        name: 'openapi-generator',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  setupErrorHandling() {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'validate_openapi',
          description: 'Validate an OpenAPI specification file',
          inputSchema: {
            type: 'object',
            properties: {
              specPath: {
                type: 'string',
                description: 'Path to the OpenAPI specification file (YAML or JSON)',
              },
            },
            required: ['specPath'],
          },
        },
        {
          name: 'parse_openapi',
          description: 'Parse and dereference an OpenAPI specification',
          inputSchema: {
            type: 'object',
            properties: {
              specPath: {
                type: 'string',
                description: 'Path to the OpenAPI specification file',
              },
            },
            required: ['specPath'],
          },
        },
        {
          name: 'generate_api_code',
          description: 'Generate API code from OpenAPI specification',
          inputSchema: {
            type: 'object',
            properties: {
              specPath: {
                type: 'string',
                description: 'Path to the OpenAPI specification file',
              },
              framework: {
                type: 'string',
                description: 'Target framework (express, fastapi, spring-boot, etc.)',
                enum: ['express', 'fastapi', 'spring-boot', 'django', 'nestjs'],
              },
              outputDir: {
                type: 'string',
                description: 'Output directory for generated code',
              },
            },
            required: ['specPath', 'framework', 'outputDir'],
          },
        },
        {
          name: 'create_openapi_spec',
          description: 'Create an OpenAPI specification from a description',
          inputSchema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                description: 'API title',
              },
              version: {
                type: 'string',
                description: 'API version',
              },
              description: {
                type: 'string',
                description: 'API description',
              },
              endpoints: {
                type: 'array',
                description: 'Array of endpoint definitions',
                items: {
                  type: 'object',
                  properties: {
                    path: { type: 'string' },
                    method: { type: 'string' },
                    summary: { type: 'string' },
                    parameters: { type: 'array' },
                    responses: { type: 'object' },
                  },
                },
              },
              outputPath: {
                type: 'string',
                description: 'Output path for the OpenAPI spec',
              },
            },
            required: ['title', 'version', 'endpoints', 'outputPath'],
          },
        },
      ],
    }));

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'validate_openapi':
            return await this.validateOpenAPI(args.specPath);
          
          case 'parse_openapi':
            return await this.parseOpenAPI(args.specPath);
          
          case 'generate_api_code':
            return await this.generateAPICode(
              args.specPath,
              args.framework,
              args.outputDir
            );
          
          case 'create_openapi_spec':
            return await this.createOpenAPISpec(args);
          
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  /**
   * Validate an OpenAPI specification
   */
  async validateOpenAPI(specPath) {
    try {
      const api = await SwaggerParser.validate(specPath);
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              valid: true,
              title: api.info.title,
              version: api.info.version,
              pathCount: Object.keys(api.paths || {}).length,
              message: 'OpenAPI specification is valid',
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              valid: false,
              error: error.message,
            }, null, 2),
          },
        ],
      };
    }
  }

  /**
   * Parse and dereference an OpenAPI specification
   */
  async parseOpenAPI(specPath) {
    try {
      const api = await SwaggerParser.dereference(specPath);
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(api, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to parse OpenAPI spec: ${error.message}`);
    }
  }

  /**
   * Generate API code from OpenAPI specification
   */
  async generateAPICode(specPath, framework, outputDir) {
    try {
      // Validate the spec first
      const api = await SwaggerParser.validate(specPath);
      
      // Create output directory
      await fs.mkdir(outputDir, { recursive: true });
      
      // Generate framework-specific code
      const generatedFiles = await this.generateFrameworkCode(api, framework, outputDir);
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              success: true,
              framework,
              outputDir,
              filesGenerated: generatedFiles,
              message: `Successfully generated ${framework} API code`,
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to generate API code: ${error.message}`);
    }
  }

  /**
   * Generate framework-specific code
   */
  async generateFrameworkCode(api, framework, outputDir) {
    const files = [];
    
    // This is a simplified example - in production, you'd use proper code generators
    switch (framework) {
      case 'express':
        files.push(await this.generateExpressCode(api, outputDir));
        break;
      case 'fastapi':
        files.push(await this.generateFastAPICode(api, outputDir));
        break;
      default:
        throw new Error(`Framework ${framework} not yet implemented`);
    }
    
    return files;
  }

  /**
   * Generate Express.js code
   */
  async generateExpressCode(api, outputDir) {
    const routesCode = this.generateExpressRoutes(api);
    const routesPath = path.join(outputDir, 'routes.js');
    await fs.writeFile(routesPath, routesCode);
    return routesPath;
  }

  /**
   * Generate Express routes from OpenAPI spec
   */
  generateExpressRoutes(api) {
    let code = `import express from 'express';\n\n`;
    code += `const router = express.Router();\n\n`;
    
    for (const [path, pathItem] of Object.entries(api.paths || {})) {
      for (const [method, operation] of Object.entries(pathItem)) {
        if (['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
          const summary = operation.summary || 'No description';
          code += `// ${summary}\n`;
          code += `router.${method}('${path}', async (req, res) => {\n`;
          code += `  try {\n`;
          code += `    // TODO: Implement ${operation.operationId || method + path}\n`;
          code += `    res.json({ message: 'Not implemented' });\n`;
          code += `  } catch (error) {\n`;
          code += `    res.status(500).json({ error: error.message });\n`;
          code += `  }\n`;
          code += `});\n\n`;
        }
      }
    }
    
    code += `export default router;\n`;
    return code;
  }

  /**
   * Generate FastAPI code
   */
  async generateFastAPICode(api, outputDir) {
    const routesCode = this.generateFastAPIRoutes(api);
    const routesPath = path.join(outputDir, 'main.py');
    await fs.writeFile(routesPath, routesCode);
    return routesPath;
  }

  /**
   * Generate FastAPI routes from OpenAPI spec
   */
  generateFastAPIRoutes(api) {
    let code = `from fastapi import FastAPI, HTTPException\n\n`;
    code += `app = FastAPI(title="${api.info.title}", version="${api.info.version}")\n\n`;
    
    for (const [path, pathItem] of Object.entries(api.paths || {})) {
      for (const [method, operation] of Object.entries(pathItem)) {
        if (['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
          const summary = operation.summary || 'No description';
          const fastApiPath = path.replace(/{/g, '{').replace(/}/g, '}');
          code += `@app.${method}("${fastApiPath}")\n`;
          code += `async def ${operation.operationId || method + '_' + path.replace(/[^a-zA-Z0-9]/g, '_')}():\n`;
          code += `    """\n    ${summary}\n    """\n`;
          code += `    # TODO: Implement endpoint\n`;
          code += `    return {"message": "Not implemented"}\n\n`;
        }
      }
    }
    
    return code;
  }

  /**
   * Create an OpenAPI specification
   */
  async createOpenAPISpec(args) {
    const spec = {
      openapi: '3.0.0',
      info: {
        title: args.title,
        version: args.version,
        description: args.description || '',
      },
      paths: {},
    };

    // Build paths from endpoints
    for (const endpoint of args.endpoints) {
      if (!spec.paths[endpoint.path]) {
        spec.paths[endpoint.path] = {};
      }
      
      spec.paths[endpoint.path][endpoint.method.toLowerCase()] = {
        summary: endpoint.summary,
        parameters: endpoint.parameters || [],
        responses: endpoint.responses || {
          '200': {
            description: 'Successful response',
          },
        },
      };
    }

    // Write to file
    const yamlContent = yaml.dump(spec);
    await fs.writeFile(args.outputPath, yamlContent);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            success: true,
            outputPath: args.outputPath,
            spec: spec,
          }, null, 2),
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('OpenAPI Generator MCP server running on stdio');
  }
}

// Start the server
const server = new OpenAPIGeneratorServer();
server.run().catch(console.error);
