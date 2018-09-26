/**
 * Default fetch handler
 *
 * @export
 * @param {string} url
 * @param {RequestInit} [options]
 * @returns {Promise<Response>}
 */
export async function defaultFetch(url: string, options?: RequestInit): Promise<Response> {
  return await new Response(
    JSON.stringify(defaultFetchHandlerResponseBody(url, options)),
    defaultFetchHandlerResponseOptions
  );
}

export const defaultFetchHandlerResponseBody = (url: string, options?: RequestInit) => ({
  error: 'Default fetch handler response.',
  to: url, options
});

export const defaultFetchHandlerResponseOptions = {
  status: 418,
  statusText: '`fetch` missing in `window`'
};
