var apiKey= "6f9813872a14472ab89dd98413980828" ;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?" + "api-key=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
})
