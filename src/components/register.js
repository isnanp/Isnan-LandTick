import {Form, FloatingLabel, Modal, Button} from 'react-bootstrap';


export default function Signup(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h1 className="formTitle">REGISTER</h1>
          <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Nama Lengkap"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Isnan" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="isnanp" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <Form.Select aria-label="Default select example" className='mb-3'>
              <option hidden>Jenis Kelamin</option>
              <option value="Laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
              </Form.Select>  

              <FloatingLabel
                controlId="floatingInput"
                label="Telp"
                className="mb-3"
              >
                <Form.Control type="number" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className="mb-3 textArea"
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

