import { Link } from 'react-router-dom';
import styles from './ui-compontent.module.scss';
import Button from '@mui/material/Button';
/* eslint-disable-next-line */
export interface UiCompontentProps {}

export function UiCompontent(props: UiCompontentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompontent!</h1>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}
export function Navlink(props: UiCompontentProps) {
  return (
    <div role="navigation">
        <ul>
          <li>
            {/* <Link to="http://localhost:4200/">Home</Link> */}
            <Link to="https://cozy-conkies-5a7cfd.netlify.app/">Home</Link>
          </li>
          <li>
          {/* <Link to="http://localhost:4202/">Featue-1</Link> */}
            <Link to="https://astonishing-seahorse-c09d4f.netlify.app/">Featue-1</Link>
          </li>
          <li>
          {/* <Link to="http://localhost:4201/">Featue-2</Link> */}
            <Link to="https://dreamy-daffodil-fc1c73.netlify.app/">Featue-2</Link>
          </li>
        </ul>
      </div>
  );
}

