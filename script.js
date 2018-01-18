function initMap() {
    var cardinalSolutions = {lat: 35.227123, lng: -80.84620};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: cardinalSolutions
    });
    var marker = new google.maps.Marker({
        position: cardinalSolutions,
        map: map
    });
}