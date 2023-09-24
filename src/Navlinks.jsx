import sublinks from "./data";

const Navlinks = () => {
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return <button></button>;
      })}
    </div>
  );
};

export default Navlinks;
11