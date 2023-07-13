import { Container, Row, Col, Button, } from "react-bootstrap"
import ErrorIMG from "../assets/images/error.png"
import Qr from "../assets/images/qr-code.png"
import Logo from "../assets/images/trainwhite.png"
import { Link } from "react-router-dom"

export default function InvoiceComp(props) {
	
    return (
        <Container className="p-4">
            <h1>Invoice</h1>
            <Row>
                <Col className="pe-5">
                <Container className="rounded mb-3 shadow py-3" style={{backgroundColor:"#EEE"}}>
                    <Row>
                        <Col md="2" className="d-flex align-items-center justify-content-center">
                            <img src={ErrorIMG} alt="Error" />
                        </Col>
                        <Col className="pe-5">
                            <p>Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke No.rek Yang Tertera.</p>
                             <p>No.rek : 09812312312</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="shadow pb-3" style={{border: "1px solid #B7B7B7", borderRadius:"5px", padding:"0"}}>
                    <div className="grad " style={{width:"10rem", padding:"8px", height:"3rem", borderRadius:"5px 0 50px 0"}}>
                        <div className="d-flex align-items-center"  style={{marginTop:"auto", marginBottom:"auto"}}>
                            <h5 className="text-white logoText">LandTick</h5>  
                            <img style={{paddingLeft:"3px", marginBottom:"18px"}} src={Logo} alt="logo" />
                        </div>
                    </div>
					<Row className="pt-3 ms-3">
                            <Col>No. Tanda pengenal</Col>
                            <Col>Nama Pemesan</Col>
                            <Col>No. Handphone</Col>
                            <Col>Email</Col>
                        </Row>
                        <hr style={{margin:"3px 0"}} />
                        <Row className="text-muted ms-3">
                            <Col>24907104021740</Col>
                            <Col>Isnan</Col>
                            <Col>0823810237</Col>
                            <Col>Isnan@gmail.com</Col>
                        </Row>
                </Container>

				<Row className="mt-4">
					<Col>
						<h1>Rincian Harga</h1>
						<Container className="border border-1 shadow">
							<Row className="p-3">
								<Col>Argo Wilis(Dewasa) x 1 </Col>
								<Col>Rp.250.000</Col>
							</Row>
							<Row className="p-3" style={{backgroundColor:"#E6E6E6"}}>
								<Col>Total</Col>
								<Col>Rp.250.000</Col>
							</Row>
						</Container>
						<Link to={`/myticket/${props.id}`}>
						<Button className="my-4 grad shadow" style={{width:"100%"}}>Bayar Sekarang</Button>
						</Link>
					</Col>
				</Row>

                </Col>	
                <Col xs="4" >
					<Container className="rounded shadow" style={{backgroundColor:"#F5F5F5", margin:"0"}}>
						<Row className="p-3 mb-2 rounded-top" style={{backgroundColor:"#D0D0D0"}}>
							<Col>
							<h1>Kereta api</h1>
							<p>Saturday, 21 Febuari 2020</p>
							</Col>
							<Col md="4" className="d-flex align-items-center">
								<img src={Qr} alt="qr" />
							</Col>
						</Row>
						<div>
						<h4>{props?.nama}</h4>
						<p>{props?.kelas}</p>
						<Row>
							<Col md="1">
								<div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem"}}></div>
								<div style={{borderColor:"pink", borderStyle:"solid", borderWidth:"0 2px 0 0", height:"4.7rem", width:"2px", margin:"3px 0 3px 7px"}}></div>
								<div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem", background:"pink"}}></div>
							</Col>
							<Col>
								<h5>05.00</h5>
								<p>21 feb</p>
								<br />
								<h5>10.05</h5>
								<p>21 feb</p>
							</Col>
							<Col>
								<h5>Jakarta(GMR)</h5>
								<p>Stasiun Gambir</p>
								<br />
								<h5>Surabaya (SBY)</h5>
								<p>Stasiun Surabaya</p>
							</Col>
						</Row>
						</div>
					</Container>
                </Col>
            </Row>
        </Container>
    )
}