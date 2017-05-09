import React, {Component} from 'react';
// import SearchBar from 'components/SearchBar';
import FilmList from 'components/FilmList';
import FilmDisplay from 'components/FilmDisplay';
import SearchButton from 'components/SearchButton';
import {selectFilm,searchFilm,changeInputText} from 'actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            selectedFilm: null,
            inputText: ''
        };

    }


    render() {
        return (
            <div>
                <div>
                  <div className="center" style={{width: '500px'}}>
                    <input  className="searchInput" type="text" onChange={e => this.props.changeInputText(e.target.value)} />
                    <button className="btn" onClick={  () => this.props.searchFilm(this.props.inputText)}>SEARCH</button>

                  </div>
                </div>
                <section className="section w30per">
                    <FilmList />
                </section>
                <section className="section w70per">
                    <FilmDisplay/>
                </section>
            </div>
        );
    }

}

function mapStateToProps(state){
  return{
    films: state.films,
    selectedFilm: state.selectedFilm,
    inputText: state.inputText
  };
}


function mapDispatchToProps(dispatch){
  return {
    searchFilm: bindActionCreators( searchFilm,dispatch),
    selectFilm: bindActionCreators( selectFilm,dispatch),
    changeInputText: bindActionCreators(changeInputText,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
