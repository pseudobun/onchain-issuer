'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';

import { config } from '@/wagmi';
import { NextUIProvider } from '@nextui-org/react';
import SelectedIssuerProvider from './providers/SelectedIssuerProvider';

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SelectedIssuerProvider>
          <NextUIProvider>{props.children}</NextUIProvider>
        </SelectedIssuerProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
