import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import Header from '../shared/Header'

function AddClient() 
{
    const history = useHistory()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")

    async function addClient (){
        let item = {name, phone, location}

    let result = await fetch("http://127.0.0.1:8000/api/clients", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        console.warn(result)
        history.push("/allClients")
    }
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <Card>
            <Card.Header><h4>Add new client</h4></Card.Header>
                <Form>
                <Form.Group className="mb-3" controlId="UserName">
                        <Form.Label>Full Names</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="UserPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone no." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Location" />
                    </Form.Group>

                    </Form>
                    <Card.Footer>
                    <Button onClick={addClient} variant="primary" type="submit">
                        Submit
                    </Button>
                    </Card.Footer>
                    </Card>
        </div>
        </>
    )
}

export default AddClient