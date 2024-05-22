"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      // resets the previewed image if none selected
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>no image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="the image selected by the user"
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          // image is required or else cant submit
          required
        />
        <button className={classes.button} type="button" onClick={handlePick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
