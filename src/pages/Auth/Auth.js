import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";
import Logo from "../../assets/png/logo.png";
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container fluid className="auth">
      <Image src={Logo} />

      <div className="container-form">
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              Don't have an account?
              <span onClick={() => setShowLogin(!showLogin)}>Sign up</span>
            </>
          ) : (
            <>
              Login with your account!
              <span onClick={() => setShowLogin(!showLogin)}>
                Log in
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
}
