import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Icon from "../assets/images/iconTicket.png";
import IconForm from "../assets/images/Rounded.png"
import TiketList from "./ticketList";
import ModalSuccess from "./modal/modalSuccess";
import LoginModal from "./modal/modalLogin";
import { useEffect, useState } from "react";
import { UserContext } from "../context/usercontext";
import { useContext } from "react";
import { API } from "../config/api";
import { useMutation, useQuery } from "react-query";

export default function TicketForm() {

    const [state] = useContext(UserContext)
    const [showSuccess, setShowSuccess] = useState(false);

    let { data: stations } = useQuery("stationCache", async () => {
    const response = await API.get("/stations");
    return response.data.data;
    });
    
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
    const [tickets, setTicket] = useState([])

    const [filter, setfilter] = useState({
        startStation : "",
        DestinationStation : "",
        qty : "1",
    })
    
    const OnChangeHandler = (e) => {
    setfilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
    };
    console.log(filter)

    let filtered = useQuery(["filteredCache", filter], async () => {
    const response = await API.get(`/ticket/?start_station_id=${filter.startStation}&destination_station_id=${filter.DestinationStation}`);
    console.log("ini log filter",response.data.data);
    return response.data.data;
    });

    const {data : filteredTicket} = filtered
    
    let {data : nonFiltered} = useQuery("tiketCache", async () => {
    const response = await API.get(`/tickets`);
    console.log("ini log tickets",response.data.data);
    return response.data.data;
    })
    const handleFilter = () => {
        if (filteredTicket?.length > 0) {
        setTicket(filteredTicket)
    } else {
        setTicket(nonFiltered)
    }
    }

    const handleReset = () => {
        setfilter({
            startStation : "",
            DestinationStation : "",
        })
    }
    
    useEffect(() => {
        handleFilter()
    }, [filteredTicket])

    const HandleBuy = useMutation(async (id, price) => {
    try {
        console.log(price)
        let qty = parseInt(filter.qty)
        const transaction = new FormData()
        transaction.set("ticket_id", id)
        transaction.set("qty", qty)
        const response = await API.post("/transaction", transaction);
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
                    <Form.Select className="mb-3" value={filter.startStation} name="startStation" onChange={OnChangeHandler}>
                        <option hidden>Pilih disini</option>
                        {stations?.map((item) => (
                            <option key={item?.id} value={item?.id}>
                                {item?.name}
                            </option>
                        ))}
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
                    <Form.Select className="mb-3" value={filter.DestinationStation} name="DestinationStation" onChange={OnChangeHandler}>
                        <option hidden>pilih disini</option>
                        {stations?.map((item) => (
                            <option key={item?.id} value={item?.id}>
                                {item?.name}
                            </option>
                        ))}
                    </Form.Select>
                    <Row>
                        <Col>
                            <h5>Dewasa</h5>
                                <Form.Select className="mb-3" value={filter.qty} name="qty" onChange={OnChangeHandler}>
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
                            <Button className="mt-4 grad" onClick={handleReset}>Reset Filter</Button>
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
                
                
                    {tickets?.map((d) => 
                    <div key={d.id} onChange={console.log(d.price)} onClick={state.isLogin ? (() => {HandleBuy.mutate(d.id, d.price)}):(handleShowLogin)} style={{cursor:"pointer"}}>
                       <TiketList items={d} />
                    </div>
                    )}
                
                    

                    <ModalSuccess onShow={showSuccess} index={ticketSelected} onHide={handleCloseSuccess} />
                    <LoginModal show={showLogin} onHide={handleCloseLogin} onClick={handleShowRegister} />
                    
            </Container>
            </>
    )
}