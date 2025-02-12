export const getUIView = (): string | null => {
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get('view');
};

export const setUIView = (route: string) => {
  const url = new URL(location.href);

  url.searchParams.set('view', route);
  history.pushState({}, '', url);
}

const body = document.body;

export const resetActiveFocus = () => {
  if (body.getAttribute('tabindex')) {
    body.setAttribute('tabindex', '-1');
  }

  body.focus();
}
