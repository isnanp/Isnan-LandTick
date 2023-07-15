import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ModalSuccess(props) {
    console.log(props.index)
    return (
        <>
        <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Body> 
            <p>Tiket anda berhasil di tambahkan silakan segera melakukan pembayaran 
               <Link to={`/ticket/${props.index}`}>Klik disini</Link>
            </p> 
        </Modal.Body>
      </Modal>
        </>
    )
    
}