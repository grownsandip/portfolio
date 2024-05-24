import"./contacts.scss";
import {motion} from "framer-motion";
const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};

const Contacts = () => {
  return (
    <motion.div className="contacts" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
      <motion.h1 variants={variants}>Lets Work Together</motion.h1>
      <motion.div className="item" variants={variants}>
        <h2>Mail</h2>
        <span>roysandip33290@gmail.com</span>
      </motion.div>
      <motion.div className="item" variants={variants}>
        <h2>Address</h2>
        <span>agartala</span>
      </motion.div>
      <motion.div className="item" variants={variants}>
        <h2>Phone</h2>
        <span>8787423234</span>
      </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email"/>
            <textarea rows={8} placeholder="message"/>
            <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contacts;
