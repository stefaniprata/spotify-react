import React from "react";
import './Playlist.css';
import imageCard1 from '../assets/playlist/1.jpeg';
import imageCard2 from '../assets/playlist/2.png';
import imageCard3 from '../assets/playlist/3.jpeg';
import imageCard4 from '../assets/playlist/4.jpeg';
import imageCard5 from '../assets/playlist/5.jpeg';
import imageCard6 from '../assets/playlist/6.jpeg';
import imageCard7 from '../assets/playlist/7.jpeg';
import imageCard8 from '../assets/playlist/8.jpeg';
import imageCard9 from '../assets/playlist/9.jpeg';
import imageCard10 from '../assets/playlist/10.jpeg';
import imageCard11 from '../assets/playlist/11.jpeg';
import imageCard12 from '../assets/playlist/12.jpeg';
import imageCard13 from '../assets/playlist/13.jpeg';
import imageCard14 from '../assets/playlist/14.jpeg';
import imageCard15 from '../assets/playlist/15.jpeg';

const Playlist = () =>{
    return (
        <div className="playlist-container">
          <div id="result-playlists">
            <div className="playlist">
              <h1 id="greeting"></h1>
              <h2 className="session">Navegar por todas as seções</h2>
            </div>

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  <a href="" className="cards">
                    <div className="cards card1">
                      <img src={imageCard1} alt="" />
                      <span>Boas festas</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card2">
                      <img src={imageCard2} alt="" />
                      <span>Feitos para você</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card3">
                      <img src={imageCard3} alt="" />
                      <span>Lançamentos</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card4">
                      <img src={imageCard4} alt="" />
                      <span>Creators</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card5">
                      <img src={imageCard5} alt="" />
                      <span>Para treinar</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card6">
                      <img src={imageCard6} alt="" />
                      <span>Podcasts</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card7">
                      <img src={imageCard7} alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card8">
                      <img src={imageCard8} alt="" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card9">
                      <img src={imageCard9} alt="" />
                      <span>Funk</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card10">
                      <img src={imageCard10} alt="" />
                      <span>MPB</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card11">
                      <img src={imageCard11} alt="" />
                      <span>Rock</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card12">
                      <img src={imageCard12} alt="" />
                      <span>Hip Hop</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card13">
                      <img src={imageCard13} alt="" />
                      <span>Indie</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card14">
                      <img src={imageCard14} alt="" />
                      <span>Relax</span>
                    </div>
                  </a>

                  <a href="" className="cards">
                    <div className="cards card15">
                      <img src={imageCard15} alt="" />
                      <span>Música Latina</span>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
    )
};

export default Playlist;
