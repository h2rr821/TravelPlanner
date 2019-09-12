import React from 'react';
import '../styles/App.css';
import TopNavBar from "./NavBar/TopNavBar"
import Footer from "./Footer"
import MainBody from "./MainBody"
import SearchBar from "./NavBar/SearchBar";

class App extends React.Component{

  //san diego
  //32.715738
  //-117.1610838
  state={

     lat:32.715738,
     lng:-117.1610838
     
  }

  //Los Angeles
  //34.0522342
  //-118.2436849

  componentDidMount() {

        console.log("Get current location at real time");
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    
                    lat: coords.latitude,
                    lng: coords.longitude
                    
                })
            })
        }
    
  }


  handleNewSelect=(lat, lng)=>{

     this.setState({

        lat:lat,
        lng:lng

     })

  }

  
  render(){

    return (

      <div className="App">
          <TopNavBar handleNewSelect={this.handleNewSelect}/>
          <MainBody lat={this.state.lat} lng={this.state.lng}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
