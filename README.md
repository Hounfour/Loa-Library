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
├── packages/                      # Packages directory containing individual libraries
| ***@hounfour/dollhouse-designs-react***
│   └── react/                     # React component library package
|   |   ├── .storybook/            # React Storybook configuration files
│   |   |   ├── main.ts            # React configuration file
│   |   |   └── preview.ts         # React Preview configuration file
│   |   ├── dist/                  # Compiled production build for components
│   |   ├── src/                   # Source files / all components
│   |   │   └── index.ts           # React Entry point
│   |   ├── package.json           # Package configuration for this component library
│   |   └── vite.config.js         # Vite configuration for the react component library
| ***@hounfour/styles***
|   └── styles/                    # CSS styling for all packages
|   |   ├── dist/                  # Compiled production build for components
│   |   ├── src/                   # Source files for all components
│   |   │   └── index.ts           # Vue Entry point
│   |   ├── package.json           # Package configuration for this component library
│   |   └── vite.config.js         # Vite configuration for the component library
| ***@hounfour/dollhouse-designs-vue***
|   └── vue/                       # Vue component library package
|   |   ├── dist/                  # Compiled production build for components
│   |   ├── src/                   # Source files for all components
│   |   │   └── base/              # Base styles
│   |   │   └── components/        # Component styles
│   |   │   └── layouts/           # Layout styles
│   |   │   └── themes/            # Theme styles
│   |   │   └── utils/             # Styling for the utility package
│   |   │   └── index.ts           # Styles Entry point
│   |   ├── package.json           # Package configuration for this component library
│   |   └── vite.config.js         # Vite configuration for the component library
├── stories/                       # Storybook stories organized by components
│   ├── assets/                    # Static assets used in stories
│   ├── react-components/          # React component stories
│   └── vue-components/            # Vue component stories
├── .gitignore                     # Files and directories to be ignored by Git
├── LICENSE                        # License information for the repository
├── package.json                   # Root-level package configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation (this file)
```

## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Tips for Customization
- Adjust the project description to better reflect its purpose.
- Add or modify sections for specific features, development guidelines, or testing instructions if necessary.
- Include any additional dependencies or setup instructions specific to your environment.
