import React, { useEffect, useState } from "react";
import { MainPageContainer, Title, TitleContainer } from "./MainPage.style";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CollectionList from "../../Components/CollectionList/CollectionList";
import { NasaLogo } from "../../Assets/svg/NasaLogo";

const MainPage = () => {

    const [searchText, setSearchText] = useState<string>("")
    const [yearStart, setYearStart] = useState<string>("")
    const [yearEnd, setYearEnd] = useState<string>("")
    const [collections, setCollections] = useState([])

    const fetchData = (searchString: string) => {
        try {
            fetch(`https://images-api.nasa.gov/search?q=${searchString}&media_type=image${yearStart.length > 0 ? `&year_start=${yearStart}` : ""}${yearEnd.length > 0 ? `&year_end=${yearEnd}` : ""}`)
                .then((res) => res.json())
                .then((res) => setCollections(res.collection.items))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData("")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <MainPageContainer>
            <TitleContainer>
                <Title>
                    Nasa Media Library
                </Title>
                <NasaLogo />
            </TitleContainer>
            <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
                onSearch={fetchData}
                setYearStart={setYearStart}
                setYearEnd={setYearEnd}
                yearStart={yearStart}
                yearEnd={yearEnd}
            />
            <CollectionList
                collections={collections}
            />
        </MainPageContainer>
    )
}

export default MainPage;