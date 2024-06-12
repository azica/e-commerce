import * as AuthAction from "shared/store/slices/authSlice";
import * as UserActions from "shared/store/slices/userSlice";

export default {
  ...UserActions,
  ...AuthAction,
};
