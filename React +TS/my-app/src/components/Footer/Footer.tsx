import * as React from "react";
import Aboba from "../../global_components/Aboba/Aboba";
import "./Footer.scss";
import Icon from "../../global_components/SocialNetworkIcon/NetworkIcon";
import { socialNetworks, locationURI, phoneURI } from "./FooterConsts";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";

export interface FooterProps {
  mainText?: string;
}

const Footer: React.FC<FooterProps> = ({ mainText }: FooterProps) => {
  return (
    <footer className='footer'>
      <div className='footerWrapper'>
        <div>
          <Aboba width={200} height={50} mainText={mainText} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            assumenda soluta! Praesentium quasi ipsa consequatur corporis fugit
            reprehenderit deserunt delectus aperiam fuga.
          </p>
        </div>
        <div>
          <h1>OUR STUDIO</h1>
          <AdditionalInfo
            imageSource={locationURI}
            text=' Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit '
          />
          <AdditionalInfo imageSource={phoneURI} text='(+380) 99-331-99-43' />
        </div>
        <div>
          <h1>STAY IN TOUCH</h1>
          <div className='social_networks'>
            {socialNetworks.map((e) => {
              return <Icon key={e.key} iconURI={e.img} link={e.link}></Icon>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
