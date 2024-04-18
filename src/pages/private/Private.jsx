import { useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { usestate } from "../../statemanagement/UseAuth";
const Private = () => {
  const location = useLocation();
  const { user } = useContext(usestate);
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace="true" />;
  }
  return <Outlet />;
};
export default Private;
// state={{ from: location }}
