export const getUIView = (): string | null => {
  const searchParams = new URLSearchParams(location.search);
  const uiView = searchParams.get('view');

  return uiView;
};
