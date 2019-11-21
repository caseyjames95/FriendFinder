// Call to path
const path = require('path')

module.exports = function (app) {
    // Get homepage
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
    })
    // Get survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '..', 'public', 'survey.html'))
    })
}
