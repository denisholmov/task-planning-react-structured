import type { SvgIconProps } from "./types/interface";

export const SvgIcon = ({
  svgCode,
  className = "",
  width = 24,
  height = 24,
  color = "currentColor",
}: SvgIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      dangerouslySetInnerHTML={{ __html: svgCode }}
      style={{ color }}
    />
  );
};
