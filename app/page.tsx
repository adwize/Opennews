import React from 'react'
import MainNews from './components/mainNews/MainNews'
import News from './components/news/News'
import Gallery from './components/Gallery/page'
import News2 from './components/new2/News2'
import SlidesComp from './components/SlidesComp/SlidesComp'

const Home = () => {
  return (
    <div>
      <MainNews />
      <SlidesComp />
      <News />
      <News2 />
      <Gallery />
    </div>
  )
}

export default Home
