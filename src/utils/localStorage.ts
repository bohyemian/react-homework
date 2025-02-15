const { localStorage: storage } = window;

export const setStorage = (key:string, value: unknown) => {
  storage.setItem(key, JSON.stringify(value))
}

export const getStorage = (key: string) => {
  return JSON.parse(storage.getItem(key));
}