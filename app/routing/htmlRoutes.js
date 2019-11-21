module.exports = app => {
    // gets home page
    app.get('/', (req, res) =>{
        res.render('home')
    })

    app.get('/survey',(req, res) => {
        res.sendFile(join(__dirname + '/survey'))
    })
}