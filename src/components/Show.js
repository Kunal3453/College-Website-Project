import React from "react"
import {useLocation} from 'react-router-dom';

function Show (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1 className="text-2xl text-red-500 ">Hello {location.state.id} and welcome to the JUA Family</h1>

        </div>
    )
}

export default Show;