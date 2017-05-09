import React,{Component} from 'react';
import {selectFilm} from 'actions/actions'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';



class FilmDisplay extends Component{

  render(){
    if (this.props.film === null) {
      return (<section>Loading</section>)
    }
    return(
      <section style={{width:'100%',height:'100%',margin: '10px'}}>
        <iframe width="600" height="400"  src={this.props.film.url }></iframe>
      </section>
    );
  }
}


function mapStateToProps(state) {
return {
  film: state.selectedFilm
};
}


export default connect(mapStateToProps)(FilmDisplay);
