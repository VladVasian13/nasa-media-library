import React, { useState } from "react";
import { MainPageContainer, Title, TitleContainer } from "./MainPage.style";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CollectionList from "../../Components/CollectionList/CollectionList";
import { NasaLogo } from "../../Assets/svg/NasaLogo";

const MainPage = () => {

    const [searchText, setSearchText] = useState<string>("")
    const [collections, setCollections] = useState([])

    const fetchData = (searchString: string) => {
        fetch(`https://images-api.nasa.gov/search?q=${searchString}&media_type=image`)
            .then((res) => res.json())
            .then((res) => setCollections(res.collection.items))
    }

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
            />
            <CollectionList
                collections={collections}
            />
        </MainPageContainer>
    )
}

export default MainPage;