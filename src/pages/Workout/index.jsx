import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import ClickableImage from "./ClickableImage"; // Correct the import path
import { useNavigate } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const weeklyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Workoutpage = () => {
  const [groupthirtysixvalue, setGroupthirtysixvalue] = React.useState("");
  const navigate = useNavigate();
  const handleImageClick = (pagePath) => {
    navigate(pagePath);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-blue_gray-50 flex flex-col items-center justify-start pl-[18px] rounded-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1425px] mx-auto md:px-5 w-full">
              <div className="md:h-[841px] h-[853px] relative w-[9%] md:w-full">
                <div className="absolute bg-gradient8  flex flex-col gap-[38px] h-max inset-[0] items-center justify-center m-auto p-[17px] rounded-[40px] shadow-bs3 w-[84%]">
                  <Line className="bg-indigo-A700 h-px mt-[51px] w-[99%]" />
                  <div className="flex flex-col gap-[43px] items-start justify-start mb-[428px] w-[62%] md:w-full">
                  <ClickableImage
          onClick={() => handleImageClick("/home1")}
          imageSrc="images/img_home.svg"
          altText="home"
        />
        <ClickableImage
          onClick={() => handleImageClick("/workout")}
          imageSrc="images/img_workout.svg"
          altText="workout"
        />
            <ClickableImage
          onClick={() => handleImageClick("/schedule")}
          imageSrc="images/img_schedule.svg"
          altText="schedule"
        /> <ClickableImage
        onClick={() => handleImageClick("/clock")}
        imageSrc="images/img_clock.svg"
        altText="clock"
      />
                  </div>
                </div>
                <Img
                  className="absolute h-20 inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-20"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                />
                <div className="absolute bottom-[9%] flex flex-col gap-[15px] inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-row gap-4 h-[25px] md:h-auto items-center justify-start px-4 py-3 rounded-lg w-[120px]">
                    <div
                      className="h-6 w-6"
                      onClick={() => handleImageClick("Help")}
                      style={{ cursor: "pointer" }}
                    >
                      <Img
                        className="h-6 w-6"
                        src="images/img_help.svg"
                        alt="help"
                      />
                    </div>
                    <Text
                      className="flex-1 text-sm text-white-A700 w-auto"
                      size="txtManropeSemiBold14"
                    >
                      Help
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[120px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    shape="square"
                    color="indigo_50"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-semibold leading-[normal] text-left text-sm">
                      Logout
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col font-inter items-center justify-start p-[18px] rounded-tr-[50px] w-[17%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[269px] justify-start mb-[280px] mt-4 w-full">
                  <div className="flex flex-row gap-2 items-start justify-start ml-1.5 md:ml-[0] w-[54%] md:w-full">
                    <Img
                      className="h-16 md:h-auto rounded-[50%] w-16"
                      src="images/img_rectangle20.png"
                      alt="rectangleTwenty"
                    />
                    <Text
                      className="mt-3.5 text-base text-black-900_01 tracking-[-0.08px]"
                      size="txtInterMedium16"
                    >
                      Emsi
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-start w-full">
                      <Button
                        className="flex h-[54px] items-center justify-center w-[54px]"
                        shape="circle"
                        color="deep_orange_50"
                        size="xs"
                      >
                        <Img src="images/img_eye.svg" alt="eye" />
                      </Button>
                      <Text
                        className="ml-2.5 text-black-900_01 text-lg tracking-[-0.27px]"
                        size="txtInterRegular18"
                      >
                        Goals
                      </Text>
                      <Button
                        className="flex items-center justify-center mb-[9px] ml-[60px] mt-3.5 rounded-[10px] w-8"
                        shape="round"
                        color="white_A700"
                      >
                        <Img
                          src="images/img_group22.svg"
                          alt="groupTwentyTwo"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[26px] w-full">
                      <div className="bg-deep_purple-50 md:h-5 h-[54px] p-[15px] relative rounded-[50%] w-[54px]">
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[38%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[3px]"
                              src="images/img_vector_deep_purple_a400.svg"
                              alt="vector_Three"
                            />
                            <Img
                              className="h-[17px]"
                              src="images/img_favorite.svg"
                              alt="favorite"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute h-1.5 left-[41%] top-[28%]"
                          src="images/img_vector_deep_purple_a400_6x3.svg"
                          alt="vector_Four"
                        />
                      </div>
                      <Text
                        className="ml-2.5 text-black-900_01 text-lg tracking-[-0.27px]"
                        size="txtInterRegular18"
                      >
                        Diet
                      </Text>
                      <Button
                        className="flex items-center justify-center mb-[9px] ml-[73px] mt-3.5 rounded-[10px] w-8"
                        shape="round"
                        color="white_A700"
                      >
                        <Img src="images/img_group22.svg" alt="groupTwenty" />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[31px] w-full">
                      <Button
                        className="flex h-[54px] items-center justify-center w-[54px]"
                        shape="circle"
                        color="light_blue_50"
                        size="md"
                      >
                        <Img
                          className="h-[23px]"
                          src="images/img_search.svg"
                          alt="search_One"
                        />
                      </Button>
                      <Text
                        className="ml-2.5 text-black-900_01 text-lg tracking-[-0.27px]"
                        size="txtInterRegular18"
                      >
                        Settings
                      </Text>
                      <Button
                        className="flex items-center justify-center mb-[9px] ml-[38px] mt-3.5 rounded-[10px] w-8"
                        shape="round"
                        color="white_A700"
                      >
                        <Img src="images/img_group22.svg" alt="groupEighteen" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workoutpage;
