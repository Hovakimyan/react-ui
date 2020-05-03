const fs = require('fs')
const _package = require('../package.json')

const updateVersion = version =>
    version
        .split('.')
        .reduce((vers, num, idx, arr) => {
            if (idx === arr.length - 1) {
                return [...vers, parseInt(num) + 1]
            }
            return [...vers, parseInt(num)]
        }, [])
        .join('.')

_package.version = updateVersion(_package.version)

fs.writeFile('package.json', JSON.stringify(_package, null, 2), err => {
    if (err) {
        return console.error(err)
    }
    console.log('package json version updated')
})
