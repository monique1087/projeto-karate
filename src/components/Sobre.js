import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Sobre() {
    return(
        <div>
            <Nav />
            <div>
                 <h1 className='hist'>Um pouco sobre o Dojo</h1>
                 <p classname="sobre">
                 O estilo Sekishin Bujutsu é baseado na Filosofia Samurai, onde a disciplina, esforço, cordialidade e humildade do praticante são avaliados. Não somos um estilo competitivo, pois o nosso objetivo é formar pessoas aptas a contribuir com a sociedade através da prática dos ensinamentos de Shihan Moriyama.

                Os treinos são elaborados para a melhoria do condicionamento físico e mental, além da melhoria da percepção, 
                para que o aluno possa agir nos momentos decisivos de forma precisa e ágil. Além das práticas de condicionamento 
                físico, 
                são oferecidas técnicas de defesa pessoal e manuseio de armas, como Kenjutsu (espada), tantô (punhal) e 
                bô (bastão)

                 </p>

            </div>
            <footer><Footer /></footer>
            
        </div>
    )
}

export default Sobre