import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };

async function publicImage(file: string) {
  const data = await readFile(join(process.cwd(), 'public', file));
  return `data:image/png;base64,${ data.toString('base64') }`;
}

/** Social preview card in the site style (white, brand or amber accent, mono chips). */
export async function renderOgImage({ title, tagline, subline, chips, variant = 'brand' }: {
  title: string,
  tagline: string,
  subline: string,
  chips: string[],
  variant?: 'brand' | 'amber',
}) {
  const accent = variant === 'brand'
    ? { soft: '#eef2ff', border: '#c7d2fe', text: '#4338ca', gradient: 'linear-gradient(90deg, #4338ca, #6366f1)' }
    : { soft: '#fffbeb', border: '#fde68a', text: '#b45309', gradient: 'linear-gradient(90deg, #d97706, #ea580c)' };
  const logo = await publicImage(variant === 'brand' ? 'Interestedowl.png' : 'wayventure.png');

  return new ImageResponse(
    (
      <div style={ {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        backgroundColor: '#ffffff',
        backgroundImage: `radial-gradient(circle at 85% 10%, ${ accent.soft } 0%, #ffffff 55%)`,
        fontFamily: 'sans-serif',
      } }>
        <div style={ { display: 'flex', alignItems: 'center', gap: 20 } }>
          <img src={ logo } width={ 88 } height={ 88 }
               style={ { borderRadius: 20, border: `2px solid ${ accent.border }` } } alt=""/>
          <div style={ { display: 'flex', flexDirection: 'column' } }>
            <span style={ { fontSize: 30, fontWeight: 700, color: '#0f172a' } }>Christian Dechant</span>
            <span style={ { fontSize: 22, color: '#64748b' } }>{ subline }</span>
          </div>
        </div>

        <div style={ { display: 'flex', flexDirection: 'column', gap: 18 } }>
          <span style={ {
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.18,
            paddingBottom: 10,
            letterSpacing: -2,
            backgroundImage: accent.gradient,
            backgroundClip: 'text',
            color: 'transparent',
          } }>
            { title }
          </span>
          <span style={ { fontSize: 32, color: '#334155' } }>{ tagline }</span>
        </div>

        <div style={ { display: 'flex', gap: 12 } }>
          { chips.map((chip) => (
            <span key={ chip } style={ {
              display: 'flex',
              fontSize: 22,
              fontFamily: 'monospace',
              color: accent.text,
              backgroundColor: accent.soft,
              border: `1px solid ${ accent.border }`,
              borderRadius: 10,
              padding: '8px 16px',
            } }>
              { chip }
            </span>
          )) }
        </div>

        <div style={ { position: 'absolute', left: 0, right: 0, bottom: 0, height: 10, backgroundImage: accent.gradient } }/>
      </div>
    ),
    ogImageSize,
  );
}
