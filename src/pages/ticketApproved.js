import Ticket from '../components/ticket'
import Footer from '../components/footer'
import { useParams } from "react-router-dom";
import { Kereta } from '../fakeData/datadummy';


export default function TicketDetail() {
    
    let p = useParams()
    let i = parseInt(p.id)
    console.log(p.id)
    let status = true
    
    
    let data = Kereta.filter(function(data) { return data.id === i; });
    console.log(data)

    return (
        <>
        {data.map( data => (
            <>
            <Ticket id={data.id} status={status} nama={data.nama} kelas={data.kelas} awal={data.awal} kotaAwal={data.kotaAwal} akhir={data.akhir} kotaAkhir={data.kotaAkhir} berangkat={data.berangkat} tiba={data.tiba} />
            <Footer />
            </>
        ))}
        </>
    )
}