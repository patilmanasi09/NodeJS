// console.log("Hello NodeJS")

const http = require("http")
const port = 5004
const server = http.createServer((req, res) => {
    res.end("Hello from server...")

})

server.listen(port, () => {
    console.log('Server running on http://localhost:${port}')
})