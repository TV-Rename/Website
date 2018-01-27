/*====================================
 TV Rename Specific JavaScript
====================================*/

// Update masthead download link


$(function() {
  $.get('https://api.github.com/repos/TV-Rename/tvrename/releases/latest', function(data) {
    $('#download').attr('href', data.assets[0].browser_download_url);
  });
});

