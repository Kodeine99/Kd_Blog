import React from "react";
import Footer from "../../Components/shared/Footer";
import LoginForm from "../../Components/Auth/loginForm";

function loginPage(props) {
  return (
    <div>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
}

export default loginPage;
