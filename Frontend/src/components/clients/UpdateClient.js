import React, {useState, useEffect} from 'react'
import Header from '../shared/Header'
import {withRouter, useHistory} from 'react-router-dom'
import {Card, Form, Button} from 'react-bootstrap'

function UpdateClient(props) 
{
    const { match: { params } } = props;
    const [data, setData] = useState([])

    const history = useHistory()
    const [name, setName] = useState(data.name)
    const [phone, setPhone] = useState(data.phone)
    const [location, setLocation] = useState(data.location)

    useEffect(() => {
        async function fetchData() {
            let result = await fetch("http://127.0.0.1:8000/api/clients/"+params.clientId)
            result = await result.json()
            setData(result)
        }
        fetchData()
      }, [params.clientId])

    async function updateClient (){
        let item = {name, phone, location}

    let result = await fetch("http://127.0.0.1:8000/api/clients/"+params.clientId, {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        console.log("result", result)
        history.push("/allClients")
    }

    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <Card>
            <Card.Header><h4>Update Client</h4></Card.Header>
                <Form>
                <Form.Group className="mb-3" controlId="UserName">
                        <Form.Label>Full Names</Form.Label>
                        <Form.Control type="text" defaultValue={data.name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="UserPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" defaultValue={data.phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone no." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" defaultValue={data.location} onChange={(e)=>setLocation(e.target.value)} placeholder="Location" />
                    </Form.Group>

                    </Form>
                    <Card.Footer>
                    <Button onClick={updateClient} variant="primary" type="submit">
                        Update
                    </Button>
                    </Card.Footer>
                    </Card>
        </div>
        </>
    )
}

export default withRouter(UpdateClient)