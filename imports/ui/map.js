
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './map.html';

Template.map.onRendered(function () {
 	L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';
    var map = L.map('map').setView([56.8264, 9.0190], 12);
    L.tileLayer.provider('OpenStreetMap.BlackAndWhite').addTo(map);
});