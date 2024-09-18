import { Form, Button, FloatingLabel } from "react-bootstrap";

function handleSubmit() {}
const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <Form onSubmit={handleSubmit()} className="w-25 mt-3">
        <FloatingLabel
          controlId="formEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="formPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </FloatingLabel>

        <Button variant="primary w-100" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
