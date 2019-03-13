var zipFolder = require('zip-folder');

zipFolder('dist', './dist.zip', function(err) {
    if (err) {
        console.log('oh no!', err);
    } else {
        console.log('EXCELLENT');
    }
});