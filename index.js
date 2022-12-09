function myFetch(URL) {
  const req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      return req.response;
    }
  };
  req.open("GET", URL);
  req.responseType = "document";
  req.send();
}

const URL = "https://example.com";

myFetch(URL)
  .then((result) => {
    console.log(result);
  })
  .then((error) => {
    console.log(error);
  });
