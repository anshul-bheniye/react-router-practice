import {Routes, Route, Navigate} from 'react-router-dom';
import {Home} from '../components/Home';
import {Product} from '../components/Product';
import {Admin} from '../components/Admin';
import {ProductList} from '../components/ProductList';
import {PageNotFound} from '../components/PageNotFound';
import {Contact} from '../components/Contact';

 
export const Main = () => {

    const user = false;
  return (
    <div className='main'>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='products' element={<Product />}></Route>
            <Route path='/admin' element={user ? <Admin /> : <Navigate to='pagenotfound'/>}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='productList' element={<ProductList />}></Route>
            <Route path='pagenotfound' element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}