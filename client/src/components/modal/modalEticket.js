import { Modal, Row, Col } from "react-bootstrap"
import Logo from "../assets/images/trainwhite.png"
import Barcode from "../assets/images/barcode.png"
import Ktp from "../assets/images/ktp.png"
import Clock from "../assets/images/clock.png"
import Warning from "../assets/images/warning.png"

export default function ModalEticket(props) {
    return (
        <>

      <Modal size="lg" show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

                    <div className="grad " style={{width:"10rem", padding:"8px", height:"3rem", borderRadius:"5px 0 50px 0"}}>
                        <div className="d-flex align-items-center"  style={{marginTop:"auto", marginBottom:"auto"}}>
                            <h5 className="text-white logoText">LandTick</h5>  
                            <img style={{paddingLeft:"3px", marginBottom:"18px"}} src={Logo} alt="logo" />
                        </div>
                    </div>
        

            <h2>E-Ticket</h2>
            <p className="text-muted">Kode Invoice : INV0101</p>

            <Row>
                <Col>
                    <h3>Kereta Api</h3>
                    <p>Saturday, 21 Febuari 2020</p>
                    <br />
                    <h3>Argo Wilis</h3>
                    <p>Eksekutif(H)</p>
                    <Row>
                        <Col sm="1" className="pt-2">
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem"}}></div>
                            <div style={{borderColor:"pink", borderStyle:"solid", borderWidth:"0 2px 0 0", height:"1.5rem", width:"2px", margin:"3px 0 3px 7px"}}></div>
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem", background:"pink"}}></div>
                        </Col>
                        <Col>
                            <h4>05.00</h4>
                            <p className="text-muted">21 feb 2023</p>
                            <h4>10.00</h4>
                            <p className="text-muted">21 feb 2023</p>
                        </Col>
                        <Col>
                            <h4>Jakarta</h4>
                            <p className="text-muted">Stasiun Gambir</p>
                            <h4>Surabaya</h4>
                            <p className="text-muted">Stasiun Surabaya</p>
                        </Col>
                    </Row>

                </Col>
                <Col md="4">
                    <img src={Barcode} alt="barcode" />
                </Col>
            </Row>
            <hr style={{border:"2px solid black"}} />
            <Row className="px-3 " style={{fontSize:"13px"}}>
                <Col className="d-flex" >
                <img style={{objectFit:"cover", height:"3rem", paddingRight:"5px"}} src={Ktp} alt="icon" />
                <p>Tunjukkan e-ticket dan identitas para penumpang saat checkin</p>
                </Col>
                <Col className="d-flex">
                <img style={{objectFit:"cover", height:"3rem", paddingRight:"5px"}} src={Clock} alt="icon" />
                <p>Check-in paling lambat 90 menit sebelum keberangkatan</p>
                </Col>
                <Col className="d-flex">
                <img style={{objectFit:"cover", height:"3rem", paddingRight:"5px"}} src={Warning} alt="icon" />
                <p>Waktu tertera adalah waktu stasiunsetempat</p>
                </Col>

            </Row>
            <hr style={{border:"2px solid black"}} />

            <Row style={{marginLeft:"1rem"}}>
                <Col>No. Tanda pengenal</Col>
                <Col>Nama Pemesan</Col>
                <Col>No. Handphone</Col>
                <Col>Email</Col>
            </Row>
            <Row className="text-muted" style={{marginLeft:"1rem"}}>
                <Col>24907104021740</Col>
                <Col>Isnan</Col>
                <Col>0823810237</Col>
                <Col>Isnan@gmail.com</Col>
            </Row>

      </Modal.Body>
      </Modal>
    </>
    )
}