var fetch = require('node-fetch');
var fs = require('fs');

var utilities =  require('graphql/utilities');
var buildClientSchema = utilities.buildClientSchema;
var introspectionQuery = utilities.introspectionQuery;
var printSchema = utilities.printSchema;

console.log(introspectionQuery);

fetch('https://d17-apollo-server-phil-schneider.c9users.io/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
})
  .then(res => res.json())
  .then(res => {
    console.log(res);
    const schemaString = printSchema(buildClientSchema(res.data));
    fs.writeFileSync('schema.graphql', schemaString);
  });
