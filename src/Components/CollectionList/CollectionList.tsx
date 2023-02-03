import React, { useEffect, useState } from "react";
import { CollectionCard, CollectionListContainer } from "./CollectionList.style";
import { ICollection, ICollectionWithMetadata } from "../../Models/models";

interface CollectionListProps {
    collections: ICollection[];
}

const CollectionList = (props: CollectionListProps) => {

    const { collections } = props;
    const [collectionsWithMetadata, setCollectionsWithMetadata] = useState<ICollectionWithMetadata[]>([]);

    const getMetadata = (collections: ICollection[]) => {
        Promise.all(collections.map((el: ICollection) => {
            return fetch(`https://images-api.nasa.gov/metadata/${el.data[0].nasa_id}`)
        }))
            .then(responses => {
                Promise.all(responses.map(res => res.json()))
                    .then(res =>
                        Promise.all(res.map((el) =>
                            fetch(el.location)
                        )))
                    .then(responses =>
                        Promise.all(responses.map(el => el.json()))
                            .then((data) => {
                                const collectionsWithMetadata = collections.map(collection => {
                                    const metaData = data.filter(el => el["AVAIL:Title"] === collection.data[0].title)
                                    return { ...collection, metaData }
                                })
                                setCollectionsWithMetadata(collectionsWithMetadata)
                            })
                    )
            })
    }


    useEffect(() => {
        getMetadata(collections)
    }, [collections])


    return (
        <CollectionListContainer>
            {collectionsWithMetadata.map((collection: ICollection, idx: number) => {
                return (
                    <CollectionCard key={idx}>
                        {collection.data[0].title}
                        <img src={collection.links[0].href} alt={collection.data[0].title} />
                    </CollectionCard>
                )
            })}
        </CollectionListContainer>
    )
}

export default CollectionList;