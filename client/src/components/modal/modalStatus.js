import { Modal, FloatingLabel, Form, Button, } from "react-bootstrap";
import Logo from "../../assets/images/trainwhite.png"

export default function ModalStatus(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="grad " style={{width:"10rem", padding:"8px", height:"3rem", borderRadius:"5px 0 50px 0"}}>
                        <div className="d-flex align-items-center"  style={{marginTop:"auto", marginBottom:"auto"}}>
                            <h5 className="text-white logoText">LandTick</h5>  
                            <img style={{paddingLeft:"3px", marginBottom:"18px"}} src={Logo} alt="logo" />
                        </div>
                    </div>
                    <Form className="mt-4">
                        <FloatingLabel
                            label="Nomer Pemesanan"
                            className="mb-3"
                        >
                            <Form.Control type="number" placeholder="1" />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="isnanp" />
                        </FloatingLabel>

                        <FloatingLabel
                            label="destinasi"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="isnanp" />
                        </FloatingLabel>

                        <FloatingLabel
                            label="Bukti pembayaran"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="isnanp" />
                        </FloatingLabel>

                        <Form.Select aria-label="Default select example" className='mb-3'>
                        <option hidden>status</option>
                        <option value="True">Approved</option>
                        <option value="false">Unapproved</option>
                        </Form.Select> 
                        <div className="d-flex justify-content-center">
                        <Button variant="success" className="w-25">Save</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>                
        </>
    )
}