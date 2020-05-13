const app = require('./server');
require('./database');

async function main() {
    await app.listen( process.env.PORT || 3000);
    console.log('Server running on port 3000');
}

main();