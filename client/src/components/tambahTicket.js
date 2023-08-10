import { useState } from "react";
import { Form,FloatingLabel,Button, Container, FormLabel  } from "react-bootstrap";
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
    Name : "" ,     
	City : "" , 
	Address : "" ,           
	Price   : "" ,   
	Type : "" ,   
	Amenity   : "" , 
	Bedrooms : "" , 
	Bathrooms : "" , 
	Description : "" , 
    Image : "" , 
  });


  const { Name, City, Address, Price, Type, Amenity, Bedrooms, Bathrooms, Description, Image } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 

    return (
        <Container>
        <h1 className="mt-5 mb-3">Tambah Ticket</h1>
        
        <Form >
            <FloatingLabel controlId="Name" label="Name Property" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Name'
                    value={Name}
                    name='Name'
                    onChange={handleChange}
                    />
            </FloatingLabel>

            <FloatingLabel controlId="City" label="City" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='City'
                    value={City}
                    name='City'
                    onChange={handleChange}/>
            </FloatingLabel>

            <FloatingLabel controlId="Address" label="Address" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="example"
                    controlId='Address'
                    value={Address}
                    name='Address'
                    onChange={handleChange} />
            </FloatingLabel>
            
            <FormLabel>
            <Form.Select className="mb-3"
            aria-label="Default select example"
            name="Type of Rent"
            onChange={handleChange}
            value={Bedrooms}>
                    <option value="Days"> Days </option>
                    <option value="Months"> Months </option>
                    <option value="Years"> Years </option>
            </Form.Select>
            </FormLabel>
            
            <Form.Select className="mb-3"
            aria-label="Default select example"
            name="Bedroom"
            onChange={handleChange}
            value={Bedrooms}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
            </Form.Select>

            <Form.Select className="mb-3"
            aria-label="Default select example"
            name="Bathroom"
            onChange={handleChange}
            value={Bathrooms}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
            </Form.Select>

            

            <div className="d-flex justify-content-center my-5">
            <Button type="submit" className="w-50 rounded bg-success mx-auto">
                Submit
            </Button>
            </div>
          </Form>
        </Container>
    )
}