import axios from 'axios';

const OnchainIssuerNodeHost =
  process.env.NEXT_PUBLIC_ISSUER_URL || 'http://localhost:8080';

interface ApiError extends Error {
  response?: {
    status: number;
  };
}

export async function getIssuersList(): Promise<string[]> {
  try {
    const response = await fetch(`${OnchainIssuerNodeHost}/api/v1/issuers`);
    return response.json();
  } catch (error) {
    // biome-ignore lint/complexity/noUselessCatch: <explanation>
    throw error;
  }
}

interface AuthQRCodeResponse {
  data: any;
  sessionId: string;
}

export async function produceAuthQRCode(
  issuer: string
): Promise<AuthQRCodeResponse> {
  try {
    if (!issuer) {
      throw new Error('Issuer is not defined');
    }
    const url = new URL(`${OnchainIssuerNodeHost}/api/v1/requests/auth`);
    url.search = new URLSearchParams({ issuer: issuer }).toString();
    const response = await axios.get<any>(url.toString());
    return {
      data: response.data,
      sessionId: await response.headers['x-id'],
    };
  } catch (error) {
    // biome-ignore lint/complexity/noUselessCatch: <explanation>
    throw error;
  }
}

interface AuthSessionStatusResponse {
  id: string;
}

export async function checkAuthSessionStatus(
  sessionId: string
): Promise<AuthSessionStatusResponse | null> {
  try {
    const url = new URL(`${OnchainIssuerNodeHost}/api/v1/status`);
    url.search = new URLSearchParams({ id: sessionId }).toString();
    const response = await fetch(url.toString());
    const id = (await response.json()).id;
    return {
      id,
    };
  } catch (error) {
    const apiError = error as ApiError;
    if (apiError.response && apiError.response.status === 404) {
      return null;
    }
    throw error;
  }
}

export async function getCredentialOffer(
  issuerDid: string,
  subjectDid: string,
  claimId: string
): Promise<any> {
  try {
    const response = await fetch(
      `${OnchainIssuerNodeHost}/api/v1/identities/${issuerDid}/claims/offer?subject=${subjectDid}&claimId=${claimId}`
    );
    return await response.json();
  } catch (error) {
    // biome-ignore lint/complexity/noUselessCatch: <explanation>
    throw error;
  }
}

export async function convertClaim(
  issuerDid: string,
  hexData: string,
  version: string
): Promise<string> {
  try {
    const response = await fetch(
      `${OnchainIssuerNodeHost}/api/v1/identities/${issuerDid}/claims`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hexData,
          version,
        }),
      }
    );

    const data = await response.json();
    const id = data.id;
    return id;
  } catch (error) {
    // biome-ignore lint/complexity/noUselessCatch: <explanation>
    throw error;
  }
}
