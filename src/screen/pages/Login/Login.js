import { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import useLogin from "../../../hooks/useLogin";

//styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, user } = useAuthState(auth);
  const navigate = useNavigate();
  const { login } = useLogin();

  useEffect(() => {
    if (loading) return;
    // if (!user) {
    //   navigate("/register");
    // } else {
    //   alert("Please Sign Up First");
    //   navigate("/");
    // }
  }, [loading, user]);

  const logUserIn = () => {
    login(email, password);
  };

  const LoginFormHandler = (e) => {
    e.preventDefault();
    logUserIn();
    navigate("/");
  };

  return (
    <Container fluid>
      <Container className="form-container mt-5">
        <h1 className="text-center">Login</h1>
        <Form>
          <div>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="dark"
            className="mt-2 mb-2"
            onClick={LoginFormHandler}
          >
            Submit
          </Button>
        </Form>
        <p>
          Don't have any account yet? <Link to="/register">Sign Up Here</Link>{" "}
        </p>
      </Container>
    </Container>
  );
};

export default Login;
