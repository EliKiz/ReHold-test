import Web3 from 'web3';

async function getBalance(address: `0x${string}` | undefined) {
  let balance = null;

  if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    try {
      const balanceWei = await web3.eth.getBalance(address as string);
      const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
      balance = balanceEther;
    } catch (e) {
      console.error('Account access denied:', e);
    }
  }
  return balance;
}

export default getBalance;
