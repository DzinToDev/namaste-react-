const Header = () => {
  return (
    <nav className=" flex justify-between py-6 ">
      <div className="logo">
        <h1 className="text-[#b28670]">Coffee</h1>
      </div>
      <div>
        <ul className="menu flex gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
