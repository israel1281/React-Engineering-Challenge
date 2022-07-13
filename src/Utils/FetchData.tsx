import axios from "axios";

const Query = JSON.stringify({
  query: `query{
    transactions{
      date
      amount
      transaction_id
      transaction_status
      type
    }
}`
});

export const getData = async () => {
  const res = await axios.post(
    `https://api-us-west-2.graphcms.com/v2/cl5cv0ond0eo601tbcnyw43ip/master`,
    Query,
    {
      headers: {}
    }
  );

  return res;
};

export const FilterData = (
  text: string,
  setTransactions: any,
  filteredTransactions: any
) => {
  if (!text) {
    setTransactions(filteredTransactions);
    return;
  } else {
    const value = filteredTransactions.filter((transaction: any) => {
      return (
        transaction.type.toLowerCase().includes(text.toLowerCase()) ||
        transaction.transaction_status
          .toLowerCase()
          .includes(text.toLowerCase()) ||
        transaction.amount.toLowerCase().includes(text.toLowerCase())
      );
    });
    setTransactions(value);
  }
};
