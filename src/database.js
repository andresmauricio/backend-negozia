const mongoose = require('mongoose');
const URL_MONGO = 'mongodb+srv://andres:andres@cluster0-knne9.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(e => console.error('[DATABASE]', e));