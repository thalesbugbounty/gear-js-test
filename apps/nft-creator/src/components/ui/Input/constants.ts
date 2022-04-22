import { FONT_SIZE, INDENT, LINE_HEIGHT } from '../../../styles';
import { SizeStyle } from './types';

export const INPUT_SIZE = {
  s: 's',
  m: 'm',
  l: 'l',
} as const;

const INPUT_WIDTH = {
  s: '150px',
  m: '250px',
  l: '300px',
  auto: 'auto',
  stretched: '100%',
  none: '0px',
};

export const SIZE_STYLE: SizeStyle = {
  [INPUT_SIZE.s]: {
    padding: `${INDENT.xxs} ${INDENT.s}`,
    width: INPUT_WIDTH.s,
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
  },
  [INPUT_SIZE.m]: {
    padding: `${INDENT.xxs} ${INDENT.s}`,
    width: INPUT_WIDTH.m,
    fontSize: FONT_SIZE.s,
    lineHeight: LINE_HEIGHT.s,
  },
  [INPUT_SIZE.l]: {
    padding: `${INDENT.xxs} ${INDENT.s}`,
    width: INPUT_WIDTH.l,
    fontSize: FONT_SIZE.m,
    lineHeight: LINE_HEIGHT.m,
  },
};
