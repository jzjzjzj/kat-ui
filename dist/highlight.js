toggleTags($('.showmore')[0]);

$('td:nth-child(4)').each(function() {
  var torrent = $(this).parent();
  var age = $(this).text().match(/([a-z]+)\.?$/)[1];

  torrent.addClass(age);
});
