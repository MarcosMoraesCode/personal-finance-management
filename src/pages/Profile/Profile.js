import React, { useState } from "react";
import {
  AlertButtonDiv,
  AlertContent,
  ButtonDiv,
  CloseAlertButton,
  ImageContent,
  ImageDiv,
  MainContent,
  MainInfoContent,
  MainInfoDiv,
  ManagerTitleDiv,
  OptionBtn,
  ProfileBtn,
  ProfileContainer,
  ProfileContentDiv,
  ProfileDiv,
  ProfileManagerDiv,
  ProfileTitle,
  ProfileTitleDiv,
  SecondaryContent,
  SecondaryInfoContent,
  SecondaryInfoContentDiv,
  StyledAlert,
  TextSpan,
} from "./ProfileStyle";

import Crud from "../../components/UI/Modal/CrudModal/Crud";
import { useDispatch } from "react-redux";
import {
  editProfile,
  fetchReportId,
  fetchUserInformation,
  postNewReport,
  resetData,
} from "../../features/user/userSlice";
import { useEffect } from "react";
import { auth } from "../../services/firebaseConfig";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

const Profile = () => {
  const [showCrud, setShowCrud] = useState(false);
  const [submitPermission, setSubmitPermission] = useState(false);
  const [openOption, setOpenOptions] = useState(false);
  const [hideOldPassword, setHideOldPassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const [reportNotSent, setReportNotSent] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [userInfo, setUserInfo] = useState({
    name: "",
    street: "",
    district: "",
    city: "",
    email: "",
  });
  const [completeAddress, setCompleteAddress] = useState("...");
  const dispatch = useDispatch();
  const [crudType, setCrudType] = useState({
    crudType: "",
    userName: "",
    userEmail: "",
    userNewPassword: "",
    userNewPasswordConfirmation: "",
    userOldPassword: "",
    userAddress: "",
    report: "",
  });
  const [userInputs, setUserInputs] = useState({
    id: "user",
    inputName: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "User Name",
      placeholder: "User Name",
      invalidMessage: "",
    },
    inputStreet: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Street",
      placeholder: "Ex: Licoln Avenue, 461",
      invalidMessage: "",
    },
    inputDistrict: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "District",
      placeholder: "Your District",
      invalidMessage: "",
    },
    inputCity: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "City",
      placeholder: "Your City",
      invalidMessage: "",
    },
    /*inputState: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "State",
      placeholder: "Your State",
      invalidMessage: "",
    },*/
    inputOldPassword: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Old Password",
      placeholder: "Current Password",
      invalidMessage: "",
    },
    inputNewPassword: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "New Password",
      placeholder: "New Password",
      invalidMessage: "",
    },
    inputNewPasswordConfirmation: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "New Password Confirmation",
      placeholder: "Confirm Password",
      invalidMessage: "",
    },
    inputReport: {
      value: "",
      isValid: false,
      isTouched: false,
      id: "Report",
      placeholder: "Must have at least 50 characters.",
      invalidMessage: "",
    },
  });

  const getReportId = async () => {
    dispatch(fetchReportId());
  };

  const getUser = async () => {
    await dispatch(fetchUserInformation()).then((res) => {
      if (res.meta.requestStatus === "fulfilled" && res.payload !== null) {
        let info = res.payload;
        let streetName = info.address.street;
        let districtName = info.address.district;
        let cityName = info.address.city;

        setUserInfo({
          name: info.name,
          street: streetName,
          district: districtName,
          city: cityName,
          email: info.email,
        });

        let street = streetName !== "" ? `${streetName}, ` : "";
        let district = districtName !== "" ? ` ${districtName},` : "";
        let city = cityName !== "" ? ` ${cityName}` : "";

        setCompleteAddress(`${street}` + ` ${district}` + ` ${city}`);

        // if( )
      }
    });

    //await fetchReportId().then((res) => console.log("oi", res));
  };
  //a

  useEffect(() => {
    getUser();
    getReportId();
  }, []);

  const switchHideNewPassword = () => {
    setHideNewPassword(!hideNewPassword);
  };
  const switchHideOldPassword = () => {
    setHideOldPassword(!hideOldPassword);
  };

  const InputChangeHandler = (event, inputId) => {
    switch (inputId) {
      case "User Name":
        setUserInputs({
          ...userInputs,
          inputName: {
            ...userInputs.inputName,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Old Password":
        setUserInputs({
          ...userInputs,
          inputOldPassword: {
            ...userInputs.inputOldPassword,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "New Password":
        setUserInputs({
          ...userInputs,
          inputNewPassword: {
            ...userInputs.inputNewPassword,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "New Password Confirmation":
        setUserInputs({
          ...userInputs,
          inputNewPasswordConfirmation: {
            ...userInputs.inputNewPasswordConfirmation,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Street":
        setUserInputs({
          ...userInputs,
          inputStreet: {
            ...userInputs.inputStreet,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "District":
        setUserInputs({
          ...userInputs,
          inputDistrict: {
            ...userInputs.inputDistrict,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "City":
        setUserInputs({
          ...userInputs,
          inputCity: {
            ...userInputs.inputCity,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "State":
        setUserInputs({
          ...userInputs,
          inputState: {
            ...userInputs.inputState,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      case "Report":
        setUserInputs({
          ...userInputs,
          inputReport: {
            ...userInputs.inputReport,
            value: event.currentTarget.value,
            isTouched: true,
            isValid: CheckInputValidation(inputId, event.currentTarget.value),
          },
        });
        checkButtonValidation(inputId, event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const confirmProfileChange = async () => {
    let userObj = {
      name: "",
      email: "",
      street: "",
      district: "",
      city: "",
    };
    switch (crudType.crudType) {
      case "edit-username":
        userObj.name = userInputs.inputName.value;
        userObj.email = userInfo.email;
        userObj.street = userInfo.street;
        userObj.district = userInfo.district;
        userObj.city = userInfo.city;
        await dispatch(editProfile(userObj)).then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            localStorage.setItem("username", userObj.name);
            BackdropCrudHandler();
          }
        });
        break;
      case "edit-useraddress":
        userObj.name = userInfo.name;
        userObj.email = userInfo.email;
        userObj.street = userInputs.inputStreet.value;
        userObj.district = userInputs.inputDistrict.value;
        userObj.city = userInputs.inputCity.value;
        await dispatch(editProfile(userObj)).then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            BackdropCrudHandler();
          }
        });
        break;
    }
  };

  const resetUserData = async () => {
    const userObj = {
      name: crudType.userName,
      email: crudType.userEmail,
      street: userInfo.street,
      district: userInfo.district,
      city: userInfo.city,
    };

    await dispatch(resetData(userObj)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setCrudType({ ...crudType, crudType: "", userEmail: "", userName: "" });
        setSubmitPermission(false);
        setShowCrud(false);
      }
    });
  };
  const CheckInputValidation = (inputId, value) => {
    const isValidName = (goalName) =>
      /^[a-zA-ZzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,15}(?: [a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1,15})?$/.test(
        goalName
      );
    const isStrongPassword = (password) =>
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(
        password
      );

    const validation1 = isValidName(value);
    const validation2 = value !== userInfo.name;
    const validation3 = value.trim() !== "" && value.length > 8;
    //const validation4 = value !== userInfo.address;
    const validation5 = isStrongPassword(value);
    const validation6 = userInputs.inputNewPassword.value === value;
    const validation7 = value !== userInfo.street;
    const validation8 = value !== userInfo.district;
    const validation9 = value !== userInfo.city;
    const validation10 = value.length >= 50;

    //const validation3 = Number(value) <= Number(userInputs.inputValue.value);
    //const validation4 = Number(value) <= Number(userBalance);
    //const validation5 = isValidDate(value);
    //const validation6 = Number(value) >= Number(crudType.goalAllocated);

    let result = false;

    switch (inputId) {
      case "User Name":
        validation1 && validation2 ? (result = true) : (result = false);
        break;
      case "Old Password":
        validation1 ? (result = true) : (result = false);
        break;
      case "New Password":
        validation5 ? (result = true) : (result = false);
        break;
      case "New Password Confirmation":
        validation6 ? (result = true) : (result = false);
        break;
      case "Street":
        validation3 && validation7 ? (result = true) : (result = false);
        break;
      case "District":
        validation1 && validation8 ? (result = true) : (result = false);
        break;
      case "City":
        validation1 && validation9 ? (result = true) : (result = false);
        break;
      /*case "State":
        validation1 && validation10 ? (result = true) : (result = false);
        break;*/
      case "Report":
        // console.log("passa aq", console.log(validation10));
        validation10 ? (result = true) : (result = false);
        break;
      default:
        break;
    }
    return result;
  };

  const sendEmail = async () => {
    //let email = localStorage.getItem("useremail");

    const success = await sendPasswordResetEmail(userInfo.email);
    setShowAlert(true);
    BackdropCrudHandler();
    setSubmitPermission(false);
    if (success) {
      setEmail(true);
    }
  };

  const reportBug = async () => {
    const reportObj = {
      content: userInputs.inputReport.value,
      username: userInfo.name,
      email: userInfo.email,
    };

    await dispatch(postNewReport(reportObj))
      .then((res) => {
        //console.log(res);
        if (res.meta.requestStatus === "fulfilled") {
          setSubmitPermission(false);
          setShowCrud(false);
          setShowAlert(true);
          setReportSent(true);
          getUser();
        } else {
          setShowAlert(true);
          setSubmitPermission(false);
          setShowCrud(false);
          setReportNotSent(true);
        }
      })
      .catch((err) => console.log(err));

    //console.log(userInputs.inputReport.value, userInfo.name, userInfo.email);
  };

  const checkButtonValidation = (inputId, value) => {
    let validation1 = userInputs.inputName.isValid === true;
    let validation2 = userInputs.inputOldPassword.isValid === true;
    let validation3 = userInputs.inputNewPassword.isValid === true;
    let validation4 = userInputs.inputNewPasswordConfirmation.isValid === true;
    let validation5 = userInputs.inputStreet.isValid === true;
    let validation6 = userInputs.inputDistrict.isValid === true;
    let validation7 = userInputs.inputCity.isValid === true;
    //let validation8 = userInputs.inputState.isValid === true;
    let validation9 = userInputs.inputReport.isValid === true;

    switch (inputId) {
      case "User Name":
        validation1 = CheckInputValidation(inputId, value);
        break;
      case "Old Password":
        validation2 = CheckInputValidation(inputId, value);
        break;
      case "New Password":
        validation3 = CheckInputValidation(inputId, value);
        break;
      case "New Password Confirmation":
        validation4 = CheckInputValidation(inputId, value);
        break;
      case "Street":
        validation5 = CheckInputValidation(inputId, value);
        break;
      case "District":
        validation6 = CheckInputValidation(inputId, value);
        break;
      case "City":
        validation7 = CheckInputValidation(inputId, value);
        break;
      case "Report":
        //console.log("aqui tbm");
        validation9 = CheckInputValidation(inputId, value);
        break;
      default:
        break;
    }

    switch (crudType.crudType) {
      case "edit-username":
        validation1 === true
          ? setSubmitPermission(true)
          : setSubmitPermission(false);
        break;
      case "edit-useraddress":
        validation5 === true && validation6 === true && validation7 === true
          ? //validation8 === true
            setSubmitPermission(true)
          : setSubmitPermission(false);
        break;
      case "edit-userpassword":
        validation1 === true
          ? setSubmitPermission(true)
          : setSubmitPermission(false);
      case "report":
        validation9 === true
          ? setSubmitPermission(true)
          : setSubmitPermission(false);
        break;
    }

    /*if (crudType.crudType === "") {
      validation1 === true &&
      validation2 === true &&
      validation3 === true &&
      validation4 === true
        ? setSubmitPermission(true)
        : setSubmitPermission(false);
    }

    if (crudType.crudType !== "") {
      validation1 === true && validation2 === true && validation4 === true
        ? setSubmitPermission(true)
        : setSubmitPermission(false);
    }*/
  };

  const verifyFocus = (inputId, elementIsValid) => {
    //let exists = false;

    if (!elementIsValid) {
      switch (inputId) {
        case "User Name":
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage:
                userInputs.inputName.value === "" ? "" : "Invalid name!",
            },
          });
          break;
        case "Old Password":
          setUserInputs({
            ...userInputs,
            inputOldPassword: {
              ...userInputs.inputOldPassword,
              invalidMessage:
                userInputs.inputOldPassword.value === ""
                  ? ""
                  : "Wrong Password!",
            },
          });
          break;
        case "Street":
          setUserInputs({
            ...userInputs,
            inputStreet: {
              ...userInputs.inputStreet,
              invalidMessage:
                userInputs.inputStreet.value === "" ? "" : "Invalid Name!",
            },
          });
          break;
        case "District":
          setUserInputs({
            ...userInputs,
            inputDistrict: {
              ...userInputs.inputDistrict,
              invalidMessage:
                userInputs.inputDistrict.value === "" ? "" : "Invalid Name!",
            },
          });
          break;
        case "City":
          setUserInputs({
            ...userInputs,
            inputCity: {
              ...userInputs.inputCity,
              invalidMessage:
                userInputs.inputCity.value === "" ? "" : "Invalid Name!",
            },
          });
          break;
        case "State":
          setUserInputs({
            ...userInputs,
            inputState: {
              ...userInputs.inputState,
              invalidMessage:
                userInputs.inputState.value === "" ? "" : "Invalid Name!",
            },
          });
          break;
        case "New Password":
          setUserInputs({
            ...userInputs,
            inputNewPassword: {
              ...userInputs.inputNewPassword,
              invalidMessage:
                userInputs.inputNewPassword.value === ""
                  ? ""
                  : "Min 8 characters, at least one of each: #, 1, a, A",
            },
          });
          break;
        case "New Password Confirmation":
          setUserInputs({
            ...userInputs,
            inputNewPasswordConfirmation: {
              ...userInputs.inputNewPasswordConfirmation,
              invalidMessage:
                userInputs.inputNewPasswordConfirmation.value === ""
                  ? ""
                  : "Password doesn't match!",
            },
          });
          break;
        case "User Email":
          setUserInputs({
            ...userInputs,
            inputEmail: {
              ...userInputs.inputEmail,
              invalidMessage:
                userInputs.inputEmail.value === "" ? "" : "Invalid email!",
            },
          });
          break;
        case "User Address":
          setUserInputs({
            ...userInputs,
            inputAddress: {
              ...userInputs.inputAddress,
              invalidMessage:
                userInputs.inputAddress.value === "" ? "" : "Invalid Address!",
            },
          });
          break;
        case "Report":
          setUserInputs({
            ...userInputs,
            inputReport: {
              ...userInputs.inputReport,
              invalidMessage:
                userInputs.inputReport.value === "" ? "" : "Invalid Message!",
            },
          });
          break;
        default:
          break;
      }
    } else {
      switch (inputId) {
        case "User Name":
          setUserInputs({
            ...userInputs,
            inputName: {
              ...userInputs.inputName,
              invalidMessage: "",
            },
          });
          break;
        case "Old Password":
          setUserInputs({
            ...userInputs,
            inputOldPassword: {
              ...userInputs.inputOldPassword,
              invalidMessage: "",
            },
          });
          break;
        case "New Password":
          setUserInputs({
            ...userInputs,
            inputNewPassword: {
              ...userInputs.inputNewPassword,
              invalidMessage: "",
            },
          });
          break;
        case "New Password Confirmation":
          setUserInputs({
            ...userInputs,
            inputNewPasswordConfirmation: {
              ...userInputs.inputNewPasswordConfirmation,
              invalidMessage: "",
            },
          });
          break;
        case "User Email":
          setUserInputs({
            ...userInputs,
            inputEmail: {
              ...userInputs.inputEmail,
              invalidMessage: "",
            },
          });
          break;
        case "User Address":
          setUserInputs({
            ...userInputs,
            inputAddress: {
              ...userInputs.inputAddress,
              invalidMessage: "",
            },
          });
          break;
        case "Report":
          setUserInputs({
            ...userInputs,
            inputReport: {
              ...userInputs.inputReport,
              invalidMessage: "",
            },
          });
          break;
        case "Street":
          setUserInputs({
            ...userInputs,
            inputStreet: {
              ...userInputs.inputStreet,
              invalidMessage: "",
            },
          });
          break;
        case "District":
          setUserInputs({
            ...userInputs,
            inputDistrict: {
              ...userInputs.inputDistrict,
              invalidMessage: "",
            },
          });
          break;
        case "City":
          setUserInputs({
            ...userInputs,
            inputCity: {
              ...userInputs.inputCity,
              invalidMessage: "",
            },
          });
          break;
        case "State":
          setUserInputs({
            ...userInputs,
            inputState: {
              ...userInputs.inputState,
              invalidMessage: "",
            },
          });
          break;
        default:
          break;
      }
    }
  };
  const refreshInputs = () => {
    setUserInputs({
      id: "user",
      inputName: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "User Name",
        placeholder: "User Name",
        invalidMessage: "",
      },
      inputStreet: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Street",
        placeholder: "Ex: Licoln Avenue, 461",
        invalidMessage: "",
      },
      inputDistrict: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "District",
        placeholder: "Your District",
        invalidMessage: "",
      },
      inputCity: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "City",
        placeholder: "Your City",
        invalidMessage: "",
      },
      inputState: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "State",
        placeholder: "Your State",
        invalidMessage: "",
      },
      inputOldPassword: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Old Password",
        placeholder: "Current Password",
        invalidMessage: "",
      },
      inputNewPassword: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "New Password",
        placeholder: "New Password",
        invalidMessage: "",
      },
      inputNewPasswordConfirmation: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "New Password Confirmation",
        placeholder: "Confirm Password",
        invalidMessage: "",
      },
      inputReport: {
        value: "",
        isValid: false,
        isTouched: false,
        id: "Report",
        placeholder: "Must have at least 50 characters.",
        invalidMessage: "",
      },
    });
  };
  const BackdropCrudHandler = () => {
    setShowCrud(false);
    setCrudType({
      crudType: "",
      userName: "",
      userEmail: "",
      userNewPassword: "",
      userNewPasswordConfirmation: "",
      userOldPassword: "",
      userAddress: "",
      report: "",
    });
    setHideNewPassword(true);
    setHideOldPassword(true);
    refreshInputs();
    setSubmitPermission(false);
  };

  let alertElement;

  if (error) {
    alertElement = (
      <StyledAlert>
        {" "}
        <AlertContent>{error.message}</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }
  if (email) {
    alertElement = (
      <StyledAlert color={"#51d289"}>
        {" "}
        <AlertContent>A recovery link was sent to your email!</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
              //setAccountCreated(false);
              setEmail(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }
  if (reportSent) {
    alertElement = (
      <StyledAlert color={"#51d289"}>
        {" "}
        <AlertContent>Thanks! You report was send!</AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
              //setAccountCreated(false);
              setReportSent(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }
  if (reportNotSent) {
    alertElement = (
      <StyledAlert>
        {" "}
        <AlertContent>
          Ops! There's something wrong! Refresh the page and try again!
        </AlertContent>
        <AlertButtonDiv>
          <CloseAlertButton
            onClick={() => {
              setShowAlert(false);
              //setAccountCreated(false);
              setReportNotSent(false);
            }}
          />
        </AlertButtonDiv>
      </StyledAlert>
    );
  }

  return (
    <ProfileDiv>
      <ProfileContainer>
        <ProfileTitleDiv>
          <ProfileTitle>Profile</ProfileTitle>
        </ProfileTitleDiv>
        <ProfileContentDiv>
          <MainContent>
            <MainInfoDiv>
              <MainInfoContent>
                <TextSpan>Username: </TextSpan> {userInfo.name}
              </MainInfoContent>
              <MainInfoContent>
                <TextSpan>Email: </TextSpan> {userInfo.email}
              </MainInfoContent>
              <MainInfoContent>
                <p>
                  <TextSpan>Address:</TextSpan> {completeAddress}
                </p>
              </MainInfoContent>
            </MainInfoDiv>
            <ImageDiv>
              <ImageContent></ImageContent>
            </ImageDiv>
          </MainContent>
          <SecondaryContent>
            <SecondaryInfoContentDiv open={openOption}>
              <SecondaryInfoContent>
                <p>
                  You can edit your profile. To change your password or edit
                  username, address.
                </p>
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn
                  onClick={() => {
                    setOpenOptions(true);
                  }}
                >
                  Edit Profile
                </ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <SecondaryInfoContentDiv open={openOption}>
              <SecondaryInfoContent>
                <p>
                  FinPlann is still in beta, please report any bug you may have
                  found!
                </p>
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn
                  onClick={() => {
                    setShowCrud(true);
                    setCrudType({
                      ...crudType,
                      crudType: "report",
                    });
                  }}
                >
                  Report
                </ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <SecondaryInfoContentDiv open={openOption}>
              <SecondaryInfoContent>
                <p>
                  If you want to reset all incomes, expenses, goals,
                  achievements and history you can use the reset button!
                </p>
              </SecondaryInfoContent>
              <ButtonDiv>
                <ProfileBtn
                  onClick={() => {
                    setShowCrud(true);
                    setCrudType({
                      ...crudType,
                      crudType: "reset-data",
                      userName: userInfo.name,
                      userEmail: userInfo.email,
                    });
                    setSubmitPermission(true);
                  }}
                >
                  Reset
                </ProfileBtn>
              </ButtonDiv>
            </SecondaryInfoContentDiv>
            <ProfileManagerDiv open={openOption}>
              <ManagerTitleDiv>Edit Profile</ManagerTitleDiv>
              <OptionBtn
                onClick={() => {
                  setShowCrud(true);
                  setCrudType({
                    ...crudType,
                    crudType: "edit-username",
                    userName: userInfo.name,
                  });
                }}
              >
                Edit Username
              </OptionBtn>
              <OptionBtn
                onClick={() => {
                  setShowCrud(true);
                  setCrudType({
                    ...crudType,
                    crudType: "edit-useraddress",
                    userAddress: userInfo.address,
                  });
                }}
              >
                Edit Address
              </OptionBtn>
              <OptionBtn
                onClick={() => {
                  setShowCrud(true);
                  setCrudType({
                    ...crudType,
                    crudType: "edit-userpassword",
                  });
                  setSubmitPermission(true);
                }}
              >
                Change Password
              </OptionBtn>
              <OptionBtn
                onClick={() => {
                  setOpenOptions(false);
                }}
              >
                Go Back
              </OptionBtn>
            </ProfileManagerDiv>
          </SecondaryContent>
        </ProfileContentDiv>
      </ProfileContainer>
      {showCrud ? (
        <Crud
          crudType={crudType.crudType}
          userName={crudType.userName}
          userAddress={crudType.userAddress}
          hideOldPassword={hideOldPassword}
          hideNewPassword={hideNewPassword}
          switchHideNewPassword={switchHideNewPassword}
          switchHideOldPassword={switchHideOldPassword}
          userNameInputConfig={userInputs.inputName}
          userAddressInputConfig={userInputs.inputAddress}
          oldPasswordInputConfig={userInputs.inputOldPassword}
          newPasswordInputConfig={userInputs.inputNewPassword}
          streetInputConfig={userInputs.inputStreet}
          districtInputConfig={userInputs.inputDistrict}
          cityInputConfig={userInputs.inputCity}
          resetUserData={() => resetUserData()}
          reportBug={() => reportBug()}
          changePassword={() => sendEmail()}
          editUsername={() => {
            confirmProfileChange();
          }}
          editUserAddress={() => {
            confirmProfileChange();
          }}
          //stateInputConfig={userInputs.inputState}
          reportInputConfig={userInputs.inputReport}
          newPasswordConfirmationInputConfig={
            userInputs.inputNewPasswordConfirmation
          }
          userNameChanged={(event) =>
            InputChangeHandler(event, userInputs.inputName.id)
          }
          userNameBlur={() =>
            verifyFocus(userInputs.inputName.id, userInputs.inputName.isValid)
          }
          streetChanged={(event) =>
            InputChangeHandler(event, userInputs.inputStreet.id)
          }
          streetBlur={() =>
            verifyFocus(
              userInputs.inputStreet.id,
              userInputs.inputStreet.isValid
            )
          }
          districtChanged={(event) =>
            InputChangeHandler(event, userInputs.inputDistrict.id)
          }
          districtBlur={() =>
            verifyFocus(
              userInputs.inputDistrict.id,
              userInputs.inputDistrict.isValid
            )
          }
          cityChanged={(event) =>
            InputChangeHandler(event, userInputs.inputCity.id)
          }
          cityBlur={() =>
            verifyFocus(userInputs.inputCity.id, userInputs.inputCity.isValid)
          }
          /* stateChanged={(event) =>
            InputChangeHandler(event, userInputs.inputState.id)
          }
          stateBlur={() =>
            verifyFocus(userInputs.inputState.id, userInputs.inputState.isValid)
          }*/
          reportChanged={(event) =>
            InputChangeHandler(event, userInputs.inputReport.id)
          }
          reportBlur={() =>
            verifyFocus(
              userInputs.inputReport.id,
              userInputs.inputReport.isValid
            )
          }
          userAddressChanged={(event) =>
            InputChangeHandler(event, userInputs.inputAddress.id)
          }
          userAddressBlur={() =>
            verifyFocus(
              userInputs.inputAddress.id,
              userInputs.inputAddress.isValid
            )
          }
          oldPasswordChanged={(event) =>
            InputChangeHandler(event, userInputs.inputOldPassword.id)
          }
          oldPasswordBlur={() =>
            verifyFocus(
              userInputs.inputOldPassword.id,
              userInputs.inputOldPassword.isValid
            )
          }
          newPasswordChanged={(event) =>
            InputChangeHandler(event, userInputs.inputNewPassword.id)
          }
          newPasswordBlur={() =>
            verifyFocus(
              userInputs.inputNewPassword.id,
              userInputs.inputNewPassword.isValid
            )
          }
          newPasswordConfirmationChanged={(event) =>
            InputChangeHandler(
              event,
              userInputs.inputNewPasswordConfirmation.id
            )
          }
          newPasswordConfirmationBlur={() =>
            verifyFocus(
              userInputs.inputNewPasswordConfirmation.id,
              userInputs.inputNewPasswordConfirmation.isValid
            )
          }
          cancelAction={BackdropCrudHandler}
          clicked={BackdropCrudHandler}
          continueDisabled={submitPermission ? "" : "disabled"}

          /* continueDisabled={submitPermission ? "" : "disabled"}
          
          goalNameChanged={(event) =>
            InputChangeHandler(event, userInputs.inputName.id)
          }
          goalValueChanged={(event) =>
            InputChangeHandler(event, userInputs.inputValue.id)
          }
          goalDateChanged={(event) =>
            InputChangeHandler(event, userInputs.inputDate.id)
          }
          goalNameBlur={() =>
            verifyFocus(userInputs.inputName.id, userInputs.inputName.isValid)
          }
          goalValueBlur={() =>
            verifyFocus(userInputs.inputValue.id, userInputs.inputValue.isValid)
          }
          goalDateBlur={() =>
            verifyFocus(userInputs.inputDate.id, userInputs.inputDate.isValid)
          }
          editGoal={() =>
            confirmEditGoal(
              userInputs.inputName.value,
              userInputs.inputValue.value,
              userInputs.inputDate.value,
              crudType.goalId,
              crudType.goalTerm,
              crudType.goalAllocated
            )
          }
          removeGoal={() =>
            confirmRemoveGoal(crudType.goalId, crudType.goalAllocated)
          }

          /* crudType={crudType.crudType}
          
          }*/
        />
      ) : null}
      {showAlert ? alertElement : null}
    </ProfileDiv>
  );
};

export default Profile;
