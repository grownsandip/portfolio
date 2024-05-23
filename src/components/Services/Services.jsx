import React, { useRef } from "react";
import "./Services.scss";
import { motion,useInView } from "framer-motion";
const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:2,
            staggerChildren:0.5,
        },
    },
};
const Services = () => {
    const ref=useRef()
    const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For your</motion.b>Business
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{color:"black", background:"lightgray"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit distinctio perspiciatis deleniti aliquid voluptatem
            nam iusto voluptate repudiandae fuga eaque, at laborum? Perferendis,
            laudantium? Quaerat id expedita ut itaque rem.
          </p>
         <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{color:"black", background:"lightgray"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit distinctio perspiciatis deleniti aliquid voluptatem
            nam iusto voluptate repudiandae fuga eaque, at laborum? Perferendis,
            laudantium? Quaerat id expedita ut itaque rem.
          </p>
         <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{color:"black", background:"lightgray"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit distinctio perspiciatis deleniti aliquid voluptatem
            nam iusto voluptate repudiandae fuga eaque, at laborum? Perferendis,
            laudantium? Quaerat id expedita ut itaque rem.
          </p>
         <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{color:"black", background:"lightgray"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit distinctio perspiciatis deleniti aliquid voluptatem
            nam iusto voluptate repudiandae fuga eaque, at laborum? Perferendis,
            laudantium? Quaerat id expedita ut itaque rem.
          </p>
         <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
