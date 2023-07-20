import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { useMutation } from "react-query";

export default function ModalSuccess(props) {
    let price = props.price*props.qty
    console.log("modal sukses",props.id, props.qty, price)
    const navigate = useNavigate()

       const HandleBuy = useMutation(async () => {
        try {
            let qty = parseInt(props.qty)
            const transaction = new FormData()
            transaction.set("ticket_id", props.id)
            transaction.set("qty", qty)
            transaction.set("price", price)
            const response = await API.post("/transaction", transaction);
            navigate(`/ticket/${response.data.data.id}`)
        return response.data.data;
        } catch (error) {
            alert("Transaction error: " + error)
        console.log(error);
        }
        });

    return (
        <>
        <Modal show={props.onShow} onHide={props.onHide}>
        <Modal.Body> 
            <p>Tiket anda berhasil di tambahkan silakan segera melakukan pembayaran 
               <span onClick={() => HandleBuy.mutate()}> <b style={{cursor:"pointer"}}>Klik disini</b></span>
            </p> 
        </Modal.Body>
      </Modal>
        </>
    )
    
}