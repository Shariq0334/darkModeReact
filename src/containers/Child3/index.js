import { useContext } from 'react'
import Theme from '../../context';
import { MyContext } from '../../context'
import PROFILE from '../../assets/profile.jpeg'
import { useState } from 'react';



function Child3() {
    const user = useContext(Theme);

    
const toggle = () => {
    user[1]("card text-white bg-dark")
}

    return (
        <div className="d-flex justify-content-center" >
            <div className={user[0]} style={{width: "18rem"}}>
  <img  src={PROFILE} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary" onClick={toggle}>Enable Dark Mode</button>
  </div>
</div>
        </div>
    )
}

export default Child3;