import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DesktopFourPage = () => {
  const [grouptwovalue, setGrouptwovalue] = React.useState("");
  const handleImageClick = (imageName) => {
    console.log(`Clicked on ${imageName}`);
    // Add logic for handling the click event
  };


  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-50 h-[1024px] md:px-5 py-9 relative w-full">
          <Input
            name="groupTwo"
            placeholder="Search Activites, messages"
            value={grouptwovalue}
            onChange={(e) => setGrouptwovalue(e)}
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
                onClick={() => setGrouptwovalue("")}
                style={{
                  visibility: grouptwovalue?.length <= 0 ? "hidden" : "visible",
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
          <div className="bg-blue_gray-50 flex flex-col font-manrope items-center justify-start m-auto pl-4 rounded-[50px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="md:h-[841px] h-[853px] relative w-[9%] md:w-full">
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
                <div className="flex md:flex-1 flex-col font-abeezee justify-start w-[70%] md:w-full">
                  <div className="md:h-[250px] h-[373px] relative w-full">
                    <div className="md:h-[250px] h-[373px] m-auto w-full">
                      <div className="absolute md:h-[195px] h-[215px] left-[0] top-[12%] w-3/4 md:w-full">
                        <div className="absolute bottom-[0] flex flex-col gap-2.5 items-center justify-start p-2.5 right-[0] w-[57%]">
                          <div className="border-2 border-solid flex flex-col h-[120px] indigo_A700_02_white_A700_70_border items-center justify-start p-2.5 rounded-[50%] w-[120px]">
                            <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                              <Img
                                className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                                src="images/img_image1.png"
                                alt="imageOne"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[3px] items-center justify-start w-auto">
                            <Text
                              className="italic text-black-900_01 text-center text-lg w-auto"
                              size="txtABeeZeeItalic18"
                            >
                              EMSI
                            </Text>
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-3 w-3"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="text-black-900_01 text-center text-xs w-auto"
                                size="txtABeeZeeRegular12"
                              >
                                Marrakech - Maroc
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[129px] left-[0] object-cover rounded-[20px] top-[0] w-[46%]"
                          src="images/img_rectangle4.png"
                          alt="rectangleFour"
                        />
                      </div>
                      <Img
                        className="absolute h-[250px] object-cover right-[0] rounded-tl-[60px] rounded-tr-[60px] top-[0] w-[250px]"
                        src="images/img_rectangle8.png"
                        alt="rectangleEight"
                      />
                      <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-5 items-center justify-center p-5 right-[24%] w-[42%]">
                        <div className="flex flex-row gap-2.5 items-center justify-start ml-2.5 sm:ml-[0] w-auto">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded-[10px] w-[30px]"
                            src="images/img_frame41.png"
                            alt="frameFortyOne"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-black-900_01 text-center text-xs w-auto"
                              size="txtABeeZeeRegular12"
                            >
                              165.0 CM
                            </Text>
                            <Text
                              className="text-black-900_01 text-center text-xs w-auto"
                              size="txtABeeZeeRegular12"
                            >
                              Height
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start sm:ml-[0] ml-[43px] w-auto">
                          <div className="bg-gradient12  flex flex-col items-center justify-start p-[7px] rounded-[10px] w-[38%]">
                            <Img
                              className="h-5 md:h-auto my-2 object-cover"
                              src="images/img_vector_20x16.png"
                              alt="vector"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5 items-start justify-start w-10">
                            <Text
                              className="text-black-900_01 text-center text-xs w-auto"
                              size="txtABeeZeeRegular12"
                            >
                              72 KG
                            </Text>
                            <Text
                              className="text-black-900_01 text-center text-xs w-auto"
                              size="txtABeeZeeRegular12"
                            >
                              Weight
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start sm:ml-[0] ml-[42px] mr-2.5 w-auto">
                          <Img
                            className="h-[50px] md:h-auto object-cover rounded-[10px] w-[30px]"
                            src="images/img_frame41_50x30.png"
                            alt="frameFortyOne_One"
                          />
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-black-900_01 text-center text-xs w-auto"
                              size="txtABeeZeeRegular12"
                            >
                              27.5 Year
                            </Text>
                            <Text
                              className="text-black-900_01 text-center text-xs w-auto"
                              size="txtABeeZeeRegular12"
                            >
                              Age
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[11%] h-[129px] left-[0] object-cover rounded-[20px] w-[35%]"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="absolute flex flex-row font-poppins h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[32%]">
                      <Text
                        className="text-black-900_02 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Swimming
                      </Text>
                      <Img
                        className="h-[9px] md:h-auto ml-[126px] mt-[3px] object-cover w-[5%]"
                        src="images/img_image2.png"
                        alt="imageTwo"
                      />
                      <Text
                        className="ml-[7px] text-[13px] text-black-900_87"
                        size="txtPoppinsRegular13"
                      >
                        430Kcal/hr
                      </Text>
                    </div>
                    <div className="absolute bottom-[3%] flex flex-row font-poppins items-start justify-start left-[0] w-[30%]">
                      <Text
                        className="text-black-900_02 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Playing Tenis
                      </Text>
                      <Img
                        className="h-[9px] md:h-auto ml-[78px] mt-[3px] object-cover w-[5%]"
                        src="images/img_image2.png"
                        alt="imageOne_One"
                      />
                      <Text
                        className="ml-[7px] text-[13px] text-black-900_87"
                        size="txtPoppinsRegular13"
                      >
                        430Kcal/hr
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-center md:ml-[0] ml-[257px] mt-[9px] w-[48%] md:w-full">
                    <Text
                      className="text-black-900_02 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      April
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[70px] text-black-900_87 text-sm"
                      size="txtPoppinsRegular14Black90087"
                    >
                      May
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[74px] text-black-900_87 text-sm"
                      size="txtPoppinsRegular14Black90087"
                    >
                      June
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[70px] text-black-900_87 text-sm"
                      size="txtPoppinsRegular14Black90087"
                    >
                      July
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[76px] text-black-900_87 text-sm"
                      size="txtPoppinsRegular14Black90087"
                    >
                      August
                    </Text>
                  </div>
                  <div className="flex flex-row font-poppins sm:gap-10 items-start justify-between md:ml-[0] ml-[215px] mt-[61px] w-[62%] md:w-full">
                    <Text
                      className="text-black-900_02 text-lg"
                      size="txtPoppinsSemiBold18"
                    >
                      Statistics
                    </Text>
                    <div className="bg-gray-400_33_01 flex flex-row items-start justify-between p-[7px] rounded-[20px] w-1/4">
                      <Text
                        className="ml-[19px] mt-[3px] text-black-900_87 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        Week{" "}
                      </Text>
                      <Img
                        className="h-[33px] mr-[5px] mt-1"
                        src="images/img_arrowdown_black_900_02.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[278px] mt-[33px] w-[51%] md:w-full">
                    <Line className="bg-black-900_26 h-[243px] sm:h-[3px] mb-[7px] w-[3px] sm:w-full" />
                    <Line className="bg-indigo-A700 h-[186px] sm:h-[3px] mb-[7px] sm:mt-0 mt-[57px] w-[3px] sm:w-full" />
                    <Line className="bg-black-900_26 h-[243px] sm:h-[3px] mb-[7px] sm:ml-[0] ml-[72px] w-[3px] sm:w-full" />
                    <Line className="bg-red-500_cc h-[120px] sm:h-[3px] mb-[7px] sm:mt-0 mt-[123px] w-[3px] sm:w-full" />
                    <Line className="bg-black-900_26 h-[243px] sm:h-[3px] mb-[7px] sm:ml-[0] ml-[74px] w-[3px] sm:w-full" />
                    <Line className="bg-light_blue-400 h-[156px] sm:h-[3px] mb-[7px] sm:mt-0 mt-[87px] w-[3px] sm:w-full" />
                    <Line className="bg-black-900_26 h-[245px] sm:h-[3px] mb-[5px] sm:ml-[0] ml-[75px] w-[3px] sm:w-full" />
                    <Line className="bg-indigo-A700 h-[183px] sm:h-[3px] mb-[5px] sm:mt-0 mt-[62px] w-[3px] sm:w-full" />
                    <Line className="bg-black-900_26 h-[247px] sm:h-[3px] mb-[3px] sm:ml-[0] ml-[79px] w-[3px] sm:w-full" />
                    <Line className="bg-red-A200 h-[133px] sm:h-[3px] mb-[3px] sm:mt-0 mt-[114px] w-[3px] sm:w-full" />
                    <Line className="bg-black-900_26 h-[248px] sm:h-[3px] mb-0.5 sm:ml-[0] ml-[85px] w-[3px] sm:w-full" />
                    <Line className="bg-black-900_26 h-[250px] sm:h-[3px] sm:ml-[0] ml-[89px] w-[3px] sm:w-full" />
                    <Line className="bg-indigo-A700 h-[166px] sm:h-[3px] sm:mt-0 mt-[84px] w-[3px] sm:w-full" />
                  </div>
                  <div className="flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-end md:ml-[0] ml-[271px] mt-[11px] w-[52%] md:w-full">
                    <Text
                      className="text-black-900_87 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      M
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[58px] text-black-900_87 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      T
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[72px] text-black-900_87 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      S
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[71px] text-black-900_87 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      F
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[78px] text-black-900_87 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      T
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[76px] text-black-900_87 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      S
                    </Text>
                    <Text
                      className="ml-20 sm:ml-[0] text-black-900_87 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      W
                    </Text>
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
                          <Img src="images/img_group22.svg" alt="groupSeven" />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[26px] w-full">
                        <div className="bg-deep_purple-50 md:h-5 h-[54px] p-[15px] relative rounded-[50%] w-[54px]">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[38%]">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Img
                                className="h-[3px]"
                                src="images/img_vector_deep_purple_a400.svg"
                                alt="vector_One"
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
                            alt="vector_Two"
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
                          <Img src="images/img_group22.svg" alt="groupFive" />
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
                          <Img src="images/img_group22.svg" alt="groupThree" />
                        </Button>
                      </div>
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

export default DesktopFourPage;
