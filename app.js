const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo</h1> <h4>Message :Success</h4>  <p>version 1.0</p>')
})

app.get('/products', (res, req) => { 
    res.send([
        {
            productid: '101',
            price: 100
        },
        {
            productid: '202',
            price: 200
        }
    ])
})
 app.listen(port, ()=> {
    console.log('Demo is up and listening to port:',{port});
 })

 
