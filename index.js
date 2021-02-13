// Modules
const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

// Expected here; serve static files from public dir
const staticDirPath = path.join(__dirname, 'public');

// Init Koa.js server
const server = new Koa();

// Mount the middleware
server.use(serve(staticDirPath));

// Run Koa.js server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server Listening on PORT ${PORT} 🚀 ..`));