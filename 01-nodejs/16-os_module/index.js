// import os module

const os = require('os');

// platform() - Returns a string identifying the operating system platform. The value is set at compile time.
// Possible values are 'aix', darwin', freebsd', "linux', 'openbsd, 'sunos', and 'win32 .
console.log(os.platform());

// arch() Retums the operating system CPU architecture for which the Node.js binary was compiled. Possible
// values are 'arm', 'arm64', 'ja32, 'mips', 'mipsel', 'ppc', 'ppc64', 's390, 's390x', 'x32', and 'x64".
console.log(os.arch());

// cpus() returns a array of object containing information about each logical CPU core
console.log(os.cpus());

// hostname() returns the hostname of the operating system as a string
console.log(os.hostname());

// homedir()- Returns the string path of the current user's home directory.
console.log(os.homedir());

// networkInterfaces() - Returns an object containing network interfaces that have been assigned a network address.
console.log(os.networkInterfaces());

// freemem()-Returns the amount of free system memory in bytes as an integer.
console.log(os.freemem());

// totalmem()-Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());