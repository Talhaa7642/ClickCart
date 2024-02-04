import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LeftArrowSvg = props => (
  <Svg
    width={28}
    height={26}
    viewBox="0 0 28 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M24.5001 11.9168H7.48309L13.6583 6.18271L12.0086 4.65088L3.01709 13.0001L12.0086 21.3494L13.6583 19.8175L7.48309 14.0835H24.5001V11.9168Z"
      fill="#222222"
    />
  </Svg>
);

export default LeftArrowSvg;
