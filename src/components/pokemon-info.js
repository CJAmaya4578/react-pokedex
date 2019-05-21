import React from 'react';
import {connect} from 'react-redux';

export function PokemonInfo(props){
    const name = props.pokemon.name.slice(0, 1).toUpperCase() 
        + props.pokemon.name.slice(1);
    return (
    <div id="PokemonInfo">
        {/*<img alt={props.pokemon.name + " Image"}  src={props.pokemon.sprites.front_default} />*/}
        <strong>{name}</strong>
    </div>        
    )
}

const mapStateToProps = state => ({
    pokemon: state.pokemon
});

export default connect(mapStateToProps)(PokemonInfo);