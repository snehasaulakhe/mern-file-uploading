import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const MultiDocsUploading = () => {
    const [Dob, setDob] = useState()
    const [Adhar, setAdhar] = useState()
    const [Tc, setTc] = useState()

    const [users, setUsers] = useState([])
    const getAllDocss = async () => {
        const { data } = await axios.get("http://localhost:5000/doc")
        console.log(data.result);
        setUsers(data.result)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("dob", Dob)
        fd.append("tc", Tc)
        fd.append("adhar", Adhar)


        const { data } = await axios.post("http://localhost:5000/doc/add", fd)
        console.log(data);
    }

    useEffect(() => {
        getAllDocss()
    }, [])
    return <>

        <>
            {/* {JSON.stringify(Dob)} */}
            {/* {JSON.stringify(Adhar)} */}
            {/* {JSON.stringify(Tc)} */}


            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3">
                            <input type="file" className='form-control' onChange={e => setDob(e.target.files[0])} />
                            <br />
                            <input type="file" className='form-control'
                                onChange={e => setAdhar(e.target.files[0])} />
                            <br />
                            <input type="file" className='form-control' onChange={e => setTc(e.target.files[0])} />
                            <button type="submit" class="btn btn-primary w-100">Add Docs</button>
                        </div>
                    </div>
                </div>
            </form>

        </>
        {/* {JSON.stringify(users)} */}
        {
            users.map(item => <div class="card">
                <div class="card-body ">
                    <img className='m-3' src={`http://localhost:5000/${item.userDob}`} alt="" height={100} width={100} />
                    <img className='m-3' src={`http://localhost:5000/${item.userAdhar}`} alt="" height={100} width={100} />
                    <img className='m-3' src={`http://localhost:5000/${item.userTc}`} alt="" height={100} width={100} />
                </div>
            </div>)
        }

    </>
}

export default MultiDocsUploading