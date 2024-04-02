import type { FunctionComponent } from 'react';
import QRCode from 'qrcode.react';
import { Button } from '@nextui-org/react';

interface QRCodeData {
  value: string;
}

const Code: FunctionComponent<QRCodeData> = (props) => {
  const { value } = props;
  return (
    <div className="flex flex-col justify-center gap-y-4 items-center">
      <QRCode level={'L'} size={350} value={value} />
      <Button onClick={() => dispachEvent(value)}>Polygon ID</Button>
    </div>
  );
};

const dispachEvent = async (value: string) => {
  console.log('🚀 ~ dispachEvent ~ value: ', value);
  const msg = btoa(value);
  const hrefValue = `iden3comm://?i_m=${msg}`;

  const _authEvent = new CustomEvent('authEvent', { detail: hrefValue });
  document.dispatchEvent(_authEvent);
};

export default Code;
