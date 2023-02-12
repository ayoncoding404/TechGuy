import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { UserAuth } from "../Context/AuthContext";

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  .container {
    margin-top: 6rem;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Wrapper>
      <h2 className="common-heading">Sign Up</h2>
      <div>
        <NavLink to="/signin">
          <h3>Already have an account? Sign In.</h3>
        </NavLink>
      </div>

      <div className="container">
        <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="contact-inputs"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              name="Password"
              required
              autoComplete="off"
            />

            <Button> sign Up</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Signup;
