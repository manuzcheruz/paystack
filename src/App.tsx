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
      <Table {...data} />
    </div>
  );
}

export default App;
