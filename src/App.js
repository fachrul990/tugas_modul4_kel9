import data from './data_aegis'
import Button from './components/Button';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import './App.css'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const searchData = (e) => {
    e.preventDefault()
    input !== '' && setFilteredData(data.filter((el) => el.nama_lengkap.toLowerCase().includes(input.toLowerCase())))
  }


  return (
    <div className="App">
      <form onSubmit={searchData}>
        <SearchBar onChange={(e) => setInput(e.target.value)} placeholder='Masukkan Nama' type="text" required />
        <Button type="submit">Cari</Button>
      </form>
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
