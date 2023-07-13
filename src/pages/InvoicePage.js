import InvoiceComp from "../components/invoice";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { Kereta } from "../fakeData/datadummy";

export default function InvoicePage() {
    let p = useParams()
    let i = parseInt(p.id)
    console.log(p.id)

    
    
    let data = Kereta.filter(function(data) { return data.id === i; });
    console.log(data)

    return (
        <>
        {data.map( data => 
            <InvoiceComp key={data.id} id={data.id} nama={data.nama} kelas={data.kelas}  />
            )}
        <Footer />
        </>
    )
}