import React from "react";

const sizeClasses = {
  txtInterRegular16Black90001: "font-inter font-normal",
  txtNotoSansSemiBold36Black900: "font-notosans font-semibold",
  txtInterSemiBold26: "font-inter font-semibold",
  txtPoppinsRegular14Black90087: "font-normal font-poppins",
  txtNotoSansMedium16: "font-medium font-notosans",
  txtSFProDisplaySemibold999: "font-semibold font-sfprodisplay",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtNotoSansMedium16Black900: "font-medium font-notosans",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtSFProDisplayRegular726: "font-normal font-sfprodisplay",
  txtManropeSemiBold14: "font-manrope font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtNotoSansRegular16: "font-normal font-notosans",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterBold15: "font-bold font-inter",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtSFProDisplayBold908: "font-bold font-sfprodisplay",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtSFProDisplaySemibold766: "font-semibold font-sfprodisplay",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtNotoSansRegular16Black900: "font-normal font-notosans",
  txtInterMedium14: "font-inter font-medium",
  txtSFProDisplayRegular595: "font-normal font-sfprodisplay",
  txtInterMedium15: "font-inter font-medium",
  txtSFProDisplaySemibold726: "font-semibold font-sfprodisplay",
  txtABeeZeeItalic18: "font-abeezee font-normal italic",
  txtNotoSansMedium16Gray800: "font-medium font-notosans",
  txtNotoSansSemiBold36: "font-notosans font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtABeeZeeRegular12: "font-abeezee font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtSFProDisplayBold131: "font-bold font-sfprodisplay",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
