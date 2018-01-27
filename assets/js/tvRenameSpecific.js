/*====================================
 TV Rename Specific JavaScript
====================================*/

// Update masthead download link

$(function() {
  $.get('https://api.github.com/repos/TV-Rename/tvrename/releases/latest', function(data) {
    $('#download').attr('href', data.assets[0].browser_download_url);
  });
});

// Update page__lead class with TV Rename Version

$(function() {
  $.get('https://api.github.com/repos/TV-Rename/tvrename/releases/latest', function(data) {
	$('.page__lead').html($('.page__lead').html().substring(0,164) + 'v ' + data.tag_name + '<br />');
  });
});

// Update button download link

$(function() {
  $.get('https://api.github.com/repos/TV-Rename/tvrename/releases/latest', function(data) {
    $('.btn btn--light-outline btn--large').attr('href', data.assets[0].browser_download_url);
  });
});