import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPokemon = () => {
  const [formData, setFormData] = useState({
    pokemonOwnerName: '',
    pokemonName: '',
    pokemonAbility: '',
    initialPositionX: 0,
    initialPositionY: 0,
    speed: 0,
    direction: ''
  });

  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    const fetchPokemonNames = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/');
      setPokemonNames(response.data.results.map(pokemon => pokemon.name));
    };
    fetchPokemonNames();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'pokemonName') {
      const fetchPokemonAbility = async (pokemonName) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const ability = response.data.abilities[0].ability.name;
        setFormData(prevState => ({ ...prevState, pokemonAbility: ability }));
      };
      fetchPokemonAbility(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/users', formData);
    setFormData({
      pokemonOwnerName: '',
      pokemonName: '',
      pokemonAbility: '',
      initialPositionX: 0,
      initialPositionY: 0,
      speed: 0,
      direction: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="pokemonOwnerName" value={formData.pokemonOwnerName} onChange={handleChange} placeholder="Owner Name" />
      <select name="pokemonName" value={formData.pokemonName} onChange={handleChange}>
        <option value="">Select Pokémon</option>
        {pokemonNames.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      <input name="pokemonAbility" value={formData.pokemonAbility} onChange={handleChange} placeholder="Pokemon Ability" readOnly />
      <input name="initialPositionX" type="number" value={formData.initialPositionX} onChange={handleChange} placeholder="Initial Position X" />
      <input name="initialPositionY" type="number" value={formData.initialPositionY} onChange={handleChange} placeholder="Initial Position Y" />
      <input name="speed" type="number" value={formData.speed} onChange={handleChange} placeholder="Speed" />
      <input name="direction" value={formData.direction} onChange={handleChange} placeholder="Direction" />
      <button type="submit">Add Pokémon</button>
      
    </form>
  );
};

export default AddPokemon;
