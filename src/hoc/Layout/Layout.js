import React, { useEffect, useState } from "react";
import { MainContent, MainDiv } from "./LayoutStyle";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import {
  addAchievements,
  fetchAchievementsData,
} from "../../features/goals/goalsSlice";
import { fetchBalance } from "../../features/incomes/incomesSlice";

const Layout = (props) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const userAchievements = useSelector(
    (state) => state.goalsData.userAchievements
  );
  const userBalance = useSelector((state) => state.incomesData.balance);
  const userId = useSelector((state) => state.userData.userId);

  console.log("AAAAAAAQUI", userId, "viu?");
  const dispatch = useDispatch();

  const getData = async () => {
    let achievData = await dispatch(fetchAchievementsData()).then(
      (res) => res.payload
    );
    dispatch(addAchievements(achievData));
    dispatch(fetchBalance());
  };

  useEffect(() => {
    getData();
  }, []);
  //console.log(userAchievements);

  const sideDrawerHandler = () => {
    setOpenSideDrawer(!openSideDrawer);
    setStartAnimation(true);
  };
  let arr = undefined;
  if (userAchievements !== null) {
    arr = Object.values(userAchievements);
  }

  return (
    <>
      <MainDiv>
        <Toolbar
          //show={openSideDrawer}
          changeSideDrawer={sideDrawerHandler}
        ></Toolbar>
        <SideDrawer
          balance={userBalance !== null ? userBalance : 0}
          back={sideDrawerHandler}
          open={openSideDrawer}
          animation={startAnimation}
          achievements={arr !== undefined ? arr.length : null}
        ></SideDrawer>
        <MainContent>{props.children}</MainContent>
        <Footer></Footer>
      </MainDiv>
    </>
  );
};

export default Layout;
