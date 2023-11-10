import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const FirstList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
console.log(data);

    const handleCreate = () => {
        setData([...data,{id:Math.random()*1000}])
    }

    return (
        <>

            <div className="container" >
                <div className="subparent">
                    <div className="taskbar">
                        <div className="welcome">Welcome user</div>
                        <div className="logout" onClick={() => navigate(-1)}>Logout</div>
                    </div>
                </div>
                <div className="createcontainer">
                    <div className="subcreatecontainer">
                        <div className="createlist">Create New List</div>
                        <div className="logoplus" onClick={handleCreate}>+</div>
                    </div>
                </div>
                <div className='bigbox'>
                    <div className="box1">

                    </div>
                    <div className="box2"></div>
                </div>

                <article style={{display:"flex",overflowX:"auto",gap:"50px",marginLeft:"20px"}}>

                {
                    data.map((value,index) =>
                        <div className="parentlist-container" key={value.id} style={{  display: "flex",gap:"50px", marginTop: "40px" }}>


                            <div className="containerlistone" style={{ height: "400px", width: "350px", border: "1px solid black", backgroundColor: "ed", fontSize: "28px" }}>
                                <h2 style={{ border: "1px solid black" }} key={value.id}>List {index+1}</h2>
                                <ul className="radioone" style={{ display: "flex", listStyle: "none" }}>
                                    <input type="radio" />
                                    <li >Sent an email to company</li>
                                </ul>
                                <ul className="radioone" style={{ display: "flex", listStyle: "none" }}>
                                    <input type="radio" />
                                    <li >Item 2</li>
                                </ul>
                                <ul className="radioone" style={{ display: "flex", listStyle: "none" }}>
                                    <input type="radio" />
                                    <li >Item 3</li>
                                </ul>

                            </div>
                            

                        </div>
                    )}
                    </article>






            </div>
        </>
    )
}
export default FirstList;