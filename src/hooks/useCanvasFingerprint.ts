import { useState, useEffect } from 'react';

export const useCanvasFingerprint = () => {
  const [fingerprint, setFingerprint] = useState('');

  useEffect(() => {
    const getCanvasFingerprint = async () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) return null;

      context.textBaseline = 'top';
      context.font = '16px Arial';
      context.textBaseline = 'alphabetic';
      context.fillStyle = '#f60';
      context.fillRect(125, 1, 62, 20);
      context.fillStyle = '#069';
      context.fillText('Hello, World!', 2, 15);
      context.fillStyle = 'rgba(102, 204, 0, 0.7)';
      context.fillText('Hello, World!', 4, 17);

      const dataURL = canvas.toDataURL();
      const hash = await sha256(dataURL);
      setFingerprint(hash);
    };

    const sha256 = async (str: string) => {
      const buffer = new TextEncoder().encode(str);
      const hash = await crypto.subtle.digest('SHA-256', buffer);
      return hex(hash);
    };

    const hex = (buffer: ArrayBuffer) => {
      const hexCodes = [];
      const view = new DataView(buffer);
      for (let i = 0; i < view.byteLength; i += 4) {
        const value = view.getUint32(i);
        const stringValue = value.toString(16);
        const paddedValue = ('00000000' + stringValue).slice(-8);
        hexCodes.push(paddedValue);
      }
      return hexCodes.join('');
    };

    getCanvasFingerprint();
  }, []);

  return fingerprint;
};
