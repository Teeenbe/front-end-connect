import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ onSelectedFile }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState();

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      setFile(acceptedFiles[0]);
      setFileName(acceptedFiles[0].name);
      onSelectedFile(acceptedFiles[0]);
    },
    [onSelectedFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <span>{fileName}</span>
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default Dropzone;
