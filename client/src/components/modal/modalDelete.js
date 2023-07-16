import { Button, Modal } from 'react-bootstrap'
import { useMutation } from 'react-query';
import { API } from '../../config/api';

export default function Konfirmasi(props) {
    
  const Delete = useMutation(async () => {
    try {
      await API.delete(`/transaction-delete/${props.id}`);
      alert(`Successfully deleted`);
      props.onHide()
    } catch (error) {
      console.log(error);
    }
  });
    

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Body className="text-dark">
                <div style={{ fontSize: '20px', fontWeight: '900' }}>
                    HAPUS TRANSAKSI
                </div>
                <div style={{ fontSize: '16px', fontWeight: '500' }} className="mt-2">
                    Apakah anda yakin untuk menghapus transaksi ini?
                </div>
                <div className="text-end mt-5">
                    <Button onClick={() => Delete.mutate()} size="sm" className="btn-success me-2" style={{ width: '135px' }}>Ya</Button>
                    <Button onClick={props.onHide} size="sm" className="btn-danger" style={{ width: '135px' }}>Tidak</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}