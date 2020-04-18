// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function () {
    modal.style.display = "block";
    var newSrc = this.src;
    var modalSrc = newSrc.replace('MIGNA', 'NATIF');
    modalImg.attr('src', modalSrc);
    captionText = this.alt;

    // TODO trouver une soluttion pour empecher scroll en arriere plan quand le modal est ouvert. 

});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var prevClick = document.getElementsByClassName("prev")[0];
var nextClick = document.getElementsByClassName("next")[0];

nextClick.onclick = function () {
    var src = "", srcNext = "", firstDigit = "", numDigit = "", theNextSrc = "";
    modal.style.display = "block";
    src = $("#img01");
    srcNext = src[0].src.match(/\/(\w*)\/(SITE).*$/);
    var regexp = /[0-9]{1,2}/g;
    var matches = srcNext[0].matchAll(regexp);
    var arraymatch = [];
    for (const match of matches) {
        arraymatch.push(match)
    }
    firstDigit = parseInt(arraymatch[0][0]);
    firstDigit = firstDigit + 1;
    numDigit = parseInt(arraymatch[1][0]);
    if (firstDigit <= numDigit) {
        theNextSrc = srcNext[0];
        theNextSrc = theNextSrc.replace(/[0-9]{1,2}/, firstDigit);
        modalImg.attr('src', theNextSrc);
    } else {
        console.log('no more media to display');
        modal.style.display = "none";
    }
};

prevClick.onclick = function () {
    var src = "", srcPrev = "", firstDigit = "", numDigit = "", thePrevSrc = "";
    modal.style.display = "block";
    src = $("#img01");
    srcPrev = src[0].src.match(/\/(\w*)\/(SITE).*$/);
    var regexp = /[0-9]{1,2}/g;
    var matches = srcPrev[0].matchAll(regexp);
    var arraymatch = [];
    for (const match of matches) {
        arraymatch.push(match)
    }
    firstDigit = parseInt(arraymatch[0][0]);
    firstDigit = firstDigit - 1;
    numDigit = parseInt(arraymatch[1][0]);
    if (firstDigit !== 0) {
        thePrevSrc = srcPrev[0];
        thePrevSrc = thePrevSrc.replace(/[0-9]{1,2}/, firstDigit);
        modalImg.attr('src', thePrevSrc);
    } else {
        console.log('no more media to display');
        modal.style.display = "none";
    }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};