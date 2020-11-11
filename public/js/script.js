console.log(ROOM_ID);
const videoContainer = document.getElementById('video-Container');
const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
}).then((stream) => {
    console.log(stream);
    myVideo.srcObject = stream;
    myVideo.addEventListener('loadedmetadata', () => {
        myVideo.play();
    });
    videoContainer.append(myVideo);
});