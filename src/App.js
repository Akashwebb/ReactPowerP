import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import ParentComponent from './component/props/Parent';
import Provider from './component/context/provider';
import Consumer1 from './component/context/consumer1';
import Consumer2 from './component/context/consumer2';
import { FieldLevelValidationExample } from './component/formic/formic';
import HookFormDoc from './component/formic/another';
import Login from './component/formic/login';
import Star from './component/props/star';
import Design from './component/Design/design';
import DispalyData from './component/pagination/page2';
import PopulationGraph from './component/Chart/chart';
import SystemAdmin from './component/popup/popup';
import PaginatorBasicDemo from './component/pagination/Page3Prime';
import Logic from './component/props/logix';
function App() {
  return (
    <div >
       <h2 style={{textAlign:'center'}}>Welcome to React</h2>
       <Provider>
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/> } />
       <Route path="/register" element={<FieldLevelValidationExample/> } />
       <Route path="/hook" element={<HookFormDoc/> } />
       <Route path="/parent" element={<ParentComponent/> } />
       <Route path="/consumer1" element={<Consumer1/> } />
       <Route path="/consumer2" element={<Consumer2/> } />
       <Route path="/star" element={ <Star/> } />
       <Route path="/design" element={ <Design/> } />
       <Route path="/display" element={ <DispalyData/> } />
       <Route path="page" element={ <PaginatorBasicDemo /> }  />
        <Route path="/graph" element={ <PopulationGraph/> } />
       <Route path="/popup" element={ <SystemAdmin/> } />
       <Route path="/logic" element={ <Logic/> } />

       </Routes>
       
       </BrowserRouter>
       </Provider>
       
    </div>
  );
}

export default App;
