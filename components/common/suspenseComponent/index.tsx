import React, { Suspense } from 'react';
import ComponentErrorBoundary from './ComponentErrorBoundary';

interface SuspenseComponentProps {
  errorMessage?: string;
  loadingComponent?: React.ReactNode;
  children: React.ReactNode;
}

const SuspenseComponent = ({
  errorMessage,
  children,
  loadingComponent,
}: SuspenseComponentProps) => {
  return (
    <Suspense fallback={loadingComponent ? loadingComponent : <p>로딩중...</p>}>
      <ComponentErrorBoundary errorMessage={errorMessage}>
        {children}
      </ComponentErrorBoundary>
    </Suspense>
  );
};

export default SuspenseComponent;
