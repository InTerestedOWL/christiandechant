/**
 * Minimal in-memory sliding-window rate limiter.
 * Good enough for a single container; state resets on restart.
 */
export function createRateLimiter({ limit, windowMs, maxKeys = 10_000 }: {
  limit: number,
  windowMs: number,
  maxKeys?: number,
}) {
  const hits = new Map<string, number[]>();

  function prune(now: number) {
    for ( const [ key, timestamps ] of hits ) {
      const recent = timestamps.filter((t) => now - t < windowMs);
      if ( recent.length ) {
        hits.set(key, recent);
      } else {
        hits.delete(key);
      }
    }
  }

  return {
    /** Registers an attempt and tells whether it is within the limit. */
    hit(key: string, now = Date.now()): { allowed: boolean, retryAfterMs: number } {
      if ( hits.size > maxKeys ) {
        prune(now);
      }

      const recent = ( hits.get(key) ?? [] ).filter((t) => now - t < windowMs);
      if ( recent.length >= limit ) {
        hits.set(key, recent);
        return { allowed: false, retryAfterMs: windowMs - ( now - recent[0] ) };
      }

      recent.push(now);
      hits.set(key, recent);
      return { allowed: true, retryAfterMs: 0 };
    },
  };
}
