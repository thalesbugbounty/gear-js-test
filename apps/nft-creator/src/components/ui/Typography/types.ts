import { FlattenSimpleInterpolation } from 'styled-components/macro';
import { TypographyColorName } from '../../../styles';
import { TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from './constants';

export type TypographySize = keyof typeof TYPOGRAPHY_SIZE;
export type TypographyWeight = keyof typeof TYPOGRAPHY_WEIGHT;
export type TypographyTag = keyof typeof TYPOGRAPHY_TAG;

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  size?: TypographySize;
  tag?: TypographyTag;
  weight?: TypographyWeight;
  color?: TypographyColorName;
};

export type FontStyle = {
  [K in TypographySize]: {
    fontSize: FlattenSimpleInterpolation | string;
    lineHeight: FlattenSimpleInterpolation | string;
  };
};

export type WeightStyle = {
  [K in TypographyWeight]: FlattenSimpleInterpolation;
};

export type ColorStyle = {
  [K in TypographyColorName]: string;
};
