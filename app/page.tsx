import React from 'react'
import MainNews from './components/mainNews/MainNews'
import UnderMain from './components/underMain/UnderMain'
import News from './components/news/News'
import Gallery from './components/Gallery/page'
import News2 from './components/new2/News2'

const Home = () => {
  return (
    <div>
      <MainNews />
      <UnderMain />
      <News />
      <News2 />
      <Gallery />
    </div>
  )
}

export default Home
