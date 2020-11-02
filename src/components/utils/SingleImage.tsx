import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { FunctionField, Record } from "react-admin";
import DropImageToFire from "./DropImageToFire";

type SingleImageProps = {
  record?: Record;
  mediaIndex: string;
};
export default function SingleImage({ record, mediaIndex }: SingleImageProps) {
  const [changeLogo, setChangeLogo] = useState(false);
  return (
    <FunctionField
      fullWidth
      record={record}
      render={(record) => {
        if (record?.media?.[mediaIndex])
          return (
            <>
              {changeLogo && <DropImageToFire />}
              <div>
                {!changeLogo && (
                  <img
                    src={record?.media?.[mediaIndex]}
                    style={{ maxWidth: "250px" }}
                  />
                )}
              </div>
              {!changeLogo && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setChangeLogo(true)}
                >
                  Change Image
                </Button>
              )}
            </>
          );
        // else
        return <DropImageToFire />;
      }}
      label="Logo"
    />
  );
}
