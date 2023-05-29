import './styles.css';
// import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className='container container-sign-in'>
      <div className='sign-in'>
        {/* <img src={Logo} alt='Logo da cubos' /> */}

        <form >
          <input type="text" name="" id="" placeholder='E-mail' />
          <input type="password" name="" id="" placeholder='Password' />
          <span> Não tem cadastro? <Link to="" className='link' >Clique aqui!</Link></span>
          <button className='btn-pink'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
