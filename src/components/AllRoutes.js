import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Contact';




const AllRoutes = () =>{
    return(
        <Routes >
            {/* <Route exact key="" path="/" element={</>}/> */}
            {/* <Route exact key="about" path="/about" element={<About/>}/> */}
            <Route exact key="contact" path="/contact" element={<Contact/>}/>
            {/* <Route exact key="cart" path="/cart" element={<Cart/>}/> */}
            {/* <Route exact key="shop" path="/shop" element={<Shop/>}/> */}
            {/* <Route exact key="home" path="/" element={<Home/>}/> */}
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    )
};

export default AllRoutes;