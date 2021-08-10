const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new window.YT.Player("player", {});
}

const YoutubePlayer = {
  play(videoId) {
    // player.loadVideoById(videoId);
    // player.stopVideo();
  },
};

export { YoutubePlayer };
