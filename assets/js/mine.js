$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
    $(this).closest("div").removeClass("filtered");
});

$( ".maps" ).mouseleave(function() {
  $('.maps iframe').css("pointer-events", "none");
  $(this).closest("div").addClass("filtered");
});

var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = {'videoId': 'mHG9JQfKSL8', 'startSeconds': 0, 'endSeconds': 418, 'suggestedQuality': 'hd1080'};

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
  } else if (e.data === 2){
    $('#tv').removeClass('active');
    tv.seekTo(vid.startSeconds);
  } else if (e.data === 0) {
    tv.seekTo(vid.startSeconds);
  }
}

function vidRescale(){

  var w = $("#first").width(),
    h = $("#first").height();

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

function minorSpamProtection(){
  $(".protectALittle").each(function() {
    this.href = this.href.replace(/q/g, '').replace('(at)', '@').replace(/\(dot\)/g, '.');
    if (!this.innerHTML || this.innerHTML.length === 0) {
      this.innerHTML = this.href.replace('mailto:', '');
    } else {
      this.innerHTML = this.innerHTML.replace(/q/g, '');
    }
   });
}

$(window).on('load', function(){
  minorSpamProtection();
});
