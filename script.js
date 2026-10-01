const music = document.getElementById("music");
const welcome = document.getElementById("welcome");
const bouquet = document.getElementById("bouquetSection");
const letter = document.getElementById("letterSection");
const openBtn = document.getElementById("openBtn");
const letterBtn = document.getElementById("letterBtn");
const musicBtn = document.getElementById("musicBtn");

openBtn.addEventListener("click", async () => {
  welcome.classList.add("hidden");
  bouquet.classList.remove("hidden");

  try {
    await music.play();
    musicBtn.textContent = "♫ Music On";
  } catch (error) {
    musicBtn.textContent = "♫ Tap for Music";
    console.log("Music needs another tap:", error);
  }
});

letterBtn.addEventListener("click", () => {
  bouquet.classList.add("hidden");
  letter.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
});

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "♫ Music On";
    } catch (error) {
      musicBtn.textContent = "♫ Music Error";
      console.log(error);
    }
  } else {
    music.pause();
    musicBtn.textContent = "♫ Music Off";
  }
});

music.addEventListener("ended", () => {
  music.currentTime = 0;
  music.play();
});
