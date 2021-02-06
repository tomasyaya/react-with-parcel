import React from 'react';

function Footer({ links, contact: { email, phone, address: { country, street, state } } }) {
    return (
        <div>
            <div>
                <p>conact</p>
                <p>email: {email}</p>
                <p>phone: {phone}</p>
                <p>address: </p>
                <p>{country}</p>
                <p>{state}</p>
                <p>{street}</p>
            </div>
            {
                links.map(({ to, label }, id) => <a key={id} href={to}>{label}</a>)
            }
        </div>
    );
}


export default Footer