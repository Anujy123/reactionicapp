import React  from 'react'
import { Link } from 'react-router-dom'




export default function Movieitem(props) {

    return (
        <>
            <div className="card mb-4" id='card'  >
                <img src={`https://image.tmdb.org/t/p/original/${props.pic}`} height="200px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"  >{props.title}</h5>
                    <hr />
                    <p className="card-text"  >{props.releaseDate}</p>

                    <Link  className="btn btn-primary w-100" to={`/particularmovie/${props.url}`}>  Read full article </Link>

                </div>
            </div>


        </>


    )

}
