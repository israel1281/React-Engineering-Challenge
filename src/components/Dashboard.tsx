import { FC, memo } from "react";

import { SearchIcon } from "./icons/SearchIcon";
import { DepositIcon } from "./icons/DepositIcon";
import { WithdrawalIcon } from "./icons/WithdrawalIcon";

import classes from "./Dashboard.module.css";

interface Props {
  className?: string;
  classes?: {
    inputBox: string;
    searchicon: string;
    input: string;
    filters: string;
    filtersContainer: string;
  };
}
export const Dashboard: FC<Props> = memo(function IPhone11ProX1(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <div className={`${classes.inputBox} ${props.classes?.inputBox || ""}`}>
        <SearchIcon
          className={`${classes.searchicon} ${props.classes?.searchicon || ""}`}
        />
        <input
          className={`${classes.input} ${props.classes?.input || ""}`}
          placeholder="Search for transactions"
        />
      </div>
      <div className={`${classes.filters} ${props.classes?.filters || ""}`}>
        Filters
      </div>
      <div
        className={`${classes.filtersContainer} ${
          props.classes?.filtersContainer || ""
        }`}
      >
        <button>Withdrawal</button>
        <button>Deposit</button>
        <button>Loan</button>
      </div>
    </div>
  );
});
