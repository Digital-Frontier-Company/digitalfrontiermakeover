
export function isBotUserAgent(userAgent?: string): boolean {
  const ua = userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '');
  
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /rogerbot/i,
    /linkedinbot/i,
    /embedly/i,
    /quora link preview/i,
    /showyoubot/i,
    /outbrain/i,
    /pinterest/i,
    /developers.google.com\/\+\/web\/snippet/i,
    /crawler/i,
    /spider/i,
    /bot/i,
    /ChatGPT/i,
    /Claude/i,
    /GPTBot/i,
    /CCBot/i,
    /anthropic/i,
    /Claude-Web/i
  ];
  
  return botPatterns.some(pattern => pattern.test(ua));
}

export function shouldServeStaticContent(): boolean {
  // Server-side rendering or bot detection
  if (typeof window === 'undefined') {
    return true;
  }
  
  return isBotUserAgent();
}
