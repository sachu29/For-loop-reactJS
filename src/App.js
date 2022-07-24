import React from "react";
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Home/>
    
  );
}

export default App;




// import "./styles.css";

// const ListComponent = () => {
  
//   const card = [
//     { TAT: 15, count: 1500, msg: "Process Message" },
//     { TAT: 15, count: 1500, msg: " Message" },
//     { TAT: 15, count: 1500, msg: "Process Message" },
//     { TAT: 15, count: 1500, msg: "Process " },
//     { TAT: 15, count: 1500, msg: "Process Message" },
//     { TAT: 15, count: 1500, msg: " Message" }
//   ];
//   return (
//     <React.Fragment>
      

//       {card.map((card) => (
//         <div class="card">
//           <img
//             class="info"
//             width="20"
//             src="./Images/icon-info.png"
//             alt="Info icon"
//           />
//           <div class="tat">
//             <img width="20" src="./Images/icon-time.png" alt="Time" />
//             <span>TAT</span>
//             <div class="blue-bar">
//               <span class="progress clr-blue"></span>
//               {card.TAT}
//             </div>
//           </div>
//           <div class="count">
//             <img width="20" src="./Images/icon-graph.png" alt="Time" />
//             <span>Count</span>
//             <div class="yellow-bar">
//               <span class="progress primary-clr"></span>
//               {card.count}
//             </div>
//           </div>
//           <p class="status">{card.msg}</p>
//         </div>
//       ))}

//       <div class="card">
//         <img
//           class="info"
//           width="20"
//           src="./Images/icon-info.png"
//           alt="Info icon"
//         />
//         <div class="tat">
//           <img width="20" src="./Images/icon-time.png" alt="Time" />
//           <span>TAT</span>
//           <div class="blue-bar">
//             <span class="progress clr-blue"></span>
//             15
//           </div>
//         </div>
//         <div class="count">
//           <img width="20" src="./Images/icon-graph.png" alt="Time" />
//           <span>Count</span>
//           <div class="yellow-bar">
//             <span class="progress primary-clr"></span>
//             1500
//           </div>
//         </div>
//         <p class="status">Process Message</p>
//       </div>
//     </React.Fragment>
//   );
// };

// export default function App() {
//   return (
//     <div className="App">
//       <Home/>
//       <ListComponent />
//     </div>
//   );
// }

