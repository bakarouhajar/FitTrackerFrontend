import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[12px]",
};
const variants = {
  gradient: {
    indigo_A700_indigo_A200_ba: "bg-gradient  text-gray-900",
    indigo_A700_indigo_A200: "bg-gradient1  text-black-900",
  },
  fill: {
    indigo_A700: "bg-indigo-A700 text-white-A700",
    gray_100: "bg-gray-100 text-black-900_02",
    deep_orange_50: "bg-deep_orange-50",
    light_blue_50: "bg-light_blue-50",
    white_A700: "bg-white-A700 shadow-bs1",
  },
  outline: {
    indigo_50: "border-gray-300 border-solid border-t text-white-A700",
  },
};
const sizes = { xs: "p-px", sm: "p-2.5", md: "p-[13px]", lg: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["gradient", "fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_A700_indigo_A200_ba",
    "indigo_A700_indigo_A200",
    "indigo_A700",
    "gray_100",
    "deep_orange_50",
    "light_blue_50",
    "white_A700",
    "indigo_50",
  ]),
};

export { Button };
