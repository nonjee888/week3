import {Routes, Route} from "react-router-dom"

import Home from '../pages/Home';
import View from '../pages/View';

const Router = () => {
    return (
        <Routes>
            <Route path ="/" exact element={<Home/>}/>
            <Route path ="/view/:id" exact element={<View/>}/>
            <Route path ="*" element={<div>없는 페이지</div>}/>
        </Routes>
    )
}

export default Router;