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
        <NavLink to='/' className='nav-item' end>Home</ NavLink>
        <NavLink to='/products' className='nav-item' end>Products</ NavLink>
        <NavLink to='/contact' className='nav-item' end>Contact</ NavLink>
      </nav>
    </div>
  )
}
