import Web3 from 'web3';
export const isOnchainIssuerInterfaceImplemented = async (
  contractAddress: string
): Promise<boolean> => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(balanceIssuerAbi, contractAddress);
  const isImplemented = await contract.methods
    .supportsInterface('0x58874949')
    .call();
  return isImplemented;
};
