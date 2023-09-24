import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Navlinks from "./Navlinks";
const NavBar = () => {
  const { openSideBar ,setPageId } = useGlobalContext();
  const handleSubmenuFuction =(e) =>{
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null) ;
    }
  }
  return (
    <nav onMouseOver={handleSubmenuFuction}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSideBar}> <FaBars /></button>
      <Navlinks/>
      </div>
    </nav>
  );
};
export default NavBar;
