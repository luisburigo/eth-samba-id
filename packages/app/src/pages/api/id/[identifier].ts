import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import { CONTRACT } from '@/config/addresses/contracts';
import { identityAbi } from '@/config/abi';

async function getIdentity(name: string) {
  const identityContract = new ethers.Contract(
    CONTRACT.IDENTITY,
    identityAbi,
    new ethers.providers.JsonRpcProvider('https://sepolia-rpc.scroll.io/')
  );
  const identity = await identityContract.getIdentity(name);
  return identity;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { identifier } = request.query;
  const identity = await getIdentity(identifier as string);

  if (identity.ipfs && identity.ipfs.includes('cf-ipfs.com')) {
    return response.status(304).redirect(identity.ipfs);
  }

  return response.status(304).redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${identifier}`);
  // return response.status(304).redirect('https://cf-ipfs.com/ipfs/bafybeigi5ujoqw5nv7wlsdj7kywj4y4e4cc4ng774ec5k3gjupel2jfz4e');
}
