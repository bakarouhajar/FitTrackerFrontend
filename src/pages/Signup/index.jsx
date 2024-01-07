import React from "react";

import { Button, Img, Input, Line, Text } from "components";
const handleImageClick = (imageName) => {
  console.log(`Clicked on ${imageName}`);
  // Add logic for handling the click event
};


const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-notosans items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 h-[1024px] md:h-[1184px] sm:h-[985px] pl-[11px] md:px-5 py-[11px] relative w-full">
          <div className="flex md:flex-col flex-row gap-[7px] h-full items-start justify-between ml-auto my-auto w-[94%]">
            <div className="md:h-[879px] h-[899px] sm:h-[922px] mb-[86px] relative w-[78%] md:w-full">
              <div className="absolute bg-gradient3  h-[302px] left-[30%] rounded-[50%] top-[0] w-[302px]"></div>
              <div className="absolute bg-gradient4  bottom-[0] flex flex-col items-center justify-end left-[0] outline outline-[1px] p-[38px] sm:px-5 rounded-[20px] shadow-bs2 w-[46%] white_A700_99_black_900_99_border">
                <div className="flex flex-col gap-[53px] items-center justify-start mb-2 mt-[58px] w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                          size="txtNotoSansSemiBold36"
                        >
                          Signup
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtNotoSansMedium16"
                        >
                          Just some details to get you in.!
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                        <Input
                          name="username"
                          placeholder="Username"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-left text-xl w-full"
                          wrapClassName="w-full"
                          type="text"
                          shape="round"
                          color="gray_900"
                        ></Input>
                        <Input
                          name="emailphone"
                          placeholder="Email / Phone"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-left text-xl w-full"
                          wrapClassName="w-full"
                          type="email"
                          shape="round"
                          color="gray_900"
                        ></Input>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                          <Input
                            name="password"
                            placeholder="Password"
                            className="leading-[normal] p-0 placeholder:text-gray-900 text-left text-xl w-full"
                            wrapClassName="w-full"
                            type="password"
                            shape="round"
                            color="gray_900"
                          ></Input>
                          <Input
                            name="confirmpassword_One"
                            placeholder="Confirm Password"
                            className="leading-[normal] p-0 placeholder:text-gray-900 text-left text-xl w-full"
                            wrapClassName="w-full"
                            type="password"
                            shape="round"
                            color="gray_900"
                          ></Input>
                        </div>
                        <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                          <Button
                            className="cursor-pointer font-semibold leading-[normal] text-center text-xl w-[400px]"
                            shape="round"
                            size="md"
                            variant="gradient"
                            color="indigo_A700_indigo_A200_ba"
                          >
                            Signup
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start w-auto sm:w-full">
                      <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-auto sm:w-full">
                        <Line className="bg-gray-800 h-0.5 w-[43%]" />
                        <Text
                          className="text-base text-gray-800"
                          size="txtNotoSansMedium16Gray800"
                        >
                          Or
                        </Text>
                        <Line className="bg-gray-800 h-0.5 w-[43%]" />
                      </div>
                      <div className="flex flex-row gap-[18px] items-center justify-center w-auto">
                        <Img
                          className="h-[42px] w-[42px]"
                          src="images/img_devicongoogle.svg"
                          alt="devicongoogle"
                        />
                        <Img
                          className="h-[42px] w-[42px]"
                          src="images/img_logosfacebook.svg"
                          alt="logosfacebook"
                        />
                        <Img
                          className="h-[42px] w-[42px]"
                          src="images/img_bigithub.svg"
                          alt="bigithub"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtNotoSansMedium16"
                    >
                      Already Registered? Login
                    </Text>
                    <div className="bg-gradient5  flex flex-row gap-[31px] items-center justify-between px-1.5 py-1 rounded-md w-[400px] sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-gray-900 w-auto"
                        >
                          <Text size="txtNotoSansRegular16">
                            Terms & Conditions
                          </Text>
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <a
                          href="javascript:"
                          className="text-base text-gray-900 w-auto"
                        >
                          <Text size="txtNotoSansRegular16">Support</Text>
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtNotoSansRegular16"
                        >
                          Customer Care
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-gray-800 bottom-[40%] h-0.5 right-[0] w-[55%]" />
            </div>
            <Img
              className="h-[298px] md:h-auto md:mt-0 mt-[687px] object-cover rotate-[29deg]"
              src="images/img_ellipse2.png"
              alt="ellipseTwo"
            />
          </div>
          <Img
            className="absolute h-[487px] object-cover right-[0] top-[13%] w-[33%]"
            src="images/img_whatsappimage.png"
            alt="whatsappimage"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
