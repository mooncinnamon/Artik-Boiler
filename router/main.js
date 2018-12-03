module.exports = function(app, fs)
{
    app.get('/',function(req,res){
        res.render('index', {
            title: "Artik Boiler",
            mainTitle: "House Boiler"
        })
    });
}