import { Navigate, useLocation } from "react-router-dom";

interface Props {
  link: string;
}

export const Redirect = ({ link }: Props) => {
  const location = useLocation();

  return <Navigate to={link} state={{ from: location }} replace />;
};

export default Redirect;
