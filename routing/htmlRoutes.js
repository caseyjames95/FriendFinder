module.exports = app => {
    // gets home page
    app.get('/', (req, res) =>{
        res.render('./public')
    })

    app.get('/survey', (req, res) => {
        res.render('./public/survey')
    })
}