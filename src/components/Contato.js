import React from 'react'
import Nav from './Nav'
import Footer from './Footer'


function Contato(){
    return(
        <div>
            <Nav />
            <div>
                <h1>Contato</h1>

                <p>
                <h3>Funcionamento:</h3>
                Seg. e Qua. - 19:00h ás 20:00
                </p>

                <p>
                    <h3>Telefone/Celular:</h3>
                        (11)99909-2097
                </p>
                
                <p>
                <h3>E-mail:</h3>
                </p>

                <p>
                    <h3>Endereço:</h3>
                    <h4>Escola Dharma:</h4>
     Praça da Liberdade, 262 - Liberdade, São Paulo - SP, 01503-010
                </p>

            </div>
            <footer><Footer /></footer>
        </div>
    )
}

export default Contato;