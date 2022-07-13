import { FC, memo } from "react";

import { SearchIcon } from "./icons/SearchIcon";
import { DepositIcon } from "./icons/DepositIcon";
import { WithdrawalIcon } from "./icons/WithdrawalIcon";
import { getData } from "../Utils/FetchData";

import classes from "./Dashboard.module.css";
import React from "react";

interface Props {
  className?: string;
  classes?: {
    inputBox: string;
    searchicon: string;
    input: string;
    filters: string;
    filtersContainer: string;
    transactionDetails: string;
    transactionDate: string;
    transactionsContent: string;
    icon: string;
    iconIcon: string;
    details1: string;
  };
}
export const Dashboard: FC<Props> = memo(function Dashboard(props = {}) {
  const [transactions, setTransactions] = React.useState<any>([]);
  const [filteredTransactions, setFilteredTransactions] = React.useState<any>(
    []
  );
  const [selectedDate, setSelectedDate] = React.useState<any>();
  const [selectedType, setSelectedType] = React.useState<string>("");
  const [selectedStatus, setSelectedStatus] = React.useState<string>("");

  React.useEffect(() => {
    getData()
      .then((res) => {
        setTransactions(res.data.data.transactions);
        setFilteredTransactions(res.data.data.transactions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <div
        className={`${classes.transactionDetails} ${
          props.classes?.transactionDetails || ""
        }`}
      >
        {transactions.map((transaction: any, index: any) => {
          return (
            <>
              <span
                key={index}
                className={`${classes.transactionDate} ${
                  props.classes?.transactionDate || ""
                }`}
              >
                {new Date(transaction.date).toDateString()}
              </span>
              <div
                className={`${classes.transactionsContent} ${
                  props.classes?.transactionsContent || ""
                }`}
              >
                <div className={`${classes.icon} ${props.classes?.icon || ""}`}>
                  <WithdrawalIcon
                    className={`${classes.iconIcon} ${
                      props.classes?.iconIcon || ""
                    }`}
                  />
                </div>
                <div
                  className={`${classes.details1} ${
                    props.classes?.details1 || ""
                  }`}
                >
                  <span
                    style={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: "Quicksand"
                    }}
                  >
                    {transaction.type}
                  </span>
                  <span
                    style={{
                      color: "#000",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      fontFamily: "Quicksand"
                    }}
                  >
                    07:15 PM
                  </span>
                </div>
                <span
                  style={{
                    color: "#d73d3d",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Quicksand",
                    textTransform: "uppercase",
                    margin: "auto 0px"
                  }}
                >
                  {transaction.amount}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
});
