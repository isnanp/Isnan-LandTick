import Ticket from '../components/ticket'
import Footer from '../components/footer'
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import { API } from '../config/api';


export default function TicketDetail() {
    
    let p = useParams()
    let i = parseInt(p.id)
    let status = false
    let { data: transaction } = useQuery("ticketCache", async () => {
    const response = await API.get(`/transaction/${i}`);
    console.log(response)
    return response.data.data;
    });


    // if (ticket.status === "pending") {
    //     status = false;
    // } else {
    //     status = true;
    // }

    return (
        <>
            <Ticket id={transaction?.id} status={status} nama={transaction?.ticket?.name_train} kelas={transaction?.ticket?.type_train} awal={transaction?.ticket?.start_station.name} kotaAwal={transaction?.ticket?.start_station.kota} akhir={transaction?.ticket?.destination_station.name} kotaAkhir={transaction?.ticket?.destination_station.kota} berangkat={transaction?.ticket?.start_time} tiba={transaction?.ticket?.arrival_time} />
            <Footer />
        </>
    )
}