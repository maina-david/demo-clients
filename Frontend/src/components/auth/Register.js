import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import Header from '../shared/Header'
function Register() 
{
    const history = useHistory()
    useEffect(()=> {
        if(localStorage.getItem("user-info"))
        {
            history.push("/allClients")
        }
        // eslint-disable-next-line
    }, [])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setpassword_confirmation] = useState("")

    async function signUp (){
        let item = {name, email, password, password_confirmation}

    let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        localStorage.setItem('user-info', JSON.stringify(result))
        history.push("/allClients")
    }
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <Card>
            <Card.Header><h4>User Registration</h4></Card.Header>
                <Form>
                <Form.Group className="mb-3" controlId="UserName">
                        <Form.Label>Full Names</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="UserEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userCPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" value={password_confirmation} onChange={(e)=>setpassword_confirmation(e.target.value)} placeholder="Password" />
                    </Form.Group>

                    </Form>
                    <Card.Footer>
                    <Button onClick={signUp} variant="primary" type="submit">
                        Submit
                    </Button>
                    </Card.Footer>
                    </Card>
        </div>
        </>
    )
}

export default Register