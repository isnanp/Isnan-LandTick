import InvoiceComp from "../components/invoice";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { Kereta } from "../fakeData/datadummy";
import { useQueries, useQuery } from "react-query";
import { API } from "../config/api";

export default function InvoicePage() {
    let p = useParams()
    let i = parseInt(p.id)
    let { data: transaction } = useQuery("ticketCache", async () => {
    const response = await API.get(`/transaction/${i}`);
    console.log(response)
    return response.data.data;
    });

    

    return (
        <>
            <InvoiceComp key={transaction?.id} id={transaction?.id} name_train={transaction?.ticket.name_train} type_train={transaction?.ticket.type_train} qty={transaction?.qty} priceTicket={transaction?.ticket.price} priceTransaction={transaction?.price} start_date={transaction?.ticket.start_date} start_time={transaction?.ticket.start_time} arrival_time={transaction?.ticket.arrival_time} start_town={transaction?.ticket.start_station.kota} start_station={transaction?.ticket.start_station.name} arrival_town={transaction?.ticket.destination_station.kota} arrival_station={transaction?.ticket.destination_station.name} />
        <Footer />
        </>
    )
}