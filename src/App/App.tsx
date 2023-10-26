import { useAccount } from 'wagmi';
import { ConnectButton } from '../components/connectButton';
import { getBalance, getSymbolPrice } from '../utils';
import TRADING_PAIRS from '../constants/trading.constants';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [balance, setBalance] = useState<string | null>('');
  const [currencyExchangeRate, setCurrencyExchangeRate] = useState('');
  const { address } = useAccount();

  // static value
  const symbol = TRADING_PAIRS.BNBUSDT;
  useEffect(() => {
    async function fetchBalance() {
      const result = await getBalance(address);
      setBalance(result);
    }
    fetchBalance();
  }, [address]);

  useEffect(() => {
    async function fetchData() {
      const currentRate = await getSymbolPrice(symbol);
      if (currentRate !== null) {
        setCurrencyExchangeRate(currentRate);
      }
    }
    fetchData();
  }, [address, symbol]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wallet Balance:{' '}
          {balance && currencyExchangeRate
            ? `${(
                parseFloat(balance) * parseFloat(currencyExchangeRate)
              ).toFixed(2)} USDT`
            : 'please connect wallet'}
          {''}
        </p>
        <ConnectButton loadingLabel={'Loading...'} />
      </header>
    </div>
  );
}

export default App;
