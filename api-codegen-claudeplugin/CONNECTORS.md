# Connecting MCP Servers

This plugin can work with or without MCP servers. MCP servers enhance the plugin's capabilities by providing additional tools and integrations.

## Available MCP Servers

### OpenAPI Generator Server

**Location:** `mcp-servers/openapi-generator/`

**Capabilities:**
- Validate OpenAPI specifications
- Parse and dereference OpenAPI specs
- Generate API code for multiple frameworks
- Create OpenAPI specs from descriptions

**Setup:**

1. Navigate to the server directory:
```bash
cd mcp-servers/openapi-generator
```

2. Install dependencies:
```bash
npm install
```

3. The server is automatically configured in `.mcp.json`

**Tools Provided:**
- `validate_openapi` - Validate OpenAPI specs
- `parse_openapi` - Parse and dereference specs
- `generate_api_code` - Generate framework code
- `create_openapi_spec` - Create new specs

### Test Framework Server

**Location:** `mcp-servers/test-framework/` (Coming soon)

**Capabilities:**
- Generate unit tests from code
- Run test suites
- Generate coverage reports
- Create test fixtures

## Configuration

MCP servers are configured in the `.mcp.json` file at the root of the plugin:

```json
{
  "mcpServers": {
    "openapi-generator": {
      "type": "stdio",
      "command": "node",
      "args": ["mcp-servers/openapi-generator/index.js"]
    }
  }
}
```

## Using Without MCP Servers

If MCP servers are not connected, the plugin will still work by:

1. **Generating code from descriptions**: Claude will generate code based on natural language descriptions
2. **Creating specs manually**: OpenAPI specs will be created from scratch
3. **Providing templates**: Boilerplate code and test templates will be provided

## Verifying Connection

To verify that MCP servers are connected:

1. Start Claude with the plugin
2. Ask: "What MCP servers are available?"
3. Claude will list connected servers and their capabilities

## Troubleshooting

### Server Not Starting

**Check Node.js version:**
```bash
node --version  # Should be v18 or higher
```

**Check dependencies:**
```bash
cd mcp-servers/openapi-generator
npm install
```

**Test server manually:**
```bash
npm start
```

### Server Connection Issues

**Verify .mcp.json:**
- Check file exists in plugin root
- Verify JSON syntax is valid
- Ensure paths are correct

**Check logs:**
- MCP servers log to stderr
- Check Claude's console for error messages

### Permission Issues

**Make server executable:**
```bash
chmod +x mcp-servers/openapi-generator/index.js
```

## Adding Custom MCP Servers

You can add your own MCP servers to extend the plugin:

1. Create a new directory in `mcp-servers/`
2. Implement the MCP server protocol
3. Add configuration to `.mcp.json`
4. Document the server's capabilities

Example:

```json
{
  "mcpServers": {
    "custom-server": {
      "type": "stdio",
      "command": "node",
      "args": ["mcp-servers/custom-server/index.js"]
    }
  }
}
```

## External MCP Servers

You can also connect to external MCP servers:

### HTTP Servers

```json
{
  "mcpServers": {
    "external-api": {
      "type": "http",
      "url": "https://api.example.com/mcp"
    }
  }
}
```

### Remote Servers

```json
{
  "mcpServers": {
    "remote-server": {
      "type": "stdio",
      "command": "ssh",
      "args": ["user@host", "node", "/path/to/server.js"]
    }
  }
}
```

## Best Practices

1. **Keep servers lightweight**: MCP servers should start quickly
2. **Handle errors gracefully**: Return meaningful error messages
3. **Document tools**: Provide clear descriptions for all tools
4. **Version your servers**: Use semantic versioning
5. **Test independently**: Test servers outside of Claude
6. **Log appropriately**: Use stderr for logs, stdout for MCP protocol

## Resources

- [MCP Protocol Specification](https://modelcontextprotocol.io)
- [MCP SDK Documentation](https://github.com/modelcontextprotocol/sdk)
- [Example MCP Servers](https://github.com/modelcontextprotocol/servers)
