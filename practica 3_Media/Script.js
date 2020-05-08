function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("musica",true);
VideoSetVolume("video",0);
VideoPlay("video");

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function pauseplay_OnClick(){
StackTrace="pauseplay.On Click";
VideoPause("video");
SoundPlay("clic",false);

}

function pauseplay_OnRelease(){
StackTrace="pauseplay.On Release";
VideoResume("video");
SoundPlay("clic",false);
}

function IraSONIDO_OnClick(){
StackTrace="IraSONIDO.On Click";
SoundPlay("clic",false);
SoundPlay("clic",false);
}

function IraSONIDO_OnRelease(){
StackTrace="IraSONIDO.On Release";
GotoSceneNameAndPlay("SONIDO",0);
SoundPlay("clic",false);
}

function audio_OnClick(){
StackTrace="audio.On Click";
VideoSetVolume("video",100);
SoundPlay("clic",false);
}

function audio_OnRelease(){
StackTrace="audio.On Release";
VideoSetVolume("video",0);
SoundPlay("clic",false);
}

function IraVIDEO_OnRelease(){
StackTrace="IraVIDEO.On Release";
GotoSceneIndexAndPlay("1",0);
SoundPlay("clic",false);

}

function musicafondo_OnClick(){
StackTrace="musicafondo.On Click";
TimelinePause("disco");
SoundPause("musica");
SoundPlay("clic",false);

}

function musicafondo_OnRelease(){
StackTrace="musicafondo.On Release";
TimelinePlay("disco");
SoundResume("musica");
SoundPlay("clic",false);
}

