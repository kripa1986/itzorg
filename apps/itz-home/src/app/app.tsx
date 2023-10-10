// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <h1>ITZ Home</h1>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">ITZ HOME</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for ITZ HOME.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
