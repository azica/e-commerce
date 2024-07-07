import { useEffect, useState } from 'react'

import { ButtonWrap } from './styles';
import { SetURLSearchParams } from 'react-router-dom';

export const ShowMoreButton = ({ searchParams, setSearchParams }: { searchParams: URLSearchParams, setSearchParams: SetURLSearchParams }) => {

    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        if (searchParams) {
            setLimit(parseInt(searchParams.get("limit") || "10", 10));
            setSkip(parseInt(searchParams.get("skip") || "0", 10));
        }
    }, [searchParams]);

    const showMoreProducts = () => {
        setSkip((prevSkip) => prevSkip + limit);
        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set("limit", limit.toString());
            newParams.set("skip", (skip + limit).toString());
            return newParams;
        });

        // if (productsGridRef.current) {
        //   productsGridRef.current.scrollIntoView({ behavior: "smooth" });
        // }
    };
    return (
        <ButtonWrap variant="outlined" size="small" onClick={showMoreProducts}>
            Show more
        </ButtonWrap>
    )
}

