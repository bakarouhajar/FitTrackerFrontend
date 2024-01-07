import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    indigo_50: "bg-gray-300 shadow-bs",
  },
  gradient: { indigo_A700_indigo_A200: "bg-gradient2  text-white-A700" },
  outline: {
    black_900: "border border-black-900 border-solid text-black-900",
    gray_900: "border border-gray-900 border-solid text-gray-900",
  },
};
const shapes = { round: "rounded-[12px]" };
const sizes = { xs: "p-[13px]", sm: "pb-[17px] pt-[18px] px-[17px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "xs",
      variant = "outline",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "gradient", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "indigo_50",
    "indigo_A700_indigo_A200",
    "black_900",
    "gray_900",
  ]),
};

export { Input };
