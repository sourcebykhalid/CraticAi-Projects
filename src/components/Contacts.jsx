import React, { useRef, useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  Button,
  Input,
  Textarea,
  Typography,
  Card,
} from "@material-tailwind/react";
import Reveal from "./Reveal";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div id="contact" className=" w-full py-12  sm:py-28 mb-8 bg-neutral-950">
      <div className="flex flex-col sm:flex-row justify-center items-center text-gray-400 w-full sm:w-3/4 mx-auto gap-x-7">
        <div className="flex flex-col justify-between items-center text-2xl sm:text-3xl font-extrabold sm:w-1/3">
          <span>
            Get in{" "}
            <span className="sm:text-5xl font-extrabold text-orange-600">
              touch!
            </span>
          </span>
          <br />
          <span className="sm:text-2xl font-bold text-lime-400 mb-3">
            +91 ***********
          </span>
          <div className="flex justify-center items-center gap-x-4 text-2xl w-full">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <Card color="transparent" shadow={false} className="w-full sm:w-1/2">
          <Reveal>
            <Typography
              variant="h4"
              color="blue-gray"
              className="text-center mb-6"
            >
              Contact<span className="text-lime-400">.</span>
            </Typography>
          </Reveal>
          <form className="flex flex-col mt-8" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <Input
                type="text"
                name="user_name"
                size="lg"
                placeholder="Enter name"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-6">
              <Input
                type="email"
                name="user_email"
                size="lg"
                placeholder="Enter email"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-6">
              <Input
                type="text"
                name="user_subject"
                size="lg"
                placeholder="Subject"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-6">
              <Textarea
                name="message"
                placeholder="Your message"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 min-h-32"
              />
            </div>
            <Button
              type="submit"
              className="mt-4 w-full bg-lime-400 text-black hover:bg-orange-500 hover:text-gray-300 transition duration-500 text-lg font-bold"
            >
              SEND A MESSAGE
            </Button>
            <span className="text-gray-600 font-semibold mt-2">
              {done && "Thanks For Contacting Me"}
            </span>
          </form>
          <Reveal>
            <div className="w-full mx-auto flex flex-col justify-center items-center my-3">
              <span className="text-neutral-300 text-2xl font-bold">Or</span>
              <br />
              <span className="text-neutral-400 text-base px-4">
                Shoot us an email if you want any service
              </span>
              <span className="flex justify-center items-center gap-x-2 md:text-2xl font-semibold text-neutral-400 mt-3">
                <IoMdMail className="text-lime-400" /> craticai@gmail.com
              </span>
            </div>
          </Reveal>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
