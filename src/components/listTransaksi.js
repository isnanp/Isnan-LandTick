import { Row, Col, Container, Button } from "react-bootstrap";
import Search  from "../assets/images/search.png";
import Edit from "../assets/images/edit.png";
import Trash from "../assets/images/trash.png";
import { useState } from "react";
import ModalDetail from "./modalDetail";
import ModalStatus from "./modalStatus";


export default function ListTransaksi() {
    const [showDetail, setShowDetail] = useState(false);
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = () =>  setShowDetail(true);

    const [showStatus, setShowStatus] = useState(false);
    const handleCloseStatus = () => setShowStatus(false);
    const handleShowStatus = () =>  setShowStatus(true);

    return (
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
            <Row className="py-3" style={{borderWidth:"2px 0 2px 0", borderStyle:"solid", borderColor:"#C4C4C4"}}>
                <Col>1</Col>
                <Col>Anto</Col>
                <Col>Jakarta - Surabaya</Col>
                <Col> buktiTf.png </Col>
                <Col>Pending</Col>
                <Col>
                    <Button variant="transparent" onClick={handleShowDetail}> <img src={Search} alt="src" />  </Button> 
                    <Button variant="transparent" onClick={handleShowStatus}> <img src={Edit} alt="edit" /> </Button>
                    <Button variant="transparent" > <img src={Trash} alt="trash" /> </Button>
                </Col>
                <ModalDetail show={showDetail} onHide={handleCloseDetail} />
                <ModalStatus show={showStatus} onHide={handleCloseStatus} />
            </Row>
        </Container>

    )
}