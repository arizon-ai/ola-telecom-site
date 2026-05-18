import { ImageResponse } from 'next/og';

export const alt = 'Ola Telecom - Internet de alta velocidad para el Táchira';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 18% 20%, rgba(92,230,155,0.28), transparent 28%), radial-gradient(circle at 78% 24%, rgba(66,216,244,0.26), transparent 24%), radial-gradient(circle at 52% 82%, rgba(218,99,239,0.28), transparent 22%), linear-gradient(180deg, #140922 0%, #12081f 100%)',
          color: '#f8f7ff',
          padding: '68px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '32px',
            borderRadius: '36px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            boxShadow: '0 20px 80px rgba(8,3,16,0.35)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              fontSize: '32px',
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              O
            </div>
            <div style={{ display: 'flex' }}>
              <span
                style={{
                  color: '#42d8f4',
                }}
              >
                Olá
              </span>
              <span style={{ marginLeft: '10px' }}>Telecom</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div
              style={{
                fontSize: '72px',
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                maxWidth: '820px',
              }}
            >
              Internet de alta velocidad para el Táchira
            </div>
            <div
              style={{
                fontSize: '28px',
                color: '#b6a8cf',
                maxWidth: '760px',
              }}
            >
              Fibra óptica hasta 400 Mbps. Planes desde $20/mes. Contrata o paga por
              WhatsApp con Ari.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              fontSize: '22px',
              color: '#b6a8cf',
            }}
          >
            <div
              style={{
                borderRadius: '999px',
                padding: '14px 22px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Fibra e Inalámbrico
            </div>
            <div
              style={{
                borderRadius: '999px',
                padding: '14px 22px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              Atención inmediata por WhatsApp
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
