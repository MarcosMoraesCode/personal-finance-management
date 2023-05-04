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
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  cleanUserInfo,
  fetchUserInformation,
} from "../../features/user/userSlice";

const Layout = (props) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const userAchievements = useSelector(
    (state) => state.goalsData.userAchievements
  );
  const userBalance = useSelector((state) => state.incomesData.balance);
  const tokens = useSelector((state) => state.userData);
  const [signOut, loading, error] = useSignOut(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    let achievData = await dispatch(fetchAchievementsData()).then(
      (res) => res.payload
    );
    dispatch(addAchievements(achievData));
    dispatch(fetchBalance());
  };

  useEffect(() => {
    getData();
    getUser();
    if (new Date().getTime() > tokens.expirationDate) {
      logout();
    }
  }, []);

  const getUser = async () => {
    await dispatch(fetchUserInformation()).then((res) => {
      if (res.meta.requestStatus === "fulfilled" && res.payload !== null) {
        let info = res.payload;
        console.log("olha aqui", info);
        localStorage.setItem("username", info.name);
        localStorage.setItem("useremail", info.email);
      }
    });
  };

  //console.log(tokens, "aquiii");

  const logout = async () => {
    const success = await signOut();

    if (success) {
      console.log("Logout succeed!");

      dispatch(cleanUserInfo());
      navigate("/");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      localStorage.removeItem("balance");
      localStorage.removeItem("useremail");
    }
  };

  const sideDrawerHandler = () => {
    setOpenSideDrawer(!openSideDrawer);
    setStartAnimation(true);
  };
  let arr = undefined;
  if (userAchievements !== null) {
    arr = Object.values(userAchievements);
  }

  let sideDrawer = null;

  if (tokens.tokenId) {
    sideDrawer = (
      <SideDrawer
        nickname={localStorage.getItem("username")}
        balance={
          Number(localStorage.getItem("balance")) //!== null
          // ? Number(localStorage.getItem("balance"))
          // : 0
        }
        back={sideDrawerHandler}
        open={openSideDrawer}
        animation={startAnimation}
        achievements={arr !== undefined ? arr.length : null}
        logout={() => logout()}
      ></SideDrawer>
    );
  }

  return (
    <>
      <MainDiv>
        <Toolbar
          //show={openSideDrawer}
          defaultToolbar={tokens.tokenId ? true : false}
          changeSideDrawer={sideDrawerHandler}
        ></Toolbar>
        {sideDrawer}
        <MainContent>{props.children}</MainContent>
        <Footer></Footer>
      </MainDiv>
    </>
  );
};

export default Layout;
