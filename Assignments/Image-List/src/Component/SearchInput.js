import React from 'react';
class SearchInput extends React.Component{ 
 state = {entry: ''}
onFormsubmit= (event) => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
}
    // onInputChange(event){
    //     console.log(event.target.value)
    // }
render(){ 
           return( 
          <div className='ui segment'>
              <form onSubmit ={this.onFormsubmit} className='ui form'>
                  <div className='field'>
                        <div className='ui massive icon input'>
               <input type='text' placeholder='search...' 
               onChange={(event) => this.setState({entry:event.target.value})}
               value={this.state.entry}/>
         
            <i className='search icon'></i>   
                    </div>
                  </div> 
                </form>
            </div>   
                  )   
             }
            }
            export default SearchInput;

// import React from 'react' ;

// class SearchInput extends React.Component
// {
//     state = {entry:''}
//     onFormSubmit = (event) =>{
//         event.preventDefault()
//         this.props.onSearchSubmit()
//         console.log(this.state.entry)
//     }
//     // onInputChange(event)
//     // {
//     //     console.log(event.target.value)
//     // }

//     render(){
//         return(
//             <div className='ui segment'>
//                 <form onSubmit={this.onFormSubmit} className='ui form'>
//                     <div className='filed'>
//                         <div className='ui massive icon input'>
//                             <input type='text' placeholder='search..'
//                             onchange={(event)=>this.setState({entry:event.target.value})} 
//                             value={this.state.entry} />
//                             <i className='search icon'></i>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SearchInput;
