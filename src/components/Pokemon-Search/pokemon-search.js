import React from 'react';
import {connect} from 'react-redux';
import {searchPokemon} from '../../actions/actions';
import PokemonInfo from '../pokemon-info';
import './pokemon-search.css';

export class PokemonSearch extends React.Component {
    componentDidMount(){
        this.props.dispatch(searchPokemon(this.props.pokemonID));
    }
    
    renderResult(){
        if (this.props.pokemon){
            return (
                <PokemonInfo />
            )
        }
        return <div></div>
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.dispatch(searchPokemon(this.input.value.toLowerCase()));
    }

    onPreviousClick(){        
        if (this.props.pokemonID > 1){
            this.input.value = "";
            this.props.dispatch(searchPokemon(this.props.pokemonID-1));
        }        
    }

    onNextClick(){    
        if (this.props.pokemonID < 807){
            this.input.value = "";
            this.props.dispatch(searchPokemon(this.props.pokemonID+1));
        } 
    }
    
    render(){
        return (
            <div id="SearchDex">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input type="search" ref={input => (this.input = input)} />
                </form>
                <button 
                    id="prevPokemon" 
                    onClick={() => this.onPreviousClick()} 
                    disabled={this.props.loading}
                >
                    Previous
                </button>
                <button 
                    id="nextPokemon" 
                    onClick={() => this.onNextClick()} 
                    disabled={this.props.loading}
                >
                    Next
                </button>
                {this.renderResult()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    pokemonID: state.pokemonID,
    loading: state.loading,
    error: state.loading    
});

export default connect(mapStateToProps)(PokemonSearch);
