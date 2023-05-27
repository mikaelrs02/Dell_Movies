import React from "react";
import * as S from "./avatar_style";
import Star from "../../../image/star.png";
import Play from "../../../image/play.png";
import Playtwo from "../../../image/playtwo.png";
import GenreBar from "../genrebarmovies/genrebarmovies.jsx";
import CarouselMovies from "../carouselmovies/carouselmovies.jsx";
import Popular from "../../movies/popularmovies/popularmovies.jsx";
import Footer from "../footermovies/footermovies.jsx";
export default function Avatar() {
  return (
    <>
      <S.MovieContainer>
        <section>
          <h1>Avatar: o Caminho da Água</h1>
          <h2>3hr 23 min | Fantasia, Família | 2023</h2>
          <S.Note>
            <img src={Star} alt="estrela" />
            <h4>9,9</h4>
            <p>/10</p>
            <h3>IMDb</h3>
          </S.Note>
          <S.Description>
            <h3>
              Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
              ficarem juntos. No entanto, eles devem sair de casa e explorar as
              regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
              travar uma guerra difícil contra os humanos.
            </h3>
          </S.Description>
          <S.View>
            <S.Watch>
              <a
                href="https://www.disneyplus.com"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img src={Play} alt="Ícone play" />
                  Assistir Agora
                </button>
              </a>
            </S.Watch>
            <S.Trailer>
              <a
                href="https://www.youtube.com/watch?v=x5pZI-DmtrE"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img src={Playtwo} alt="Ícone Trailer" />
                  Trailer
                </button>
              </a>
            </S.Trailer>
          </S.View>
        </section>
      </S.MovieContainer>
      <GenreBar />
      <CarouselMovies />
      <Popular />
      <Footer />
    </>
  );
}
