
# Deos Client Test

This project demonstrates how to use the `deos-client` library in a simple HTML and JavaScript setup.

## Prerequisites

- Node.js (version 14.18.0 or higher)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone https://github.com/DeOS-Dev/demo-deos-client.git
cd demo-deos-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

Use Webpack to bundle the JavaScript files:

```bash
npx webpack
```

### 4. Run the Project

Use `live-server` to serve the project and view it in your browser:

```bash
npx live-server
```

This command will open your default web browser and serve the `index.html` file.

## Project Structure

- index.html: The main HTML file that includes the buttons and script.
- script.js: The JavaScript file that imports the deos-client library, and defines methods.
- webpack.config.js: The Webpack configuration file used to bundle the JavaScript files.
- dist/: The directory where the bundled JavaScript file (bundle.js) is output.

## Dependencies

- `deos-client`: The library used to interact with the Deos API.
- `webpack`: A module bundler for JavaScript.
- `babel-loader`: A Webpack loader for transpiling JavaScript files using Babel.
- `@babel/core`: The core Babel library.
- `@babel/preset-env`: A Babel preset for compiling ES2015+ syntax.

## Notes

- Replace 'your-api-key-here' in config.js with your actual API key.
- Replace 'environment-id' in config.js with the correct environment. Not required. Default: `kef.appfeine`
