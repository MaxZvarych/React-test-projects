import { Image } from "antd";
import * as React from "react";
import "./Aboba.scss";

export interface AbobaProps {
  mainText?: string;
  width?: number;
  height?: number;
}

const Aboba: React.FC<AbobaProps> = ({
  mainText,
  width,
  height,
}: AbobaProps) => {
  return (
    <div className='aboba'>
      <Image
        style={{ marginTop: "-10px" }}
        width={width ? width : 240}
        height={height ? height : 60}
        preview={false}
        src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/OnlyFans_logo.svg/2560px-OnlyFans_logo.svg.png'
      />
      <p>{mainText}</p>
    </div>
  );
};

export default Aboba;
