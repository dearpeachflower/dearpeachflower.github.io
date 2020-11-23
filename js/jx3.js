// 音乐播放函数

var music = document.querySelector('.bodyMusicLogo');
var audio = document.querySelector('.musicAudio');
var musicFlag = false;

music.onclick = function() {
	if (musicFlag == false) {
		music.className = 'bodyMusicLogo bodyMusicPlay';
		audio.play();
		musicFlag = true;
		console.log(musicFlag);

	} else {
		music.className = 'bodyMusicLogo';
		audio.pause();
		musicFlag = false;
		console.log(musicFlag);
	}
}
