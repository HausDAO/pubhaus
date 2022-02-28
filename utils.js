const Web3Utils = require('web3-utils');

const POSTER_TAGS = {
  MINION: 'daohaus.document.minion',
  MEMBER: 'daohaus.document.member',
};

const CONTENT_TYPES = {
  PINATA: 'IPFS-pinata',
  ON_CHAIN: 'encoded',
};

const POST_LOCATIONS = {
  FRONT_PAGE: 'front-page',
  DOCS: 'docs',
};

const IPFS_TYPES = [CONTENT_TYPES.PINATA];

const isIPFS = (doc) => IPFS_TYPES.includes(doc?.contentType);
const isEncoded = (doc) => doc?.contentType === CONTENT_TYPES.ON_CHAIN;
const isRatified = (doc) => doc?.ratified;

export const getIPFSPinata = async ({ hash }) => {
  const url = `https://daohaus.mypinata.cloud/ipfs/${hash}`;
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const getDocContent = async (docData) => {
  try {
    if (docData.contentType === CONTENT_TYPES.ON_CHAIN) {
      const withDecoded = {
        ...docData,
        content: Web3Utils.hexToUtf8(docData.content),
        isDecoded: true,
      };
      if (withDecoded) return withDecoded;
    }
    if (docData.contentType === CONTENT_TYPES.PINATA) {
      const hydrated = JSON.parse(docData.content);
      const { IpfsHash } = hydrated;
      const ipfsContent = await getIPFSPinata({ hash: IpfsHash });

      return { ...docData, content: ipfsContent?.content, isDecoded: true };
    }
  } catch (error) {
    console.error(error);
    return { error: true, message: 'Could decode content' };
  }
};

module.exports = {
  POSTER_TAGS,
  CONTENT_TYPES,
  POST_LOCATIONS,
  IPFS_TYPES,
  isIPFS,
  isEncoded,
  isRatified,
  getDocContent,
};
