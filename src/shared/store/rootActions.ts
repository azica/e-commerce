import * as AuthAction from "shared/store/slices/authSlice";
import * as CartActions from "shared/store/slices/cartSlice";
import * as UserActions from "shared/store/slices/userSlice";

export default {
  ...UserActions,
  ...AuthAction,
  ...CartActions,
};
