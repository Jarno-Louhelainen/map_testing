var size = 0;
var placement = 'point';

var style_Paavo_2024_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("tulot_per");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(30,0,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.000000 && value <= 4.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(55,0,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4.000000 && value <= 6.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(80,0,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6.000000 && value <= 10.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,0,170,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.000000 && value <= 16.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,0,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16.000000 && value <= 26.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,0,113,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 26.000000 && value <= 57.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(180,0,85,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 57.000000 && value <= 252.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,0,57,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 252.000000 && value <= 1719.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,0,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1719.000000 && value <= 84646.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
