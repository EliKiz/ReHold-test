import { IConnectButtonProps } from './type';
import './style.css';

export const ConnectButton: React.FC<Partial<IConnectButtonProps>> = (
  props,
) => {
  return <w3m-button {...props} />;
};
