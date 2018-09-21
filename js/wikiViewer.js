$(document).ready(function() {
 $("#getRando").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });


    var array1 = [];
    var array2 = [];
    var array3 = [];
    var array4 = [];
    var link;

    function search_func() {
      $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        action: 'opensearch',
        format: 'json',
        search: $("#string").val(),
      },
      success: function (data) {
        for (var i = 1; i < data[1].length; i++) {
          array1[i] = data[1][i];
          array2[i] = data[2][i];
          array3[i] = data[3][i];
          link = "<a href = '" + array3[i] + "' target = '_blank' id = 'link'>";
          array4[i] = link + "<strong>" + array1[i] + "</strong>" + ":" + "<br>" + array2[i] + "<br>" + "</a>" + "<hr>" + "<p>";
          $("#result").html(array4);
          }
        }
      });
    };

  $("#search").on("click", search_func);

  function enterKey(e) {
    if(e.keyCode === 13) {
      search_func();
    }
  }

  $("#string").keypress(enterKey);

})
