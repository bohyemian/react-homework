export const getQueryParam = (query: string): string | null => {
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(query);
};

export const setQueryParam = (queryKey: string) => (route: string | null) => {
  const url = new URL(location.href);

  if (route) {
    url.searchParams.set(queryKey, route);
  }

  history.pushState({}, '', url);
}

export const deleteQueryParam = (key: string) => {
  const url = new URL(location.href);

  url.searchParams.delete(key);
  history.pushState(null, '', url);
}

export const getView = () => getQueryParam('view');
export const setView = setQueryParam('view');

const body = document.body;

export const resetActiveFocus = () => {
  if (body.getAttribute('tabindex')) {
    body.setAttribute('tabindex', '-1');
  }

  body.focus();
}
