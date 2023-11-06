// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "./Signup.css";
// import Login from "./Login";
// import { Link } from "react-router-dom";
// import axios from "axios";
// const SignupForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //after getting data we will pass the result
//     // like password:password
//     axios
//       .post("http://localhost:3001/register", { name, email, password })
//       .then((result) => console.log(result))
//       .catch((err) => {
//         console.log(err);
//       });

//     // TODO: Validate the form data and submit it to your server

//     // On success, redirect the user to the login page
//     // On failure, display an error message
//   };

//   return (
//     <div>
//       <Form
//         className="signup-form"
//         onSubmit={handleSubmit}
//         style={{
//           width: "500px",
//           margin: "0 auto",
//           padding: "20px",
//           borderRadius: "10px",
//           backgroundColor: "#ffffff",
//           boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <h2 className="signup-form__title">Sign Up</h2>

//         <Form.Group controlId="name">
//           <Form.Label className="signup-form__label">Name</Form.Label>
//           <Form.Control
//             className="signup-form__input"
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               padding: "10px",
//             }}
//           />
//         </Form.Group>

//         <Form.Group controlId="email">
//           <Form.Label className="signup-form__label">Email</Form.Label>
//           <Form.Control
//             className="signup-form__input"
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               padding: "10px",
//             }}
//           />
//         </Form.Group>

//         <Form.Group controlId="password">
//           <Form.Label className="signup-form__label">Password</Form.Label>
//           <Form.Control
//             className="signup-form__input"
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               padding: "10px",
//             }}
//           />
//         </Form.Group>

//         <Button
//           className="signup-form__button"
//           variant="primary"
//           type="submit"
//           style={{
//             backgroundColor: "#3366ff",
//             border: "none",
//             borderRadius: "5px",
//             padding: "10px",
//             color: "#ffffff",
//             cursor: "pointer",
//           }}
//         >
//           Sign Up
//         </Button>
//         <p>Already have an account</p>
//         <Link to="/login" className="btn btn-default border w-100 bg-light">
//           Login
//         </Link>
//       </Form>
//     </div>
//   );
// };

// export default SignupForm;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// // import Message from "../components/Message";
// // import Loader from "../components/Loader";
// // import FormContainer from "../components/FormContainer";
// // import { register } from "../actions/userActions";

// const SignupForm = ({ location, history }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState(null);

//   const dispatch = useDispatch();

//   const userRegister = useSelector((state) => state.userRegister);
//   const { loading, error, userInfo } = userRegister;

//   const redirect = location.search ? location.search.split("=")[1] : "/";

//   useEffect(() => {
//     if (userInfo) {
//       history.push(redirect);
//     }
//   }, [history, userInfo, redirect]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//     } else {
//       dispatch(register(name, email, password));
//     }
//   };

//   return (
//     <FormContainer>
//       <h1>Sign Up</h1>
//       {message && <Message variant="danger">{message}</Message>}
//       {error && <Message variant="danger">{error}</Message>}
//       {loading && <Loader />}
//       <Form onSubmit={submitHandler}>
//         <Form.Group controlId="name">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="name"
//             placeholder="Enter name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId="email">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId="confirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Confirm password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Button type="submit" variant="primary">
//           Register
//         </Button>
//       </Form>

//       <Row className="py-3">
//         <Col>
//           Have an Account?{" "}
//           <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
//             Login
//           </Link>
//         </Col>
//       </Row>
//     </FormContainer>
//   );
// };

// export default SignupForm;
