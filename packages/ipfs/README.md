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

Use `uploadProjectFiles()` method to upload files
```ts
import { uploadProjectFiles } from './src';

uploadProjectFiles({
  name: 'my-ipfs-landing',
  files: [
    {name: 'index.html', content: Buffer.from("ok main", 'utf8')},
  ]
}).then(console.log);

/*
[
  {
    cid: CID(QmPHqYXGVzrXyGw7asHzxDCGHAm7KdeHiJdp2iBNNJidxK),
    ipfs: 'https://ipfs.io/ipfs/QmPHqYXGVzrXyGw7asHzxDCGHAm7KdeHiJdp2iBNNJidxK'
  },
  {
    cid: CID(QmT5pyqTcYhHV15pTBNeP64XFqaA6rX8TNFXRYkCTntxWv),
    ipfs: 'https://ipfs.io/ipfs/QmT5pyqTcYhHV15pTBNeP64XFqaA6rX8TNFXRYkCTntxWv'
  }
]
*/
```
