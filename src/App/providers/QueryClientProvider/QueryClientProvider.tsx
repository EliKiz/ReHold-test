import { FC } from 'react';
import {
  QueryClientProvider as ReactQueryClientProvider,
  QueryClient as ReactQueryClient,
} from 'react-query';

interface IQueryClientProviderProps {
  children: React.ReactNode;
}

const QueryClientProvider: FC<IQueryClientProviderProps> = (props) => {
  const { children } = props;
  const queryClient = new ReactQueryClient();
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
