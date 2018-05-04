
function call(search){
  var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=e6232090e8d345099a6b09812a7c5bd8`;
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(res) {
    var docArray = res.response.docs;
    console.log(res);
    docArray.forEach(function(val) {
      var template =
      `<div>
      <h1>${val.headline.main}</h1>
      <p>${val.snippet}</p>
      <p><a href=${val.web_url}>${val.web_url}</a></p>
      </div>
      <br>
      `;
      $('#searchResults').prepend(template);
      console.log(val.snippet)
    })
  })

}

// call('donald trump')

$("#Button").on('click', function(e){
  e.preventDefault();
  console.log('you clicked ')
  var t = $("#searchTerm").val();
  call(t);

})
