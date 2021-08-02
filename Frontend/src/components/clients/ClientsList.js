import React, {useState, useEffect} from 'react'
import { Table, Button } from 'react-bootstrap'
import Header from '../shared/Header'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';  


function ClientsList ()
{
    const [data, setData] = useState([])
  
useEffect(() => {
    async function fetchData() {
        getData();
    }
    fetchData();
  }, [])

async function getData(){
    let response = await fetch("http://127.0.0.1:8000/api/clients")
    response = await response.json()
   setData(response) 
}
   async function deleteClient(id){

    let response = await fetch("http://127.0.0.1:8000/api/clients/" + id,{
        method: "DELETE"
    })
    response = await response.json()
    getData()
    toast.success(response.message)

  }
    return (
        <div>
            <Header />
            <ToastContainer /> 
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((client)=>
                            <tr>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.phone}</td>
                                <td>{client.location}</td>
                                <td>
                                <div>
                                    <Link to={"updateClient/"+ client.id}>
                                    <Button variant="primary" size="sm">
                                    Edit
                                    </Button>
                                    </Link>
                                    {' '}
                                    <Button variant="danger" size="sm" onClick={()=>deleteClient(client.id)}>
                                    Delete
                                    </Button>
                                </div>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ClientsList