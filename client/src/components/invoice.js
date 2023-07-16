import { Container, Row, Col, Button, } from "react-bootstrap"
import ErrorIMG from "../assets/images/error.png"
import Qr from "../assets/images/qr-code.png"
import Logo from "../assets/images/trainwhite.png"
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import { API } from "../config/api"

export default function InvoiceComp(props) {
	let { data: user } = useQuery("stationsCache", async () => {
    const response = await API.get("/user");
	console.log("respon user invoice", response)
    return response.data.data;
    });


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
                            <Col>{user?.fullname}</Col>
                            <Col>{user?.telphone}</Col>
                            <Col>{user?.email}</Col>
                        </Row>
                </Container>

				<Row className="mt-4">
					<Col>
						<h1>Rincian Harga</h1>
						<Container className="border border-1 shadow">
							<Row className="p-3">
								<Col>{props?.name_train} x 1 </Col>
								<Col>{props?.priceTicket}</Col>
							</Row>
							<Row className="p-3" style={{backgroundColor:"#E6E6E6"}}>
								<Col>Total</Col>
								<Col>{props?.priceTransaction}</Col>
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
							<p>{props?.start_date}</p>
							</Col>
							<Col md="4" className="d-flex align-items-center">
								<img src={Qr} alt="qr" />
							</Col>
						</Row>
						<div>
						<h4>{props?.name_train}</h4>
						<p>{props?.type_train}</p>
						<Row>
							<Col md="1">
								<div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem"}}></div>
								<div style={{borderColor:"pink", borderStyle:"solid", borderWidth:"0 2px 0 0", height:"4.7rem", width:"2px", margin:"3px 0 3px 7px"}}></div>
								<div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem", background:"pink"}}></div>
							</Col>
							<Col>
								<h5>{props?.start_time}</h5>
								<p>{props?.start_date}</p>
								<br />
								<h5>{props.arrival_time}</h5>
								<p>{props?.start_date}</p>
							</Col>
							<Col>
								<h5>{props?.start_town}</h5>
								<p>{props?.start_station}</p>
								<br />
								<h5>{props?.arrival_town}</h5>
								<p>{props?.arrival_station}</p>
							</Col>
						</Row>
						</div>
					</Container>
                </Col>
            </Row>
        </Container>
    )
}