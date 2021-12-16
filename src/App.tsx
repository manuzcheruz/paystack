import { useState, useEffect } from 'react';
import './App.css';
import Select from './components/Select/Select';
import Table from './components/Table/Table';
import { UseFetchCharacters } from './utils/Fetch/UseFetchCharacters';
import Spinner from './utils/Spinner/Spinner';

/**
 * Entry point to our application and components
 * @returns 
 */
function App() {

  const [filmList, setFilmList] = useState([]);
  const [error2, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState('');

  /**
   * create a fetch function here
   */
  function fetchList() {
      const url = 'https://swapi.co/api/films';
      setLoading(true);
      fetch(url)
          .then(res => {
              return res.json();
          })
          .then(res => {
              setLoading(false);
              setFilmList(res);
          })
          .catch(err => {
            setLoading(false);
              setError(err.message);
          })
  }

  //fetch the list when the app is loading
  useEffect(() => {
      fetchList();
  }, []);

  const selectHandler = (e: any) => {
    setFilm(e.target.value);
  }

  const [data, setData] = useState([]); 
  const [error, setError2] = useState('');
  /**
  * create a fetch characters data here
  */
  function fetchCharacters(film: string) {
  const url = 'https://swapi.co/api/films/1';
  fetch(url, {
      headers: {
          'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(film)
      })
      .then(res => {
          return res.json();
      })
      .then((res) => {
          setData(res);
      })
      .catch(err => {
          setError2(err.message);
      })
  }

  useEffect(() => {
    fetchCharacters(film);
  }, [film]);

  return (
    <div className="App">
      {error2 ?
      <h5 style={{color: 'red'}}>There was an error loading films: {error}</h5>
      :
      <Select selectHandler={(e: any) => selectHandler(e)} list={filmList} />
      }
      {loading ?
      <>
        <Spinner />
        <h5 style={{color: 'green'}}>Loading Characters list for {film}</h5>
      </>
      :
      error ?
      <h5 style={{color: 'red'}}>There was an error loading characters: {error}</h5>
      :
      data &&
      <Table data={data} />
      }
    </div>
  );
}

export default App;
