import { Props } from 'react-raster';
import { BorderColorName, BorderRadius, BorderWidth } from '../../../styles';

export type BoxProps = Props;

export interface BoxBorderedProps extends Props {
  borderRadius?: BorderRadius;
  borderColor?: BorderColorName;
  borderWidth?: BorderWidth;
}
