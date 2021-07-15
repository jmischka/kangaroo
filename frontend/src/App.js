import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopAlbums from './pages/TopAlbums';
import WikiSearch from './pages/WikiSearch';
import Header from './components/Header';
import AlbumDetail from "./components/AlbumDetail";
const axios = require('axios');

function App() {
  const [albums, setAlbums] = useState({isLoading: false, data: []}); 
  const [detail, setDetail] = useState({artistName: '', albumName: '', albumCover: '', releaseDate: '', albumUrl: ''});
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    setAlbums({isLoading: true})
    axios.get('/topalbums').then(response => {
      setAlbums({
        isLoading: false,
        data: response.data.feed.results
      })
    })
  }, []);

  const handleAlbumClick = (e) => {
    setDetail({
      artistName: e.target.dataset.artistname,
      albumName: e.target.dataset.albumname,
      albumCover: e.target.dataset.albumcover,
      releaseDate: e.target.dataset.releasedate,
      albumUrl: e.target.dataset.albumurl
    })
    setTriggered(!triggered);
  }

  const handleButtonClick = (e) => {
    setTriggered(!triggered);
  }
  
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          
          {/* SWITCH ROUTES */}
          <Switch>
            <Route path="/search">
              <WikiSearch />
            </Route>
            <Route path="/">
              <TopAlbums albums={albums} handleAlbumClick={handleAlbumClick} />
            </Route>
          </Switch>

          <AlbumDetail detail={detail} triggered={triggered} handleButtonClick={handleButtonClick} />
        </div>
      </Router>
    </div>
  );
}

export default App;
