import React, { useState } from 'react'
import './Style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Form() {
    const [Name, setName] = useState('')
    const [Dep, setDep] = useState('')
    const [Des, setDes] = useState('')
    const [Img, setImg] = useState('')

    const handleName = (e) => { setName(e.target.value) }
    const handleDep = (e) => { setDep(e.target.value) }
    const handleDes = (e) => { setDes(e.target.value) }
    const handleImg = (e) => { setImg(e.target.value) }
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { Name, Dep, Des, Img };

        axios.post('http://localhost:7000/post', formData)
            .then((res) => {
                console.log(res.data);
                alert('submitted sucessfully')
                navigate('/get')
                setName('')
                setDep('')
                setDes('')
                setImg('')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <form>
                    <div className='name'><label htmlFor="name">Name:</label>
                    <input type='text' value={Name} onChange={handleName} /><br />
                    </div>
                     
                    <div className='dept'>
                    <label htmlFor="Department">Department: </label>
                    <input type='text' value={Dep} onChange={handleDep} /><br />
                    </div>

                    <div className='desc'>
                    <label htmlFor="Description">Description:</label>
                    <input type='text' value={Des} onChange={handleDes} /><br />
                    </div>

                    <div className='img'>
                    <label htmlFor="Image">Image:</label>
                    <input type='file' onChange={handleImg} /><br />
                    </div>

                    <button type='submit' onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Form;
