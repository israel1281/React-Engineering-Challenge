import axios from "axios";

const getData = () => {
  const data = JSON.stringify({
    query: `query{
    transactions{
      date
      amount
      type
      status
    }
}`,
    variables: {}
  });

  const config = {
    method: "post",
    url:
      "https://api-us-west-2.graphcms.com/v2/cl5cv0ond0eo601tbcnyw43ip/master",
    headers: {
      "Content-Type": "application/json"
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
