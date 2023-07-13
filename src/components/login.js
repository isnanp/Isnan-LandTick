import {Button, Form, FloatingLabel, Modal} from 'react-bootstrap';
import { UserContext } from '../context/usercontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [ state, dispatch] = useContext(UserContext)
  const navigate = useNavigate()
  console.log({state})
  
  const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        // const password = document.getElementById("password").value;

        if (username === "admin") {
          dispatch({
          type: "LOGIN_ADMIN_SUCCESS",
        });
          alert("Login success");
          navigate("/list-transaksi")
        } else {
           dispatch({
          type: "LOGIN_USER_SUCCESS",
          payload: username,
        });
        navigate("/")
        alert("Login success");
        }  
        
  }
  
  return (
 
    <>

      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1 className="formTitle">LOGIN</h1>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="username" label="Username" className="mb-3">
                  <Form.Control
                      type="text"
                      placeholder="example"
                      controlId='username'
                      name='username'/>
              </FloatingLabel>
              <FloatingLabel controlId="password" label="Password" className="mb-5">
                  <Form.Control
                      type="password"
                      placeholder="Password"
                      controlId='password'
                      name='password'/>
              </FloatingLabel>
              <Button onClick={props.onHide} type="submit" className="container-fluid rounded-5 grad">
                  Submit
              </Button>
          </Form>
            <p className="text-center mt-3">
            Belum Punya Akun ? Klik{" "}
            <span onClick={props.onClick} className="fw-bold" style={{ cursor: "pointer" }}>
              Disini
            </span>
          </p> 
      </Modal.Body>
      </Modal>
    </>
  );
}

