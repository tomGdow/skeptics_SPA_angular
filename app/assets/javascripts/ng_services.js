'use strict';

/* Services */

angular.module('myApp.services', []).
  value('version', '0.1').factory('myService', function() {

        return {
            foo: function() {
                alert("I'm a foo!");
            }
        };

    }).factory('imgService', function() {
        return {
            imgBanks: {
                "imageSource"  :  "001_banks.jpg",
                "imageAltDesc" :  "Picture of Gordon Banks",
                "captionText"  :  "Gordon Banks",
                "imageId"      :  "gordon-banks"
            },

            imgPele: {
                "imageSource"  :  "103_pele.jpg",
                "imageAltDesc" :  "Picture of Pele",
                "captionText"  :  "Pele",
                "imageId"      :  "pele-image"
            },

            imgSchillachi: {
                "imageSource"  :  "109_schillaci.jpg",
                "imageAltDesc" :  "Picture of Salvadore Schillachi",
                "captionText"  :  "Schillachi",
                "imageId"      :  "schillachi-italy"
            }
        };
    }).factory('chartsService', function() {
        return {
            dataOne : [40,4,50,15,16,33,52,20],
            dataTwo : [65,22,33,70,16,43,80,61],
            dataThree : [90,4,40,60,13,33,2,20],
            dataYears : [2012,2013,2014]

        };
    }).factory('flexsliderService', function() {
        return {
            flexdata:[

                ["assets/marie_curie.jpg", "Marie Curie"],
                ["assets/watson_golden_ratio.jpg", "James Watson"],
                ["assets/popper_golden_ratio.jpg", "Karl Popper"],
                ["assets/rutherford_golden_ratio.jpg", "Ernst Rutherford"],
                ["assets/lise_meitner_golden_ratio.jpg", "Lise Meitner"],
                ["assets/dorothy_hodgkin_golden_ratio.jpg", "Dorothy Hodgkin"]

            ]
        };
    }).factory('dublinSliderService', function() {
        return {
            dublinSliderData:[
                {"src": "dublinzz.jpg ", "desc": "College Green","longdesc":"College Green Dublin, around 1961 (Charles Cushman Collection)","copyright": "86157-942. Copyright Indiana University Archive"},
                {"src": "dublinee.jpg ", "desc": "Lord Edward Street", "longdesc":"Lord Edward Street Dublin, around 1961 (Charles Cushman Collection)","copyright": "0008615e-942. Copyright Indiana University Archive"},
                {"src": "dublincc.jpg ", "desc": "Parliment Street","longdesc":"Parliment Street Dublin, around 1961 (Charles Cushman Collection)","copyright": "0008615c-942. Copyright Indiana University Archive"},
                {"src": "dublinaa.jpg ", "desc": "O Connell Bridge","longdesc":"O Connell Bridge Dublin, around 1961 (Charles Cushman Collection)","copyright": "0008615a-942. Copyright Indiana University Archive"},
                {"src": "dublinbb.jpg ", "desc": "Dawson Street","longdesc":"Dawson Street Dublin, around 1963 (Charles Cushman collection)","copyright": "0008615b-942. Copyright Indiana University Archive"}

            ]
        };
    }).factory('videoService', function() {
        return {
            oceanVideo:[
                {"mp4":"http://video-js.zencoder.com/oceans-clip.mp4"},
                {"webm": "http://video-js.zencoder.com/oceans-clip.webm"},
                {"ogg": "http://video-js.zencoder.com/oceans-clip.ogv"}
            ],

            earthAsDotVideo:[
                {"mp4":"http://www.videogular.com/assets/videos/videogular.mp4"},
                {"webm": "http://www.videogular.com/assets/videos/videogular.webm"},
                {"ogg": "http://www.videogular.com/assets/videos/videogular.ogg"}
        ]
        };
    });

