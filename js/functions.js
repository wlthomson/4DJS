export const helloWorld = () => {
  console.log("Hello world!");
};

export const helloAwait = async () => {
  let timeOut = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello await!"), 1000);
  });
  let result = await timeOut;
  console.log(result);
};

export const helloGet = () => {
  let http = new HTTPClient();
  let resp = http.get(
    "https://cat-fact.herokuapp.com/facts/5894af975cdc7400113ef7f9"
  );
  console.log(resp);
};
