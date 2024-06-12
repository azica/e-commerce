import { useDispatch } from "react-redux";

import { getTokensFromStorage } from "shared/helpers/localStorage";
import { useUser } from "shared/store/hooks";
import { setUser } from "shared/store/slices/userSlice";

import Redirect from "./Redirect";

interface Props {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props) => {
  const dispath = useDispatch();
  const user = useUser();
  const token = getTokensFromStorage();

  if (!user || !token) {
    dispath(setUser(null));
    return <Redirect link="/login" />;
  }
  return children;
};

export default PrivateRoute;
