# IPFS Uploader

## How use
Install all dependencies
```bash
pnpm i
```

Create a fleek `PAT` and set in `.env`  
```bash
pnpm fleek pat create

> Success! Your new personal access token is: <PAT>
```

Create a fleek project
```bash
pnpm fleek projects create

> Success! Logged in.
✔ Enter project name: … <PROJECT_NAME>
> Success! New project created on Fleek.
```

Get project ID and set in `.env`
```bash
pnpm fleek projects list

ID               Name           Created At                Current
---------------------------------------------------------------------------
<PROJECT_ID>  <PROJECT_NAME>   2024-03-23T19:54:02.468Z  ✔           

```

Create a IPFS Client
```ts
import { uploadProjectFiles } from './src';

const ipfsClient = createIpfsClient({
  projectId: <PROJECT_ID>,
  personalAccessToken: <PAT>,
});
```
