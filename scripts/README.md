# WordPress Installation Scripts

This directory contains automated scripts for installing WordPress with PHP, MariaDB, and supporting components on Windows.
:::danger
STILL IN TESTING PHASE
:::

## 🚀 Quick Start

### Download All Components

**CMD:**

```cmd
curl -s https://raw.githubusercontent.com/TrueBankai416/DemonWarriorTechDocs/main/scripts/download-all.cmd | cmd
```

**PowerShell:**

```powershell
iex (iwr "https://raw.githubusercontent.com/TrueBankai416/DemonWarriorTechDocs/main/scripts/download-all.ps1").Content
```

### Install Components

**Install PHP:**

```cmd
curl -s https://raw.githubusercontent.com/TrueBankai416/DemonWarriorTechDocs/main/scripts/install-php.cmd | cmd
```

**Install MariaDB:**

```cmd
curl -s https://raw.githubusercontent.com/TrueBankai416/DemonWarriorTechDocs/main/scripts/install-mariadb.cmd | cmd
```

## 📁 Available Scripts

| Script          | CMD Version           | PowerShell Version | Description                                     |
| --------------- | --------------------- | ------------------ | ----------------------------------------------- |
| Download All    | `download-all.cmd`    | `download-all.ps1` | Downloads all components with latest versions   |
| Install PHP     | `install-php.cmd`     | -                  | Installs and configures PHP                     |
| Install MariaDB | `install-mariadb.cmd` | -                  | Installs MariaDB and creates WordPress database |

## 🔧 Features

- **Fully Dynamic**: Always downloads the latest versions
- **Error Handling**: Includes fallbacks and error checking
- **No Copy-Paste Issues**: Run directly from repository
- **Version Reporting**: Shows exactly which versions were downloaded/installed
- **Automated Configuration**: Optimized settings for WordPress

## 📋 Requirements

- Windows 10 version 1803+ or Windows 11
- Administrator privileges for installations
- Internet connection

## 🛡️ Security

These scripts are maintained in this repository and can be reviewed before execution. They:

- Use official download sources only
- Include version verification
- Follow security best practices
- Don't store or transmit sensitive data

## 📖 Full Documentation

For complete installation guide and manual alternatives, see:
[How to Install WordPress on Windows](../docs/Documented%20Tutorials/How_to_Install_Wordpress_on_Windows.mdx)
