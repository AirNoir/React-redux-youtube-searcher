import React,{Component} from 'react';
import Film from 'components/Film';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFilm} from 'actions/actions'

class FilmList extends Component{
  constructor(props){
    super(props);
  }


  render(){

    let list = this.props.films.map((item)=>{
      return <Film key={item.id} film={item}  />
    });

    return (<ul>
              {list}
            </ul>);
  }

}


function mapStateToProps(state){
  return{
    films: state.films,
  }
}


export default connect(mapStateToProps)(FilmList);
