import Searchbar from '../searchbar/searchbar'
import './homepage.scss'


const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="textcontainer">
            <div className="container">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsam pariatur officia ipsum rem ducimus dolores ullam commodi reiciendis harum obcaecati alias facere omnis, excepturi, recusandae eum natus suscipit consequatur?</p>
                <Searchbar/>
                <div className="boxes">
                  <div className="box">
                    <h1>16+</h1>
                    <h2>Years of experience</h2>
                  </div>
                  <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                  </div>
                  <div className="box">
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                  </div>
                </div>
            </div>
        </div>
        <div className="imgcontainer">
            <img src="./bg.png" alt="" />
        </div>

    </div>
  )
}

export default Homepage