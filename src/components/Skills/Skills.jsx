import "./Skills.css";
import HTML from "../../assets/html.png";
import VSCode from "../../assets/vscode.png";
import Figma from "../../assets/figma.png";
import React from "../../assets/react.png";
import NPM from "../../assets/npm.png";
import Git from "../../assets/git.png";
import GitHub from "../../assets/github.png";
import Canva from "../../assets/canva.png";
import CDT from "../../assets/cdt.png";
import CSS from "../../assets/css.png";
import BootStrap from "../../assets/bootstrap.png";
import NextJS from "../../assets/next-js.png";
import JavaScript from "../../assets/javascript.png";
import Sass from "../../assets/sass.png";
import PostMan from "../../assets/postman.png";
import TailwindCSS from "../../assets/tailwindCSS.png";
import django from "../../assets/django.png";
import mongoDB from "../../assets/mongoDB.png";
import Jn from "../../assets/jn.png";
import Pandas from "../../assets/pandas.png";
import OpenCV from "../../assets/opencv.png";
import bun from "../../assets/bun.png";
import matplotlib from "../../assets/matplotlib.png";
import skl from "../../assets/skl.png";
import astro from "../../assets/astro.png";
import Docker from "../../assets/Docker.png";
import AWS from "../../assets/aws.png";
import Python from "../../assets/python.png";
import Flask from "../../assets/flask.png";
import SQLite from "../../assets/sqlite.png";

export default function Skills() {
  const FE = [
    { id: 1, name: "HTML5", icon: HTML },
    { id: 2, name: "CSS3", icon: CSS },
    { id: 3, name: "JavaScript", icon: JavaScript },
    { id: 4, name: "React", icon: React },
    {
      id: 5,
      name: "TailwindCSS",
      icon: TailwindCSS,
    },
    { id: 6, name: "SASS", icon: Sass },
    { id: 7, name: "Bootstrap", icon: BootStrap },
    { id: 8, name: "Next.js", icon: NextJS },
    { id: 9, name: "Astro", icon: astro },
  ];

  const BE = [
    {
      id: 1,
      name: "Django",
      icon: django,
    },
    {
      id: 2,
      name: "Flask",
      icon: Flask,
    },
    {
      id: 3,
      name: "MongoDB",
      icon: mongoDB,
    },
    {
      id: 4,
      name: "SQLite",
      icon: SQLite,
    },
  ];

  const tools = [
    {
      id: 1,
      name: "GitHub",
      icon: GitHub,
    },
    {
      id: 2,
      name: "Jupyter Notebook",
      icon: Jn,
    },
    {
      id: 3,
      name: "Chrome Dev Tools",
      icon: CDT,
    },
    {
      id: 4,
      name: "VS Code",
      icon: VSCode,
    },
    {
      id: 5,
      name: "Postman",
      icon: PostMan,
    },
    {
      id: 6,
      name: "npm",
      icon: NPM,
    },
    {
      id: 7,
      name: "Bun",
      icon: bun,
    },
  ];

  const design = [
    {
      id: 1,
      name: "Canva",
      icon: Canva,
    },
    {
      id: 2,
      name: "Figma",
      icon: Figma,
    },
  ];

  const DS = [
    {
      id: 1,
      name: "Python",
      icon: Python,
    },
    {
      id: 2,
      name: "Pandas",
      icon: Pandas,
    },
    {
      id: 3,
      name: "Matplotlib",
      icon: matplotlib,
    },
    {
      id: 4,
      name: "Scikit-Learn",
      icon: skl,
    },
    {
      id: 5,
      name: "OpenCV",
      icon: OpenCV,
    },
  ];

  const Devops = [
    {
      id: 1,
      name: "Git",
      icon: Git,
    },
    {
      id: 2,
      name: "AWS",
      icon: AWS,
    },
    {
      id: 3,
      name: "Docker",
      icon: Docker,
    },
  ];

  return (
    <div id="skills" className="pt-24">
      <section
        className="flex flex-col gap-2 text-center relative m-8 before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        id="skills"
      >
        <h6 className="text-large sm:text-xl md:text-2xl">
          Want to know about
        </h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          My <span className="text-violet-400">Skills and Tools</span> I use
        </h3>
      </section>
      <section className="about">
        <div className="about-me sticky">
          <p className="paragraph about-para">
            I'm a well-rounded professional who's good at both making websites
            and eager to become a data scientist. I'm great at web development,
            creating user-friendly web apps that people like. At the same time, I
            really love data science and want to use data to solve tough
            problems. I'm always learning, and my goal is to combine these two
            areas to come up with cool new solutions and help make the digital
            world better.
          </p>
        </div>
        <div className="about-skills">
          <h2 className="skill-title">Front-End</h2>
          <div className="skills">
            {FE.map((skill) => (
              <div className="skill" key={skill.id}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="skill-title">Back-End</h2>
          <div className="skills">
            {BE.map((skill) => (
              <div className="skill" key={skill.id}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="skill-title">Tools</h2>
          <div className="skills">
            {tools.map((skill) => (
              <div className="skill" key={skill.id}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="skill-title">Design</h2>
          <div className="skills">
            {design.map((skill) => (
              <div className="skill" key={skill.id}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="skill-title leading-9">
            Data Science and Machine Learning:
          </h2>
          <div className="skills">
            {DS.map((skill) => (
              <div className="skill" key={skill.id}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="skill-title">Devops</h2>
          <div className="skills">
            {Devops.map((skill) => (
              <div className="skill" key={skill.id}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="skill-title">Soft Skills</h2>
          <div className="skills">
            <p className="m-0 text-white text-lg border border-solid border-white p-2">
              Problem Solving
            </p>
            <p className="m-0 text-white text-lg border border-solid border-white p-2">
              Leadership
            </p>
            <p className="m-0 text-white text-lg border border-solid border-white p-2">
              Collaboration
            </p>
            <p className="m-0 text-white text-lg border border-solid border-white p-2">
              Decision Making
            </p>
            <p className="m-0 text-white text-lg border border-solid border-white p-2">
              Time Management
            </p>
            <p className="m-0 text-white text-lg border border-solid border-white p-2">
              Critical Thinking
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
