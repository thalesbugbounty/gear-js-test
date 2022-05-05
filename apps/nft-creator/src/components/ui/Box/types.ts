import { Props } from 'react-raster';
import { BorderColorName, BorderRadius, BorderWidth } from '../../../styles';

export interface BoxProps extends Props {
  tag?: string;
}

export interface BoxBorderedProps extends Props {
  tag?: string;
  borderRadius?: BorderRadius;
  borderColor?: BorderColorName;
  borderWidth?: BorderWidth;
}
