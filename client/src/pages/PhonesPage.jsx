import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = "http://localhost:5005"

function PhonesPage() {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios
            .get(`${API_URL}/api/phones`)
            .then(response => {
                setPhones(response.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h1 style={{margin: '20px'}}>List of phones</h1>
        <div class="list-group">
        {phones.map((phone) => {
            return(
                <div key={phone.id}>
                    <Link class="list-group-item list-group-item-action" to={`/phones/${phone.id}`}>{phone.name} ({phone.manufacturer})</Link>
                </div>
            )
        })}
        </div>
    </div>
  );
}

export default PhonesPage;