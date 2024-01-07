import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DesktopThreePage = () => {
  const [groupfortysixvalue, setGroupfortysixvalue] = React.useState("");
  const handleImageClick = (imageName) => {
    console.log(`Clicked on ${imageName}`);
    // Add logic for handling the click event
  };


  return (
    <>
      <div className="bg-blue_gray-50 h-[1024px] mx-auto py-9 relative w-full">
        <Input
          name="groupFortySix"
          placeholder="Search Activites, messages"
          value={groupfortysixvalue}
          onChange={(e) => setGroupfortysixvalue(e)}
          className="!placeholder:text-gray-400 !text-gray-400 font-inter leading-[normal] p-0 text-left text-sm tracking-[-0.07px] w-full z-[1]"
          wrapClassName="flex left-[0] mb-[-21px] ml-[161px] rounded-[27px] top-[4%] w-[28%] z-[1]"
          prefix={
            <div className="h-[15px] mb-[undefinedpx] mr-1.5 w-[15px] bg-gray-400 bottom-[4%] right-[0] z-[1]">
              <Img
                className="mt-auto mb-[undefinedpx] cursor-pointer h-[15px] z-[1]"
                src="images/img_search_gray_400.svg"
                alt="search"
              />
            </div>
          }
          suffix={
            <CloseSVG
              fillColor="#bebebe"
              className="mt-auto mb-[undefinedpx] cursor-pointer h-[15px] z-[1]"
              onClick={() => setGroupfortysixvalue("")}
              style={{
                visibility:
                  groupfortysixvalue?.length <= 0 ? "hidden" : "visible",
              }}
              height={15}
              width={15}
              viewBox="0 0 15 15"
            />
          }
          color="indigo_50"
          size="sm"
          variant="fill"
        ></Input>
        <div className="bg-blue_gray-50 flex flex-row font-manrope items-center justify-end m-auto pl-4 rounded-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:px-5 w-full">
            <div className="md:h-[851px] h-[853px] mb-2.5 md:mt-0 mt-[21px] relative w-[9%] md:w-full">
              <div className="absolute bg-gradient8  flex flex-col gap-[38px] h-max inset-[0] items-center justify-center m-auto p-[17px] rounded-[40px] shadow-bs3 w-[84%]">
                <Line className="bg-indigo-A700 h-px mt-[51px] w-[99%]" />
                <div className="flex flex-col gap-[43px] items-start justify-start mb-[428px] w-[62%] md:w-full">
                  <div className="bg-indigo-A700 flex flex-col h-10 items-center justify-start ml-0.5 md:ml-[0] rounded-[13px] w-10">
                  <Img
                        className="h-10 rounded-tl-[13px] rounded-tr-[13px] w-10"
                        src="images/img_home.svg"
                        alt="home"
                      />
                    </div>
                    <div
                      className="h-10 w-10"
                      onClick={() => handleImageClick("Workout")}
                      style={{ cursor: "pointer" }}
                    >
                      <Img
                        className="h-10 w-10"
                        src="images/img_workout.svg"
                        alt="workout"
                      />
                    </div>
                    <div
                      className="h-10 w-10"
                      onClick={() => handleImageClick("Schedule")}
                      style={{ cursor: "pointer" }}
                    >
                      <Img
                        className="h-10 w-10"
                        src="images/img_schedule.svg"
                        alt="schedule"
                      />
                    </div>
                    <div
                      className="h-10"
                      onClick={() => handleImageClick("Clock")}
                      style={{ cursor: "pointer" }}
                    >
                      <Img
                        className="h-10"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    </div>
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
            <div className="font-sfprodisplay md:h-[685px] h-[826px] mb-[9px] md:ml-[0] ml-[180px] md:mt-0 mt-12 relative w-[57%] md:w-full">
              <div className="absolute md:h-[676px] h-[826px] inset-[0] justify-center m-auto w-full">
                <div className="absolute md:h-[676px] h-[745px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="absolute bg-white-A700 bottom-[0] h-[595px] left-[0] rounded-[17px] w-[63%]"></div>
                  <Img
                    className="absolute h-[676px] inset-x-[0] mx-auto object-cover rounded-tl-[17px] rounded-tr-[17px] top-[0] w-full"
                    src="images/img_edgarcastrejon.png"
                    alt="edgarcastrejon"
                  />
                </div>
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[110px] md:px-10 sm:px-5 rounded-tl-[18px] rounded-tr-[18px] w-full">
                  <Text
                    className="mb-[66px] mt-[73px] text-[13.1px] text-center text-white-A700 tracking-[0.31px]"
                    size="txtSFProDisplayBold131"
                  >
                    Upgrade
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <div className="md:h-[103px] h-[104px] relative w-[23%]">
                    <div className="flex flex-col h-full items-start justify-start ml-[70px] mt-10 w-4">
                      <Text
                        className="text-[7.66px] text-black-900_02 text-center"
                        size="txtSFProDisplaySemibold766"
                      >
                        29%
                      </Text>
                      <Text
                        className="h-[7px] md:ml-[0] ml-[3px] text-[5.95px] text-center text-gray-600_01"
                        size="txtSFProDisplayRegular595"
                      >
                        Fat
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 border border-black-900_02 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-2 rounded w-full">
                      <div className="flex flex-col items-center justify-start my-0.5 w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-[9.08px] text-black-900_02"
                            size="txtSFProDisplayBold908"
                          >
                            Today’s Progress
                          </Text>
                          <a
                            href="javascript:"
                            className="text-[7.26px] text-blue-A400_01 text-right"
                          >
                            <Text size="txtSFProDisplaySemibold726">
                              View more
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[3px] w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-[22%]">
                            <Text
                              className="text-[7.26px] text-gray-600_01"
                              size="txtSFProDisplayRegular726"
                            >
                              Calories
                            </Text>
                            <div className="flex flex-row items-start justify-evenly mt-[3px] w-full">
                              <Img
                                className="h-2 md:h-auto object-cover w-2"
                                src="images/img_icons8fire1.png"
                                alt="icons8fireOne"
                              />
                              <Text
                                className="text-[9.99px] text-black-900_02"
                                size="txtSFProDisplaySemibold999"
                              >
                                1,284
                              </Text>
                            </div>
                          </div>
                          <div className="h-[47px] relative w-[48%]">
                            <div className="h-[47px] m-auto w-full">
                              <div className="absolute flex flex-col items-center justify-start left-[0] top-[11%] w-[84%]">
                                <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                                  <div className="border-4 border-gray-100 border-solid h-[35px] rounded-[17px] w-[35px]"></div>
                                  <div className="flex flex-col items-start justify-start w-4">
                                    <Text
                                      className="text-[7.66px] text-black-900_02 text-center"
                                      size="txtSFProDisplaySemibold766"
                                    >
                                      65%
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[3px] text-[5.95px] text-center text-gray-600_01"
                                      size="txtSFProDisplayRegular595"
                                    >
                                      Pro
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute border-4 border-gray-100 border-solid h-[35px] right-[5%] rounded-[17px] top-[11%] w-[35px]"></div>
                              <Img
                                className="absolute h-[47px] inset-y-[0] my-auto right-[0] w-[46px]"
                                src="images/img_ellipse53.svg"
                                alt="ellipseFiftyThree"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[13%] h-[17px] left-[16%]"
                              src="images/img_settings_yellow_700.svg"
                              alt="settings"
                            />
                          </div>
                          <div className="h-[35px] relative w-[35px]">
                            <Text
                              className="absolute bottom-[23%] inset-x-[0] mx-auto text-[5.95px] text-center text-gray-600_01 w-max"
                              size="txtSFProDisplayRegular595"
                            >
                              Carb
                            </Text>
                            <Text
                              className="absolute inset-x-[0] mx-auto text-[7.66px] text-black-900_02 text-center top-[29%] w-max"
                              size="txtSFProDisplaySemibold766"
                            >
                              85%
                            </Text>
                            <div className="absolute border-4 border-gray-100 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[17px] w-[35px]">
                              <Img
                                className="h-[35px] rounded-tl-[17px] rounded-tr-[17px] w-[35px]"
                                src="images/img_qrcode.svg"
                                alt="qrcode"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[5px] items-start justify-between mt-1 w-full">
                          <div className="flex flex-col h-4 items-center justify-start mt-0.5 rounded-[50%] w-4">
                            <Img
                              className="h-4 md:h-auto rounded-[50%] w-4"
                              src="images/img_photo.png"
                              alt="photo"
                            />
                          </div>
                          <div className="md:h-[17px] h-[18px] relative w-[88%]">
                            <Img
                              className="absolute bottom-[0] h-[7px] left-[0]"
                              src="images/img_contrast.svg"
                              alt="contrast"
                            />
                            <Button
                              className="absolute cursor-pointer inset-x-[0] min-w-[143px] mx-auto rounded-lg text-[8.17px] text-center top-[0]"
                              color="gray_100"
                              size="xs"
                            >
                              🎉 Keep the pace! You’re doing great.
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <Img
                      className="h-[94px] md:h-auto object-cover rounded w-full"
                      src="images/img_rectangle89.png"
                      alt="rectangleEightyNine"
                    />
                    <div className="md:h-[87px] h-[88px] relative w-full">
                      <Img
                        className="absolute h-[87px] inset-[0] justify-center m-auto object-cover rounded w-full"
                        src="images/img_rectangle90.png"
                        alt="rectangleNinety"
                      />
                      <div className="absolute bg-gradient11  bottom-[0] h-[33px] inset-x-[0] mx-auto w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col font-inter items-center justify-start md:ml-[0] ml-[78px] p-[18px] rounded-tr-[50px] w-[17%] md:w-full">
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
                      <Img src="images/img_group22.svg" alt="groupFiftyOne" />
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[26px] w-full">
                    <div className="bg-deep_purple-50 md:h-5 h-[54px] p-[15px] relative rounded-[50%] w-[54px]">
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[38%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[3px]"
                            src="images/img_vector_deep_purple_a400.svg"
                            alt="vector"
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
                        alt="vector_One"
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
                      <Img src="images/img_group22.svg" alt="groupFortyNine" />
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
                        alt="search"
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
                      <Img src="images/img_group22.svg" alt="groupFortySeven" />
                    </Button>
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

export default DesktopThreePage;
