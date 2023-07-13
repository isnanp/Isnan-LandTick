import { Row, Col } from 'react-bootstrap';
import Arrow from '../assets/images/Arrow 5.png';

export default function TiketList(props) {
    return (
        <div> 
            
                <Row className='border border-1 rounded pt-3 my-3'>
                    <Col>
                    <strong className="fs-5">{props.nama}</strong>    
                    <p style={{fontSize:"0.9rem", color:"grey"}}>{props.kelas}</p>
                    </Col>
                    <Col md="1">
                    <strong className="fs-5">{props.berangkat}</strong>  
                    <p style={{fontSize:"0.9rem", color:"grey"}}>{props.awal}</p>
                    </Col>
                    <Col md="1">
                    <img className='my-auto' src={Arrow} alt='Arrow'/>
                    </Col>
                    <Col>
                    <strong className="fs-5">{props.tiba}</strong> 
                    <p style={{fontSize:"0.9rem", color:"grey"}}>{props.akhir}</p>
                    </Col>
                    <Col>
                    <strong className="fs-5">{props.durasi}</strong> 
                    </Col>
                    <Col>
                    <h5 style={{color:"pink"}}>{props.harga}</h5>
                    </Col>
                </Row>
           

            
        </div>
    )
}