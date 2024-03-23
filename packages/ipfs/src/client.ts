import { FleekSdk, PersonalAccessTokenService } from '@fleekxyz/sdk';
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const { PAT, PROJECT_ID } = process.env;

const patService = new PersonalAccessTokenService({
  personalAccessToken: PAT!,
  projectId: PROJECT_ID!
});
const fleekSdk = new FleekSdk({ accessTokenService: patService });
const ipfsClient = fleekSdk.ipfs();

export { ipfsClient };
