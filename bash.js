var { pwd, ls, date, echo, cat, head, tail, sort, wc, uniq, curl } = require('./commands');

process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remueve la nueva línea
    cmd = cmd.split(' ')
    switch (cmd[0]) {
        case 'pwd':
            pwd(done)
            break;
        case 'date':
            date(done)
            break
        case 'ls':
            ls(done)
            return
        case 'echo':
            echo(cmd, done)
            break
        case 'cat':
            cat(cmd, done)
            break
        case 'head':
            head(cmd, 6, done)
            break
        case 'tail':
            tail(cmd, done)
            break
        case 'sort':
            sort(cmd, done)
            break
        case 'wc':
            wc(cmd, done)
            break
        case 'uniq':
            uniq(cmd, done)
            break
        case 'curl':
            curl(cmd[1], done)
            break
        default:
            process.stdout.write('You typed: ' + cmd);
    }
    // process.stdout.write('\nprompt > ');
});

function done(output) {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}