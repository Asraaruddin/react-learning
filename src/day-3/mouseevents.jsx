import { useEffect, useState } from "react";
import axios from "axios";
import './mouseevents.css';

function MouseEvents() {
  const [mobileImages, setMobileImages] = useState([{ image: '' }]);
  const [preViewImage, setPreviewImage] = useState('');

  useEffect(() => {
    axios.get('mobiles.json').then(response => {
      setMobileImages(response.data);
      setPreviewImage(response.data[0].image); // Optional: default preview
    });
  }, []);

  // ✅ Move handler inside the component
  function handleMouseOver(e) {
    setPreviewImage(e.target.src);
  }

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {/* Thumbnails */}
        <div className="col-1">
          {mobileImages.map(item => (
            <div className="my-3 border-dark" key={item.image}>
              <img
                onMouseOver={handleMouseOver}
                src={item.image}
                width="100%"
                alt="thumb"
                className="img-thumbnail"
              />
            </div>
          ))}
        </div>

        {/* Main Preview */}
        <div className="col-11 ">
          {preViewImage && (
            <img
              src={preViewImage}
              width="300"
              height="400"
              alt="preview"
              className="border border-dark"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MouseEvents;
