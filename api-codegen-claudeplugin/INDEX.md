# 📑 Index - Code Generation Plugin

Welcome to the Code Generation Plugin for Claude! This index will help you navigate the project.

## 🚀 Start Here

**New Users**: Start with [`GETTING_STARTED.md`](GETTING_STARTED.md)  
**Quick Reference**: See [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md)  
**Overview**: Read [`README.md`](README.md)

## 📚 Documentation

| File | Purpose | When to Read |
|------|---------|--------------|
| [`README.md`](README.md) | Main overview, features, and capabilities | First time setup |
| [`GETTING_STARTED.md`](GETTING_STARTED.md) | Installation, tutorials, and examples | Getting started |
| [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md) | Command cheat sheet and tips | Daily use |
| [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md) | Complete structure and architecture | Understanding the project |
| [`CONNECTORS.md`](CONNECTORS.md) | MCP server setup and configuration | Setting up MCP servers |
| [`SUMMARY.md`](SUMMARY.md) | Complete project summary | Project overview |

## 🎯 Commands

Located in [`commands/`](commands/) directory:

| Command | File | Purpose |
|---------|------|---------|
| `/generate-api` | [`generate-api.md`](commands/generate-api.md) | Generate REST/GraphQL APIs |
| `/generate-tests` | [`generate-tests.md`](commands/generate-tests.md) | Create unit test suites |
| `/create-openapi` | [`create-openapi.md`](commands/create-openapi.md) | Generate OpenAPI specs |
| `/scaffold-service` | [`scaffold-service.md`](commands/scaffold-service.md) | Scaffold microservices |

## 🎓 Skills

Located in [`skills/`](skills/) directory:

| Skill | File | Focus |
|-------|------|-------|
| `api-design` | [`api-design/SKILL.md`](skills/api-design/SKILL.md) | REST API best practices |
| `test-generation` | [`test-generation/SKILL.md`](skills/test-generation/SKILL.md) | Testing patterns and strategies |

## 🔧 MCP Server

Located in [`mcp-servers/openapi-generator/`](mcp-servers/openapi-generator/):

| File | Purpose |
|------|---------|
| [`index.js`](mcp-servers/openapi-generator/index.js) | MCP server implementation |
| [`package.json`](mcp-servers/openapi-generator/package.json) | Dependencies |
| [`README.md`](mcp-servers/openapi-generator/README.md) | Server documentation |

## 📋 Configuration

| File | Purpose |
|------|---------|
| [`.claude-plugin/plugin.json`](.claude-plugin/plugin.json) | Plugin metadata |
| [`.mcp.json`](.mcp.json) | MCP server configuration |

## 📚 Examples

Located in [`examples/`](examples/) directory:

| File | Description |
|------|-------------|
| [`blog-api.yaml`](examples/blog-api.yaml) | Sample OpenAPI specification for a blog API |

## 🗺️ Navigation Guide

### I want to...

**...get started quickly**  
→ Read [`GETTING_STARTED.md`](GETTING_STARTED.md)

**...see available commands**  
→ Check [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md)

**...understand the structure**  
→ Read [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md)

**...set up MCP servers**  
→ Follow [`CONNECTORS.md`](CONNECTORS.md)

**...learn API design**  
→ Study [`skills/api-design/SKILL.md`](skills/api-design/SKILL.md)

**...learn testing**  
→ Study [`skills/test-generation/SKILL.md`](skills/test-generation/SKILL.md)

**...see an example**  
→ Check [`examples/blog-api.yaml`](examples/blog-api.yaml)

**...understand a command**  
→ Read the command file in [`commands/`](commands/)

**...work with the MCP server**  
→ See [`mcp-servers/openapi-generator/`](mcp-servers/openapi-generator/)

## 📖 Reading Order

### For First-Time Users
1. [`README.md`](README.md) - Overview
2. [`GETTING_STARTED.md`](GETTING_STARTED.md) - Installation
3. [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md) - Commands
4. Try the examples!

### For Developers
1. [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md) - Architecture
2. [`mcp-servers/openapi-generator/README.md`](mcp-servers/openapi-generator/README.md) - MCP server
3. [`commands/`](commands/) - Command implementations
4. [`skills/`](skills/) - Skill definitions

### For Contributors
1. [`SUMMARY.md`](SUMMARY.md) - Complete overview
2. [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md) - Structure
3. [`CONNECTORS.md`](CONNECTORS.md) - MCP integration
4. Source code files

