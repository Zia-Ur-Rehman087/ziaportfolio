import './index.scss'
import NameLog from '../../assets/images/name.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello! <br /> I'm 
        <img src={NameLog} alt="Developer" style={{letterSpacing:'10px'}}/>
        ia - Ur - Rehman
        <br />
        Web Developer
        </h1>
        <h2>
            Frontend Developer / Javascript / React.js
        </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}
export default Home
