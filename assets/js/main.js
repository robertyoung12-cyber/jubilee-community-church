document.addEventListener('DOMContentLoaded', function() {
  var faithlifeUrl = 'https://faithlife.com';
  var ids = ['faithlifeLink', 'faithlifeLink2', 'faithlifeLink3'];
  ids.forEach(function(id) {
    var link = document.getElementById(id);
    if (link) {
      link.setAttribute('href', faithlifeUrl);
    }
  });
});
