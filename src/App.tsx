import { FC, memo } from 'react';

import classes from './App.module.css';
import { IPhone11ProX1 } from './components/IPhone11ProX1';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <IPhone11ProX1 />
    </div>
  );
});
