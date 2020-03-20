// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    newSrc = newSrc.replace('.jpg', 'Grand.jpg');
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;

    // TODO trouver une soluttion pour empecher scroll en arriere plan quand le modal est ouvert. 

    //document.getElementById("bodyIden").style.background = "red";
    //document.getElementById("bodyIden").style.overflow = "hidden";
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}