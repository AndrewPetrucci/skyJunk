function getGeometry(googlePayload){
    return JSON.parse(googlePayload).results[0].geometry.location;
}
function getFormattedAddress(googlePayload){
    var temp = JSON.parse(googlePayload).results[0]
    if(temp==undefined) return null;
    return JSON.parse(googlePayload).results[0].formatted_address;
}

function getDate(forecastPayload){
    var date = new Date(forecastPayload.time*1000);
    return date.toDateString();
}

function getTime(forecastPayload){
    var date = new Date(forecastPayload.time*1000);
    return date.toTimeString().split(":")[0];
}

function getDay(forecastPayload){
    var date = new Date(forecastPayload.time*1000);
    return date.toDateString().split(" ")[0];
}

function makeForecast(dailyArray){
    var htmlReslut="";
    for (var i in dailyArray) {
        var temp = dailyArray[i];
        htmlReslut+="<div style=\"display:inline-block;line-height:1;text-align:center;padding-right:20px\">"
            + "<div>" + getDay(temp) + "</div>"
            + "<div style=\"display:inline-block\">" + temp.icon + "</div>"
            + "<div style=\"font-weight:normal;line-height:15px;font-size:13px\">"
                + "<div style=\"display:inline-block;padding-right:5px\">"
                    + "<span style=\"display:inline\">" + temp.temperatureMax + "°" + "</span>"
                + "</div>"
                + "<div style=\"display:inline-block\">"
                    + "<span style=\"display:inline\">" + temp.temperatureMin + "°" + "</span>"
                + "</div>"
            + "</div></div>";
    }
    return "<h3 style=\"text-align:center\">Forecast</h3><div style=\"text-align:center\">" + htmlReslut + "</div>";
}
