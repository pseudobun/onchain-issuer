'use client';
import React, {
  useEffect,
  useState,
  useContext,
  type ChangeEvent,
} from 'react';
import { getIssuersList } from '@/services/issuer';
import SelectedIssuerContext from '@/contexts/SelectedIssuerContext';
import { useRouter } from 'next/navigation';
import CustomDropdown from './components/Dropdown';
import { Button } from '@nextui-org/react';

const App = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/signin');
  };

  const [issuerList, setIssuerList] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { setSelectedIssuerContext } = useContext(SelectedIssuerContext);

  const handleSelectIssuer = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedIssuerContext(e.target.value);
  };

  useEffect(() => {
    const fetchIssuers = async () => {
      try {
        const issuers = await getIssuersList();
        // convert issuers into array of objects from array of strings and asign random id to each element
        const issuersWithId = issuers.map((issuer) => ({
          id: window.crypto.randomUUID(),
          name: issuer,
        }));

        setIssuerList(issuersWithId);
      } catch (error) {
        setError(`Failed to fetch issuers ${error}`);
      }
    };

    fetchIssuers();
  }, []);

  return (
    <div className="flex h-screen gap-y-2 flex-col items-center justify-center">
      <CustomDropdown issuers={issuerList} onChange={handleSelectIssuer} />
      <Button onClick={onClick}>Sign In</Button>
    </div>
  );
};

export default App;
