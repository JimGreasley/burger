// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      //var newSleep = $(this).data("newsleep");
      var newDevouredState = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          //console.log("changed devoured to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      //var newBurgerName = $("#bgr").val().trim();
      var newBurger = {
          burger_name: $("#bgr").val().trim()
//          devoured: false
      };
      //console.log("new burger: ", newBurger);
      // Send the POST request.  //{url: "/api/burgers",
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          //console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          //console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  