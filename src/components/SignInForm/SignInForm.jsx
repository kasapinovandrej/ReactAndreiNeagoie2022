import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("incorrect password for email");
      }
      if (err.code === "auth/user-not-found") {
        alert("no user associated with this email");
      }
    }
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
