import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ErrorBoundary } from './App/providers/ErrorBoundary';
import QueryClientProvider from './App/providers/QueryClientProvider/QueryClientProvider';
import { WagmiConfigProvider } from './App/providers/WagmiConfigProvider';
import './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <QueryClientProvider>
    <WagmiConfigProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </WagmiConfigProvider>
  </QueryClientProvider>,
);
