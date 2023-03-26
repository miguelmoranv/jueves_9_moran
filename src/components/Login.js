import React from 'react';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, FormLabel, FormText } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import FacebookLogin from 'react-facebook-login';

function Login() {

  const [user, setUser] = useState({});
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [picture,setPicture]=useState('')

  const key_login = "394246602625-q0c0d891f2csl7t965v6kqcb1l14o25l.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.Auth2.init({
        clientId: key_login,
      });
    }
    gapi.load("client:auth2", start)
  }, [])

  const logeado_exito = (respuesta_exitosa) => {
    console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
    setUser(respuesta_exitosa.profileObj);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
  }
    const fallo_login = (res) => 
      {
          console.log("FALLO EN EL ACCESO:",res.profileObj);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las credenciales son erroneas',
            footer: '<a href="http://localhost:3000"></a>'
          })
      }
      const responseFacebook = (respuesta_correcta) => {
        console.log(respuesta_correcta);
        setName(respuesta_correcta.name)
        setEmail(respuesta_correcta.email)
        setPicture(respuesta_correcta.picture.data.url)
        Swal.fire({
          icon: 'success',
          title: 'Iniciaste Sesion con Facebook',
        })
        
      }
      const inresponseFacebook = (res) => 
          {
              console.log("FALLO EN EL ACCESO DE FACEBOOK:",res.profileObj);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'fallo en el acceso de FACEBOOK',
              })
          }
  
   return(
      <Container> 
        <center>
        <h2>APP PARCIAL II</h2>
        </center>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className='mb-3' type="checkbox" label="Recuerdame" /><a href=''>¿Olvidaste tu contraseña?</a>
      </Form.Group>
      <center>
      <Button className='mb-3' variant="primary" type="submit">
        Ingresar
      </Button>
      <Form.Group className="mb-3" controlId="formGoogle">
        <Form.Text className='mb-3'>No eres Usuario? <a href=''> Registrate</a></Form.Text>
        <Form.Text className='mb-3'>ingresa con:</Form.Text>
        <GoogleLogin
          clientId={key_login}
          onSuccess={logeado_exito}
          onFailure={fallo_login}
          buttonText="INGRESAR"
          cookiePolicy={"single_host_origin"}
        />
        <FacebookLogin
        onFailure={inresponseFacebook}
        appId="726644022270804"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt=""/>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>           

      </div>
      <div>
        <img src={picture}></img>
        <p>{name}</p>
        <p>{email}</p>
     
      </div>
      </Form.Group>
      </center>
    </Form>  
    </Container>      
   )   
}      
export default Login;