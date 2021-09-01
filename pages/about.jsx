import React from 'react'
import AboutCont from '../compounent/About/About';
import Header from '../compounent/Header/header';
import Footer from '../compounent/Footer/Footer';

const About = () => {
    return(
        <>
        <div>
            <Header/>
            <h1>hiii from About Page </h1>
            <hr/>
            <AboutCont />
            </div>
            <Footer />
            </>
    )
}
export default About;