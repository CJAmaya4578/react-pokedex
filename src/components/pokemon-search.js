import React from 'react';
import {connect} from 'react-redux';
import {searchPokemon} from '../actions/actions';

export class PokemonSearch extends React.Component {
    renderResult(){
        if (this.props.pokemon){
            return <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front_default} />
        }
        return <div></div>
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.dispatch(searchPokemon(this.input.value.toLowerCase()));
    }
    
    render(){
        return (
            <div id="SearchDex">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input type="search" ref={input => (this.input = input)} />
                </form>
                {this.renderResult()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    loading: state.loading,
    error: state.loading    
});

export default connect(mapStateToProps)(PokemonSearch);
