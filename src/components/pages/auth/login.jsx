import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (!errors.emailError && !errors.passwordError) {
      event.target.reset();
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  }

  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

  function handleUserChange(event) {
    if (event.target.name == "email") {
      setUser({ ...user, email: event.target.value });
      setErrors({
        ...errors,
        emailError:
          event.target.value == ""
            ? "This input is required"
            : emailRegex.test(event.target.value)
            ? ""
            : "Please Enter a valid Email address",
      });
    } else {
      setUser({ ...user, password: event.target.value });
      setErrors({
        ...errors,
        passwordError:
          event.target.value == ""
            ? "This input is required"
            : passwordRegex.test(event.target.value)
            ? ""
            : "Please Enter a password with a SC, Number, a number of characters between 8-32",
      });
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <Form onSubmit={(e) => handleSubmit(e)} className="w-25 mt-3">
        <FloatingLabel
          controlId="formEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            isInvalid={errors.emailError != ""}
            onChange={(e) => {
              handleUserChange(e);
            }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.emailError}
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="formPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            isInvalid={errors.passwordError != ""}
            onChange={(e) => {
              handleUserChange(e);
            }}
          />
          <Form.Control.Feedback type="invalid">
            {errors.passwordError}
          </Form.Control.Feedback>
        </FloatingLabel>

        <Button variant="primary w-100" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
