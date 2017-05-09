import React,{Component} from 'react';



export default class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state ={
      inputText: ''
    };

  }

  textChange(e){
    this.setState({
      inputText: e.target.value
    })
  }




  render(){
    return(
      <input  className="searchInput" type="text" onChange={e => this.textChange(e)} />
    );
  }

}
