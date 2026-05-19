
import { useState } from "react";
import imagesData from "../ImagesData";
import { useEffect } from "react";
import SecondSection from "./SecondSection";
import previous from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";


export default function ImagesBox() {

const [currentImageIndex, setCurrentImageIndex] = useState(0);

console.log(currentImageIndex);
console.log(imagesData[currentImageIndex].imageSrc);

// previous and next navigaiton handlers
const handlePreviousClick = () => {
    setCurrentImageIndex(
        currentImageIndex === 0 ? imagesData.length - 1 : currentImageIndex - 1
    );
};

const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imagesData.length);
};

useEffect(() => {
    const timer = setTimeout(() => {
        handleNextClick();
    }, 5000);

    return () => clearTimeout(timer);
},
[currentImageIndex]);

     console.log(currentImageIndex);



return (
<section className="images-boxContent container">

    <section className="wrapper__images">
        <div className="image-carousel container">
            <div className="image-container">
                <button className="nav-button left" onClick={handlePreviousClick}>&lt;</button>

                {imagesData.map((image, index) => (
                    <img 
                        src={image.imageSrc} 
                        alt={image.alt} 
                        className={ currentImageIndex === index ? 'block' : 'hidden'}
                        key={image.id} 
                    />
                ))}
        
                <button className="nav-button right" onClick={handleNextClick}>&gt;</button>
            </div>

        </div>
        <div  className="thumbnails">
            {imagesData.map((image, index) => (
                <img
                    src={image.thumbnailSrc}
                    alt={image.alt}
                    className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                />
            ))}
        </div>
    </section>

    <SecondSection />
</section>
)
}