## 🎯 Quick Links

### Documentation
- [Main README](README.md)
- [Getting Started](GETTING_STARTED.md)
- [Quick Reference](QUICK_REFERENCE.md)
- [Project Structure](PROJECT_STRUCTURE.md)
- [MCP Connectors](CONNECTORS.md)
- [Complete Summary](SUMMARY.md)

### Commands
- [Generate API](commands/generate-api.md)
- [Generate Tests](commands/generate-tests.md)
- [Create OpenAPI](commands/create-openapi.md)
- [Scaffold Service](commands/scaffold-service.md)

### Skills
- [API Design](skills/api-design/SKILL.md)
- [Test Generation](skills/test-generation/SKILL.md)

### MCP Server
- [Server Implementation](mcp-servers/openapi-generator/index.js)
- [Server Documentation](mcp-servers/openapi-generator/README.md)

### Examples
- [Blog API Spec](examples/blog-api.yaml)

## 📊 File Statistics

- **Total Files**: 18
- **Documentation**: 7 files (~40,000 words)
- **Commands**: 4 files
- **Skills**: 2 files
- **MCP Server**: 3 files
- **Examples**: 1 file
- **Configuration**: 2 files

## 🔍 Search Tips

### Find by Topic

**API Generation**:
- [`commands/generate-api.md`](commands/generate-api.md)
- [`skills/api-design/SKILL.md`](skills/api-design/SKILL.md)
- [`examples/blog-api.yaml`](examples/blog-api.yaml)

**Testing**:
- [`commands/generate-tests.md`](commands/generate-tests.md)
- [`skills/test-generation/SKILL.md`](skills/test-generation/SKILL.md)

**OpenAPI**:
- [`commands/create-openapi.md`](commands/create-openapi.md)
- [`mcp-servers/openapi-generator/`](mcp-servers/openapi-generator/)
- [`examples/blog-api.yaml`](examples/blog-api.yaml)

**Setup & Configuration**:
- [`GETTING_STARTED.md`](GETTING_STARTED.md)
- [`CONNECTORS.md`](CONNECTORS.md)
- [`.mcp.json`](.mcp.json)

## 🎓 Learning Path

### Beginner Path
1. Read the overview in [`README.md`](README.md)
2. Follow installation in [`GETTING_STARTED.md`](GETTING_STARTED.md)
3. Try `/generate-api` command
4. Review generated code
5. Read [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md)

### Intermediate Path
1. Study [`skills/api-design/SKILL.md`](skills/api-design/SKILL.md)
2. Study [`skills/test-generation/SKILL.md`](skills/test-generation/SKILL.md)
3. Explore all commands in [`commands/`](commands/)
4. Work with [`examples/blog-api.yaml`](examples/blog-api.yaml)
5. Set up MCP server using [`CONNECTORS.md`](CONNECTORS.md)

### Advanced Path
1. Read [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md)
2. Study MCP server in [`mcp-servers/openapi-generator/`](mcp-servers/openapi-generator/)
3. Understand the complete architecture
4. Extend with custom commands
5. Contribute improvements

## 🆘 Help & Support

**Can't find something?**
- Check this index
- Use your editor's search (Cmd/Ctrl + F)
- Read [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md)

**Having issues?**
- See troubleshooting in [`GETTING_STARTED.md`](GETTING_STARTED.md)
- Check [`CONNECTORS.md`](CONNECTORS.md) for MCP issues
- Review command documentation in [`commands/`](commands/)

**Want to learn more?**
- Read the skills in [`skills/`](skills/)
- Study the examples in [`examples/`](examples/)
- Review [`PROJECT_STRUCTURE.md`](PROJECT_STRUCTURE.md)

## 📝 Notes

- All documentation is in Markdown format
- Commands use YAML frontmatter
- Skills use YAML frontmatter
- MCP server is in JavaScript (Node.js)
- Examples are in YAML format

## 🎉 Ready to Start!

**Quick Start**: [`GETTING_STARTED.md`](GETTING_STARTED.md)  
**Commands**: [`QUICK_REFERENCE.md`](QUICK_REFERENCE.md)  
**Full Docs**: [`README.md`](README.md)

---

**Version**: 1.0.0  
**Last Updated**: February 5, 2026  
**License**: Apache 2.0
