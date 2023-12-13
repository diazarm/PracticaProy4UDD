import { Routes, Route } from 'react-router-dom'
import { Inicio} from '../pages/Inicio';
import { Reserva} from '../pages/Reserva';
import { Menu} from '../pages/Menu';
    
 
export const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element = {<Inicio/>}/>
            <Route exact path='/Menu' element = {<Menu/>}/>
            <Route exact path='/Reserva' element = {<Reserva/>}/>
        </Routes>
    </div>
  )
}
