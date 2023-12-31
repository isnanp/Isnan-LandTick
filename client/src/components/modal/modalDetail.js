import { Modal, Row, Col, Container } from "react-bootstrap"
import Logo from "../../assets/images/trainwhite.png"
import Barcode from "../../assets/images/barcode.png"
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function ModalDetail(props) {
    let { data: transaction } = useQuery(["transactionCache", props.id], async () => {
    const response = await API.get(`/transaction/${props?.id}`);
    console.log("ini modal detail", response)
    return response.data.data;
    });



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
        

            <h2>INVOICE</h2>
            <p className="text-muted">Kode Invoice : INV{transaction?.id}</p>

            <Row>
                <Col>
                    <h3>Kereta Api</h3>
                    <p>Saturday, 21 Febuari 2020</p>
                    <br />
                    <h3>{transaction?.ticket.name_train}</h3>
                    <p>{transaction?.ticket.type_train}</p>
                    <Row>
                        <Col sm="1" className="pt-2">
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem"}}></div>
                            <div style={{borderColor:"pink", borderStyle:"solid", borderWidth:"0 2px 0 0", height:"1.5rem", width:"2px", margin:"3px 0 3px 7px"}}></div>
                            <div style={{borderColor:"pink",borderRadius:"50%", borderStyle:"solid", borderWidth:"2px", width:"1rem", height:"1rem", background:"pink"}}></div>
                        </Col>
                        <Col>
                            <h4>{transaction?.ticket.start_time}</h4>
                            <p className="text-muted">{transaction?.ticket.start_date}</p>
                            <h4>{transaction?.ticket.arrival_time}</h4>
                            <p className="text-muted">{transaction?.ticket.start_date}</p>
                        </Col>
                        <Col>
                            <h4>{transaction?.ticket.start_station.name}</h4>
                            <p className="text-muted">{transaction?.ticket.start_station.kota}</p>
                            <h4>{transaction?.ticket.destination_station.name}</h4>
                            <p className="text-muted">{transaction?.ticket.destination_station.kota}</p>
                        </Col>
                    </Row>

                </Col>
                <Col md="4">
                    <img src={Barcode} alt="barcode" />
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
                <Col>{transaction?.user.fullname}</Col>
                <Col>{transaction?.user.telphone}</Col>
                <Col>{transaction?.user.email}</Col>
            </Row>

            <hr style={{border:"2px solid black"}} />

            <Container fluid className="d-flex align-item-center justify-content-between p-1" style={{backgroundColor:"lightgray"}}>
                <h2>TOTAL</h2>
                <FormatRupiah value={transaction?.price}/>
            </Container>

      </Modal.Body>
      </Modal>
    </>
    )
}