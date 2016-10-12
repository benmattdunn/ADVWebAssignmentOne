/*
Created by ben dunn
oct 3, 2016

General index router and request functions.

*/



var express = require('express');
var router = express.Router();
var showSubContainer = 'false';

/* Get Home Page */
router.get('/', function(req, res, next) {
    res.render('index', {   WStitle: 'Ben Matt Dunn',
        JumboTitle: 'Welcome~!',
        JumboText: 'Welcome to mysite, here I post work projects and such (not really Rich, but this is a sample example for' +
        'coding purposes, I will definitivily create a website in the future, but once I know enough to actually create a great' +
        'working one)',
        JumboButtonLink: '/aboutMe',
        JumboButtonLinkText: 'About Me'
    });
});
/* --> just notes for quick reference.
 JumboTitle -> string
 JumboText -> string
 JumboButtonLink -> string <must be a valid address ->
 JumboButtonLinkText -> String (should link to the name of the valid address page)



 */



/* GET aboutMe page. */
router.get('/aboutMe', function(req, res, next) {
    res.render('aboutMe', {   WStitle: 'Ben Matt Dunn',
        messageSimpleDev: 'Ben Dunn is currently a student at Georgian enrolled in the COPR program,' +

        'Currently working within the aerospace field as a scientific programmer, specifically within the optical branch and have considerable experience linking micro controllers to computers to control devices that range from spectrometers, spectrographs, and scientific light sources'+
        'Previously attaining a BA of psychology from Laurentian University. Having achieved excellence in mathematics and calculus as side courses, learning a generalized knowledge base that includes and is not limited to English studies, basic chemistry, biology and research methods.'+
        'Primary languages known include: Labview, C, C++, C#, Java' +
        'Secondary languages include: Html, Php, SQL',
        firstDiv: true,
        pictureLead: true
    });
});

/* Get contact page */
router.get('/contact', function(req, res, next) {
    res.render('contact', {   WStitle: 'Ben Matt Dunn',
        contactVisable: true
    });
});

/*get projects page */
router.get('/projectsStart', function(req, res, next) {
    res.render('projectsStart', {   WStitle: 'Ben Matt Dunn',
        carouselTitleVisable: false,
        carouselTitle: ''
    });
});

/* get services page */
router.get('/services', function(req, res, next){
    res.render('services', {
        WStitle: 'Ben Matt Dunn'
    });

});



module.exports = router;
