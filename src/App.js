import "./App.css";
import { SharedData } from "./context/SharedData";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { AgentRegistration } from "./components/Register/AgentRegistration";
import { TravellerRegistration } from "./components/Register/TravellerRegistration";
import { Choice } from "./components/Register/Choice";
import { Form, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { Feedback } from "./components/Feedback/Feedback";
import { AgentPage } from "./components/AgentPage/AgentPage";
import { TravellerPage } from "./components/TravellerPage/TravellerPage";
import { CreateTour } from "./components/AgentPage/CreateTour";
import {Gallery} from "./components/Gallery/Gallery";
import { Photo } from "./components/Gallery/Photo";
import { TourDetails } from "./components/TourDetailsPage/TourDetails";
import { Helpline } from "./components/Helpline/Helpline";
import { Cart } from "./components/TravellerPage/Cart";
import { Filter } from "./components/TravellerPage/Filter";
import { AdminPage } from "./components/AdminPage/AdminPage";

function App() {
  return (
    <>
      <SharedData>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Choice" element={<Choice />} />
          <Route
            path="/TravellerRegistration"
            element={<TravellerRegistration />}
          />
          <Route path="/AgentRegistration" element={<AgentRegistration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AgentPage/:name" element={<AgentPage />} />
          <Route path="/TravellerPage/:name" element={<TravellerPage />} />
          <Route path="/CreateTour" element={<CreateTour />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Helpline" element={<Helpline />} />
          <Route path="/AdminPage/:name" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SharedData>
    </>
  );
}

export default App;
