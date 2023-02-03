import React from "react";
import { SearchButton, SearchContainer, SearchInput } from "./SearchBar.style";

interface SearchBarProps {
    searchText: string,
    setSearchText: (searchText: string) => void,
    onSearch: (searchText: string) => void
}

const SearchBar = (props: SearchBarProps) => {

    const { searchText, setSearchText, onSearch } = props;

    return (
        <SearchContainer>
            <SearchInput
                label="Search in the NASA Database"
                variant="outlined"
                onChange={(e: any) => setSearchText(e.target.value)}
                value={searchText}
            />
            <SearchButton
                variant="contained"
                onClick={() => onSearch(searchText)}
            >
                Search
            </SearchButton>
        </SearchContainer>
    )
}

export default SearchBar;