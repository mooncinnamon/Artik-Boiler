module.exports = function(app, fs)
{
    app.get('/',function(req,res){
        res.render('index', {
            title: "Artik Boiler",
            mainTitle: "House Boiler",
            item: [['Dashboard', true, 'ti-home', '/'], ['Configuration', false, 'ti-share' , '/config']]
        })
    });

    app.get('/config', function (req,res) {
        res.render('config',{
            title: "Artik Boiler",
            mainTitle: "House Boiler",
            item: [['Dashboard', false, 'ti-home', '/'], ['Configuration', true, 'ti-share' , '/config']]
        })

    })
}