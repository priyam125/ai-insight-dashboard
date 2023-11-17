// src/App.tsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAIData } from "./services/aiService";
import { setAIData } from "./redux/actions/aiActions";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAIData();
      console.log(data);
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
