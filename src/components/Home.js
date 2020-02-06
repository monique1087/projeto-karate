import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
// import Sobre from './Sobre'
// import Contato from './Contato'
import Imagem from './assets/karate-angelica.jpeg';
import Imagem2 from './assets/karate-crianca.jpeg';
import Imagem3 from './assets/karate-chave-braco.jpeg';
import Imagem4 from './assets/karate-perna.jpeg';
import Imagem5 from './assets/karate-espada.jpeg';
import Imagem6 from './assets/karate-recebido.jpeg';

function Home(){
    return (
    <div>
        <Nav />
            <h1 className='fotos-dojo'>Fotos do Dojo</h1>
            <div>
                <img className="photos" src={Imagem} alt="mulher fazendo um golpe que se chama hizaguiri"/>
                <img className="photos" src={Imagem2} alt="crianca fazendo golpes"/>
                <img className="photos" src={Imagem3} alt="chave de braço"/>
                <img className="photos" src={Imagem4} alt='chave de perna'/>
                <img className="photos" src={Imagem5} alt='mostra de luta com espada de madeira'/>
                <img className="photos" src={Imagem6} alt='papel de honra recebido'/>
            </div>
            <Footer />
    </div>
    )
}

export default Home;