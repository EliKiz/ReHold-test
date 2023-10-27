import { IConnectButtonProps } from './types';

export const ConnectButton: React.FC<Partial<IConnectButtonProps>> = (
  props,
) => {
  return <w3m-button {...props} />;
};
