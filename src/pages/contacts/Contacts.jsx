import React from 'react';
import { useState } from "react";
import './Contacts.css'


const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
    }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
    }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
    }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
    }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
    }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
    }];

const Table = ({data}) => {
    return (
        <table className="table">
            <tbody>
                <tr className="title">
                    <th className="top">First name</th>
                    <th className="top">Last name</th>
                    <th className="top">Phone</th>
                    <th className="top">Gender</th>
                </tr>
                {data.map((item) =>(
                <tr className="table_body">
                    <td className="main">{item.firstName}</td>
                    <td className="main">{item.lastName}</td>
                    <td className="main">{item.phone}</td>
                    <td className="main">{item.gender}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}    

const Contacts = () => {
    const [query, setQuery] = useState("");

    const search = (data) =>{
        return data.filter(item => item.firstName.toLowerCase().includes(query) || 
        item.lastName.toLowerCase().includes(query) || 
        item.phone.includes(query))
    }

    return(
        <div className="contacts">
        <input type="text" placeholder="Search..." className="search" onChange={(e)=> setQuery(e.target.value)}/>
        <Table data={search(contacts)}/>
        </div>
    );
};

export default Contacts;