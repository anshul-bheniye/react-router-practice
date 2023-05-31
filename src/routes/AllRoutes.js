import {Routes, Route, Navigate} from 'react-router-dom';
import {Home, Admin, Product, ProductList, Contact, In, Global, AccessDenied, PageNotFound} from '../pages';

export const AllRoutes = () => {
    const user = false;
  return (
    <div className='main'>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='products' element={<Product />}></Route>
            <Route path='admin' element={user ? <Admin /> : <Navigate to='/accessdenied'/>}></Route>
            <Route path='contact' element={<Contact />}>
              <Route path='in' element={<In/>} />
              <Route path='*' element={<Global/>} />
            </Route>
            <Route path='productList' element={<ProductList />}></Route>
            <Route path='accessdenied' element={<AccessDenied/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}
