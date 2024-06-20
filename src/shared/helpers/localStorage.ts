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

export const loadStateFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return {
        cartList: [],
        subtotal: 0,
        totalQuantity: 0,
        total: 0,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      cartList: [],
      subtotal: 0,
      totalQuantity: 0,
      total: 0,
    };
  }
};

export const saveStateToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    return err;
  }
};
