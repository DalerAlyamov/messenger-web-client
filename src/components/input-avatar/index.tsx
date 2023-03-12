import React from "react";

import Icon from "icon";
import styles from "./styles.module.scss";

const InputAvatar = () => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file && file.type.substring(0, 5) === "image") {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <label className={styles.avatar}>
      {!preview && "DA"}
      {preview && <img src={preview} alt="Preview" />}
      <input type="file" accept="image/png, image/jpeg" onChange={handleFileInputChange} />
      <div className={styles.hoverAvatar}>
        <Icon name="camera" size={40} />
      </div>
    </label>
  );
};

export default InputAvatar;
