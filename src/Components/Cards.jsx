import React from 'react'
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';     
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';   
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';       
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';    
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';   

function Cards({data}) {
  return (
    <div className='card'>
        <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/3-Series/10574/1689667781970/front-left-side-47.jpg" />
        <div className='card_innerdiv'>
            <h2>{data.name}</h2>
            <div className='dateDiv'><h2>{data.date}</h2></div>
        </div>
        <div className='innerDivGrid'>
          <div className='iconsDiv'><PeopleOutlinedIcon className='colorIcon'/> <p>{data.passengers}</p></div>
          <div className='iconsDiv'><LocalGasStationOutlinedIcon className='colorIcon'/> <p>{data.fuel}</p></div>
          <div className='iconsDiv'><SpeedRoundedIcon className='colorIcon'/><p>{data.average}</p></div>
          <div className='iconsDiv'><DirectionsCarOutlinedIcon className='colorIcon'/> <p>{data.gearType}</p></div>
        </div>

        <div className='bottomDiv'>
          <p>${data.rentPrice}/<span>month</span></p>
          <div className='right'>
            <div className='rightIcon'><FavoriteBorderOutlinedIcon className='colorIcon'/></div>
            <button>Rent now</button>
          </div>
        </div>
    </div>
  )
}

export default Cards