import { Row, Col, Container, Button } from "react-bootstrap";
import Search  from "../assets/images/search.png";
import Edit from "../assets/images/edit.png";
import Trash from "../assets/images/trash.png";
import { useState } from "react";
import ModalDetail from "../components/modal/modalDetail";
import ModalStatus from "../components/modal/modalStatus";
import Footer from "../components/footer";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Konfirmasi from "../components/modal/modalDelete";

export default function ListTransaksiPage() {
    const [transactionID, setTransactionID] = useState();

    const [showDetail, setShowDetail] = useState(false);
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = () =>  setShowDetail(true);

    const [showStatus, setShowStatus] = useState(false);
    const handleCloseStatus = () => setShowStatus(false);
    const handleShowStatus = () =>  setShowStatus(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    let { data: Transaction } = useQuery("transactionCache", async () => {
    const response = await API.get("/transactions");
    console.log(response.data.data);
    return response.data.data;
    });

    return (
        <>
            <Container className="m-5">
            <h1 className="mt-3 mb-5"><b>List Transaksi</b></h1>
            <Row className="mb-3">
                <Col>No.</Col>
                <Col>Users</Col>
                <Col>Ticket</Col>
                <Col>Bukti Transfer</Col>
                <Col>Status Payment</Col>
                <Col>Action</Col>
            </Row>

            {Transaction?.map((data, i) => (
            <Row className="py-3" style={{borderWidth:"2px 0 2px 0", borderStyle:"solid", borderColor:"#C4C4C4"}}>
                <Col>{i + 1}</Col>
                <Col>{data?.user.fullname}</Col>
                <Col>{data?.ticket.start_station.name} - {data?.ticket.destination_station.name}</Col>
                <Col> buktiTf.png </Col>
                <Col>{data?.status}</Col>
                <Col>
                    <Button variant="transparent" onClick={() => {handleShowDetail(); setTransactionID(data.id)}}> <img src={Search} alt="src" />  </Button> 
                    <Button variant="transparent" onClick={() => {handleShowStatus(); setTransactionID(data.id)}}> <img src={Edit} alt="edit" /> </Button>
                    <Button variant="transparent" onClick={() => {handleShowDelete(); setTransactionID(data.id)}}> <img src={Trash} alt="trash" /> </Button>
                </Col>
            </Row>
            ))}

                <ModalDetail id={transactionID} show={showDetail} onHide={handleCloseDetail} />
                <ModalStatus id={transactionID} show={showStatus} onHide={handleCloseStatus} />
                <Konfirmasi id={transactionID} show={showDelete} onHide={handleCloseDelete} />
        </Container>

            <Footer />
        
        </>
    )
}