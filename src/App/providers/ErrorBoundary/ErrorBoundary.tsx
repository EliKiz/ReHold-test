import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

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
