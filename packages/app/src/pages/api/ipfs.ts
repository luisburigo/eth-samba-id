import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import multiparty, { File } from 'multiparty';
import { createIpfsClient } from '@/config/ipfs';
import * as fs from 'fs';

const { NEXT_PUBLIC_PAT, NEXT_PUBLIC_PROJECT_ID } = process.env;

const ipfsClient = createIpfsClient({
  projectId: NEXT_PUBLIC_PROJECT_ID!,
  personalAccessToken: NEXT_PUBLIC_PAT!
});

export default async function POST(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const form = new multiparty.Form();
  const data = await new Promise<{ files: File[], fields: any }>((resolve, reject) => {
    form.parse(request, function(err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files: files.file });
    });
  });

  const files = data.files.map(file => ({
    name: file.originalFilename,
    content: fs.readFileSync(file.path)
  }));

  const uploadResults = await ipfsClient.uploadProjectFiles({ files, name: data.fields.domain[0] });
  const responseData = uploadResults[0];

  return response.status(200).json({
    success: true, data: {
      ...responseData,
      cid: responseData.cid.toString()
    }
  });
}

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
};
