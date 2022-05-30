
import React from "react";
import { GoLocation } from "react-icons/go";

export default function Main(props){
    return (

<div className="container">
        <div className='left-side'>
                <img src={`${props.imageUrl}`} className='image'/>
        </div>
        <div className='right-side'>
                    <div className='country-gps'>
                    <GoLocation/>
                        <p className='location'>{props.location}</p>
                        <p className='google-maps'>View on Google Maps</p>
                    </div>
                <h1 className="name">{props.title}</h1>
                <p className='date'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
        </div>
            <br/>
        </div>

    )
}