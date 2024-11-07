import { Routes, Route, Navigate } from 'react-router-dom';



const AllRoutes = () =>{
    return(
        <Routes >
            {/* <Route exact key="" path="/" element={</>}/> */}
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    )
};

export default AllRoutes;