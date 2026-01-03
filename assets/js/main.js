document.addEventListener('DOMContentLoaded', function() {
  var faithlifeUrl = 'https://faithlife.com/jcc-31773';
  var ids = ['faithlifeLink', 'faithlifeLink2', 'faithlifeLink3'];
  ids.forEach(function(id) {
    var link = document.getElementById(id);
    if (link) {
      link.setAttribute('href', faithlifeUrl);
    }
  });
});

// Make gallery images clickable to open full size
window.addEventListener('DOMContentLoaded', function() {
  var galleryImages = document.querySelectorAll('.photo-gallery img, .gallery img');
  galleryImages.forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      window.open(img.src, '_blank');
    });
  });
});
