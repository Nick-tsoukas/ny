//https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=e6232090e8d345099a6b09812a7c5bd8

//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=donaldtump&api-key=e6232090e8d345099a6b09812a7c5bd8


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
      </div>
      <br>
      `;
      $('#testing').append(template);
      console.log(val.snippet)
    })
  })

}

call('donald trump')
