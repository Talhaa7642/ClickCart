import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const MenuSvg = props => (
  <Svg
    width={28}
    height={26}
    viewBox="0 0 28 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_107_256)">
      <Path
        d="M4.66675 8.66683H9.33341V4.3335H4.66675V8.66683ZM11.6667 21.6668H16.3334V17.3335H11.6667V21.6668ZM4.66675 21.6668H9.33341V17.3335H4.66675V21.6668ZM4.66675 15.1668H9.33341V10.8335H4.66675V15.1668ZM11.6667 15.1668H16.3334V10.8335H11.6667V15.1668ZM18.6667 4.3335V8.66683H23.3334V4.3335H18.6667ZM11.6667 8.66683H16.3334V4.3335H11.6667V8.66683ZM18.6667 15.1668H23.3334V10.8335H18.6667V15.1668ZM18.6667 21.6668H23.3334V17.3335H18.6667V21.6668Z"
        fill="#E96E6E"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_107_256">
        <Rect width={28} height={26} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MenuSvg;
