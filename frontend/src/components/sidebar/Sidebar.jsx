import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
