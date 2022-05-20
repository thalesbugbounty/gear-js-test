import { TypographyColorName } from '../../../styles';
import { TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT, TYPOGRAPHY_FAMILY } from './constants';

export type TypographySize = keyof typeof TYPOGRAPHY_SIZE;
export type TypographyWeight = keyof typeof TYPOGRAPHY_WEIGHT;
export type TypographyTag = keyof typeof TYPOGRAPHY_TAG;
export type TypographyFamily = keyof typeof TYPOGRAPHY_FAMILY;

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  size?: TypographySize;
  tag?: TypographyTag;
  weight?: TypographyWeight;
  color?: TypographyColorName;
  family?: TypographyFamily;
};

export type FontStyle = {
  [K in TypographySize]: {
    fontSize: string;
    lineHeight: string;
  };
};

export type WeightStyle = {
  [K in TypographyWeight]: string;
};

export type ColorStyle = {
  [K in TypographyColorName]: string;
};

export type FamilyStyle = {
  [K in TypographyFamily]: string;
};
