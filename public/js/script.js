console.log(ROOM_ID);
const videoContainer = document.getElementById('video-Container');
const myVideo = document.createElement('video');
myVideo.muted = true;
const socket = io("/");

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

socket.emit('join-room', Room_ID, 1);
socket.on('user-connected', (userId) => {
    console.log("userId", userId);
});