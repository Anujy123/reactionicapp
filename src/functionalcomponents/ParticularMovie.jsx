import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'





function ParticularMovie() {
    let { id } = useParams()

    let [pdata, setpdata] = useState([])
    let [directordata, setdirectordata] = useState([])
    let [producerdata, setproducerdata] = useState([])

    const pgetdata = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4ccb0a7183a7c6d2f081a900f4da7151&append_to_response=images,credits`)
        const rawdata = await response.json()
        setpdata(rawdata)
        let director = rawdata.credits.crew.filter(({ job }) => job === 'Director')
        setdirectordata(director[0].name)
        let producer = rawdata.credits.crew.filter(({ job }) => job === 'Producer')
        setproducerdata(producer[0].name)
        
    }


    useEffect(() => {
        pgetdata()
        // react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            <div className="container row">
                <div className='col-xxl-3 col-xl- col-lg-3 col-md-3 col-sm-3 col-12'></div>
                <div className="bg-light col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                    <div className=" bg-light  ">
                        {pdata ? <div className='ro  '>
                            <div className='move2' >
                                <img src={`https://image.tmdb.org/t/p/original/${pdata.poster_path}`} style={{ height: "750px", width: "600px" }} alt=" movie image" />

                            </div>
                        </div> : <div>no data found </div>}
                    </div>

                    <div className="   bg-light">
                        <div className="card-body ">
                            {pdata ? <div className="row text-dark">
                                <h5 className="col text-dark"> {pdata.tagline} </h5>  <h5 className='col move2' >  IMDB : {Math.round(pdata.vote_average)} / 10 </h5>
                            </div> : <div>no data</div>}
                            <div className='par1'>
                                <h4 className="card-title text-dark mb-3">Overview</h4>
                                <p className="card-text text-dark">{pdata.overview}</p>
                                {directordata ? <div className={` row  text-dark`}>
                                    <div className='col' ><h5> {directordata} </h5> Director </div> <div className='col' >  <h5>{producerdata} </h5> Producer </div>
                                </div> : <div>no data</div>}
                                <Link  className="btn btn-primary w-100 mt-5" to="/">  Back to home </Link>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='col-xxl-3 col-xl- col-lg-3 col-md-3 col-sm-3 col-12'></div>
            </div>
        </>
    )
}

export default ParticularMovie

