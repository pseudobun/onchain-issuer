'use client';

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCredentialOffer } from '@/services/issuer';
import SelectedIssuerContext from '@/contexts/SelectedIssuerContext';
import { useSearchParams } from 'next/navigation';
import QRCode from '../components/QRCode';

const App = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [credentialOffer, setCredentialOffer] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { selectedIssuerContext } = useContext(SelectedIssuerContext);
  useEffect(() => {
    if (!selectedIssuerContext) {
      router.push('/');
      return;
    }
  }, [selectedIssuerContext, router]);

  useEffect(() => {
    const fetchCredentialOffer = async () => {
      try {
        const offer = await getCredentialOffer(
          searchParams.get('issuer') as string,
          searchParams.get('subject') as string,
          searchParams.get('claimId') as string
        );
        setCredentialOffer(offer);
      } catch (error) {
        setError(`Failed to fetch credential offer: ${error}`);
      }
    };

    fetchCredentialOffer();
  }, [searchParams]);

  return (
    <div className="flex flex-col h-screen gap-y-2 justify-center items-center">
      <h2 className="text-2xl">Scan QR for fetch credential</h2>
      <QRCode value={JSON.stringify(credentialOffer)} />
    </div>
  );
};

export default App;
