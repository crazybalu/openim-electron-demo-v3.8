import { FC } from "react";
import React from "react";

import FileDownloadCard from "@/components/FileDownloadCard";

import { IMessageItemProps } from ".";
import styles from "./message-item.module.scss";

const FileMessageRender: FC<IMessageItemProps> = ({ message }) => {
  return (
    <FileDownloadCard
      fileName={message.fileElem.fileName}
      fileSize={message.fileElem.fileSize}
      fileUrl={message.fileElem.sourceUrl}
    />
  );
};

export default FileMessageRender;
