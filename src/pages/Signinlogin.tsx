import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import {useAuth} from '../contexts/authContext';

import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/signinlogin.scss';


export function Signinlogin() {

  const {signed, signIn, user} = useAuth();

  console.log('contexto na singinlogin', signed);
  console.log('contexto na singinlogin', user);

  function handleCreateAccount() { }

  function handleLogin() { 
    signIn();
    console.log('Logar');
  }
 
  function handleToggle(){

  }

  const [showSignLogin, setShowSignLogin] = useState(true);

  const openShowCartPopup = () => {
    setShowSignLogin(prev => !prev);
  }
  

  return (
   <div>
     <div className="hero">
     <Link to="/"><button className="back"> <i className='bx bx-arrow-back' /> Voltar</button></Link>
       <div  className="form-box">
         <h1 className="title">LOGIN</h1>
         <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={openShowCartPopup}>Login</button>
            <button type="button" className="toggle-btn" onClick={openShowCartPopup}>Registrar</button>
          </div> 
         <>
         {showSignLogin ? 
        <>
          <div className="social-icons">
          <img  src={googleIconImg} alt="Logo do google"/>
          Entre com Google
          </div>
          <form id="login" action="" className="input-group">
            <input type="text" className="input-field" placeholder="Nome de usuário" required/>
            <input type="password" className="input-field" placeholder="Senha" required/>
            <button type="submit" className="submit-btn" onClick={handleLogin}>Entrar</button>
          </form>
          </>
           : 
          <form id="register" action="" className="input-group">
            <input type="text" className="input-field" placeholder="Nome de usuário" required/>
            <input type="email" className="input-field" placeholder="E-mail" required/>
            <input type="password" className="input-field" placeholder="Senha" required/>
            <button type="submit" className="submit-btn" onClick={handleLogin}>Registrar-se</button>
          </form>

          }
          </>
       </div>
       
       
     </div>
    </div>
  );
}