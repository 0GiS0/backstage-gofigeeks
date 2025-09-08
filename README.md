# 🏗️ GofiGeeksOrg Backstage IDP

Welcome to the **GofiGeeksOrg** Internal Developer Platform (IDP) powered by Backstage!

This repository contains the source code and configuration for our organization's Backstage instance, which serves as the central hub for all development activities, documentation, and services.

## 🎯 What is Backstage?

Backstage is an open platform for building developer portals. It helps developers discover and understand all the services and software in your organization, and provides a unified experience for accessing tools, documentation, and templates.

## 🚀 Getting Started

### Prerequisites

Before setting up your local Backstage instance, ensure you have the following installed:

- **Node.js** (LTS version 18.x or 20.x)
- **Yarn** package manager
- **Git**
- **Docker** (optional, for containerized services)

### Creating a New Backstage Instance

Follow the official Backstage documentation to create a new instance:

1. **Create a new Backstage app**:
   ```bash
   npx @backstage/create-app@latest
   ```

2. **Follow the setup wizard** and choose your preferred options

3. **Navigate to your app directory**:
   ```bash
   cd my-backstage-app
   ```

4. **Install dependencies**:
   ```bash
   yarn install
   ```

5. **Start the development server**:
   ```bash
   yarn dev
   ```

6. **Open your browser** and navigate to `http://localhost:3000`

### 📚 Official Documentation

For detailed setup instructions and configuration options, refer to the official Backstage documentation:

- **Getting Started Guide**: https://backstage.io/docs/getting-started/
- **Configuration**: https://backstage.io/docs/conf/
- **Plugins**: https://backstage.io/docs/plugins/
- **Templates**: https://backstage.io/docs/features/software-templates/

## 🔧 Configuration

Once you have your Backstage instance running, you'll need to configure it for the **GofiGeeksOrg** environment:

### 1. GitHub Integration

Configure GitHub integration to access our organization's repositories and templates:

```yaml
# app-config.yaml
github:
  host: github.com
  token: ${GITHUB_TOKEN}
```

### 2. Template Repositories

Our organization provides several template repositories that you can integrate into your Backstage instance:

- `backstage-template-node-service` - Node.js services
- `backstage-template-fastapi-service` - FastAPI/Python services  
- `backstage-template-dotnet-service` - .NET services
- `backstage-template-gateway` - API Gateway
- `backstage-template-ai-assistant` - AI Assistant services
- `backstage-template-astro-frontend` - Astro frontend applications
- `backstage-template-helm-base` - Helm charts
- `backstage-template-env-live` - Environment configurations

### 3. Catalog Discovery

Configure catalog discovery to automatically find and register services:

```yaml
# app-config.yaml
catalog:
  locations:
    - type: github-discovery
      target: https://github.com/GofiGeeksOrg/*/blob/main/catalog-info.yaml
```

## 🏗️ Architecture

Our Backstage setup follows these principles:

- **Single Source of Truth**: All service information centralized in Backstage
- **Template-Driven Development**: Standardized project templates for consistency
- **Automated Discovery**: Services automatically registered via catalog discovery
- **Security First**: Integration with our security tools and policies

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch
3. Make your changes following our coding standards
4. Test your changes locally
5. Submit a pull request

## 📞 Support

For questions or support regarding our Backstage instance:

- **Platform Team**: Contact the platform team for infrastructure and configuration issues
- **Template Issues**: Contact template approvers for template-related questions
- **Security Concerns**: Contact the security team for security-related issues

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Resources

- [Backstage Official Website](https://backstage.io/)
- [Backstage GitHub Repository](https://github.com/backstage/backstage)
- [Backstage Community](https://github.com/backstage/community)
- [GofiGeeksOrg Development Guidelines](./docs/development-guidelines.md)