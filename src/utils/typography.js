import Typography from "typography"
import "@openfonts/ibm-plex-mono_all"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Courier",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["IBM Plex Mono", "arial"],
})

export default typography
