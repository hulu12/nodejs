var exec = require('child_process').exec;
var arg1 = 'hello'
var arg2 = 'pang'
exec('python ./python/test.py '+ arg1+' '+arg2+' ',function(error,stdout,stderr){
    if(stdout.length >1){
        console.log('you offer args:',stdout);
    } else {
        console.log('you don\'t offer args');
    }
    if(error) {
        console.info('stderr : '+stderr);
    }
});

console.log('setTimeout(function, milliseconds);');