// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

import {UiCompontent, Navlink} from '@itzorg/ui-compontent';


export function App() {
  return (
    <div>
      <h1>ITZ Home</h1>
      <Navlink></Navlink>
      <UiCompontent></UiCompontent>
      
      {/* END: routes */}
    </div>
  );
}

export default App;
