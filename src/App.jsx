import './App.css'
import Banner from './Compontents/Banner/Banner';
import NavBar from './Compontents/NavBar/Navbar';
import RowPost from './Compontents/RowPost/rowpost';
import { originals, action } from './urls';
function App(){

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action ' isSmall={true}/>
    </div>
  )
}
export default App;