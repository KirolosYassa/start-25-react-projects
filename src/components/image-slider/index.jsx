import "./styles.css";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Random_Color({ url, limit = "5", page = "1" }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getURL) {
    try {
      const response = await fetch(`${getURL}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(`Fetching images: ${data}`);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    if (url != null) fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data!</div>;
  } else {
    console.log(images);
    {
      images.map((image) => <img href={image.download_url} />);
    }
  }

  if (errorMsg != null) {
    return <div>There is an error: {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={() =>
          setCurrentImage(
            currentImage === 0 ? images.length - 1 : currentImage - 1
          )
        }
        className="arrow arrow-left"
      />
      {images && images.length > 0
        ? images.map((image) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={
                currentImage === parseInt(image.id)
                  ? "current-image"
                  : "hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={() =>
          setCurrentImage(
            currentImage === images.length - 1 ? 0 : currentImage + 1
          )
        }
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                className={
                  currentImage === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentImage(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
