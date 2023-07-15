import {Container, Row, Col} from 'react-bootstrap'
import Iklan from '../assets/images/iklan.png'

export default function JumbotronPage() {
    return (
        <>
        <Container fluid className='gradJumbotron' style={{height:"19rem"}}>
            <Row>
            <Col className='p-5 d-flex justify-content-end'>
                <div style={{width:"fit-content"}}>
                <h1 className='text-white'>Selamat Pagi, Ticket Seekers !</h1>
                <h5 className='text-white'>Ingin Pulkam dengan Good Deal ?</h5>
                <h5 className='text-white'>Masuk atau Daftar Sekarang ! !</h5>
                </div>
            </Col>
            <Col className='p-4'> 
                <img src={Iklan} alt='iklan' />
            </Col>
            </Row>
        </Container>
        </>
    )
}