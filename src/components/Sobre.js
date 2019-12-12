import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Sobre() {
    return(
        <div>
            <Nav />
            <div>
                 <h1 className='hist'>Um pouco sobre a história</h1>
                 <p>
                     O dojo Moriyama é ministrado pelo Sensei Shihan Moriyama com foco no karate de Okinawa.
                 </p>
            </div>
            <Footer />
        </div>
    )
}

export default Sobre