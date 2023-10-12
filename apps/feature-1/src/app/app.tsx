// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import {UiCompontent, Navlink} from '@itzorg/ui-compontent';


import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <h1>Feature-1</h1>
    <Navlink></Navlink>
    <UiCompontent></UiCompontent>
      {/* END: routes */}
    </div>

  );
}

export default App;
