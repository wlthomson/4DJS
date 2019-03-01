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
