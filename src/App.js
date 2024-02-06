import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Sidebar from './Sidebar/Sidebar';
import Artists from './Artists/Artists';

function App() {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);

  function requestApi(searchTerm) {
    const url = `http://localhost:4000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => setArtists(result))
  }

  useEffect(() => {
    if(search) {
      requestApi(search);
    } else {
      setArtists([]);
    }
  }, [search]);

  return (
    <>
        <Sidebar></Sidebar>
        <main>
          <div className='main-container'>
            <Header onTypeChange={setSearch}></Header>
            {artists.length === 0 && <Playlist />}
            {
              artists.length !== 0 && 
              <Artists
                name={artists[0].name}
                genre={artists[0].genre}
                urlImg={artists[0].urlImg}
                />}
          </div>
        </main>
        <Footer></Footer>
    </>
  );
}

export default App;
