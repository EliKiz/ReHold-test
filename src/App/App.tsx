import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@/components/ConnectButton';
import { getBalance, getSymbolPrice } from '@/utils';
import { TRADING_PAIRS } from '@/constants';
import './App.css';

// static value
const symbol = TRADING_PAIRS.BNBUSDT;

function App() {
  const [balance, setBalance] = useState<string | null>('');
  const [currencyExchangeRate, setCurrencyExchangeRate] = useState<string>('');
  const { address } = useAccount();

  useEffect(() => {
    getBalance(address).then(setBalance);
  }, [address]);

  useEffect(() => {
    getSymbolPrice(symbol).then(setCurrencyExchangeRate);
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
        </p>
        <ConnectButton loadingLabel="Loading..." />
      </header>
    </div>
  );
}

export default App;
