import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import Header from '../shared/Header'
function Login() 
{
    const history = useHistory()
    useEffect(()=> {
        if(localStorage.getItem("user-info"))
        {
            history.push("/allClients")
        }
        // eslint-disable-next-line
    }, [])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function logIn (){
        let item = {email, password}

    let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })

        result = await result.json()
        if(result.user){
            localStorage.setItem('user-info', JSON.stringify(result))
            history.push("/allClients")
        }
        
    }
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <Card>
            <Card.Header><h4>User Login</h4></Card.Header>
                <Form>

                    <Form.Group className="mb-3" controlId="UserEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="userPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>

                    </Form>
                    <Card.Footer>
                    <Button onClick={logIn} variant="primary" type="submit">
                        Log In
                    </Button>
                    </Card.Footer>
                    </Card>
        </div>
        </>
    )
}

export default Login