import { useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { usestate } from "../../statemanagement/UseAuth";
const Private = () => {
<<<<<<< HEAD
  const { user } = useContext(usestate);
=======
  const location = useLocation();
  const { user } = useContext(usestate);
  console.log(user);
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1

  if (!user) {
    return <Navigate to="/login" replace="true" />;
  }
  return <Outlet />;
};
export default Private;
<<<<<<< HEAD
=======
// state={{ from: location }}
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
