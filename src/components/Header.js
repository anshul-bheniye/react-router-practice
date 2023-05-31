import {Link, NavLink} from 'react-router-dom';
import Logo from '../logo.svg';

export const Header = () => {
  return (
    <div className='header'>
      <Link className='logo' to='/'>
        <img src={Logo} alt="logo" />
        <span>ROuter Navigation</span>
      </Link>
      <nav>
        <NavLink to='/'>Home</ NavLink>
        <NavLink to='/products'>Products</ NavLink>
        <NavLink to='/contact'>Contact</ NavLink>
      </nav>
    </div>
  )
}
