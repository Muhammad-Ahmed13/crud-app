import React, {useState, useEffect }  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Update() {


    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

const navigate = useNavigate();

    useEffect(()=>{

       setId( localStorage.getItem('id'));
       setName( localStorage.getItem('name'));
       setEmail( localStorage.getItem('email'));

    },[])


const handleUpdate=(e)=>{
    e.preventDefault();
     axios.put(`https://64b594f5f3dbab5a95c78069.mockapi.io/crud-youtube/${id}`,

     {
        name : name,
        email : email,
       
    }) .then(()=>{

        navigate('/read')

    })


}








    return(
        <>

            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label"> Name</label>
                    <input
                        type="text"
                        value={name}
                        className="form-control"
                         onChange={(e) => setName(e.target.value)} 
                    />
                </div>

                <div className="mb-3">

                    <label className="form-label">Email address</label>

                    <input
                        type="email"
                        value={email}
                        className="form-control"
                       
                         onChange={(e) => setEmail(e.target.value)} 
                    />

                </div>



                <button type="update" className="btn btn-primary mx-2"  onClick={handleUpdate} > Update</button>

                  <Link to='/read'>
                <button className="btn btn-secondary mx-2">Back</button>
                </Link>
            </form>

        </>
    )
    
}




export default Update;
