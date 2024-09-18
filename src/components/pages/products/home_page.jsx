import { Outlet } from "react-router-dom";
import { MainHeader } from "../../shared/main_header";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default HomePage;
