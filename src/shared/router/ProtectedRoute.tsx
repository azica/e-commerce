import useNavigatedFrom from "hooks/useNavigatedFrom";
import { useUser } from "shared/store/hooks";

import { Redirect } from "./Redirect";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  const user = useUser();
  const navigatedFrom = useNavigatedFrom();

  if (user) {
    return <Redirect link={navigatedFrom} />;
  }

  return children;
};

export default ProtectedRoute;
