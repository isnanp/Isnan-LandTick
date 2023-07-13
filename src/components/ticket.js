import { Container, Button, Row, Col } from "react-bootstrap";
import Logo from "../assets/images/trainwhite.png"
import { Link } from "react-router-dom";
import Barcode from "../assets/images/barcode.png"


export default function Ticket(props) {
    return (
        <div style={{marginBottom:"10.6rem"}}>  
            <div className="mt-5 ms-5">
            <h1 className="ms-5">Ticket Saya</h1>
            </div>
            <Container className="shadow pb-3" style={{border: "1px solid #B7B7B7", borderRadius:"5px", padding:"0", width:"75%"}}>
                    <Row>
                        <Col>
                            <div className="grad " style={{width:"10rem", padding:"8px", height:"3.5rem", borderRadius:"5px 0 50px 0"}}>
                                <div className="d-flex align-items-center"  style={{marginTop:"auto", marginBottom:"auto"}}>
                                    <h5 className="text-white logoText">LandTick</h5>  
                                    <img style={{paddingLeft:"3px", marginBottom:"18px"}} src={Logo} alt="logo" />
                                </div>
                            </div>
                        </Col>
                        <Col className="pe-3" style={{textAlign:"end"}}>
                        <h1 style={{marginBottom:"0", paddingBottom:"0"}}>Kereta Api</h1>
                        <p className="text-muted">Saturday, 24 april 2023</p>
                        </Col>
                    </Row>
                    <Row style={{width:"90%", padding:"1rem"}}>
                        <Col className="me-5">
                        <h3><b>{props?.nama}</b></h3>
                        <h5>{props?.kelas}</h5>
                        { props.status ? (
                            <div className="text-center" style={{textAlign:"center", background: "#95fc95", width:"max-content", borderRadius:"3px"}}>
                            <p style={{margin:"10px", color:"green"}}>Approved</p>
                        </div>
                        ) : (
                            <div className="text-center" style={{textAlign:"center", background: "#fce3ec", width:"max-content", borderRadius:"3px"}}>
                                <p style={{margin:"10px", color:"orange"}}>Pending</p>
                            </div>

                        )}

                        </Col>
                        <Col sm="1" className="pt-2">
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem"}}></div>
                            <div style={{borderColor:"pink", borderStyle:"solid", borderWidth:"0 2px 0 0", height:"3.5rem", width:"2px", margin:"3px 0 3px 7px"}}></div>
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem", background:"pink"}}></div>
                        </Col>
                        <Col>
                            <h4>{props?.berangkat}</h4>
                            <p className="text-muted">21 feb 2023</p>
                            <h4>{props?.tiba}</h4>
                            <p className="text-muted">21 feb 2023</p>
                        </Col>
                        <Col>
                            <h4>{props?.kotaAwal}</h4>
                            <p className="text-muted">{props?.awal}</p>
                            <h4>{props?.kotaAkhir}</h4>
                            <p className="text-muted">{props?.akhir}</p>
                        </Col>
                        {props?.status ? ( 
                            <img style={{objectFit:"cover", width:"9rem"}} src={Barcode} alt="barcode" />
                        ) : (
                            <span></span>
                        )}

                    </Row>
                    <Row>
                        <Col>
                            <Row style={{marginLeft:"1rem"}}>
                                <Col>No. Tanda pengenal</Col>
                                <Col>Nama Pemesan</Col>
                                <Col>No. Handphone</Col>
                                <Col>Email</Col>
                            </Row>
                            <hr style={{margin:"3px 0"}} />
                            <Row className="text-muted" style={{marginLeft:"1rem"}}>
                                <Col>24907104021740</Col>
                                <Col>Isnan</Col>
                                <Col>0823810237</Col>
                                <Col>Isnan@gmail.com</Col>
                            </Row>
                        </Col>
                        {props.status? (<span></span>) : (
                            <Col md="2" className="d-flex align-items-center">
                                <Link to={`/invoice/${props.id}`}><Button className="grad px-3">Bayar Sekarang</Button></Link>  
                            </Col>
                        )}

                    </Row>
            </Container>        
        </div>
    )
}