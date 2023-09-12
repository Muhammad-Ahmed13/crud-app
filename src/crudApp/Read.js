import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState('');
    function getData() {
        axios
            .get('https://64b594f5f3dbab5a95c78069.mockapi.io/crud-youtube')

            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }
    useEffect(() => {
        getData();
    }, [])
    function handleDelete(id) {
        axios.delete(`https://64b594f5f3dbab5a95c78069.mockapi.io/crud-youtube/${id}`)
            .then(() => {
                getData()
            })
    }
    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem('id', id)
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    }

    return (
        <>
            <div className="form-check form-switch">
             
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className={`w-5 h-5 ${tabledark === 'table-dark' ? 'table-dark' : ''}`}
                    aria-hidden="true"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                        if (tabledark === 'table-dark') setTableDark('');
                        else setTableDark('table-dark');
                    }}
                >
                    <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"></path>
                </svg>
            </div>

            <div className="d-flex justify-content-between m-2">
                <h2>Read Operation</h2>
                <Link to='/'>
                    <button class="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                {
                    data.map((eachData) => {
                        return (
                            <>

                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to='/Update'>
                                                <button type="button" class="btn btn-success"
                                                    onClick={() => { setToLocalStorage(eachData.id, eachData.name, eachData.email) }}>Edit</button>
                                            </Link>
                                        </td>

                                        <td><button type="button" class="btn btn-danger"
                                            onClick={() => { handleDelete(eachData.id) }} >Delete</button></td>
                                    </tr>

                                </tbody>
                            </>
                        )

                    })
                }


            </table>
        </>
    )
}


export default Read;