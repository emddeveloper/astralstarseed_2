var app = angular.module("emd-web", ["ngRoute"]);



app.config(function($routeProvider,$locationProvider) {

    $routeProvider

    .when("/", {

        templateUrl : "astralstartseed_blackbox/pages/home.html"

    })

    .when("/tarot", {

        templateUrl : "astralstartseed_blackbox/pages/tarot-content.html"

    })

    .when("/reiki", {

        templateUrl : "astralstartseed_blackbox/pages/reiki-content.html"

    })

    .when("/runes", {

        templateUrl : "astralstartseed_blackbox/pages/runes-content.html"

    })

    .when("/angel", {

        templateUrl : "astralstartseed_blackbox/pages/angel-content.html"

    })

    .when("/aboutus", {

        templateUrl : "astralstartseed_blackbox/pages/aboutus-content.html"

    })

    .when("/contact-us", {

        templateUrl : "astralstartseed_blackbox/pages/contactus-content.html"

    })

    .when("/payment", {

        templateUrl : "astralstartseed_blackbox/pages/payment-content.html"

    })

    .when("/refund", {

        templateUrl : "astralstartseed_blackbox/pages/refund-policy.html"

    })

    .when("/faq", {

        templateUrl : "astralstartseed_blackbox/pages/faq-content.html"

    })

    .when("/numerology", {

        templateUrl : "astralstartseed_blackbox/pages/numerology.html"

    })
    .when("/meditation-candle", {

        templateUrl : "astralstartseed_blackbox/pages/eshop.html"

    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

});

app.controller('emd-controller', function ($scope, $http,$window,$sce) {

  $scope.loader = false;

  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

  $http.get("../astralstartseed_blackbox/data/menu.json")

    .then(function (response) {

      $scope.data = response.data.menu;

    }); //get for menus 

    /*$http.get("https://astralstartseedcms.astralstarseed.com//wp-json/restapi/v1/getdata")

    .then(function (response) {

      $scope.welcometext_cms = $sce.trustAsHtml(response.data[0].content);

    });*/ //get welcome text 
 $scope.tdata1 = "Sanjukta has a phenomenal gift and this coupled with her caring personality and sense of humour makes readings both real and meaningful.She gets it so right and can often advise what actions to take by laying cards on top for more specific questions.Last week, Sanjukta was able to add on an extra service with her pendulum and fine tune on a reading.I have seen Sanjukta for personal readings but also in corporate situations,she really can work the crowd with her quick wit and her guides always seem to be there helping to pass on message to the guest.";
 
  $scope.tdata2 = "I had the best experience having read from her. She is very intuitive and spot on about the traits of a person. She was very kind and patient with my reading and spoke to me as a friend. I will keep updating this platform as and when the time comes but I have a lot of faith in what she has said and am positive of all of it coming true.";
  
  
  
 

  $scope.tdata3 = "Very impressive and close to accurate reading by Sanjukta for me and family.Has helped in some of my very important decision for self and dear ones.Highly recommended from my end to take her help as her hard work and dedication is surely helping lot of us for a smooth ride of our lives.";
  $scope.tdata4 = "Have done a few readings.. Uncanny and and unreal sessions which replicate the inner thought process. Very precise.Very grateful to have found a reader like her. 🙏🏼.";


  $scope.tdata5 = "Sanjukta provided my tarot card reading with 100% accuracy.Her gentle but practical aproach addressed the very issues that were being questioned in my life.I was able to achieve better clarity of my circumstances through her throughtful explanation as well as appreciate the nesessary position I am in at this time in my life.I acknowledge that Sanjukta has divine abilities and I am appreciative for having experiances her intutive gifts.";

 

  $scope.tdata6 = "Amazing! Very...Very...Intuitive. Sanjukta is very precise about what is happening and her predictions are always on target. She's also great to guide you and offers great advice and wisdom and insight in her readings. She definitely made me feel much better... Took the words right out of my mouth. She's well worth it! I could never really believe tarot could be so accurate and know my deepest held feelings or what I was really thinking or going through... Amazing and mind-blowing is all I can say! Truly inspired";

   

  /*Menu active logic  */

  



    $scope.activeHome=function(){

        $scope.home=true,

        $scope.tarot=false,

        $scope.reiki=false,

        $scope.runes=false,

        $scope.angel=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,
        
        $scope.meditationCandle=false,

        $scope.faq=false,
        $scope.numerology =false

    }

    $scope.activeTarot=function(){

        $scope.home=false,
        
        
        $scope.meditationCandle=false,

        $scope.tarot=true,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=false,
        $scope.numerology =false

    }

    $scope.activeNumerology=function(){

        $scope.home=false,
        
        
        $scope.meditationCandle=false,

        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=false,
        $scope.numerology =true

    }

    $scope.activeReiki=function(){

        $scope.home=false,

        $scope.tarot=false,

        
        $scope.meditationCandle=false,
        $scope.reiki=true,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=false,
        $scope.numerology =false

    }

    $scope.activeRunes=function(){

        $scope.home=false,

        
        $scope.meditationCandle=false,
        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=true,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=false,
        $scope.numerology =false

    }

    $scope.activeAboutus=function(){

        $scope.home=false,

        
        $scope.meditationCandle=false,
        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=true,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=false,
        $scope.numerology =false

    }

    $scope.activeContact=function(){

        $scope.home=false,

        
        $scope.meditationCandle=false,
        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=true,

        $scope.payment=false,

        $scope.faq=false,
        $scope.numerology =false

    }

    $scope.activePayment=function(){

        
        $scope.meditationCandle=false,
        $scope.home=false,

        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=true,

        $scope.faq=false,
        $scope.numerology =false

    }
    $scope.activemeditationCandle=function(){

        $scope.home=false,

        $scope.tarot=false,

        $scope.meditationCandle=true,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=false,
        $scope.numerology =false

    }

    $scope.activefaq=function(){

        
        $scope.meditationCandle=false,
        $scope.home=false,

        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=true,
        $scope.numerology =false

    }

    $scope.activeAngel=function(){

        
        $scope.meditationCandle=false,
        $scope.home=false,

        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=true,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=true,
        $scope.numerology =false

    }

    $scope.activeClear=function(){

        
        $scope.meditationCandle=false,
        $scope.home=false,

        $scope.tarot=false,

        $scope.reiki=false,

        $scope.angel=false,

        $scope.runes=false,

        $scope.aboutus=false,

        $scope.contact=false,

        $scope.payment=false,

        $scope.faq=true,
        $scope.numerology =false

    }

    $scope.top=function(){

        $window.scrollTo(0, 0, 1000);

    }

    /*Emails and Phone Numbers  */

    $scope.email1="astralstarseed@gmail.com",

    $scope.email2="sanjukta.tarot.mail@gmail.com",

    $scope.mobile1="+918420347137",

    $scope.mobile2="+918420347137",

    $scope.whatsapp1="+918420347137",

  /*POST service starts form contact form */
  $scope.response = {
      "msg":"",
      "mailsent":false,
      "error":false
  };
  $scope.contactParams={
      "name":null,
      "phone":null,
      "subject":null,
      "message":null,
      "email":null
  }
  $scope.submitContactForm = function () {

    $scope.loader = true;

    $http.post("./astralstartseed_blackbox/contactform.php", {

        'name': $scope.contactParams.name

        , 'email': $scope.contactParams.email

        , 'phone': $scope.contactParams.phone

        , 'subject': $scope.contactParams.subject

        , 'message': $scope.contactParams.message

    }).then(function (response) {
        $scope.response=response.data
        console.log("Data Inserted Successfully");
        console.log(response)
    }, function (response) {
        $scope.response=response.data
      console.log("Sorry! Data Couldn't be inserted!");
      console.log(response)

    });

}
$scope.sessionBookingParams={
    "name":'',
    "phone":null,
    "subject":'Session Booking',
    "message":'Please contact me',
    "email":null
}
$scope.booksession = function () {

    $scope.loader = true;

    $http.post("./astralstartseed_blackbox/contactform.php", { 'email': $scope.sessionBookingParams.email

        , 'phone': $scope.sessionBookingParams.phone 
        , 'name': '' 
        , 'subject': 'Session Booking'
        , 'message': 'Please contact me'

    }).then(function (response) {
        $scope.sessionResponse=response.data
        console.log("Data Inserted Successfully");
        console.log(response)
    }, function (response) {
        $scope.sessionResponse=response.data
      console.log("Sorry! Data Couldn't be inserted!");
      console.log(response)

    });

}

$scope.candles=[
    {
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f1.jpeg"
    },
    {
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f2.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f3.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f4.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f5.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f6.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f7.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f8.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f9.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f10.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f11.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f12.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f13.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f14.jpeg"
    },{
        "name":"Meditation Candle",
        "desc":"Scented candles for meditation",
        "price":79,
        "url":"https://www.etsy.com/shop/LightworkersStore",
        "image":"f15.jpeg"
    }
]



});//controller closed here





