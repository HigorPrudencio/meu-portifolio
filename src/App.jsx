import { Player } from '@lottiefiles/react-lottie-player'
import './App.css'
import React, { useState } from 'react';

function App() {

  const [mostrarTexto, setMostrarTexto] = useState(false);
  const handleClick = () => {
    setMostrarTexto(!mostrarTexto);

  };


  return (
    <>
      <div className='box1'>
        <Player className='animacao'
          src="https://assets-v2.lottiefiles.com/a/91751022-1166-11ee-9c74-138fa1e7d83d/eCgQRor9Zt.json" loop autoplay speed={0.2}
        />
      </div>

      <div className='box2'>
        <h2> Resumo sobre mim </h2>
        <p className='text1'>
          Gosto muito de games e sou extremamente focado nas coisas que me interessam.
        </p>
        <p className='text1'>
          Amo esportes e videogames. Eles são uma grande parte da minha vida e me proporcionam muita diversão e entretenimento.
        </p>
        <p className='text1'>
          Sempre busco me aprimorar e superar desafios tanto nos jogos quanto nos esportes, e isso me motiva a continuar aprendendo e me divertindo com o que amo.
        </p>

      </div>

      <div className='box3'>
        <button className='botao' onClick={handleClick}>Meus Projetos</button>
        {mostrarTexto && (<>
          <img id="minha-imagem" className='img1' src="https://i.ytimg.com/vi/6TlHMjUg6r4/maxresdefault.jpg" alt="Imagem" />
          <img id="minha-imagem" className='img1' src="https://s2-techtudo.glbimg.com/LF5DAbEFQPLYV82fqwgeA2HDoJU=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/j/B/fEjkqCTlA0BMFLzSq8Bg/como-jogar-jogo-dinossauro-google-online-tutorial.jpg" alt="Imagem" />
          <img id="minha-imagem" className='img1' src="data:image/png;base64,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" alt="Imagem" /> </>)}
      </div>

      <div className='box4'>
        <h3 className='text2'>Redes sociais</h3>
        <div className='links'>
          <a href="https://www.instagram.com/higor.hp/">  <Player className='img2'
            src="https://assets-v2.lottiefiles.com/a/4b94949e-1169-11ee-81a4-07764a2d99b9/OY7E8LTnKs.json" loop autoplay speed={1} /></a>

          <a href="https://github.com/dashboard">  <Player className='img2'
            src="https://assets-v2.lottiefiles.com/a/b9f9fe3e-1163-11ee-97ce-97272df55722/fYQwaaCE32.json" loop autoplay speed={1} /></a>
        </div>
      </div>

     
    </>

  )
}

export default App