import { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from './Data3.jsx'; 
import './Top.css';

function Tws() {
  
  const [searchTerm, setSearchTerm] = useState('');

 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const filteredMovies = Data.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <div className="header">
          <h1>jetplex</h1>
        </div>
      </header>

      <div className="pick1">
        <h1>20s Movies</h1>
      </div>

     
      <div className="search">
        <center>
          <input
            type="text"
            placeholder=" Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </center>
      </div>

  
      <div className="container1">
        <div className="wrapper1">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((video) => (
              <Link key={video.id} to={`/twenty/${video.id}`}>
                <img src={video.imageUrl} alt={video.title} />
              </Link>
            ))
          ) : (
         <div className="err"> <p>No results found</p></div>  
          )}
        </div>
      </div>
    </div>
  );
}

export default Tws;
