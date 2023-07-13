import { Form,FloatingLabel,Button, Container  } from "react-bootstrap";

export default function TambahTicket() {
    return (
        <Container>
        <h1 className="mt-5 mb-3">Tambah Ticket</h1>
        
        <Form>
            <FloatingLabel controlId="Nama" label="Nama Kereta" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Nama'
                    name='Nama'/>
            </FloatingLabel>

            <FloatingLabel controlId="Jeniskereta" label="Jenis Kereta" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Jeniskereta'
                    name='Jeniskereta'/>
            </FloatingLabel>

            <label htmlFor="date">Tanggal Keberangkatan</label>
            <Form.Control className="mb-3" type="date" placeholder="example" controlId='date' name='TanggalKeberangkatan'/>
            <FloatingLabel controlId="StasiunAwal" label="Stasiun Keberangkatan" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='StasiunAwal'
                    name='StasiunKeberangkatan'/>
            </FloatingLabel>

            <FloatingLabel controlId="JamKeberangakatan" label="Jam Keberangakatan" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='date'
                    name='JamKeberangkatan'/>
            </FloatingLabel>

            <FloatingLabel controlId="StasiunTujuan" label="Stasiun Tujuan" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='StasiunTujuan'
                    name='StasiunTujuan'/>
            </FloatingLabel>

            <FloatingLabel controlId="JamTiba" label="Jam Tiba" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='JamTiba'
                    name='JamTiba'/>
            </FloatingLabel>

            <FloatingLabel controlId="HargaTicket" label="Harga Tiket" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='HargaTicket'
                    name='HargaTicket'/>
            </FloatingLabel>

            <FloatingLabel controlId="Qty" label="Qty" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='Qty'/>
            </FloatingLabel>

            <div className="d-flex justify-content-center my-5">
            <Button type="submit" className="w-50 rounded bg-success mx-auto">
                Submit
            </Button>
            </div>
          </Form>
        </Container>
    )
}