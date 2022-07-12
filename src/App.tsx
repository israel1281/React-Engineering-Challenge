import { FC, memo } from "react";
import { Dashboard } from "./components/Dashboard";

import classes from "./App.module.css";

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <Dashboard />
    </div>
  );
});
