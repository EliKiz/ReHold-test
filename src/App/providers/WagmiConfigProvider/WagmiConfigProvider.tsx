import { FC, ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import {
  arbitrum,
  avalanche,
  bsc,
  bscTestnet,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from 'wagmi/chains';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
interface IWagmiConfigProviderProps {
  children?: ReactNode;
}

const WagmiConfigProvider: FC<IWagmiConfigProviderProps> = (props) => {
  const { children } = props;

  const projectId = process.env.REACT_APP_PROJECT_ID as string;

  const chains = [
    mainnet,
    polygon,
    avalanche,
    arbitrum,
    bsc,
    bscTestnet,
    optimism,
    gnosis,
    fantom,
  ];

  const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  };

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  createWeb3Modal({ wagmiConfig, projectId, chains });

  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};

export default WagmiConfigProvider;
