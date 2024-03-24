type UploadProjectFilesParams = {
  name: string;
  files: { name: string, content: Buffer }[]
}

import { FleekSdk, PersonalAccessTokenService } from '@fleekxyz/sdk';

type IPFSClientAuth = {
  projectId: string,
  personalAccessToken: string,
}

export const createIpfsClient = (auth: IPFSClientAuth) => {
  const { personalAccessToken, projectId } = auth;

  const patService = new PersonalAccessTokenService({
    projectId,
    personalAccessToken,
  });
  const fleekSdk = new FleekSdk({ accessTokenService: patService });

  const ipfsClient = fleekSdk.ipfs();

  async function uploadProjectFiles(params: UploadProjectFilesParams) {
    const { files, name } = params;

    const projectFiles = files.map(file => ({
      path: `${name}/${file.name}`,
      content: file.content,
    }));

    const uploadResults = await ipfsClient.addAll(projectFiles);

    return uploadResults.map(result => ({
      cid: result.cid,
      ipfs: `https://ipfs.io/ipfs/${result.cid}`
    }));
  }

  return { uploadProjectFiles };
}
