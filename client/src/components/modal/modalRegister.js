
import {Form, FloatingLabel, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { API } from '../../config/api';


export default function Signup(props) {

  const [form, setForm] = useState({
    Username : "" ,
    Email   : "",
	  Password : "",
	  Fullname : "",
	  Gender : "",
	  Telphone : "",
	  Address : "",
  });


  const { Username, Email, Password, Fullname, Gender, Telphone, Address } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation( async (e) => {
    try {
      e.preventDefault();
      const response = await API.post("/register", form);

        alert("Register Success!");

      console.log("register success : ", response);

      setForm({
        Username : "" ,
        Email   : "",
        Password : "",
        Fullname : "",
        Gender : "",
        Telphone : "",
        Address : "",
      });
    } catch (err) {
        alert("Failed to register!");
          
    }
    props.onHide();
  });
 

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1 className="formTitle">REGISTER</h1>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Nama Lengkap"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Isnan" name='Fullname' value={Fullname} onChange={handleChange} />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="isnanp" name='Username' value={Username} onChange={handleChange}/>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" name='Email' value={Email} onChange={handleChange}/>
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" name='Password' value={Password} onChange={handleChange}/>
              </FloatingLabel>

              <Form.Select aria-label="Default select example" className='mb-3' name='Gender' value={Gender} onChange={handleChange}>
              <option hidden>Jenis Kelamin</option>
              <option value="Laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
              </Form.Select>  

              <FloatingLabel
                controlId="floatingInput"
                label="Telp"
                className="mb-3"
              >
                <Form.Control type="text" name='Telphone' value={Telphone} onChange={handleChange} />
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea2" label="Alamat">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className="mb-3 textArea"
                  name='Address'
                  value={Address}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Button type="submit" className="container-fluid rounded-5 grad">
                Submit
              </Button>
            </Form> 
            <p className="text-center mt-3">
          Sudah Punya Akun ? Klik{" "}
          <span onClick={props.onClick} className="fw-bold" style={{ cursor: "pointer" }}>
            Disini
          </span>
        </p>
         </Modal.Body>
      </Modal>
    </>
  );
}

