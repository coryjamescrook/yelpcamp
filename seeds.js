var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: "The River", 
        image: "https://i.pinimg.com/736x/23/7d/1c/237d1c373caf986e6a972789e674774d--mountain-park-stones.jpg",
        description: "Shaman edison bulb try-hard narwhal bicycle rights deep v keffiyeh art party pitchfork next level poutine. Health goth four dollar toast vice chillwave shoreditch plaid. Kitsch forage disrupt, tofu snackwave knausgaard taxidermy salvia swag banjo viral church-key brunch tilde. Tote bag unicorn live-edge, austin 90's hashtag woke wayfarers taiyaki whatever. Etsy scenester mumblecore unicorn mlkshk. Gochujang venmo everyday carry messenger bag squid intelligentsia jean shorts vegan lo-fi cornhole ugh flexitarian. Next level master cleanse hell of vice iceland truffaut, skateboard knausgaard. Tousled YOLO air plant butcher adaptogen direct trade ugh jianbing deep v mumblecore 3 wolf moon selvage semiotics. Ennui kitsch actually, woke hoodie selvage put a bird on it activated charcoal poutine YOLO."
    },
    {
        name: "The Nest", 
        image: "http://www.ontarioparks.com/parksblog/wp-content/uploads/2017/01/Wabakimi_3904-825x510.jpg",
        description: "Shaman edison bulb try-hard narwhal bicycle rights deep v keffiyeh art party pitchfork next level poutine. Health goth four dollar toast vice chillwave shoreditch plaid. Kitsch forage disrupt, tofu snackwave knausgaard taxidermy salvia swag banjo viral church-key brunch tilde. Tote bag unicorn live-edge, austin 90's hashtag woke wayfarers taiyaki whatever. Etsy scenester mumblecore unicorn mlkshk. Gochujang venmo everyday carry messenger bag squid intelligentsia jean shorts vegan lo-fi cornhole ugh flexitarian. Next level master cleanse hell of vice iceland truffaut, skateboard knausgaard. Tousled YOLO air plant butcher adaptogen direct trade ugh jianbing deep v mumblecore 3 wolf moon selvage semiotics. Ennui kitsch actually, woke hoodie selvage put a bird on it activated charcoal poutine YOLO."
    },
    {
        name: "Hidden Cove", 
        image: "http://dismalscanyon.com/campsites/images/sleeping_water_5177_900px.jpg",
        description: "Shaman edison bulb try-hard narwhal bicycle rights deep v keffiyeh art party pitchfork next level poutine. Health goth four dollar toast vice chillwave shoreditch plaid. Kitsch forage disrupt, tofu snackwave knausgaard taxidermy salvia swag banjo viral church-key brunch tilde. Tote bag unicorn live-edge, austin 90's hashtag woke wayfarers taiyaki whatever. Etsy scenester mumblecore unicorn mlkshk. Gochujang venmo everyday carry messenger bag squid intelligentsia jean shorts vegan lo-fi cornhole ugh flexitarian. Next level master cleanse hell of vice iceland truffaut, skateboard knausgaard. Tousled YOLO air plant butcher adaptogen direct trade ugh jianbing deep v mumblecore 3 wolf moon selvage semiotics. Ennui kitsch actually, woke hoodie selvage put a bird on it activated charcoal poutine YOLO."
    }
];    
    
function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            // add campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("campground added")
                        // create comments
                        Comment.create(
                            {
                                text: "This is a wonderful spot. So peaceful!",
                                author: "Jesus"
                            }, function(err, comment) {
                                if(err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                }
                            });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;