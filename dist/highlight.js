$('td:nth-child(4)').each(function() {
  var torrent = $(this).parent();
  var age = $(this).text().match(/([a-z]+)\.?$/)[1];
  var colors = {
    'hours': '#FFDD44',
    'day': '#FFEE99'
  };

  torrent.css('background-color', colors[age]);
});
