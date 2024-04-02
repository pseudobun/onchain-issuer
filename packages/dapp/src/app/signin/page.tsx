'use client';

import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import SelectedIssuerContext from '@/contexts/SelectedIssuerContext';
import { produceAuthQRCode, checkAuthSessionStatus } from '@/services/issuer';
import QRCode from '../components/QRCode';

const MyPage = () => {
  const router = useRouter();

  const { selectedIssuerContext } = useContext(SelectedIssuerContext);

  const [qrCodeData, setQrCodeData] = useState({});
  const [sessionId, setSessionID] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedIssuerContext) {
      router.push('/');
      return;
    }

    const fetchAuthQRCode = async () => {
      try {
        const { sessionId, data } = await produceAuthQRCode(
          selectedIssuerContext
        );
        setQrCodeData(data);
        setSessionID(sessionId);
      } catch (error) {
        setError(`Failed to fetch QR code: ${error}`);
      }
    };

    fetchAuthQRCode();
  }, [selectedIssuerContext, router]);

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    // biome-ignore lint/style/useConst: <explanation>
    let interval: NodeJS.Timeout;
    const checkStatus = async () => {
      try {
        const response = await checkAuthSessionStatus(sessionId);
        console.log('🚀 ~ checkStatus ~ response: ', response);
        if (response && response.id !== null && response.id !== undefined) {
          clearInterval(interval);
          router.push(`/claim?userId=${response.id}`);
        }
      } catch (error) {
        setError(`Failed to check session status: ${error}`);
      }
    };

    interval = setInterval(checkStatus, 2000);
    return () => clearInterval(interval);
  }, [sessionId, router]);

  return (
    <div className="flex h-screen gap-y-2 flex-col items-center justify-center">
      <h2 className="text-2xl">
        Use polygonID mobile app to scan this QR code
      </h2>
      <QRCode value={JSON.stringify(qrCodeData)} />
    </div>
  );
};

export default MyPage;
