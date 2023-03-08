import http from 'http';
import fetch from 'node-fetch';
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
import chalk from 'chalk';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  geraUsuarios(2)
});


function geraUsuarios(n){
      const url= `https://randomuser.me/api/?results=${n}`
      let options = {method: 'GET'};
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          for(let i=0; i<n; i++){
            console.log(chalk.red(json.results[i].name.first+' '+json.results[i].name.last))
          }
        })
        .catch(err => console.error('error:' + err));
}