'use client';
import './globals.scss';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalLayout from '@components/common/globalLayout';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000 * 10,
      retry: 3,
      refetchOnReconnect: true,
    },
  },
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="kn">
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalLayout>{children}</GlobalLayout>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Layout;
