import React from 'react';
import SearchInput from './Component/SearchInput'
import axios from 'axios';
import ImageList from './Component/ImageList'
class App extends React.Component {
  state = {image:[]}
 onSearchSubmit = async (entry) =>
  {
    const response = await axios.get(`https://pixabay.com/api/?key=21429387-64bb8c861155ab906b139b2ba&q=${entry}&image_type=photo`)
    console.log(response);
    this.setState({image:response.data.hits})
  }
  render(){
    return(
      <div className='ui container' style={{marginTop: '30px'}}>
      <SearchInput onSearchSubmit={this.onSearchSubmit} />
      we have {this.state.image.length} images
      <ImageList image={this.state.image}/>
      </div>
    )
  }
}

export default App;