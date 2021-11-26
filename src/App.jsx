import "./App.css";
import { BsInstagram } from "react-icons/bs";
import logo from "./images/logo.png";
import mascota from "./images/Mascota.png";
import { motion } from "framer-motion";
// App.jsx
function App() {
  const boxVariants = {
    out: {
      y: 0,
    },
    in: {
      y: 20,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <div className="App">
      <motion.div variants={boxVariants} initial="out" animate="in">
        <div className="card">
          <div className="card-header">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="card-body">
            <h1>Próximamente!</h1>
            <p>En breve estaremos en línea. Seguinos en Instagram.</p>
          </div>
          <div className="card-footer">
            <div className="icono">
              <a
                className="instagram"
                href="https://www.instagram.com/hopetechnology.co/"
                target="_blank"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="imagen">
              <img className="mascota" src={mascota} alt="mascota" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
