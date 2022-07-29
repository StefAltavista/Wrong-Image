import { useState } from "react";
export default function uploadImages() {
    const [images, setImages] = useState(1);

    const addNewImage = () => {
        setImages(images + 1);
    };
    const submitPicture = (e) => {
        console.log("submitting picture");
    };

    return (
        <>
            <button onClick={addNewImage}>+</button>
            {images && (
                <div id="imgUploader">
                    <form onSubmit={submitPicture}>
                        <input type="file"></input>
                    </form>
                </div>
            )}
        </>
    );
}
