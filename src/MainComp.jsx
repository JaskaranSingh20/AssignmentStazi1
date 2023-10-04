import {useEffect, useState} from 'react'
import './App.css'
import Cards from './Components/Cards';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CarData from '../public/data';                               
import { NavLink, useParams } from 'react-router-dom';

function MainComp() {
    const [name, setName] = useState("");     // to store car name from search
    const [data , setData] = useState([]);   // to store the data for display
    const {id} = useParams();
    const [page, setPage] = useState(1);

  useEffect(()=>{       // initail data to display
    const array = CarData;
    setData(array);

  }, [])

  const handleChange = (e)=>{          //  Search functionality
    console.log(e.target.value)
    setName(e.target.value);
    if(name != '' ){    // checking if input is null or not based on user input

        const filtered = CarData.filter((car) =>
            car.name.toLowerCase().includes(name.toLowerCase())
        );
        setData(filtered);

        }else{
          setData([]);
        }
  }

  const handlePage =  (i)=>{

    if(i >= 1 && i <= 10)      // pagination
     setPage(i);
  }

  return (
    <>
      <div className="navbar">
        <p className='searchdiv' >
          <input type='text' placeholder='Search...' value={name}  onChange={handleChange}/>
          <SearchOutlinedIcon className='searchicon'/>
        </p>
      </div>
      
      {data ? (
          <div className='container'>
            {
                data.slice(page* 6 - 6, page * 6).map((dt, index)=>{
                    return <Cards data = {dt} id={dt.id} key={index}/>
                })
            }
          </div>
      ) : <p>Please enter valid name</p>}

        <div className="footer">

          {page > 1 && <span  onClick={()=>{setPage(page - 1)}}>
            <NavLink to={`/page/${page-1}`}><p>Prev</p></NavLink></span>}

          { [...Array(11)].map((_, i)=>{
            if(i > 0 && i < 11)
            return <span onClick={()=>{ handlePage(i)}} key={i}>
                <NavLink to={`/page/${i}`}><p>{i}</p></NavLink></span>})}

            {page < 10 && <span  onClick={()=>{setPage(page +1)}}>
            <NavLink to={`/page/${page+1}`}><p>Next</p></NavLink></span>}
        
        </div>
    </>
  )
}

export default MainComp
