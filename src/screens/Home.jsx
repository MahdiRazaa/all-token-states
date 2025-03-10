import React, { useState, useEffect, useMemo } from "react";
import GButton from "../components/Gbutton";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "../components/Card";

const Home = ({ apiData }) => {
  const cardsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // Handle sorting configuration
  const handleSortByName = () => {
    setSortConfig((prev) => ({
      key: "name",
      direction:
        prev.key === "name" && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleSortByPriceUp = () => {
    setSortConfig({ key: "price", direction: "desc" });
  };

  const handleSortByPriceDown = () => {
    setSortConfig({ key: "price", direction: "asc" });
  };

  // Filter and sort cards
  const filteredCards = useMemo(() => {
    return (
      apiData?.filter((card) =>
        card?.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
    );
  }, [apiData, searchQuery]);

  const sortedCards = useMemo(() => {
    const sortableCards = [...filteredCards];
    if (sortConfig.key) {
      sortableCards.sort((a, b) => {
        if (sortConfig.key === "name") {
          return sortConfig.direction === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        if (sortConfig.key === "price") {
          return sortConfig.direction === "asc"
            ? a.price - b.price
            : b.price - a.price;
        }
        return 0;
      });
    }
    return sortableCards;
  }, [filteredCards, sortConfig]);

  const totalCards = sortedCards.length;

  const getCardsToDisplay = () => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return sortedCards.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [sortedCards, searchQuery]);

  const goToNextPage = () => {
    if ((currentPage + 1) * cardsPerPage < totalCards) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="head-container">
        <GButton
          onSortByName={handleSortByName}
          onSortByPriceUp={handleSortByPriceUp}
          onSortByPriceDown={handleSortByPriceDown}
        />
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="none"
        />
        <Button className="input-btn" startIcon={<SearchIcon />}>
          Search
        </Button>
      </div>
      <div className="button-container">
        <Button
          className="side-btn"
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          startIcon={<ArrowBackIosIcon />}
        />
        <div className="card-container">
          {getCardsToDisplay()?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <Button
          className="side-btn"
          onClick={goToNextPage}
          disabled={(currentPage + 1) * cardsPerPage >= totalCards}
          startIcon={<ArrowForwardIosIcon />}
        />
      </div>
    </>
  );
};

export default Home;
