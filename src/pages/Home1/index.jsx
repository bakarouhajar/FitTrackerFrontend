import React from "react";
import ClickableImage from "./ClickableImage"; // Correct the import path
import { useNavigate } from "react-router-dom";


import { Button, Img, Input, Line, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";


const weeklyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Home1Page = () => {
  const [groupthirtysixvalue, setGroupthirtysixvalue] = React.useState("");
  const navigate = useNavigate();
  const handleImageClick = (pagePath) => {
    navigate(pagePath);
  };
  const logout = async () => {
    try {
      localStorage.removeItem('token');
      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
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
                    type="button"
                    onClick={logout}
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
              <div className="flex md:flex-1 flex-col font-inter gap-[47px] items-center justify-start w-[70%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Input
                    name="groupThirtySix"
                    placeholder="Search Activites, messages"
                    value={groupthirtysixvalue}
                    onChange={(e) => setGroupthirtysixvalue(e)}
                    className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] p-0 text-left text-sm tracking-[-0.07px] w-full"
                    wrapClassName="flex sm:flex-1 rounded-[27px] sm:w-full"
                    prefix={
                      <div className="h-[15px] mb-1 mr-1.5 w-[15px] bg-gray-400">
                        <Img
                          className="cursor-pointer h-[15px] my-auto"
                          src="images/img_search_gray_400.svg"
                          alt="search"
                        />
                      </div>
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#bebebe"
                        className="cursor-pointer h-[15px] my-auto"
                        onClick={() => setGroupthirtysixvalue("")}
                        style={{
                          visibility:
                            groupthirtysixvalue?.length <= 0
                              ? "hidden"
                              : "visible",
                        }}
                        height={15}
                        width={15}
                        viewBox="0 0 15 15"
                      />
                    }
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[184px] rounded-[27px] text-center text-sm tracking-[-0.07px]"
                    color="indigo_A700"
                    size="lg"
                  >
                    Schedule events
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[43px] items-center justify-start w-[68%] md:w-full">
                    <div className="sm:h-[1628px] md:h-[374px] h-[375px] relative w-full">
                      <div className="bg-gradient9  h-[363px] m-auto rounded-[40px] w-full"></div>
                      <div className="absolute bg-gradient2  flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded-bl-[40px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[40px] w-full">
                        <div className="flex flex-col gap-11 justify-start mb-7 w-[98%] md:w-full">
                          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                            <Text
                              className="text-lg text-white-A700 tracking-[-0.09px]"
                              size="txtInterSemiBold18"
                            >
                              Weight
                            </Text>
                            <SelectBox
                              className="sm:flex-1 font-medium leading-[normal] text-left text-sm tracking-[-0.07px] w-[22%] sm:w-full"
                              placeholderClassName="text-white-A700_a2"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] outline-white-A700 outline-[1px] outline w-2.5"
                                  src="images/img_arrowdown_white_a700.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="groupThirtyFour"
                              options={weeklyOptionsList}
                              isSearchable={false}
                              placeholder="Weekly"
                              shape="round"
                              color="white_A700"
                              size="xs"
                              variant="outline"
                            />
                          </div>
                          <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[25px] w-[84%] md:w-full">
                            <div className="sm:h-[1438px] h-[184px] relative w-[99%] sm:w-full">
                              <div className="absolute sm:h-[1438px] h-[184px] inset-[0] justify-center m-auto w-[97%] sm:w-full">
                                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                                    <Line className="bg-deep_orange-50 sm:h-0.5 h-[184px] w-0.5 sm:w-full" />
                                    <Line className="bg-deep_orange-50 sm:h-0.5 h-[184px] sm:ml-[0] ml-[78px] w-0.5 sm:w-full" />
                                    <Line className="bg-deep_orange-50 sm:h-0.5 h-[184px] sm:ml-[0] ml-[78px] w-0.5 sm:w-full" />
                                    <Line className="bg-deep_orange-50 sm:h-0.5 h-[184px] sm:ml-[0] ml-[78px] w-0.5 sm:w-full" />
                                    <Img
                                      className="h-2.5 sm:ml-[0] ml-[11px]"
                                      src="images/img_vector11.svg"
                                      alt="vectorEleven"
                                    />
                                    <Line className="bg-deep_orange-50 sm:h-0.5 h-[184px] sm:ml-[0] ml-[61px] w-0.5 sm:w-full" />
                                    <Line className="bg-deep_orange-50 sm:h-0.5 h-[184px] sm:ml-[0] ml-[78px] w-0.5 sm:w-full" />
                                    <Line className="bg-deep_orange-50 sm:h-0.5 h-[184px] sm:ml-[0] ml-[78px] w-0.5 sm:w-full" />
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[153px] inset-x-[0] items-center justify-end mx-auto p-[34px] sm:px-5 w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group43.svg')",
                                  }}
                                >
                                  <div className="flex flex-col justify-start w-[82%] md:w-full">
                                    <div className="flex flex-row items-start justify-end md:ml-[0] ml-[158px] w-[54%] md:w-full">
                                      <div className="bg-deep_orange-500 flex flex-col h-[22px] items-start justify-start mt-[22px] p-1 rounded-[50%] w-[22px]">
                                        <div className="bg-white-A700 h-[13px] rounded-md w-[13px]"></div>
                                      </div>
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-11 items-start justify-start ml-[7px] p-1 rounded-[5px] w-[35%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group44.svg')",
                                        }}
                                      >
                                        <div className="flex flex-col items-start justify-start">
                                          <Text
                                            className="text-[15px] text-white-A700 tracking-[-0.15px]"
                                            size="txtInterBold15"
                                          >
                                            100
                                          </Text>
                                          <Text
                                            className="h-[15px] text-white-A700 text-xs tracking-[-0.06px]"
                                            size="txtInterSemiBold12"
                                          >
                                            Kg
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="bg-deep_orange-500 h-4 mb-[11px] ml-[73px] mt-[17px] rounded-[50%] w-4"></div>
                                    </div>
                                    <div className="flex flex-row items-start justify-start mr-20 mt-0.5 w-[77%] md:w-full">
                                      <div className="bg-deep_orange-500 h-4 mb-[15px] mt-1.5 rounded-[50%] w-4"></div>
                                      <div className="bg-deep_orange-500 h-4 mb-[21px] ml-[66px] rounded-[50%] w-4"></div>
                                      <div className="bg-deep_orange-500 h-4 ml-[143px] mt-[21px] rounded-[50%] w-4"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-deep_orange-500 bottom-[0] h-4 left-[0] rounded-[50%] w-4"></div>
                              <div className="absolute bg-deep_orange-500 h-4 right-[0] rounded-[50%] top-[10%] w-4"></div>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-gray-300 text-sm tracking-[-0.07px]"
                                size="txtInterSemiBold14"
                              >
                                Sun
                              </Text>
                              <Text
                                className="text-gray-300 text-sm tracking-[-0.07px]"
                                size="txtInterSemiBold14"
                              >
                                Mon
                              </Text>
                              <Text
                                className="text-gray-300 text-sm tracking-[-0.07px]"
                                size="txtInterSemiBold14"
                              >
                                Tue
                              </Text>
                              <Text
                                className="text-gray-300 text-sm tracking-[-0.07px]"
                                size="txtInterSemiBold14"
                              >
                                Wed
                              </Text>
                              <Text
                                className="text-gray-300 text-sm tracking-[-0.07px]"
                                size="txtInterSemiBold14"
                              >
                                Thu
                              </Text>
                              <Text
                                className="text-gray-300 text-sm tracking-[-0.07px]"
                                size="txtInterSemiBold14"
                              >
                                Fri
                              </Text>
                              <Text
                                className="text-gray-300 text-sm tracking-[-0.07px]"
                                size="txtInterSemiBold14"
                              >
                                Sat
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="md:h-[217px] h-[271px] relative w-[45%] sm:w-full">
                        <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[19px] rounded-[50px] w-full">
                          <div className="flex flex-col justify-start mt-[9px] w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[238px] w-[2%] md:w-full">
                              <div className="bg-gray-400_01 h-1 rounded-[50%] w-1"></div>
                              <div className="bg-gray-400_01 h-1 mt-[3px] rounded-[50%] w-1"></div>
                              <div className="bg-gray-400_01 h-1 mt-[3px] rounded-[50%] w-1"></div>
                            </div>
                            <div className="h-10 md:h-[47px] md:ml-[0] ml-[55px] mt-[23px] relative w-[54%]">
                              <Text
                                className="absolute inset-x-[0] mx-auto text-indigo-500 text-xl top-[0] tracking-[-0.10px] w-max"
                                size="txtInterSemiBold20"
                              >
                                Daily Running
                              </Text>
                              <Text
                                className="absolute bottom-[0] left-[17%] text-gray-600 text-sm tracking-[-0.07px]"
                                size="txtInterRegular14"
                              >
                                5 km / week{" "}
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start mt-[33px] w-full">
                              <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-[96%] md:w-full">
                                <Text
                                  className="text-[15px] text-indigo-A400 tracking-[-0.07px]"
                                  size="txtInterMedium15"
                                >
                                  Progress
                                </Text>
                                <Text
                                  className="text-[15px] text-indigo-A400 tracking-[-0.07px]"
                                  size="txtInterMedium15"
                                >
                                  75%
                                </Text>
                              </div>
                              <div className="h-[7px] mt-[9px] overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-blue_gray_100 rounded-[3px]"></div>
                                <div
                                  className="h-full absolute bg-indigo_A400  rounded-[3px]"
                                  style={{ width: "76%" }}
                                ></div>
                              </div>
                              <Text
                                className="mt-4 text-base text-gray-600 tracking-[-0.08px]"
                                size="txtInterRegular16"
                              >
                                Target: 7km/ week
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gradient10  flex flex-col inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[20px] shadow-bs4 top-[0] w-[32%]">
                          <Img
                            className="h-[46px] w-[46px]"
                            src="images/img_1695790271595759953.svg"
                            alt="169579027159575"
                          />
                        </div>
                      </div>
                      <div className="md:h-[216px] h-[271px] relative w-[45%] sm:w-full">
                        <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[19px] rounded-[50px] w-full">
                          <div className="flex flex-col justify-start mt-[9px] w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[238px] w-[2%] md:w-full">
                              <div className="bg-gray-400_01 h-1 rounded-[50%] w-1"></div>
                              <div className="bg-gray-400_01 h-1 mt-[3px] rounded-[50%] w-1"></div>
                              <div className="bg-gray-400_01 h-1 mt-[3px] rounded-[50%] w-1"></div>
                            </div>
                            <div className="h-[41px] md:h-[47px] md:ml-[0] ml-[57px] mt-[22px] relative w-[53%]">
                              <Text
                                className="absolute right-[3%] text-indigo-500 text-xl top-[0] tracking-[-0.10px]"
                                size="txtInterSemiBold20"
                              >
                                Daily Steps
                              </Text>
                              <Text
                                className="absolute bottom-[0] inset-x-[0] mx-auto text-gray-600 text-sm tracking-[-0.07px] w-max"
                                size="txtInterRegular14"
                              >
                                10000 steps / week{" "}
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start mt-8 w-full">
                              <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-[97%] md:w-full">
                                <Text
                                  className="text-[15px] text-indigo-A400 tracking-[-0.07px]"
                                  size="txtInterMedium15"
                                >
                                  Progress
                                </Text>
                                <Text
                                  className="text-[15px] text-indigo-A400 tracking-[-0.07px]"
                                  size="txtInterMedium15"
                                >
                                  95%
                                </Text>
                              </div>
                              <div className="h-[7px] mt-[9px] overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-blue_gray_100 rounded-[3px]"></div>
                                <div
                                  className="h-full absolute bg-indigo_A400  rounded-[3px]"
                                  style={{ width: "96%" }}
                                ></div>
                              </div>
                              <Text
                                className="mt-4 text-base text-gray-600 tracking-[-0.08px]"
                                size="txtInterRegular16"
                              >
                                Target: 12000/week
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-gradient2  md:h-[23px] h-[83px] inset-x-[0] mx-auto p-[25px] sm:px-5 rounded-[20px] shadow-bs4 top-[0] w-[32%]">
                          <div className="absolute bottom-[30%] md:h-[23px] h-[26px] inset-x-[0] mx-auto w-[31%]">
                            <Img
                              className="absolute h-[23px] right-[0] top-[0]"
                              src="images/img_television.svg"
                              alt="television"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[15px] inset-x-[0] items-end justify-start mx-auto p-[3px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group45.svg')",
                              }}
                            >
                              <div className="flex flex-col items-start justify-start mb-1 w-[34%] md:w-full">
                                <Img
                                  className="h-px"
                                  src="images/img_vector.svg"
                                  alt="vector"
                                />
                                <Img
                                  className="h-px ml-0.5 md:ml-[0]"
                                  src="images/img_vector.svg"
                                  alt="vector_One"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[3px] inset-y-[0] left-[41%] my-auto w-[3px]"
                            src="images/img_vector_white_a700.svg"
                            alt="vector_Two"
                          />
                          <Img
                            className="absolute h-3.5 right-[36%] top-[30%]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Img
                            className="absolute h-1.5 left-[42%] top-[30%] w-1.5"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col justify-start w-[28%] md:w-full">
                    <Input
                      name="groupFortyOne"
                      placeholder="Daily Walking"
                      className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-left text-lg tracking-[-0.09px] w-full"
                      wrapClassName="flex rounded-[40px] w-full"
                      prefix={
                        <div className="mr-[15px] pl-[13px] pr-3 sm:w-full sm:mx-0 w-[30%] bg-white-A700_33 shadow-bs5 rounded-[20px] py-[9px]">
                          <Img
                            className="h-14 my-auto"
                            src="images/img_television_white_a700.svg"
                            alt="television"
                          />
                        </div>
                      }
                      size="sm"
                      variant="gradient"
                      color="indigo_A700_indigo_A200"
                    ></Input>
                    <div className="bg-indigo-A700 flex flex-col items-center justify-start mt-[31px] rounded-[40px] w-full">
                      <div className="flex flex-col gap-[15px] items-end justify-start w-full">
                        <div className="bg-indigo-A700 border-2 border-red-100 border-solid flex flex-row gap-2 items-center justify-start p-[26px] sm:px-5 rounded-[40px] w-full">
                          <div className="bg-deep_orange-500 flex flex-col items-center justify-end ml-[3px] p-3.5 rounded-[20px] shadow-bs1 w-[36%]">
                            <Img
                              className="h-11"
                              src="images/img_maximize.svg"
                              alt="maximize"
                            />
                          </div>
                          <Text
                            className="text-lg text-white-A700 tracking-[-0.09px]"
                            size="txtInterSemiBold18"
                          >
                            Water
                          </Text>
                        </div>
                        <div className="flex flex-row gap-10 items-start justify-end w-[92%] md:w-full">
                          <div className="flex flex-col items-start justify-start mt-[5px]">
                            <Text
                              className="text-sm text-white-A700 tracking-[-0.07px]"
                              size="txtInterMedium14"
                            >
                              Total Glass
                            </Text>
                            <Text
                              className="mt-[3px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[-0.13px]"
                              size="txtInterSemiBold26"
                            >
                              4
                            </Text>
                          </div>
                          <Img
                            className="h-20"
                            src="images/img_vector12.svg"
                            alt="vectorTwelve"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[67px] mt-[132px] text-base text-black-900_01"
                      size="txtInterRegular16Black90001"
                    >
                      Weight loss Goal
                    </Text>
                    <div className="flex flex-row items-start justify-center ml-20 md:ml-[0] mt-3.5 w-[46%] md:w-full">
                      <Text
                        className="text-base text-black-900_02"
                        size="txtInterBold16"
                      >
                        Loss: 5kg
                      </Text>
                      <Text
                        className="ml-0.5 mt-0.5 text-gray-600 text-sm tracking-[-0.07px]"
                        size="txtInterRegular14"
                      >
                        / Month
                      </Text>
                    </div>
                    <Img
                      className="h-[104px] md:ml-[0] ml-[52px] mt-3.5"
                      src="images/img_meter1.svg"
                      alt="meterOne"
                    />
                  </div>
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

export default Home1Page;
