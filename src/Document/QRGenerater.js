import React from 'react';
// import { QRCode } from 'qrcode.react';
import QRCode from 'react-qr-code';

export const QRGenerater = ({ url, infos = [], signature }) => {
  return (
    <div className="qr">
      <div className="qr-img">
        <QRCode value={url ?? ''} size={180} />
        <span style={{ marginTop: 10 }}>Cod.Seg.: {signature?.slice(0, 6) ?? ''}</span>
      </div>
      <div className="qr-info">{infos.length ? infos.map((i, index) => <span key={index}>{i}</span>) : ''}</div>
    </div>
  );
};
