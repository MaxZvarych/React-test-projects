import * as React from "react";
import "./NetworkIcon.scss";
import { Image } from "antd";

export interface NetworkIconProps {
  iconURI: string;
  link: string;
}

const NetworkIcon: React.FC<NetworkIconProps> = ({
  iconURI,
  link,
}: NetworkIconProps) => {
  const redirect = () => location.replace(link);
  return (
    <a className='imgWrapper' onClick={redirect}>
      <Image width={40} height={40} preview={false} src={iconURI}></Image>
    </a>
  );
};

export default NetworkIcon;
