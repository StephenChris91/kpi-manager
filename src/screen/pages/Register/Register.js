import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import useSignup from "../../../hooks/useSignup";
import Select from "react-select";

import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";

//styles
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);

  const { loading, error, user } = useAuthState(auth);
  const options = [
    { value: "Staff", label: "Staff" },
    { value: "HR", label: "HR" },
    { value: "Team Lead", label: "Team Lead" },
  ];

  const navigate = useNavigate();
  const { signup } = useSignup();

  const signUserUp = () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }
    signup(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate("/");
    }
  }, [loading, user]);

  const registerFormHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signUserUp();
    navigate("/");
  };

  return (
    <Container fluid>
      <Container className="form-container mt-5">
        <h1 className="text-center">Register</h1>

        <Form>
          <div>
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Firstname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Form.Label>Status</Form.Label>
            <Select options={options} ref={role} />
          </div>
          <div>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button variant="dark" className="mt-2" onClick={registerFormHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Register;
