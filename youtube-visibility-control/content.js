document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "visible") {
    document.title = "YouTube";
    document.querySelector(".video-stream").play()
  } else {
    document.title = "Arise";
    document.querySelector(".video-stream").pause()
  }
});
