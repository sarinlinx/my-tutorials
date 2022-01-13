// const fs = require('fs');
const http = require('http')
const url = require('url')
    // var adr = 'http://localhost:8080/default.htm?year=2017&month=february'
    // var p = url.parse(req.url, true)

/*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);

// SERVER
const server = http.createServer((req, res) => {
    // const queryVal = url.parse(req.url, true)
    // console.log(queryVal)
    // console.log(`queryVal is: ${queryVal.query.id}`)
    // console.log(`pathname is: ${queryVal.pathname}`)

    // use the url module and .parse property to extract the current URL being viewed.
    // Destruture
    // query is the string after the page name. For example: id: '1'. This appears in the URL as: /product?id=1
    // pathname is the page name: /product
    const { query, pathname } = url.parse(req.url, true)


    console.log(query)
    console.log(pathname)
        // console.log(`query value is: ${query.query}`)
        // if (pathname === '/') {
        //   res.writeHead(200, { 'Content-type': 'text/html' })
        //   console.log(p)
        //   res.end('Overview page')
        // } else {
        //   res.writeHead(404)
        //   res.end('Page not found')
        // }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
})