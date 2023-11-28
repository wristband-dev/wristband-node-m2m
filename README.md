# wristband-node-m2m



This is Wristband m2m sdk to be published on npm. It has been set up with automated tests and package publishing workflow using GitHub Actions CI/CD. It is made primarily for GitHub + VS Code (Windows / Mac / Linux) users who are about to write and publish their first TypeScript npm package. 

https://www.npmjs.com/package/wristband-node-m2m

It uses npm, TypeScript compiler, Jest, webpack, ESLint, Prettier, husky, pinst, commitlint. The production files include CommonJS, ES Modules, UMD version and TypeScript declaration files.

<p align="center">
<a href="https://github.com/" title="Github"><img src="https://github.com/get-icon/geticon/raw/master/icons/github-icon.svg" alt="Github" width="21px" height="21px"></a> <a href="https://code.visualstudio.com/" title="Visual Studio Code"><img src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="Visual Studio Code" width="21px" height="21px"></a> <a href="https://www.microsoft.com/windows" title="Windows"><img src="https://github.com/get-icon/geticon/raw/master/icons/microsoft-windows.svg" alt="Windows" width="21px" height="21px"></a> <a href="https://www.apple.com/macos/" title="Mac OS"><img src="https://github.com/get-icon/geticon/raw/master/icons/macOS.svg" alt="Mac OS" width="21px" height="21px"></a> <a href="https://www.linuxfoundation.org/" title="Linux"><img src="https://github.com/get-icon/geticon/raw/master/icons/linux-tux.svg" alt="Linux" width="21px" height="21px"></a> <a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="21px" height="21px"></a> <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a> <a href="https://jestjs.io/" title="Jest"><img src="https://github.com/get-icon/geticon/raw/master/icons/jest.svg" alt="Jest" width="21px" height="21px"></a> <a href="https://webpack.js.org/" title="webpack"><img src="https://github.com/get-icon/geticon/raw/master/icons/webpack.svg" alt="webpack" width="21px" height="21px"></a> <a href="https://eslint.org/" title="ESLint"><img src="https://github.com/get-icon/geticon/raw/master/icons/eslint.svg" alt="ESLint" width="21px" height="21px"></a> <a href="https://prettier.io/" title="Prettier"><img src="https://github.com/get-icon/geticon/raw/master/icons/prettier.svg" alt="Prettier" width="21px" height="21px"></a> <a href="https://yarnpkg.com/" title="yarn"><img src="https://github.com/get-icon/geticon/raw/master/icons/yarn.svg" alt="yarn" width="21px" height="21px"></a>
</p>


## Development


### Set up tools and environment

You need to have [Node.js](https://nodejs.org/en/download/) installed. Node includes npm as its default package manager.

Open the whole package folder with a good code editor, preferably [Visual Studio Code](https://code.visualstudio.com/download). Consider installing VS Code extensions [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

In the VS Code top menu: **Terminal** -> **New Terminal**

### Install dependencies

Install dependencies with npm:

```bash
npm i
```

### Write your code

Make necessary changes in **package.json** (name, version, description, keywords, author, homepage and other URLs).

Write your code in **src** folder, and unit test in **test** folder, replacing the original files there.

The VS Code shortcuts for formatting of a code file are: <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> (Windows); <kbd>Shift</kbd> + <kbd>Option (Alt)</kbd> + <kbd>F</kbd> (MacOS); <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> (Linux).

Change code linting and formatting settings in **.prettierrc.js** if you want.

### Test

Test your code with Jest framework:

```bash
npm run test
```

**Note:** wristband-node-m2 uses [husky](https://typicode.github.io/husky/), [pinst](https://github.com/typicode/pinst) and [commitlint](https://commitlint.js.org/) to automatically execute test and [lint commit message](https://www.conventionalcommits.org/) before every commit.

### Build

Build production (distribution) files in your **dist** folder:

```bash
npm run build
```

It generates CommonJS (in **dist/cjs** folder), ES Modules (in **dist/esm** folder), bundled and minified UMD (in **dist/umd** folder), as well as TypeScript declaration files (in **dist/types** folder).

### Install from NPM

```sh
npm install wristband-node-m2m
```

```ts
import { WristbandM2MSdk } from 'wristband-node-m2m'
const sdk = new WristbandM2MSdk( {
  appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
});

const result = await sdk.getToken();
```


---------------------------------------------------------------------------------------------------------

### Try it before publishing

Run:

```bash
npm link
```

[npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) will create a symlink in the global folder, which may be **{prefix}/lib/node_modules/wristband-node-m2** or **C:\Users\<username>\AppData\Roaming\npm\node_modules\wristband-node-m2**.

Create an empty folder elsewhere, you don't even need to `npm init` (to generate **package.json**). Open the folder with VS Code, open a terminal and just run:

```bash
npm link wristband-node-m2
```

This will create a symbolic link from globally-installed wristband-node-m2 to **node_modules/** of the current folder.

You can then create a, for example, **testnum.ts** file with the content:

```ts
import { WristbandM2MSdk } from 'wristband-node-m2m'
const sdk = new WristbandM2MSdk( {
  appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
});

const result = await sdk.getToken();
```

If you don't see any linting errors in VS Code, if you put your mouse cursor over `WristbandM2MSdk` and see its type, then it's all good.

Whenever you want to uninstall the globally-installed wristband-node-m2 and remove the symlink in the global folder, run:

```bash
npm uninstall wristband-node-m2 -g
```

### Prepare to publish

Create an [npm](https://www.npmjs.com/) account.

<details><summary><strong>Click to read this section if you do manual publishing</strong></summary>

