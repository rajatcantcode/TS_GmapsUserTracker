# TypeScript Project Setup Guide

This guide will help you quickly set up and run a TypeScript project.

## Prerequisites

Ensure you have the following installed:

- **TypeScript Compiler:**
  - Install globally using npm:
    ```bash
    npm install -g typescript
    ```
  - Verify installation:
    ```bash
    tsc --version
    ```
- **ts-node (optional):**
  - Useful for running TypeScript files directly without manual compilation.
  - Install globally using npm:
    ```bash
    npm install -g ts-node
    ```

## Running Your Code

- **ts-node (Direct Execution):**
  - If you have `ts-node` installed, run your TypeScript files directly:
    ```bash
    ts-node index.ts
    ```
- **npm Scripts (Recommended):**
  - Add the following to your `package.json` file:
    ```json
    "scripts": {
      "dev": "ts-node index.ts"
    }
    ```
  - Now you can run your project using:
    ```bash
    npm run dev
    ```

## Parcel Bundler (For Browser Environments)

Parcel is a great tool for bundling TypeScript code to run in the browser.

1. **Install Parcel Bundler:**
   ```bash
   npm install parcel --save-dev
   ```
2. **Create an `index.html` file:**

   - Reference your `index.ts` file as the script source:
     ```html
     <script src="./src/index.ts"></script>
     ```

3. **Start Parcel:**

   - add this command to package.json:
     ```bash
     "dev": "(npm parcel ./index.html) & npx parcel watch ./index.html ",
     ```
   - Add ts config file
     ```bash
     tsc --init
     ```
   - uncomment the "noErrorOnError":true no js file will be added if error is there

4. **Parcel Needs more configuration to setup adding into path file But using npx helps just by using in fornt of it**

## About Project

We used `npm install --save @types/google.maps`
