import React,{Component} from 'react';
import {searchFilm,SEARCH_FILM} from 'actions/actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const Button = (props) => {



return (<button className="btn" onClick={ props.searchFilm.bind(this,props.text)}>SEARCH</button>);

}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFilm: searchFilm }, dispatch);
}


export default connect(null, mapDispatchToProps)(Button);
