// Import necessary components and icons
import React, { useState, useRef } from "react";
import { Button, Img, Line, Text } from "components";
import ClickableImage from "./ClickableImage";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Clockpage = () => {
  const navigate = useNavigate();
  const [selectedMinutes, setSelectedMinutes] = useState(5);
  const [timerKey, setTimerKey] = useState(0);
  const [isTimerPaused, setTimerPaused] = useState(false);
  const countdownRef = useRef();

  const handleImageClick = (pagePath) => {
    navigate(pagePath);
  };

  const handleTimerStart = () => {
    setTimerKey((prevKey) => prevKey + 1);
    setTimerPaused(false);
  };

  const handleTimerPause = () => {
    setTimerPaused(true);
  };

  const handleResume = () => {
    setTimerPaused(false);
  };
  const handleRefresh = () => {
    setTimerKey((prevKey) => prevKey + 1);
    if (countdownRef.current) {
      countdownRef.current.api.start();
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
                    />
                    <ClickableImage
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
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full">
                  
                  <select
                    className="border rounded p-5"
                    value={selectedMinutes}
                    onChange={(e) =>
                      setSelectedMinutes(Number(e.target.value))
                    }
                  >
                    <option value={1}>1 Minute</option>
                    <option value={5}>5 Minutes</option>
                    <option value={10}>10 Minutes</option>
                    {/* Add more options as needed */}
                  </select>

                  <div className="flex items-center justify-center">
                  <div className="flex flex-row items-center justify-center w-full mt-4">
                  {/* Change the design of the Pause button */}
                  <Button
                    className="mr-2"
                    onClick={
                      isTimerPaused ? handleResume : handleTimerPause
                    }
                    size="md"
                    variant="solid"
                    color={isTimerPaused ? "green_50" : "red_50"} // Change color based on pause/resume
                    shape="rounded-full"
                  >
                    {isTimerPaused ? "Resume" : "Pause"}
                  </Button>
                 

                  <Button
                    onClick={handleRefresh}
                    size="md"
                    variant="solid"
                    color="blue_50"
                    shape="rounded-full"
                  >Refresh</Button>
                </div>
              
                    <CountdownCircleTimer
                      key={timerKey}  
                      isPlaying={!isTimerPaused}
                      duration={selectedMinutes * 60}
                      colors={[
                        ["#004777", 0.33],
                        ["#F7B801", 0.33],
                        ["#A30000"],
                      ]}
                      size={800} // Increase the size as needed
                      onComplete={handleTimerStart}
                    >
                      {({ remainingTime }) => (
                        <Text
                          className="text-black-900_01 text-9xl tracking-[-0.27px]"
                          size="txtInterRegular18"
                        >
                          {remainingTime}
                        </Text>
                      )}
                    </CountdownCircleTimer>
                  </div>
                </div>
                {/* Pause and Resume buttons */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Clockpage;