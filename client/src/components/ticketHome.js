import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Icon from "../assets/images/iconTicket.png";
import IconForm from "../assets/images/Rounded.png"
import TiketList from "./ticketList";
import ModalSuccess from "./modal/modalSuccess";
import LoginModal from "./modal/modalLogin";
import { useState } from "react";
import { UserContext } from "../context/usercontext";
import { useContext } from "react";
import { API } from "../config/api";
import { useMutation, useQuery } from "react-query";

export default function TicketForm() {
    let { data: tickets } = useQuery("tickets", async () => {
    const response = await API.get("/tickets");
    return response.data.data;
    });

    const [state] = useContext(UserContext)
    const [showSuccess, setShowSuccess] = useState(false);

    const handleCloseSuccess = () => {setShowSuccess(false)}
    const [ticketSelected, setTiketSelected] = useState()
    const handleShowSuccess = (a) => {
        setShowSuccess(true);
        setTiketSelected(a)
    }

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin= () => {
        handleCloseRegister(false);
        setShowLogin(true);
    }
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => {
        handleCloseLogin(false);
        setShowRegister(true);
    }



    const HandleBuy = useMutation(async (id) => {
    try {
        const id_ticket = new FormData()
        id_ticket.set("ticket_id", id)
        console.log(id)
        const response = await API.post("/transaction", id_ticket);
        handleShowSuccess(response.data.data.id)
        
        return response.data.data;
    } catch (error) {
        alert("Transaction error: " + error)
      console.log(error);
    }
  });

//   console.log("COBA GET ID: ", tickets[1].id)

    return (
        <>
        <Row className="mx-auto shadow rounded" style={{width:"80%", marginTop:"-1.8rem", backgroundColor:"white"}}>
        <Col sm="3" style={{backgroundColor:"#F2F2F2", padding:"0", borderRadius:"10px 0 0 10px"}}>
        <Container fluid className="my-3 d-flex align-items-center activeFormTicket bg-white">
            <img src={Icon} alt="icon" style={{objectFit:"cover", fontSize: "1.125rem"}}/>
            <h4 className="mt-2 ms-2">Ticket Kereta Api</h4>
        </Container>
        </Col>

        <Col className="p-3">
            <h3>Tiket Kereta Api</h3>
            <Form>
            <Row>
                <Col>
                    <h5>Asal</h5>
                    <Form.Select className="mb-3">
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Jogja">Jogja</option>
                    </Form.Select>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3">
                            <Form.Label className="h5">Tanggal Berangkat</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        </Col>
                        <Col>
                            <div>
                            <input id="PP" type="checkbox" style={{transform:"scale(1.5)", marginRight:"1rem"}}/>
                            <label for="PP" className="h5">Pulang Pergi?</label>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm="1">
                    <img src={IconForm} alt="icon"></img>
                </Col>
                <Col>
                    <h5>Tujuan</h5>
                    <Form.Select className="mb-3">
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Jogja">Jogja</option>
                    </Form.Select>
                    <Row>
                        <Col>
                            <h5>Dewasa</h5>
                                <Form.Select className="mb-3">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <h5>Bayi</h5>
                                <Form.Select className="mb-3">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Col>
                        <Col >
                            <Button className="mt-4 grad">Cari Tiket</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Form>
        </Col>
        </Row>
        
            <Container className='w-75 my-5'>
                <Row className=''>
                        <Col> Nama Kereta </Col>
                        <Col md="1">Berangkat</Col>
                        <Col md="1"></Col>
                        <Col>Tiba</Col>
                        <Col>Durasi</Col>
                        <Col>Harga Per Orang</Col>
                    </Row>
                
                { state?.isLogin ? (
                    tickets?.map((d) => 
                    <div key={d.id} onClick={() => HandleBuy.mutate(d.id)} style={{cursor:"pointer"}}>
                        <TiketList items={d} />
                    </div>
                    
                    )
                ) : (
                    tickets?.map((d) => 
                    <div key={d.id} onClick={handleShowLogin} style={{cursor:"pointer"}}>
                       <TiketList items={d} />
                    </div>
                ))}
                
                    

                    <ModalSuccess onShow={showSuccess} index={ticketSelected} onHide={handleCloseSuccess} />
                    <LoginModal show={showLogin} onHide={handleCloseLogin} onClick={handleShowRegister} />
                    
            </Container>
            </>
    )
}