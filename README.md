# wristband-node-m2m



## Overview

This SDK can be used by Wristband machine-to-machine clients to retrieve an access token.
The access token is cached in memory for subsequent calls. When the access token expires, the SDK will automatically
get a new access token.

The cached access token is tied to an instance of a `WristbandM2MClient`. Therefore, it's optimal to create a single instance
of the `WristbandM2MClient` so that the access token cache will be utilized globally.


https://www.npmjs.com/package/wristband-node-m2m

It uses npm, TypeScript compiler, Jest, webpack, ESLint, Prettier, husky, pinst, commitlint. The production files include CommonJS, ES Modules, UMD version and TypeScript declaration files.

<p align="center">
<a href="https://github.com/" title="Github"><img src="https://github.com/get-icon/geticon/raw/master/icons/github-icon.svg" alt="Github" width="21px" height="21px"></a> <a href="https://code.visualstudio.com/" title="Visual Studio Code"><img src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="Visual Studio Code" width="21px" height="21px"></a> <a href="https://www.microsoft.com/windows" title="Windows"><img src="https://github.com/get-icon/geticon/raw/master/icons/microsoft-windows.svg" alt="Windows" width="21px" height="21px"></a> <a href="https://www.apple.com/macos/" title="Mac OS"><img src="https://github.com/get-icon/geticon/raw/master/icons/macOS.svg" alt="Mac OS" width="21px" height="21px"></a> <a href="https://www.linuxfoundation.org/" title="Linux"><img src="https://github.com/get-icon/geticon/raw/master/icons/linux-tux.svg" alt="Linux" width="21px" height="21px"></a> <a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="21px" height="21px"></a> <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a> <a href="https://jestjs.io/" title="Jest"><img src="https://github.com/get-icon/geticon/raw/master/icons/jest.svg" alt="Jest" width="21px" height="21px"></a> <a href="https://webpack.js.org/" title="webpack"><img src="https://github.com/get-icon/geticon/raw/master/icons/webpack.svg" alt="webpack" width="21px" height="21px"></a> <a href="https://eslint.org/" title="ESLint"><img src="https://github.com/get-icon/geticon/raw/master/icons/eslint.svg" alt="ESLint" width="21px" height="21px"></a> <a href="https://prettier.io/" title="Prettier"><img src="https://github.com/get-icon/geticon/raw/master/icons/prettier.svg" alt="Prettier" width="21px" height="21px"></a> <a href="https://yarnpkg.com/" title="yarn"><img src="https://github.com/get-icon/geticon/raw/master/icons/yarn.svg" alt="yarn" width="21px" height="21px"></a>
</p>

### Install from NPM

```sh
npm install wristband-node-m2m
```

### Usage

```ts
import { WristbandM2MClient } from 'wristband-node-m2m'

const APPLICATION_DOMAIN=process.env.APPLICATION_DOMAIN;  // env variables
const CLIENT_ID=process.env.CLIENT_ID;
const CLIENT_SECRET=process.env.CLIENT_SECRET;

const wristbandM2MClient = new WristbandM2MClient( {
  appDomain: APPLICATION_DOMAIN, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET
});

const accessToken = await wristbandM2MClient.getToken();
```

### Configuration
**APPLICATION_DOMAIN -** This is the vanity domain for the Wristband application associated to the machine-to-machine client.

**CLIENT_ID -** This is the Wristband machine-to-machine client ID.

**CLIENT_SECRET -** This is the Wristband machine-to-machine client secret.

### SDK Methods
**getToken() -** This method retrieves an access token for the machine-to-machine client.
The access token is cached in memory for subsequent calls. When the access token expires, this method will automatically
get a new access token when it's called.

**clearToken() -** This method clears the access token in the cache. 



