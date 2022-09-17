import React, { useState, useEffect } from 'react'
import Movieitem from './Movieitem'
import InfiniteScroll from "react-infinite-scroll-component";



export default function Movie(props) {

  let [articles, setarticles] = useState([])
  let [totalResult, settotalResult] = useState(0)
  let [page, setpage] = useState(1)

  try {
    let apiKey = `https://api.themoviedb.org/3/trending/all/day?api_key=4ccb0a7183a7c6d2f081a900f4da7151&media_type=movie`
    async function getdata() {
      var rawdata = await fetch(apiKey)
      let result = await rawdata.json()
      // console.log(result);
      setarticles(result.results)
      settotalResult(result.total_results)
      setpage(result.page)

    }

    useEffect(() => {
      getdata()
    }, [])

    var fetchMoreData = async () => {
      setpage(++page)
      let rawdata = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=4ccb0a7183a7c6d2f081a900f4da7151&media_type=movie&page=${page}`)
      let result = await rawdata.json()
      // console.log(result)
      setarticles(articles.concat(result.results))
    }
    
    


  } catch (error) {
    console.log(error)
  }
  // console.log(articles)

  return (
    <>

      <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResult}
          loader={<h4>Loading...</h4>}
        >
          <div className='row '>
            {
              articles.map((item, index) => {
                return <div key={index} className='col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-m-12 '>
                  <Movieitem
                    title={item.original_title ? item.original_title : item.original_name}
                    pic={item.poster_path}
                    releaseDate={item.release_date}
                    url={item.id}
                  />
                </div>

              })
            }

          </div>
        </InfiniteScroll>
      </div>

    </>
  )

}



