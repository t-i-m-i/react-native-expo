export const createBorder = (
  width: number,
  color: string,
  style: "solid" | "dotted" | "dashed" = "solid",
) => ({
  borderWidth: width,
  borderColor: color,
  borderStyle: style,
});
