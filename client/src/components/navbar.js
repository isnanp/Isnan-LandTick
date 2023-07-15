import {Navbar, Nav, Container, Button, Dropdown, ButtonGroup} from "react-bootstrap"
import { useState, useContext } from "react"

import { UserContext } from "../context/usercontext"
import LoginModal from "./modal/modalLogin"
import Register from "./modal/modalRegister"
import Img from "../assets/images/logo.png"
import Logout from "../assets/images/logout 1.png"
import Bill from "../assets/images/bill 1.png"
import TicketICon from "../assets/images/ticketIcon.png"
import TambahTicket from "../assets/images/TambahTicket.png"
import { Link } from "react-router-dom"


export default function NavbarPage() {
    

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

    
    
     const [state, dispatch] = useContext(UserContext)
     const logout = () => {
        dispatch({
          type: "LOGOUT",
        });
     }
    
 

    return (
        <div>
            <Navbar expand="lg" className="bg-body-white shadow-sm">
                <Container>
                    <Link style={{textDecoration:"none"}} to="/">
                        <h4 className="logoText" > Land Tick <img src={Img} alt="icon" style={{height:"2rem"}} /> </h4>
                    </Link>
                    
                        {state.user.role === "admin" ? (
                            <Dropdown as={ButtonGroup}>
                                <Button className="grad">{state.user.username}</Button>

                                <Dropdown.Toggle split className="grad" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Link to="/tambah-ticket" style={{textDecoration:"none"}}>
                                    <Dropdown.Item href="#/action-2"> <img src={TambahTicket} alt="bill" style={{height:"1rem", paddingRight:"3px"}} /> Tambah Ticket</Dropdown.Item>
                                    </Link>
                                    <Dropdown.Item style={{borderTop:"2px solid pink"}} onClick={logout}> <img style={{height:"1rem", paddingRight:"3px"}} src={Logout} alt="logout" />Logout</Dropdown.Item> 
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : state.isLogin ? (
                            <Dropdown as={ButtonGroup}>
                                <Button className="grad">{state.user.username}</Button>

                                <Dropdown.Toggle split className="grad" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Link to="/ticket/0" style={{textDecoration:"none"}}>
                                    <Dropdown.Item href="#/action-1"> <img src={TicketICon} alt="bill" style={{height:"1rem", paddingRight:"3px"}} /> Tiket Saya</Dropdown.Item>
                                    </Link>
                                    <Link to="/invoice" style={{textDecoration:"none"}}>
                                    <Dropdown.Item href="#/action-2"> <img src={Bill} alt="bill" style={{height:"1rem", paddingRight:"3px"}} /> Payment</Dropdown.Item>
                                    </Link>
                                    <Dropdown.Item style={{borderTop:"2px solid pink"}} onClick={logout}> <img style={{height:"1rem", paddingRight:"3px"}} src={Logout} alt="logout" />Logout</Dropdown.Item> 
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : ( 
                        <Nav>
                            <Button onClick={handleShowRegister} variant="transparent" style={{color:"pink", borderColor:"pink", borderWidth:"3px", width:"6rem", marginRight:"1rem"}}>Daftar</Button>
                            <Button onClick={handleShowLogin} className="grad" style={{width:"6rem" }}>Login</Button>
                        </Nav>
                        )}
                        

        
                </Container>
            </Navbar>
            <LoginModal show={showLogin} onHide={handleCloseLogin} onClick={handleShowRegister} />
            <Register show={showRegister} onHide={handleCloseRegister} onClick={handleShowLogin} />
        </div>
        
    )

}