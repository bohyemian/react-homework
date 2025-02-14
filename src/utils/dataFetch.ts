export const dataFetch = (url: string): Promise<Response> => {
  return fetch(url);
}