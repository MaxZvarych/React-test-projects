import * as React from "react";
import "./AdditionalInfo.scss";
import { Image } from "antd";

export interface AdditionalInfoProps {
  imageSource: string;
  text: string;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  imageSource,
  text,
}: AdditionalInfoProps) => {
  return (
    <div className='info'>
      <Image
        className='img'
        width={35}
        height={35}
        preview={false}
        src={imageSource}
      />
      <p>{text}</p>
    </div>
  );
};

export default AdditionalInfo;
