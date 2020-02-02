// eslint-disable-next-line prettier/prettier
import { borders, BordersProps, display, DisplayProps, flexbox, FlexboxProps, palette, PaletteProps, positions, PositionsProps, shadows, ShadowsProps, sizing, SizingProps, spacing, SpacingProps, typography, TypographyProps } from '@material-ui/system';
import styled from 'styled-components';

/*
 * Box with styled-components (as bug described here: https://stackoverflow.com/questions/59508171/typeerror-cannot-read-property-attach-of-undefined-makestyles-js)
 */
export const Box = styled.div<
  BordersProps & DisplayProps & FlexboxProps & PaletteProps & PositionsProps & ShadowsProps & SizingProps & SpacingProps & TypographyProps
>`${borders}${display}${flexbox}${palette}${positions}${shadows}${sizing}${spacing}${typography}`;
