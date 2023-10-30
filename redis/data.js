const client = require('./client');

const scoreBoard = async()=>{
     const cacheValue = await client.get('todos');
     console.log(cacheValue);
     
}
scoreBoard()

