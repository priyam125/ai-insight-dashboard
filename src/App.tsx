// src/App.tsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAIData } from "./services/aiService";
import { setAIData } from "./redux/actions/aiActions";
import Dashboard from "./components/Dashboard";
import "./styles/index.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {                            //fetching data using mock api call
    const fetchData = async () => {
      const data = await fetchAIData();
      dispatch(setAIData(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
