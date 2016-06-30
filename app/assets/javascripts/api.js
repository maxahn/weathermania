jQuery(document).ready(function($) {
  $.ajax({
    url : "http://api.wunderground.com/api/c065b28d30b33f2f/geolookup/conditions/q/IA/Cedar_Rapids.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_f = parsed_json['current_observation']['temp_f'];
      alert("Current temperature in " + location + " is: " + temp_f);
    }
  });

  console.log(params);
});
