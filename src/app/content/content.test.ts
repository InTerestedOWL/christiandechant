import { describe, expect, it } from "vitest";
import { de } from "./de";
import { en } from "./en";

// Fields that may legitimately differ between the locales.
const ignoredKeys = new Set([ 'keywords', 'lang' ]);
// The English legal pages note that the German version is binding.
const englishOnlyPaths = new Set([ '.imprint.intro', '.privacy.intro' ]);

/** Paths where German and English content differ in shape: missing keys, array lengths, types or empty strings. */
function shapeDifferences(a: unknown, b: unknown, path = ''): string[] {
  if ( Array.isArray(a) && Array.isArray(b) ) {
    if ( a.length !== b.length ) {
      return [ `${ path }: ${ a.length } vs ${ b.length } items` ];
    }
    return a.flatMap((item, index) => shapeDifferences(item, b[index], `${ path }[${ index }]`));
  }
  if ( a && b && typeof a === 'object' && typeof b === 'object' ) {
    const keys = new Set([ ...Object.keys(a), ...Object.keys(b) ]);
    return [ ...keys ].filter((key) => !ignoredKeys.has(key) && !englishOnlyPaths.has(`${ path }.${ key }`)).flatMap((key) => {
      const left = (a as Record<string, unknown>)[key];
      const right = (b as Record<string, unknown>)[key];
      if ( left === undefined || right === undefined ) {
        return [ `${ path }.${ key }: missing in ${ left === undefined ? 'de' : 'en' }` ];
      }
      return shapeDifferences(left, right, `${ path }.${ key }`);
    });
  }
  if ( typeof a !== typeof b ) {
    return [ `${ path }: ${ typeof a } vs ${ typeof b }` ];
  }
  if ( typeof a === 'string' && (a.trim() === '' || (b as string).trim() === '') ) {
    return [ `${ path }: empty string` ];
  }
  return [];
}

describe("site content", () => {
  it("has the same structure in German and English", () => {
    expect(shapeDifferences(de, en)).toEqual([]);
  });
});
