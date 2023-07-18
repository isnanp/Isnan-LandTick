import { useState } from "react";
import { Form,FloatingLabel,Button, Container  } from "react-bootstrap";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

export default function TambahTicket() {
    let { data: stations } = useQuery("stationszCache", async () => {
    const response = await API.get("/stations");
    console.log("ini log stations",response.data.data);
    return response.data.data;
    });

    const navigate = useNavigate() 
    const [form, setForm] = useState({
    NameTrain : "" ,     
	TypeTrain : "" , 
	StartDate : "" ,           
	StartTime   : "" ,   
	ArrivalTime : "" ,   
	StartStationID   : "" , 
	DestinationStationID : "" , 
	Price : "" , 
	Qty : "" , 
  });


  const { NameTrain, TypeTrain, StartDate, StartTime, ArrivalTime, StartStationID, DestinationStationID, Price, Qty } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form)

  const handleSubmit = useMutation( async (e) => {
    try {
      e.preventDefault();

        const formData = new FormData();
        formData.set("name_train", form.NameTrain);
        formData.set("type_train", form.TypeTrain);
        formData.set("start_date", form.StartDate);
        formData.set("start_time", form.StartTime);
        formData.set("arrival_time", form.ArrivalTime);
        formData.set("start_station_id", form.StartStationID);
        formData.set("destination_station_id", form.DestinationStationID);
        formData.set("price", form.Price);
        formData.set("qty", form.Qty);

        const response = await API.post("/create-ticket", formData);

        alert("Add ticket Success!");

      console.log("Add ticket Success : ", response);

      setForm({
        NameTrain : "" ,     
        TypeTrain : "" , 
        StartDate : "" ,           
        StartTime   : "" ,   
        ArrivalTime : "" ,   
        StartStationID   : "" , 
        DestinationStationID : "" , 
        Price : "" , 
        Qty : "" , 
      });
      navigate("/list-transaksi")
    } catch (err) {
        alert("Failed to Add Ticket!");      
    }
    
  });
 

    return (
        <Container>
        <h1 className="mt-5 mb-3">Tambah Ticket</h1>
        
        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <FloatingLabel controlId="Nama" label="Nama Kereta" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Nama'
                    value={NameTrain}
                    name='NameTrain'
                    onChange={handleChange}
                    />
            </FloatingLabel>

            <FloatingLabel controlId="Jeniskereta" label="Jenis Kereta" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Jeniskereta'
                    value={TypeTrain}
                    name='TypeTrain'
                    onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="StartDate" label="Tanggal Keberangkatan" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='StartDate'
                    value={StartDate}
                    name='StartDate'
                    onChange={handleChange} />
            </FloatingLabel>
            
            <Form.Select className="mb-3"
            aria-label="Default select example"
            name="StartStationID"
            onChange={handleChange}
            value={StartStationID}>

                <option hidden>Start Station</option>
                {stations?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                        {item?.name}
                    </option>
                ))}

            </Form.Select>

            <FloatingLabel controlId="JamKeberangakatan" label="Jam Keberangakatan" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='date'
                    value={StartTime}
                    name='StartTime'
                    onChange={handleChange}/>
            </FloatingLabel>

            <Form.Select className="mb-3"
            aria-label="Default select example"
            name="DestinationStationID"
            onChange={handleChange}
            value={DestinationStationID}>

                <option hidden>Start Station</option>
                {stations?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                        {item.name} 
                    </option>
                ))}

            </Form.Select>

            <FloatingLabel controlId="JamTiba" label="Jam Tiba" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='JamTiba'
                    value={ArrivalTime}
                    name='ArrivalTime'
                    onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="HargaTicket" label="Harga Tiket" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='HargaTicket'
                    value={Price}
                    name='Price'
                    onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="Qty" label="Qty" className="mb-3">
                <Form.Control
                    type="Text"
                    placeholder="example"
                    controlId='Qty'
                    value={Qty}
                    name='Qty'
                    onChange={handleChange}/>
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