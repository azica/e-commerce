export const setTokenFromStorage = (token: Tokens) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const clearLocalStorage = () => localStorage.removeItem("token");

export const getTokensFromStorage = (): Tokens | null => {
  const storage: string | null = localStorage.getItem("token");
  if (!storage || storage === "undefined") {
    localStorage.removeItem("token");
    return null;
  }

  try {
    return JSON.parse(storage) as Tokens;
  } catch (error) {
    localStorage.removeItem("token");
    return null;
  }
};
