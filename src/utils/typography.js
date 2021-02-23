import Typography from "typography"
import kubricTheme from "typography-theme-wordpress-kubrick"

kubricTheme.baseFontSize = '18px';
const typography = new Typography(kubricTheme)

export const { scale, rhythm, options } = typography
export default typography