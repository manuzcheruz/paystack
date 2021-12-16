import './App.css';
import Select from './components/Select/Select';
import Table from './components/Table/Table';
import { UseFetchCharacters } from './utils/Fetch/UseFetchCharacters';

/**
 * Entry point to our application and components
 * @returns 
 */
function App() {

  const {data, error} = UseFetchCharacters('film');

  return (
    <div className="App">
      <Select />
      {/* {error ? 
      <h5 style={{color: 'red'}}>`There was an error: ${error}`</h5>
      :
      <Table />
    } */}
    </div>
  );
}

export default App;
