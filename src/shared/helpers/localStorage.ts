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

export const loadStateFromLocalStorage = <T>(key: string, defaultState: T): T => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return defaultState;
    }
    return JSON.parse(serializedState) as T;
  } catch (err) {
    console.error("Error loading state from local storage", err);
    return defaultState;
  }
};

export const saveStateToLocalStorage = <T>(key: string, state: T): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("Error saving state to local storage", err);
  }
};
