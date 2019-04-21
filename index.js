const http = require('http');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

const server = http.createServer(function (request, response) {
    request.addListener('end', function () {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.write(sys.inspect(request));
        response.end();
    });
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}/`);
});
