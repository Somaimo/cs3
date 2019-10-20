var infos = [];
var locations = [
  ['ETH Zürich', 47.3763166, 8.5454812, 'Beautiful Zürich'],
  ['EPFL', 46.3730598, 6.8214708, 'Beautiful Lausanne'],
  ['University of Rome', 41.9037666, 12.5122497, 'Beautiful Rome'],
  ];

  function initialize() {

    var myOptions = {
      center: new google.maps.LatLng(47.3763166, 8.5454812),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);

    setMarkers(map,locations)

  }

  function setMarkers(map,locations){

      var marker, i

for (i = 0; i < locations.length; i++)
 {  

 var loan = locations[i][0]
 var lat = locations[i][1]
 var long = locations[i][2]
 var add =  locations[i][3]

 latlngset = new google.maps.LatLng(lat, long);

  var marker = new google.maps.Marker({  
          map: map, title: loan , position: latlngset  
        });
        map.setCenter(marker.getPosition())


        var content = "Institute: " + loan + "<br/>" +  '</h3>' + "Note: " + add     

  var infowindow = new google.maps.InfoWindow()
        
       
google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
        
        /* close the previous info-window */
       closeInfos();
        
           infowindow.setContent(content);
           infowindow.open(map,marker);
        
        /* keep the handle, in order to close it on next click event */
   infos[0]=infowindow;
        
        };
    })(marker,content,infowindow)); 

  }
  }

function closeInfos(){
 
   if(infos.length > 0){
 
      /* detach the info-window from the marker ... undocumented in the API docs */
      infos[0].set("marker", null);
 
      /* and close it */
      infos[0].close();
 
      /* blank the array */
      infos.length = 0;
   }
}
