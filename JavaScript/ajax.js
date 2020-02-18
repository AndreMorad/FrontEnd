$(() => {
  $("#searchbutton").click(() => {
    let movieVal = $("#movies").val;
    fetch("http://www.omdbapi.com/?apikey=444696c3&s=" + movieVal);
  },
    $("#searchbox").on('input', () => {
      if ($("#searchbox").val().length > 3) {
        let queryUrl = "http://www.omdbapi.com/?apikey=444696c3&s=" + $("#searchbox").val();

        $.ajax({
          url: queryUrl,
          dataType: "json",
          success: result => {
            $("#movies").empty();
            for (let i = 0; i < result.Search.length; i++) {
              $("#movies").append(`<option>${result.Search[i].Title}</option>`);
            }
          },
          error: (xhr, status, error) => {
            console.log(xhr + " " + status + " " + error);
          }
        });
      }
    }),
  );
});
var a = () => {
  $("#movies").empty();
  $("#searchbox").empty();
};
$("#searchbutton").click(a);