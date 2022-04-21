import { Props } from 'react-raster';
import { BorderColorName, BorderRadius, BorderWidth } from '../../../styles';

export interface BoxBorderedProps extends Props {
  borderRadius?: BorderRadius;
  borderColor?: BorderColorName;
  borderWidth?: BorderWidth;
}
