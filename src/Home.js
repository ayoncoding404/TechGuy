import React from 'react'
import FeatureProducts from './Components/FeatureProducts';
import HeroSection from './Components/HeroSection'
import ImpServices from './Components/ImpServices';
import Trusted from './Components/Trusted';

const data={
  name : "Tech Guy",
  image : "./images/hero.svg",
};

const Home = () => {
  return ( 
  <>
     <HeroSection {...data}  />
     <FeatureProducts />
     <ImpServices />
     <Trusted />
  </>
  )
};

export default Home;