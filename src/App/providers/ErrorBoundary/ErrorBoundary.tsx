import React, { ErrorInfo, Suspense } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    const reloadPage = () => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    };

    if (hasError) {
      return (
        <Suspense fallback="">
          <p>Something wrong</p>
          <button onClick={reloadPage}>Reload page</button>
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
