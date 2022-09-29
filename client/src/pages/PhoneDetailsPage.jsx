import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const API_URL = "http://localhost:5005"

function PhoneDetailsPage() {

    const [phone, setPhone] = useState()
    const {id} = useParams()

    useEffect(() => {
        axios
            .get(`${API_URL}/api/phones/${id}`)
            .then(response => {
                setPhone(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px'}}>
    {phone &&
    <>
        <h1 style={{marginBottom: '20px'}}>Phone details</h1>
        <div className="card mb-3" style={{maxWidth: '80%', alignItems: 'center'}}>
            <img style={{maxWidth: '350px'}} src={require(`../../assets/images/${phone.imageFileName}`)}></img>
        <div className="card-body">
            <h2 className="card-title">{phone.name} ({phone.manufacturer})</h2>
            <p className="card-text">{phone.description}</p>
            <p style={{textAlign: 'justify'}} className="card-text">More info:</p>
            <ul style={{textAlign: 'left'}}>
                <li className="card-text"><small className="text-muted">Color: {phone.color.toUpperCase()}</small></li>
                <li className="card-text"><small className="text-muted">Price: {phone.price}</small></li>
                <li className="card-text"><small className="text-muted">Screen: {phone.screen}</small></li>
                <li className="card-text"><small className="text-muted">Processor: {phone.processor}</small></li>
                <li className="card-text"><small className="text-muted">Ram: {phone.ram}</small></li>
            </ul>
        </div>
        </div>
    </>
    }
    </div>
  );
}

export default PhoneDetailsPage;


