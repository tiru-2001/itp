import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Private = () => {
  const user = false;

  if (!user) {
    return <Navigate to="/login" replace="true" />;
    return (
      <>
        <div>
          <Outlet />
        </div>
      </>
    );
  }
};
export default Private;
