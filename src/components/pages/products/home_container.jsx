import { Outlet } from "react-router-dom";
import { MainHeader } from "../../shared/main_header";

const HomePageContainer = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default HomePageContainer;
