import HeroSection from './Components/HeroSection'
import { AppContext, useProductContext } from './Context/ProductContext';

const About = () => {

  const {myName}= useProductContext();

  const data={
    name : "Tech Solutions!!",
    image : "./images/about1.svg",
  };

  return (
    <>
    {myName}
    <HeroSection {...data} />
    </>
  )
}

export default About