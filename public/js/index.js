<<<<<<< HEAD
alert("I loaded the JS");
$(document).ready(function() {

  $(document).on("#submit", newRequest);

  function newRequest() {
    event.preventDefault();

    var request = {
      projectName: $("#project-name")
        .val()
        .trim(),
=======
$(document).ready(function() {
  $(document).on("#submit", newRequest);

  function newRequest() {
    event.preventDefault();

    var request = {
      projectName: $("#project-name").val().trim(),
>>>>>>> master
      requestorName: $("#requestor-name").val().trim(),
      materialDesc: $("#material").val().trim(),
      quantity: $("#quantity").val().trim(),
      needByDate: $("#need-by-date").val().trim()
    };

    $.post("api/requests", request);
  }
});

//on click function of button id's
