$(document).ready(function() {



  $('#discipleship').on('mouseenter', function(e) {
    e.preventDefault();
    console.log('clicked discipleship')
    // Logic Goes Here
    $('.jsMinistry').html('We have a heart for discipleship.');
  })

  $('#outreach').on('mouseenter', function(e) {
    e.preventDefault();
    console.log('clicked outreach')
    // Logic Goes Here
    $('.jsMinistry').html('We have a heart for outreach.');
  })

  $('#nuture').on('mouseenter', function(e) {
    e.preventDefault();
    console.log('clicked nuture')
    // Logic Goes Here
    $('.jsMinistry').html('We have a heart for nuturing.');
  })

  $('#kids').on('mouseenter', function(e) {
    e.preventDefault();
    console.log('clicked kids')
    // Logic Goes Here
    $('.jsMinistry').html('We have a heart for kids.');
  })

  $('#discipleship').on('click', function(e) {
    e.preventDefault();
  })
  $('#outreach').on('click', function(e) {
    e.preventDefault();
  })
  $('#nuture').on('click', function(e) {
    e.preventDefault();
  })
  $('#kids').on('click', function(e) {
    e.preventDefault();
  })

});
