import * as AuthAction from "shared/store/slices/authSlice";
import * as CartActions from "shared/store/slices/cartSlice";
import * as UserActions from "shared/store/slices/userSlice";
import * as WishList from "shared/store/slices/wishlistSlice";
import * as Product from "shared/store/slices/productSlice";

export default {
  ...UserActions,
  ...AuthAction,
  ...CartActions,
  ...WishList,
  ...Product
};
