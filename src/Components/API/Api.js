// import React from "react";
// import axios from "axios";

// import './Api.css'

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { data: {}, name: "", homeplanet: "", species: "" };
//     }



//     fetchStarwars = () => {
//         axios
//             .get("https://swapi.co/api/people/3/")
//             .then(response => {
//                 let results = response.data
//                 let x = results.homeworld;

//                 this.setState({ data: results, name: results.name, isLoading: false });
//                 return axios.get(x)
//             })

//             .then(results => {
//                 this.setState({ homeplanet: results.data.name });
//             });

//     }

//     componentDidMount() {
//         this.fetchStarwars();
//     }

//     render() {
//         console.log(this.state);
//         return (
//             <div className="App">
//                 <div className="cards">
//                     <span>{this.state.name}</span>
//                     <div>{this.state.homeplanet}</div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default App







