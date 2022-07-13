import axios from "axios";

const Query = JSON.stringify({
  query: `query{
    transactions{
        type
        amount
        date
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
