# Loa's Library
Loa's Library is a collection of modular libraries and packages designed for both Vue and React applications. Each package within the repository is structured to promote clean development, testing and documentation using Storybook.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)
  
## Installation
To install all necessary dependencies, run:
```
npm install
```

## Usage
To start Storybook for UI component documentation and development, navigate to the corresponding directory and run:
```
npm run storybook
```
Storybook will launch in your browser at http://localhost:6006.

## Directory Structure
The repository is organized as follows:
```
Hounfour/
├── packages/                      # Contains individual libraries (React, Vue, Styles)
│   ├── @hounfour/dollhouse-designs-react/
│   │   ├── .storybook/            # React Storybook configuration
│   │   │   ├── main.ts            # React main configuration file for Storybook
│   │   │   └── preview.ts         # React Storybook preview settings
│   │   ├── dist/                  # Production build for React components
│   │   ├── src/                   # Source files for React components
│   │   │   └── index.ts           # React entry point for component exports
│   │   ├── package.json           # Package configuration for React components
│   │   └── vite.config.js         # Vite configuration for React
│   ├── @hounfour/styles/          # CSS and styles shared across packages
│   │   ├── dist/                  # Production build for styles
│   │   ├── src/                   # Source files for styles
│   │   │   └── index.ts           # Styles entry point
│   │   ├── package.json           # Package configuration for styles
│   │   └── vite.config.js         # Vite configuration for styles
│   ├── @hounfour/dollhouse-designs-vue/
│   │   ├── dist/                  # Production build for Vue components
│   │   ├── src/                   # Source files for Vue components
│   │   │   ├── base/              # Base Vue component styles
│   │   │   ├── components/        # Component-specific styles
│   │   │   ├── layouts/           # Layout-specific styles
│   │   │   ├── themes/            # Theme styles
│   │   │   ├── utils/             # Utility styles
│   │   │   └── index.ts           # Vue entry point for component exports
│   │   ├── package.json           # Package configuration for Vue components
│   │   └── vite.config.js         # Vite configuration for Vue
├── stories/                       # Storybook stories for components
│   ├── assets/                    # Static assets used in stories
│   ├── react-components/          # Stories for React components
│   ├── vue-components/            # Stories for Vue components
├── .gitignore                     # Files and directories ignored by Git
├── LICENSE                        # License for this repository
├── package.json                   # Root-level package configuration
├── tsconfig.json                  # TypeScript configuration for the project
└── README.md                      # Documentation (this file)
```

## Contributing
Contributions are always welcome! Feel free to submit issues, feature requests, or pull requests.

If you want to contribute, please ensure:
 - Code follows the conventional commits format.
 - Changes are tested and well-documented.

## License
This project is licensed under the MIT License. For details, please see the LICENSE file.
