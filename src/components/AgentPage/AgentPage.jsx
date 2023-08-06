import styles from "./AgentPage.module.css";
import { useEffect, useState } from "react";
import { CreateTour } from "./CreateTour";
import { AYS } from "../AreYouSure/AYS";
import { ViewTours } from "./ViewTours";
import { ToastContainer, toast } from "react-toastify";
import { Contact } from "../Footer/Contact";
import { Footer } from "../Footer/Footer";
import { useParams } from "react-router-dom";

const AgentPage = () => {
  const {UserName} = useParams();

  const [view, setView] = useState(false);
  const [out, setOut] = useState(false);
  const [top, setTop] = useState(false);
  const [active, setActive] = useState({
    createTours: true,
    viewTours : false
  });
  const [render, setRender] = useState();

  useEffect(() => {
    if (out === true) {
      window.location = "/";
    }
  }, [out]);

  useEffect(() => {
    if (top === true) {
      window.scrollTo(0, 0);
      setTop(false);
    }
  }, [top]);

  useEffect(() => {
    if(active.createTours)
      setRender(<CreateTour/>);
    else if(active.viewTours)
      setRender(<ViewTours/>);
  }, [active]);

  return (
    <div className={styles.agentPageEncompass}>
      {view && <AYS message="Log Out?" setCommand={setOut} setView={setView} />}
      <div className={styles.agentNav}>
        <div className={styles.mainOptions}>
          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick = {() => {setActive(prev => ({
                createTours: true,
                viewTours : false
              }))}}
            >
              edit
            </span>
          </h4>

          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick = {() => {setActive(prev => ({
                createTours: false,
                viewTours : true
              }))}}
            >
              search
            </span>
          </h4>
        </div>

        <div className={styles.subOptions}>
          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick={() => {
                setView(true);
              }}
            >
              logout
            </span>
          </h4>

          <h4 className={styles.options}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "2rem" }}
              onClick = {() => {window.location = '/helpline'}}
            >
              contact_support
            </span>
          </h4>
        </div>
      </div>

      <div className={styles.agentWorking}>
        <div className={styles.top} style={{ backgroundColor: "black" }}></div>

        <div className={styles.tab}>
          {render}
          <Contact />
          <Footer setTop={setTop} />
        </div>
      </div>
    </div>
  );
};

export { AgentPage };
