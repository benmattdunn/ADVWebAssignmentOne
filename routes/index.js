var express = require('express');
var router = express.Router();
var showSubContainer = 'false';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {   title: 'Ben Matt Dunn',
                            message: 'Ben Dunn is currently a student at Georgian enrolled in the COPR program, \n' +

        'Currently working within the aerospace field as a scientific programmer, specifically within the optical branch and have considerable experience linking micro controllers to computers to control devices that range from spectrometers, spectrographs, and scientific light sources'+
        'Previously attaining a BA of psychology from Laurentian University. Having achieved excellence in mathematics and calculus as side courses, learning a generalized knowledge base that includes and is not limited to English studies, basic chemistry, biology and research methods.'+
        'Primary languages known include: Labview, C, C++, C#, Java'+
        'While secondary languages include: Html, Php, SQL'
                            +'\n',

        firstDiv: true,
        secondDiv: false,
        pictureLead: true
    });
});


module.exports = router;
