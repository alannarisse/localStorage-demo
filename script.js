$(function () {
  $('#sub-btn').click(function () {
    let firstName = $('#first').val()
    localStorage.setItem('first', firstName)
    //console.log(firstName)
  })
})
