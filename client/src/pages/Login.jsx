import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [registerLogin, setRegisterLogin] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        axios.post("http://localhost:5000/login", {
            username: username,
            password: password,
        }).then((res) => {
            if(res.data.message){
                setLoginStatus(res.data.message);
            } 
            else{
                setLoginStatus(`Ingreso satisfactorio ${res.data[0].username}`);
            }
        });
    };

    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card mt-5'>
                        <div className='card-header'>
                            <h2 className='text-center'>Inicio de Sesión</h2>
                        </div>
                        <div className='card-body'>
                            <div className='col'>
                            <input type="text" className='form-control' placeholder="usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className='col'>
                            <input type="password" className='form-control mt-3' placeholder="contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>

                            </div>
                            <button type="submit" className='btn btn-outline-primary form-control mt-3' onClick={login}>Ingresar</button>
                        </div>
                        <div className='card-footer'>
                            <h3>{loginStatus}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

