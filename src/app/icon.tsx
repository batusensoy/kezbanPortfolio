import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#1C1B1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FAF8F5',
          fontFamily: 'serif',
          fontWeight: 600,
          letterSpacing: '1px',
          borderRadius: '6px',
          border: '1px solid #C49746',
        }}
      >
        KT
      </div>
    ),
    {
      ...size,
    }
  );
}

