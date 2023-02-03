import React from "react";
import { CollectionListContainer } from "./CollectionList.style";

interface CollectionListProps {
    collections: any[];
}

const CollectionList = (props: CollectionListProps) => {

    const { collections } = props;

    return (
        <CollectionListContainer>
            {collections.map((collection: any, idx: number) => {
                return (
                    <div key={idx}> {collection.href}</div>
                )
            })}
        </CollectionListContainer>
    )
}

export default CollectionList;