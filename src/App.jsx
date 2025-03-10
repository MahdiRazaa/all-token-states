import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import TokenDetails from "./screens/TokenDetails";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
    )
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log(apiData, "appData");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home apiData={apiData} />} />
        <Route
          path="/details/:id"
          element={<TokenDetails apiData={apiData} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


