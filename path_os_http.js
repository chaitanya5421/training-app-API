// path module
const path = require('path');

// basename, dirname, extname, join, resolve 

console.log(path.basename('/foo/bar/baz/asdf/index.html')); // Output: index.html

console.log(path.basename('/foo/bar/baz/asdf/index.html', '.html')); // Output: index

console.log(path.dirname('/foo/bar/baz/asdf/index.html')); // Output: /foo/bar/baz/asdf

console.log(path.extname('/foo/bar/baz/asdf/index.html')); // Output: .html

console.log(path.join('/foo', 'bar', 'baz/asdf', 'index.html')); // Output: /foo/bar/baz/asdf/index.html

console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')); // Output: /tmp/subfile

// os
const os = require('os');

console.log(os.platform()); // Output: win32
console.log(os.arch()); // Output: x64
console.log(os.totalmem()); // Output: Total memory in bytes
console.log(os.freemem()); // Output: Free memory in bytes
console.log(os.cpus()); // Output: Array of CPU objects


// http
// http module is used to create HTTP servers and clients. It provides methods to handle HTTP requests and responses, as well as to create and manage HTTP servers.

const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});