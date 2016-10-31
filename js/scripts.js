//business logic
function Location(location, highlights, dates, tips) {
  debugger;
  this.locationName = location;
  this.highlightName = highlights;
  this.datesName = dates;
  this.tipsName = tips;
}
//user-interface
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();
    debugger;
    var inputtedLocation = $("input#new-location").val();
    var inputtedHighlights = $("input#highlights").val();
    var inputtedDates = $("input#dates").val();
    var inputtedTips = $("input#tips").val();

    var theLocation = new Location(inputtedLocation, inputtedHighlights, inputtedDates, inputtedTips);

    $("ul#locations").append("<li><span class='showLocation'>" + theLocation.locationName + "</span></li>");

    $(".showLocation").last().click(function() {
      $("#show-locations").show();
      $("#show-locations h2").text(theLocation.locationName);
      $(".location-name").text(theLocation.locationName);
      $(".highlight-name").text(theLocation.highlightName);
      $(".dates-visit").text(theLocation.datesName);
      $(".tip-name").text(theLocation.tipsName);

      // $("input#new-location").val("");
      // $("input#highlights").val("");
      // $("input#dates").val("");
      // $("input#tips").val("");
      $(".form-control").val("");


    })

  })

})
