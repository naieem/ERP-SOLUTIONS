const exec = require('child_process').exec;
var zipFolder = require('zip-folder');

init();

function init() {
    console.log('Project is now in building state');
    exec('npm run build', (code, stdout, stderr) => {
        console.log('returned code is ' + code);
        console.log('returned output is ' + stdout);
        console.log('returned error is ' + stderr);
        console.log('Build complete');
        zipFolder('dist', './dist.zip', (err) => {
            if (err) {
                console.log('oh no!', err);
            } else {
                console.log('file zipping complete');

            }
        });
    });
}