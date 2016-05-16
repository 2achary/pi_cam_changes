var settings_shown = false;
var recording = false;
var video_mode = false;
var $mode = $('.mode_selector');
$('.settings_icon').on('click', function(){
    if (settings_shown) {
        $('.settings_div').hide();
        settings_shown = false;
    } else {
        $('.settings_div').show();
        settings_shown = true;
    }
});

$mode.css('background', 'url("img/photo-camera.svg") center/29px no-repeat');
$('.settings_div').hide();
$('#video_shutter').hide();

$('#video_shutter').on('click', function() {
    if (recording) {
        recording = false;
        $('#video_button').toggleClass('recording');
    } else {
        recording = true;
        $('#video_button').toggleClass('recording');
    }
});

$mode.on('click', function(){
   if (video_mode) {
       video_mode = false;
        $('#video_shutter').hide();
        $('#camera_shutter').show();

        $mode.css('background', 'url("img/photo-camera.svg") center/29px no-repeat');
   } else {
       video_mode = true;
       $('#video_shutter').show();
       $('#camera_shutter').hide();

        $mode.css('background', 'url("img/video-camera.svg") center/29px no-repeat');
   }
});
