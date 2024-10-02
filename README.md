# Loa's Library
The dollhouse-designs package is a modular component library designed for Vue and React applications. This repository organizes components in a structured way, facilitating development, testing, and documentation through Storybook.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation
To install the necessary dependencies, run:
`npm install`

## Usage
To start Storybook for UI component documentation and development, run:
`npm run storybook`

This will launch Storybook in your browser at http://localhost:6006.

## Directory Structure
The project follows a structured directory layout:
```
Hounfour/
├── .storybook/                    # Storybook configuration files
│   ├── main.ts                    # Main configuration file
│   └── preview.ts                 # Preview configuration file
├── dist/                          # Distribution files for production
├── node_modules/                 # Installed dependencies
├── packages/                      # Package-specific directories
│   └── dollhouse-designs/         # Main component package
│       ├── dist/                  # Compiled distribution of components
│       ├── src/                   # Source files for components
│       │   ├── components/        # Vue and React components
│       │   │   ├── react/         # React components directory
│       │   │   └── vue/           # Vue components directory
│       │   ├── styles/            # CSS styles for components
│       │   └── types/             # Type definitions
│       ├── package.json           # Package configuration
│       └── vite.config.js         # Vite configuration file
├── stories/                       # Storybook stories
│   ├── assets/                    # Asset files for stories
│   ├── react-components/          # React component stories
│   └── vue-components/            # Vue component stories
├── .gitignore                     # Git ignore file
├── LICENSE                        # License file
├── package.json                   # Root package configuration
└── tsconfig.json                  # TypeScript configuration
```

## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Tips for Customization
- Adjust the project description to better reflect its purpose.
- Add or modify sections for specific features, development guidelines, or testing instructions if necessary.
- Include any additional dependencies or setup instructions specific to your environment.
