import React, { useRef, useState } from "react";
import Appnav from "./Appnav";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useData } from "../context/DataContext";

const Layout = ({ children }) => {
  const { showMobileNav } = useData();
  const [data, setData] = useState({
    popular: [],
    newMusic: [],
  });

  const fetched = useRef(false);

  // useEffect(() => {
  //   if (fetched.current === false) {
  //     stored.current = true;
  //     const popularData = sessionStorage.getItem("popular", popular);
  //     setData((prevState) => ({
  //       ...prevState,
  //       popular: JSON.parse(popularData),
  //     }));
  //     const newMusicData = sessionStorage.getItem("newMusic", newMusic);
  //     setData((prevState) => ({
  //       ...prevState,
  //       popular: JSON.parse(newMusicData),
  //     }));
  //   }
  // }, []);

  return (
    <div>
      {showMobileNav && <MobileNav />}
      <Nav />
      <div className="mt-8 md:flex">
        <Appnav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
