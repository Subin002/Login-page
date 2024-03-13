import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Table() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7000/get')
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:7000/delete/${id}`)
        .then((res)=>{
            console.log('deleted');
            window.location.reload()

        })
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th colSpan={2}>Actions</th>

                </tr>
                <tbody>
                    {data.map((values, index) => (
                        <tr key={index}>
                            <td>{values.Name}</td>
                            <td>{values.Dep}</td>
                            <td>{values.Des}</td>
                            <td>{values.Img}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default Table
