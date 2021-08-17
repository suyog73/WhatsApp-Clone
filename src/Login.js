import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://image.flaticon.com/icons/png/512/733/733585.png"
          alt="whatsapp logo"
        />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>
          <img
            className="googleImg"
            src="https://img.icons8.com/fluency/24/000000/google-logo.png"
          />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
