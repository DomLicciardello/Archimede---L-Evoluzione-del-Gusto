import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/admin/login/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log(res);
            alert("Credenziali d'accesso errate!");
          }
        })
        .then((data) => {
          //console.log(data)
          localStorage.setItem("token", data.token);
          alert("Accesso effettuato!");
          navigate("/areariservata");
        })
        .catch((err) => {
          alert("Si è verificato un errore! " + err);
        });
      };

  return (
    <>
    <div
    style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'200px',
    }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control name='username' type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
              <Button variant="dark" type="submit">
                Accedi
             </Button>
            </Form>
    </div>
    </>
  )
}