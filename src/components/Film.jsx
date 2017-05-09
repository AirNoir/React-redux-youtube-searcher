import React ,{Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {selectFilm} from 'actions/actions';

// const Film = (props)=>{
//   //console.log(props)
//   //console.log(this.props)
//   console.log(this);
//  return (<li  onClick={ () => props.selectFilm(props.film)} className="film-item" >{props.film.name}</li>);
// };

class Film extends Component{
  constructor(props){
    super(props);
  }


  render(){
    console.log(this.props);
    return (<li  onClick={ () => this.props.selectFilm(this.props.film)} className="film-item" >{this.props.film.name}</li>);
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({selectFilm: selectFilm} , dispatch);
}



export default connect(null,mapDispatchToProps)(Film);
