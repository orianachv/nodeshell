var fs = require('fs')
var request = require('request')

function pwd(done) {
    done(process.env.OLDPWD)
}
function ls(done) {
    var output = ''
    fs.readdir('.', function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            output += (file.toString() + "\n");
        })
        done(output);
    });
}

function date(done) {
    done(Date());
}

function echo(cmd, done) {
    for (var i = 1; i < cmd.length; i++) {
        done(cmd[i] + ' ')
    }
}

function cat(file, done) {
    for (var i = 1; i < file.length; i++) {
        fs.readFile(`./${file[i]}`, function (err, data) {
            if (err) throw err;
            done(data.toString())
        })
    }
}

function head(file, num = 10, done) {
    var output = ''
    for (var i = 1; i < file.length; i++) {
        fs.readFile(`./${file[i]}`, function (err, data) {
            if (err) throw err;
            data = data.toString().split('\n')
            process.stdout.write('\n')
            for (var i = 0; i < num; i++) {
                output += (data[i] + '\n')
            }
            done(output)
        })
    }
}

function tail(file, done) {
    var output = ''
    for (var i = 1; i < file.length; i++) {
        fs.readFile(`./${file[i]}`, function (err, data) {
            if (err) throw err;
            data = data.toString().split('\n')
            process.stdout.write('\n')
            for (var i = data.length - 6; i < data.length; i++) {
                output += (data[i] + '\n')
            }
            done(output)
        })
    }
}

function sort(file, done) {
    var output = ''
    for (var i = 1; i < file.length; i++) {
        fs.readFile(`./${file[i]}`, function (err, data) {
            if (err) throw err;
            data = data.toString().split('\n').sort()
            for (var i = 0; i < data.length; i++) {
                output += (data[i] + '\n')
            }
            done(output)
        })
    }
}

function wc(file, done) {
    for (var i = 1; i < file.length; i++) {
        fs.readFile(`./${file[i]}`, function (err, data) {
            if (err) throw err;
            data = data.toString().split('\n')
            length = data.length - 1
            done(length.toString())
        })
    }
}

function uniq(file, done) {
    var output = ''
    for (var i = 1; i < file.length; i++) {
        fs.readFile(`./${file[i]}`, function (err, data) {
            if (err) throw err;
            data = data.toString().split('\n').sort()
            for (var i = 0; i < data.length; i++) {
                if (data[i] !== data[i + 1])
                    output += (data[i] + '\n')
            }
            done(output)
        })
    }
}

function curl(url, done) {
    request.get(`http://${url}`, function (error, response, body) {
        done(body + '\n')
    })
}

module.exports = {
    pwd,
    ls,
    date,
    echo,
    cat,
    head,
    tail,
    sort,
    wc,
    uniq,
    curl
}   
