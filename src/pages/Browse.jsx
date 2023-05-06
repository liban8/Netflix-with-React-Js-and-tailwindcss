import React from 'react'
import Header from '../Components/browse/Header'
import requests from '../request'
import Banner from './Banner'
import Rows from './Rows'

function Browse() {
  return (
    <div>
        <Header/>
        <main>
        <Banner/>
        <Rows title={"Trending Movies"} url={requests.fetchTrending} />
        <Rows title={"Action Movies"} url={requests.fetchActionMovies} />
        <Rows title={"Top Rated" } url={requests.fetchTopRated} />
        <Rows title={"Romance Movies"} url={requests.fetchRomanceMovies} />
        <Rows title={"comendy"} url={requests.fetchComedyMovies} />
        <Rows title={"Horor Movies"} url={requests.fetchHorrorMovies} />
        <Rows title={"Documentry "} url={requests.fetchDocumantaries}/>
        </main>
    </div>
  )
}

export default Browse