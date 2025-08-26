import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="flex flex-col mb-3 md:w-5/12 shadow-md bg-gradient-to-b from-stone-700 to-stone-800 mx-auto px-10 pt-10 pb-5 rounded"
    >
      <div className="flex flex-col gap-5 mb-5">
        <Input
          label="Email"
          type="email"
          isInvalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          label="Password"
          type="password"
          isInvalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          <p className="paragraph">Create a new account</p>
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
