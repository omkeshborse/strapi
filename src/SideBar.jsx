import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? "show-sidebar sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            const { links, page, pageId } = link;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <a key={id} href={url}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
