import ScrollTop from './components/arrowUp/arrowUp.jsx'

import Header from './components/header.jsx'
import Intro from './components/intro.jsx'
import Posts from './components/posts.jsx'
import AboutUs from './components/aboutUs.jsx'
import Category from './components/category.jsx'
import WhyWeStarted from './components/whyWeStarted.jsx'
import Authors from './components/authors.jsx'
import Features from './components/featuredIn.jsx'
import Reviews from './components/reviews.jsx'
import JoinUs from './components/joinUs.jsx'
import Footer from './components/footer.jsx'

import './App.css'


function App() {


  return (
    <>
      <ScrollTop/>
      <Header/>
      <Intro/>
      <Posts/>
      <AboutUs/>
      <Category/>
      <WhyWeStarted/>
      <Authors/>
      <Features/>
      <Reviews/>
      <JoinUs/>
      <Footer/>
    </>
  )
}

export default App
