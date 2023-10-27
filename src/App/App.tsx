import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@/components/ConnectButton';
import { getBalance, getSymbolPrice } from '@/utils';
import { TRADING_PAIRS } from '@/constants';
import './App.css';
import { useWeb3ModalState } from '@web3modal/wagmi/react';

// static value
const symbol = TRADING_PAIRS.ETHUSDT;

function App() {
  const [balance, setBalance] = useState<string | null>('12');
  const [currencyExchangeRate, setCurrencyExchangeRate] = useState<string>('');
  const { address } = useAccount();
  const { selectedNetworkId } = useWeb3ModalState();

  useEffect(() => {
    getBalance(address).then(setBalance);
  }, [address]);

  useEffect(() => {
    getSymbolPrice(symbol).then((res) => {
      console.log('res', res);
      setCurrencyExchangeRate(res);
    });
  }, [address, symbol]);

  const isBnbChain = selectedNetworkId === 56;
  let content;

  if (isBnbChain) {
    if (balance && currencyExchangeRate) {
      const balanceInUSDT = (
        parseFloat(balance) * parseFloat(currencyExchangeRate)
      ).toFixed(2);
      content = `Wallet Balance: ${balanceInUSDT} USDT`;
    } else {
      content = 'Please connect wallet';
    }
  } else {
    content = 'Please select BNB chain';
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{content}</h1>
        <ConnectButton loadingLabel="Loading..." />
      </header>
    </div>
  );
}

export default App;
