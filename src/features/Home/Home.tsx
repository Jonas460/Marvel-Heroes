import React, { useState, useEffect } from "react";
import HeroSearch from "./components/HeroSearch/HeroSearch";
import HeroService from "../../components/HeroService/HeroService";
import { AppName, SearchBar } from "./Home.style";
import Pagination from "./components/Pagination/Pagination";
import HeroList from "./components/HeroList/HeroList";

export const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchHeroes();
  }, [currentPage]);

  const fetchHeroes = async () => {
    try {
      const offset = (currentPage - 1) * 20;
      const heroList = await HeroService.searchHeroes("", offset, 20);
      setHeroes(heroList);
      setTotalPages(heroList.length);
    } catch (error) {
      console.error("Error searching heroes:", error);
    }
  };

  const handleSearch = async (name: string) => {
    try {
      const heroList = await HeroService.searchHeroes(name);
      setHeroes(heroList);
    } catch (error) {
      console.error("Error searching heroes:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <SearchBar>
        <AppName>Marvel Heroes App</AppName>
        <HeroSearch onSearch={handleSearch} />
      </SearchBar>
      <HeroList
        heroes={heroes}
        onSelect={function (id: number): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Pagination
        onNextPage={() => handleNextPage()}
        onPreviousPage={() => handlePreviousPage()}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};
