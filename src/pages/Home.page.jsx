import React, {useState} from 'react'

// Components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarousel from './components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'

// Layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout'


const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [premierMovies, setpremierMovies] = useState([])
    const [onlineStreamEvents, setonlineStreamEvents] = useState([])

  return (
    <>
    <HeroCarousel />
    </>
  )
}

export default DefaultLayoutHoc(HomePage)
