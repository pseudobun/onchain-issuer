'use client';

import React, { useState, useContext, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { selectMetamaskWallet } from '@/services/metamask';
import {
  issueCredential,
  userCredentialIds,
  getCredential,
  getOnchainIssuerVersion,
  isOnchainIssuerInterfaceImplemented,
} from '@/services/onchainIssuer';
import { convertClaim } from '@/services/issuer';
import SelectedIssuerContext from '@/contexts/SelectedIssuerContext';
import { DID, Id } from '@iden3/js-iden3-core';
import { Hex } from '@iden3/js-crypto';
import { Button } from '@nextui-org/react';

const App = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userDid, setUserDid] = useState('');

  const { selectedIssuerContext } = useContext(SelectedIssuerContext);
  useEffect(() => {
    if (!selectedIssuerContext) {
      router.push('/');
      return;
    }
  }, [selectedIssuerContext, router]);

  const [error, setError] = useState<string | null>(null);

  const [metamaskWalletAddress, setMetamaskwalletAddress] = useState('');
  const getMetamaskWallet = async () => {
    try {
      const wallet = await selectMetamaskWallet();
      setMetamaskwalletAddress(wallet.address);
    } catch (error) {
      setError(`Failed to get wallet address: ${error}`);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const issueOnchainCredential = async () => {
    setIsLoading(true);
    try {
      // extract contract address for issuer did
      const issuerDid = DID.parse(selectedIssuerContext);
      const issuerId = DID.idFromDID(issuerDid);
      const contractAddress = Hex.encodeString(Id.ethAddressFromId(issuerId));
      console.log(
        '🚀 ~ issueOnchainCredential ~ contractAddress: ',
        contractAddress
      );

      // extract user id from user did
      const userDid = searchParams.get('userId');
      if (!userDid) {
        throw new Error('User DID not provided');
      }
      setUserDid(userDid);
      const userId = DID.idFromDID(DID.parse(userDid));
      const isImplemented =
        await isOnchainIssuerInterfaceImplemented(contractAddress);

      if (!isImplemented) {
        throw new Error('Onchain issuer interface not implemented');
      }

      await issueCredential(contractAddress, userId);
      const credentialIds = await userCredentialIds(contractAddress, userId);
      const onchainCredential = await getCredential(
        contractAddress,
        userId,
        credentialIds[credentialIds.length - 1]
      );
      const version = await getOnchainIssuerVersion(contractAddress);
      const verifiableCredentialId = await convertClaim(
        selectedIssuerContext,
        onchainCredential,
        version
      );

      router.push(
        `/offer?claimId=${verifiableCredentialId}&issuer=${selectedIssuerContext}&subject=${userDid}`
      );
    } catch (error) {
      setError(`Failed to issue onchain credential: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen gap-y-2 justify-center items-center">
      {!metamaskWalletAddress && (
        <div className="flex flex-col text-center items-center justify-center">
          <h2 className="text-2xl">Balance claim for user {userDid}</h2>
          <Button onClick={getMetamaskWallet}>Connect MetaMask</Button>
        </div>
      )}

      {metamaskWalletAddress && (
        <div className="flex flex-col text-center items-center justify-center">
          <h2 className="text-2xl">Wallet: {metamaskWalletAddress}</h2>
          <Button isLoading={isLoading} onClick={issueOnchainCredential}>
            Issue onchain credential
          </Button>
        </div>
      )}
    </div>
  );
};

export default App;
