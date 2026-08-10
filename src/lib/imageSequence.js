import gsap from "gsap";
/*
Helper function that handles scrubbing through a sequence of images, drawing the appropriate one to the provided canvas.
Config object properties:
  - urls [Array]: an Array of image URLs
  - canvas [Canvas]: the <canvas> object to draw to
  - scrollTrigger [Object]: an optional ScrollTrigger configuration object like {trigger: "#trigger", start: "top top", end: "+=1000", scrub: true, pin: true}
  - onUpdate [Function]: optional callback for when the Tween updates (probably not used very often)

 Returns a Tween instance
*/
export default function imageSequence(config) {
  let playhead = { frame: 0 },
    canvasEl = gsap.utils.toArray(config.canvas)[0],
    ctx = canvasEl.getContext("2d"),
    onUpdate = config.onUpdate,
    images,
    updateImage = function () {
      const img = images[Math.round(playhead.frame)];
      if (!img || !ctx) return;

      const cssWidth = canvasEl.clientWidth || canvasEl.width;
      const cssHeight = canvasEl.clientHeight || canvasEl.height;

      ctx.clearRect(0, 0, cssWidth, cssHeight);
      ctx.drawImage(img, 0, 0, cssWidth, cssHeight);
      onUpdate && onUpdate.call(this);
    };
  images = config.urls.map((url, i) => {
    let img = new Image();
    img.src = url;
    img.onload = () => {
      // draw first image once it's available
      if (i === 0) updateImage();
    };
    return img;
  });
  return gsap.to(playhead, {
    frame: images.length - 1,
    ease: "none",
    onUpdate: updateImage,
    scrollTrigger: config.scrollTrigger,
  });
}
