import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import elementsLogin from '../elements/login/elementsLogin'

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [registerLogin, setRegisterLogin] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const login = async() => {
        await axios.post("http://localhost:5000/login", {
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
                <div className='col-8 mt-5'>
                    <h1>Shop</h1>
                    <p>Shop es una tienda en linea la cual te ayuda a adquirir tus articulos <br /> favoritos en corto tiempo y sin salir de la comodidad de tu hogar</p>
                </div>
                <div className='col-4'>
                    <div className='card mt-5'>
                        <div className='card-body'>
                            <div className='col'>
                            <input type="text" className='form-control' placeholder="Correo electronico" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className='col'>
                            <input type="password" className='form-control mt-3' placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className='btn btn-primary form-control mt-3' onClick={login}>Iniciar sesión</button>
                            <Link className='' to='/'>¿Olvidaste tu contraseña?</Link>
                            <hr />
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#register">Crear cuenta nueva</button>
                        </div>
                        <div className='card-footer'>
                            <h5 className='text-center'>{loginStatus}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="register" tabindex="-1" aria-labelledby="register" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="register">Registrate</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                    <div className='row'>
                        <div className='col-md-6 mt-2'>
                            <input type='text' className='form-control' placeholder='Nombre' required></input>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <input type='text' className='form-control' placeholder='Apellido' required></input>
                        </div>
                        <div className='col-md-12 mt-2'>
                            <input type='email' className='form-control' placeholder='Correo electronico' required></input>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <input type='password' className='form-control' placeholder='Contraseña' required></input>
                        </div>
                        <div className='col-md-6 mt-2'>
                            <select className='form-select' required>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        <div className='col-md-4 mt-2'>
                            <select className='form-select' required>
                                {elementsLogin.day.map((item, index) => {
                                    return(
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='col-md-4 mt-2'>
                            <select className='form-select' required>
                                {elementsLogin.month.map((item, index) => {
                                    return(
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className='col-md-4 mt-2'>
                            <select className='form-select' required>
                                {elementsLogin.year.map((item, index) => {
                                    return(
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='col mt-3'>
                      <button type="button" class="btn btn-success form-control">Registrarte</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

