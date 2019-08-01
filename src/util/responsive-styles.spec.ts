import { responsiveStyles } from './responsive-styles';
import { lightTheme } from '../styles';

describe('responsiveStyles', () => {
  it('does not use media queries when non responsive parameters are used', () => {
    const styles = responsiveStyles(lightTheme, { height: 1 }, responsive => ({
      height: responsive.height
    }));
    // TODO: assert no media queries
  });
  it('uses media queries when responsive paramaters are used', () => {
    const styles = responsiveStyles(lightTheme, { height: [1, 2, 3, 4, 5] }, responsive => ({
      height: responsive.height
    }));
    // TODO: assert media queries
  });
});
