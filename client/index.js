const axios = require('axios');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList.json');

const serverUrl = 'http://localhost:1225';

async function main() {

  const name = process.argv[2];

  const merkleTree = new MerkleTree(niceList);
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);
  
  const response = await axios.post(`${serverUrl}/gift`, {
    proof,
    name,
  });
  
  console.log(response.data);
}

main();