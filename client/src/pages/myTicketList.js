import Ticket from '../components/ticket'
import Footer from '../components/footer'
import { useQuery } from 'react-query';
import { API } from '../config/api';
import ModalDetail from '../components/modal/modalDetail';
import { useEffect, useState } from 'react';



export default function MyTicketList() {
    let { data: myTransactions } = useQuery("MyTransactionCache", async () => {
    const response = await API.get("/transaction-user");
    console.log("ini log respon myticket",response)
    return response.data.data;
    });

    const [transactions, setTransactions] = useState([])
    const [id, setId] = useState()
    const [showDetail, setShowDetail] = useState(false);
    const handleCloseDetail = () => setShowDetail(false);
    const handleShowDetail = (id) =>  {
        setShowDetail(true)
        setId(id)
    };
    
    useEffect(() =>
    setTransactions(myTransactions)
    ,[myTransactions])

    return (
        <>
         <div className="mt-5 ms-5">
            <h1 className="ms-5">Ticket Saya</h1>
        </div>

        {transactions?.map( transaction => (
            <div onClick={() => handleShowDetail(transaction?.id)} style={{cursor:"pointer"}}>
                <Ticket id={transaction?.id} status={transaction?.status} nama={transaction?.ticket?.name_train} kelas={transaction?.ticket?.type_train} awal={transaction?.ticket?.start_station.name} kotaAwal={transaction?.ticket?.start_station.kota} akhir={transaction?.ticket?.destination_station.name} kotaAkhir={transaction?.ticket?.destination_station.kota} berangkat={transaction?.ticket?.start_time} tiba={transaction?.ticket?.arrival_time} />
            </div>
        ))}
        <Footer />
        
        <ModalDetail id={id} show={showDetail} onHide={handleCloseDetail} />
        </>
    )
}