import { fontFace } from './utils';
import RobotoBoldWoff2 from '../assets/fonts/Roboto-Bold.woff2';
import RobotoBoldWoff from '../assets/fonts/Roboto-Bold.woff';
import RobotoBoldTtf from '../assets/fonts/Roboto-Bold.ttf';
import RobotoRegularWoff2 from '../assets/fonts/Roboto-Regular.woff2';
import RobotoRegularWoff from '../assets/fonts/Roboto-Regular.woff';
import RobotoRegularTtf from '../assets/fonts/Roboto-Regular.ttf';
import RobotoLightWoff2 from '../assets/fonts/Roboto-Light.woff2';
import RobotoLightWoff from '../assets/fonts/Roboto-Light.woff';
import RobotoLightTtf from '../assets/fonts/Roboto-Light.ttf';
import { css, FlattenSimpleInterpolation } from 'styled-components/macro';

export const fonts = (): FlattenSimpleInterpolation => {
  return css`
    ${fontFace('Roboto', RobotoBoldWoff2, RobotoBoldWoff, RobotoBoldTtf, 700)}
    ${fontFace('Roboto', RobotoRegularWoff2, RobotoRegularWoff, RobotoRegularTtf, 400)}
    ${fontFace('Roboto', RobotoLightWoff2, RobotoLightWoff, RobotoLightTtf, 300)}
  `;
};
