import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <select onChange={(e) => setSelectedUser(e.target.value)}>
        <option>Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.pokemonOwnerName}
          </option>
        ))}
      </select>
      {selectedUser && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Pokemon Owner Name</th>
                <th>Pokemon Name</th>
                <th>Pokemon Ability</th>
                <th>Initial Position X</th>
                <th>Initial Position Y</th>
                <th>Speed</th>
                <th>Direction</th>
              </tr>
            </thead>
            <tbody>
              {[users.find((user) => user.id === parseInt(selectedUser))].map(
                (pokemon, index) => (
                  <tr key={index}>
                    <td>{pokemon.pokemonOwnerName}</td>
                    <td>{pokemon.pokemonName}</td>
                    <td>{pokemon.pokemonAbility}</td>
                    <td>{pokemon.initialPositionX}</td>
                    <td>{pokemon.initialPositionY}</td>
                    <td>{pokemon.speed}</td>
                    <td>{pokemon.direction}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
