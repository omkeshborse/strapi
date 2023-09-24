import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Navlinks from "./Navlinks";
const NavBar = () => {
  const { openSideBar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSideBar}> <FaBars /></button>
      <Navlinks/>
      </div>
    </nav>
  );
};
export default NavBar;
