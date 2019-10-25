
var addr = "dev.yourserver.yourorg.tld"
var port = "5001"

function Get(whateverUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",whateverUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var whatever_list_obj = JSON.parse(Get("http://" + "localhost" + ":" + "8000" + "/api/installations/?format=json"));
whatever_qty = whatever_list_obj.length;
console.log(whatever_list_obj);
for (var i = 0; i < whatever_qty; i++) {
    console.log(whatever_list_obj[i]);
}


var infos = [];
var locations = whatever_list_obj;

function initialize() {

  var myOptions = {
    center: new google.maps.LatLng(47.3763166, 8.5454812),
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  var map = new google.maps.Map(document.getElementById("map"),
    myOptions);

  setMarkers(map, locations)

}

function setMarkers(map, locations) {

  var marker, i

  for (i = 0; i < locations.length; i++) {

    var name = locations[i].name
    var lat = locations[i].lat_coordinates
    var long = locations[i].lon_coordinates
    var add = "Institution: " + locations[i].name + "<br/>" + "Number of Users: " + locations[i].number_of_users + "<br/>" + "Storage Capacity: " + locations[i].number_of_terabytes + "<br/>"

    latlngset = new google.maps.LatLng(lat, long);

    var marker = new google.maps.Marker({
      map: map,
      title: name,
      position: latlngset
    });
    map.setCenter(marker.getPosition())


    var content = add

    var infowindow = new google.maps.InfoWindow()


    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
      return function () {

        /* close the previous info-window */
        closeInfos();

        infowindow.setContent(content);
        infowindow.open(map, marker);

        /* keep the handle, in order to close it on next click event */
        infos[0] = infowindow;

      };
    })(marker, content, infowindow));

  }
}

function closeInfos() {

  if (infos.length > 0) {

    /* detach the info-window from the marker ... undocumented in the API docs */
    infos[0].set("marker", null);

    /* and close it */
    infos[0].close();

    /* blank the array */
    infos.length = 0;
  }
}