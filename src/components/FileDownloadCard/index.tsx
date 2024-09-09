import { DownloadOutlined } from "@ant-design/icons";
import { Card, Flex, Space, Typography } from "antd";
import React, { useState } from "react";

const { Text } = Typography;

const FileDownloadCard = ({
  fileName,
  fileSize,
  fileUrl,
}: {
  fileName: string;
  fileSize: string;
  fileUrl: string;
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(fileUrl);

      if (!response.ok) {
        throw new Error(`HTTP 错误！状态: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("下载出错:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Card
      style={{
        width: "220px",
      }}
    >
      <Flex justify="space-between">
        <div>
          <Text strong>{fileName}</Text>
          <br />
          <Text type="secondary">{`${fileSize / 1024} KB`}</Text>
        </div>
        <DownloadOutlined
          style={{ fontSize: "24px", color: "#007bff" }}
          onClick={handleDownload}
        />
      </Flex>
    </Card>
  );
};

export default FileDownloadCard;
