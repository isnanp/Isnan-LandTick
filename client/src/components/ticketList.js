import { Row, Col } from 'react-bootstrap';
import Arrow from '../assets/images/Arrow 5.png';
import { FormatRupiah } from "@arismun/format-rupiah";

export default function TiketList({items}) {
    return (
        <div> 
            
                <Row className='border border-1 rounded pt-3 my-3'>
                    <Col>
                    <strong className="fs-5">{items?.name_train}</strong>    
                    <p style={{fontSize:"0.9rem", color:"grey"}}>{items.type_train}</p>
                    </Col>
                    <Col md="1">
                    <strong className="fs-5">{items?.start_time}</strong>  
                    <p style={{fontSize:"0.9rem", color:"grey"}}>{items?.start_stations.name}</p>
                    </Col>
                    <Col md="1">
                    <img className='my-auto' src={Arrow} alt='Arrow'/>
                    </Col>
                    <Col>
                    <strong className="fs-5">{items?.arrival_time}</strong> 
                    <p style={{fontSize:"0.9rem", color:"grey"}}>{items?.destination_stations.name}</p>
                    </Col>
                    <Col>
                    <strong className="fs-5">5 jam</strong> 
                    </Col>
                    <Col>
                    <FormatRupiah value={items?.price}/>
                    </Col>
                </Row>
           

            
        </div>
    )
}