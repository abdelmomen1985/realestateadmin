import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useInput, required, ImageInput, ImageField } from "react-admin";
import { storage } from "../../firebase";

type DropImageToFireProps = {};

export default function DropImageToFire(props: DropImageToFireProps) {
  const [url, setUrl] = useState("");
  return (
    <ImageInput
      accept="image/*"
      source="internal"
      label="photo"
      multiple={false}
      style={{ width: "100%" }}
      onChange={async (file: File) => {
        await storage.ref(`/images/${file.name}`).put(file);
        let url = await storage.ref(`/images/${file.name}`).getDownloadURL();
        setUrl(url);
      }}
      format={(data: any) => {
        if (data && url) data.url = url;
        return data;
      }}
      placeholder={
        <div className="photo-upload-dd">
          Drag and drop Developer's Logo here
        </div>
      }
    >
      <ImageField source="src" title="title" />
    </ImageInput>
  );
}
