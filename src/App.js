// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
// import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css';  
import { TabView, TabPanel } from 'primereact/tabview';
        

export default function App () {
  return (
    <div className='card' >
      <TabView>
        <TabPanel header="About me">
        <p className="m-0">
            I am a third year University of Toronto student, majoring in Applied Statistics and minoring in Computer Science and Mathematics.
        </p>
        </TabPanel>
        <TabPanel header="My Portfolio"></TabPanel>
        <TabPanel header="Experience"></TabPanel>
      </TabView>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

