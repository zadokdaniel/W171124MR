import { useState } from "react";
// dynamic images
// next - if isInfinite last image takes to first
// prev - if isInfinite first image takes to last
// next and prev buttons will disabled when can't click
// let the programmer decide what the first image
// I want circles allowing the user to go to specific image
// I want description
// I want event for when image changed

function Gallery({ images = [], initialIndex = 0, isInfinite = false }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = () => {
    setCurrentIndex((currentIndex) => {
      const isLast = currentIndex >= images.length - 1;

      if (isLast) {
        return isInfinite ? 0 : currentIndex;
      }

      return currentIndex + 1;
    });
  };

  const previous = () => {};

  const currentImage = images[currentIndex];

  const isLast = currentIndex >= images.length - 1;

  return (
    <div className="position-relative h-100 w-100">
      <div className="h-100 w-100 d-flex align-items-center justify-content-between gap-2">
        <div onClick={previous}>
          <i style={{ cursor: "pointer" }} className="bi bi-chevron-left"></i>
        </div>

        <div className="h-100 d-flex align-items-stretch justify-content-center">
          <img
            className="img-fluid rounded"
            src={currentImage.src}
            alt="some image"
          />
        </div>

        <div
          className={!isInfinite && isLast ? "invisible" : ""}
          onClick={next}
        >
          <i style={{ cursor: "pointer" }} className="bi bi-chevron-right"></i>
        </div>
      </div>

      <div
        className="position-absolute w-100 text-center p-2 rounded-bottom text-white"
        style={{
          maxHeight: "30%",
          bottom: 0,
          background:
            "linear-gradient(to top, rgba(86, 86, 86, 0.53), rgba(151, 151, 151, 0.63))",
        }}
      >
        {currentImage.description ? (
          <div className="text-truncate">{currentImage.description}</div>
        ) : null}

        <div className="d-flex justify-content-center gap-2 mt-2">
          {images.map((image, i) => (
            <div
              onClick={() => setCurrentIndex(i)}
              key={image.id}
              style={{ width: 10, height: 10, cursor: "pointer" }}
              className={[
                "rounded-circle border border-white",
                currentIndex === i ? "bg-white" : "",
              ].join(" ")}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
