  var imageKeyword="";

    function getData(){
    
    var request = new XMLHttpRequest()

    request.open('GET', 'https://www.boredapi.com/api/activity/', true);
    request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
  
    //console.log(data);

    $('.root').html(data.activity);
    imageKeyword = data.activity.split(" ").splice(-1);
    $("#clipart_image").attr("src","https://source.unsplash.com/500x500/?"+imageKeyword);
   
}

request.send()

}

/*    function getImage(){
    
    var request = new XMLHttpRequest()

    request.open('GET', 'https://freesvgclipart.com/wp-json/clipart/api?num=1&query='+imageKeyword, true);
    request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
  
    //console.log(data);

    //alert(data.items[0].pngurl[1]);

    $("#clipart_image").attr("src",data.items[0].pngurl[1]);

}

request.send()

}*/