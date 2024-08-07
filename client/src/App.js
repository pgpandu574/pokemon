import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPokemon from './components/AddPokemon';
import ListPokemon from './components/ListPokemon';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<AddPokemon />} />
        <Route path="/list" element={<ListPokemon/>} />
        <Route path="/"      element={<Home/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
































// import React, { useEffect, useState } from 'react'

// function App() {

//   const [backendData, setBackendData] = useState([{}])

//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

//   return (
//       <div>
//           {
//             (typeof backendData.users === 'undefined') ? (
//               <p>Loading ...</p>
//             ):(
//               backendData.users.map((user,i)=>(
//                 <p key={i}>{user}</p>
//               ))
//             )
//           }
//       </div>
//   )
// }
// export default App
