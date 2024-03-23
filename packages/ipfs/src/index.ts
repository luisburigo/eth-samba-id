import { ipfsClient } from './client';

type UploadProjectFilesParams = {
  name: string;
  files: { name: string, content: Buffer }[]
}

async function uploadProjectFiles(params: UploadProjectFilesParams) {
  const { files, name } = params;

  const projectFiles = files.map(file => ({
    path: `${name}/${file.name}`,
    content: file.content,
  }))

  const uploadResults = await ipfsClient.addAll(projectFiles);

  return uploadResults.map(result => ({
    cid: result.cid,
    ipfs: `https://ipfs.io/ipfs/${result.cid}`
  }));
}

uploadProjectFiles({
  name: Math.floor(Math.random() * 1000).toString(),
  files: [
    {name: 'index.html', content: Buffer.from("ok main", 'utf8')},
  ]
}).then(console.log)
