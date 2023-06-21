import React, { useState } from "react";
import { SearchButton, SearchInput } from "./HeroSearch.styles";

interface HeroSearchProps {
  onSearch: (name: string) => void;
}

const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search heroes..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </div>
  );
};

export default HeroSearch;
