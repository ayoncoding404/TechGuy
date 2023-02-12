import React from "react";
import { Button } from "../Styles/Button";
import styled from "styled-components";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {}
  };

  return (
    <div>
      <h2> Account Overview </h2>
      <hr></hr>

      <h3> Email Id: {user && user.email} </h3>
      <div>
        <Button onClick={handleLogout} classname="cartbutton ">
          {" "}
          Log Out{" "}
        </Button>
      </div>
    </div>
  );
};

const Wrapper = styled.section`
  .cartbutton {
    margin-top: 4rem;
    display: flex;
  }
`;

export default Account;
