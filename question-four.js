var server_echo;
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};
fetch('/echo/', {
  method: 'post',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  body:
    'json=' +
    encodeURIComponent(JSON.stringify(json.json)) +
    '&delay=' +
    json.delay,
})
  .then(function (response) {
    server_echo = response.json().echo;
    /** we must check if response is not undefined or null
     * to avoid errors in converting reqponse to json in case of request error */
    return response.json();
    /**
     * In above two lines, consuming reponse.json() twice will cause an error
     * "body stream already read error" because the response body is already read
     * and the stream is closed.
     * So, we need to consume the response body only once or use reponse.clone() method
     */
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

server_echo.forEach(element => console.log(element));
/** above line will cause error
 * TypeError: Cannot read properties of undefined (reading 'forEach')
 * because fetch is async and server_echo is undefined at this point
 * since above line is executed before the fetch is completed
 */
