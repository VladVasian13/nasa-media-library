import React from "react";
import { FiltersContainer, FiltersInput, InputContainer, SearchButton, SearchContainer, SearchInput } from "./SearchBar.style";

interface SearchBarProps {
    searchText: string,
    setSearchText: (searchText: string) => void,
    onSearch: (searchText: string) => void,
    setYearStart: (yearStart: string) => void,
    setYearEnd: (yearEnd: string) => void,
    yearStart: string,
    yearEnd: string,
}

const SearchBar = (props: SearchBarProps) => {

    const { searchText, setSearchText, onSearch, setYearStart, setYearEnd, yearStart, yearEnd } = props;

    return (
        <SearchContainer>
            <InputContainer>
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
            </InputContainer>
            <FiltersContainer>
                Year Filters
                <FiltersInput
                    label="Year Start"
                    variant="outlined"
                    onChange={(e) => setYearStart(e.target.value)}
                    value={yearStart}
                />
                <FiltersInput
                    label="Year End"
                    variant="outlined"
                    onChange={(e) => setYearEnd(e.target.value)}
                    value={yearEnd}
                />
            </FiltersContainer>
        </SearchContainer>
    )
}

export default SearchBar;