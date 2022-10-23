import data from './data_aegis'
import Button from './components/Button';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import './App.css'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const searchData = () => {
    input !== '' && setFilteredData(data.filter((el) => el.nama_lengkap.toLowerCase().includes(input.toLowerCase())))
  }

  const getInput = (e) => {
    setInput(e.target.value)
  }


  return (
    <div className="App">
      <SearchBar onChange={getInput} placeholder='Masukkan Nama' required />
      <Button onClick={searchData}>Cari</Button>
      <div className='container'>
        {filteredData.map((el, index) => {
          return (
            <Card data={el} key={index} />
          )
        })}
      </div>
    </div>

  );
}

export default App;
