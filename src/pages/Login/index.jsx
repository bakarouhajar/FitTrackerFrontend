import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";
import axiosInstance from '../../axiosInstance';
import Swal from 'sweetalert2';


const DesktopTwoPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axiosInstance.post("/api/v1/auth/authenticate", {
        email,
        password
      }).then((response) => {
        console.log(response);
        localStorage.setItem("userId", response.data.userId); // Update the property name to 'userId'
        localStorage.setItem("token", response.data.token);
        navigate("/Home1");
      }).catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or password invalid',
        });
      })
    } catch (error) {
      // setError('An error occurred. Please try again later.');
    }
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-notosans items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 sm:h-[1010px] h-[1024px] md:h-[1176px] pl-[5px] md:px-5 py-[5px] relative w-full">
          <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between ml-auto my-auto w-[96%]">
            <div className="md:h-[838px] h-[902px] sm:h-[942px] mb-[108px] relative w-[76%] md:w-full">
              <div className="absolute bg-gradient6  h-[302px] left-[29%] rounded-[50%] top-[0] w-[302px]"></div>
              <div className="absolute bg-gradient7  bottom-[0] flex flex-col items-center justify-end left-[0] outline outline-[1px] p-10 sm:px-5 rounded-[20px] shadow-bs2 w-[47%] white_A700_99_black_900_99_border2">
                <div className="flex flex-col md:gap-10 gap-[101px] items-center justify-start mb-[7px] mt-[57px] w-auto sm:w-full">
                  <div className="flex flex-col gap-[47px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                          size="txtNotoSansSemiBold36Black900"
                        >
                          Login
                        </Text>
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtNotoSansMedium16Black900"
                        >
                          Glad you’re back.!
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">

                        <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">

                          <form onSubmit={handleSubmit}>
                            <div className="form-group" style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                              <label htmlFor="email" style={{ marginRight: '10px' }}></label>
                              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
                            </div>
                            <div className="form-group mt-3" style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                              <label htmlFor="password" style={{ marginRight: '10px' }}></label>
                              <input className="form-control" placeholder="Password" type="password" id="password" value={password} onChange={handlePasswordChange} required />
                            </div>

                            <Button
                              className="cursor-pointer font-semibold leading-[normal] text-center text-xl w-[400px]"
                              type="submit"
                              shape="round"
                              size="md"
                              variant="gradient"
                              color="indigo_A700_indigo_A200"
                            >
                              Login
                            </Button>
                          </form>
                          <div className="flex flex-row gap-1 items-center justify-start w-auto">
                            <Img
                              className="h-[18px] md:h-auto object-cover w-[18px]"
                              src="images/img_fluentcheckbox.png"
                              alt="fluentcheckbox"
                            />
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtNotoSansMedium16Black900"
                            >
                              Remember me
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-center w-auto sm:w-full">

                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtNotoSansMedium16Black900"
                          >
                            Forgot password ?
                          </Text>
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
                          src="images/img_devicongoogle_black_900.svg"
                          alt="devicongoogle"
                        />
                        <Img
                          className="h-[42px] w-[42px]"
                          src="images/img_logosfacebook_blue_a400.svg"
                          alt="logosfacebook"
                        />
                        <Img
                          className="h-[42px] w-[42px]"
                          src="images/img_bigithub_black_900.svg"
                          alt="bigithub"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient5  flex flex-row gap-[31px] items-center justify-between px-1.5 py-1 rounded-md w-[400px] sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <a
                        href="#"
                        onClick={() => {
                          // Handle Terms & Conditions click logic here
                        }}
                        className="text-base text-black-900 w-auto"
                      >
                        <Text size="txtNotoSansRegular16Black900">
                          Terms & Conditions
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <a
                        href="#"
                        onClick={() => {
                          // Handle Support click logic here
                        }}
                        className="text-base text-black-900 w-auto"
                      >
                        <Text size="txtNotoSansRegular16Black900">
                          Support
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <a
                        href="#"
                        onClick={() => {
                          // Handle Customer Care click logic here
                        }}
                        className="text-base text-black-900 w-auto"
                      >
                        <Text size="txtNotoSansRegular16Black900">
                          Customer Care
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-gray-800 bottom-[36%] h-0.5 right-[0] w-[54%]" />
            </div>
            <Img
              className="h-[298px] md:h-auto md:mt-0 mt-[711px] object-cover rotate-[29deg]"
              src="images/img_ellipse2_298x270.png"
              alt="ellipseTwo"
            />
          </div>
          <Img
            className="absolute h-[487px] object-cover right-[0] top-[15%] w-[36%]"
            src="images/img_whatsappimage_487x512.png"
            alt="whatsappimage"
          />
        </div >
      </div >
    </>
  );
};

export default DesktopTwoPage;
