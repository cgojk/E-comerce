import { useState } from "react";
import imagesData from "../ImagesData";


 


export default function LightBox() {

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  //looping through the images array to create img elements
  const imageCards = imagesData.map((image) => (
    <img className="image-card" onClick={() => showImage(image.imageSrc)} src={image.imageSrc} alt={image.alt} />
   
  ));
  console.log(imageCards);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = imagesData.findIndex((image) => image.imageSrc === imageToShow);
    if (currentIndex >= imagesData.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imagesData[currentIndex + 1];
      setImageToShow(nextImage.imageSrc);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = imagesData.findIndex((image) => image.imageSrc === imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = imagesData[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  

  return (
    <>
      {/* <div>{imageCards}</div>
      
      {
        lightboxDisplay ?  */}
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      
    </>
  );
}

