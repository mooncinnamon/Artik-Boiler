module.exports = function(app, fs)
{
    app.get('/',function(req,res){
        res.render('index', {
            title: "Artik Boiler",
            mainTitle: "House Boiler",
            dashboad: true,
            config : false
        })
    });

    app.get('/config', function (req,res) {
        res.render('config',{
            title: "Artik Boiler",
            mainTitle: "House Boiler",
            dashboad: false,
            config : true
        })

    })
}