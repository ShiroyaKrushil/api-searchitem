import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [Alldata, setAlldata] = useState([]);
  const [serach, setSearch] = useState('');

   const btn =()=>{
    if(!serach)
    {
      fetch(`https://dummyjson.com/products/search?q=${serach}`).then((res) => {
      return res.json();
    }).then((data) => {

      setAlldata(data.products);

    })
    }else{
      alert('not found');
    }
   }

  
  console.log(Alldata);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <form>
          <div class="form-group mb-3">
            <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
          </div>
          <button type="button" class="btn btn-primary" onClick={btn}>Search</button>

        </form>
      </div>
      <div className='row mt-5'>
        {
          Alldata.map((item) => {
            return (
              <>
                <div class="card m-3 " style={{ width: '18rem' }}>
                  <img class="card-img-top" src={item.thumbnail
                  } alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
