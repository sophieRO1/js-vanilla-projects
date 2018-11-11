document.getElementById('myForm').addEventListener('submit', saveBookmark);


// save bookmark function

function saveBookmark(e) {
    
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

     var bookmark = {
         name: siteName,
         url: siteUrl
     }
    //   submit the data to local storage 

  if(localStorage.getItem('bookmarks') === null) {
      var bookmarks = [];
      bookmarks.push(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      bookmarks.push(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
// show data in site 

    e.preventDefault();
    
}

// fetching data from localstorage 
function fetchBookMarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //get output
    var bookmarksResaults = document.getElementById('bookmarksResults');
    bookmarksResaults.innerHTML = '';
    for(var i=0 ; i<bookmarks.length; i ++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

    bookmarksResaults.innerHTML += `<div class="well"> <h3> ${name} </h3>
    </div>`
        

    }
}