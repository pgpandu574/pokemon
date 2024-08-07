import React, { useState, useEffect } from "react";
import axios from "axios";

const ListPokemon = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  const handleEdit = (index) => {};
  const handleDelete = async (index) => {
    const userId = users[index].id;
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      const updatedUsers = users.filter((user, i) => i !== index);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const handleAdd = (index) => {};

  return (
    <div>
      <h2>List of Pokémon Users</h2>
      <button
        onClick={() => {
          axios
            .delete("http://localhost:5000/usersall")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }}
      >
        Delete All
      </button>

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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.pokemonOwnerName}</td>
              <td>{user.pokemonName}</td>
              <td>{user.pokemonAbility}</td>
              <td>{user.initialPositionX}</td>
              <td>{user.initialPositionY}</td>
              <td>{user.speed}</td>
              <td>{user.direction}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleAdd(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPokemon;
