import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {
  
  state = {latitude:null, longitude:null, errorMessage:''}
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude})
        this.setState({longitude: position.coords.longitude})
      },
      
      (error) => {
        this.setState({errorMessage: error.message})
      }
    );
  }
  
  // constructor(props) {
  //   super(props)
  //   this.state = {latitude : null}

  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({latitude: position.coords.latitude})
  //     },
  //     (error) => {
  //       this.setState({errorMessage: error.message})
  //     }
  //   );
  // }
  
  render() {
    if(!this.state.errorMessage && this.state.latitude) {
      return(
        <div><HemisphereDisplay latitude= {this.state.latitude} longitude={this.state.longitude}/>
        </div>
      )
    }

    if(this.state.errorMessage && !this.state.latitude) {
      return(
        <div>{this.state.errorMessage}</div>
      )
    }

    else {
      return(
        <div>Loading...</div>
      ) 
    }
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
)