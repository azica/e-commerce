import { useRef, RefObject } from 'react';
import { ButtonWrap } from './styles';
import { useSearchParams } from 'react-router-dom';

export const ShowMoreButton = ({ totalProducts, productsGridRef }: { totalProducts: number; productsGridRef: RefObject<HTMLDivElement>; }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let skip = parseInt(searchParams.get("skip") || "0", 10);
    let limit = parseInt(searchParams.get("limit") || "10", 10);

    const showMoreProducts = () => {
        limit += 10; // Increment limit by 10 each time

        setSearchParams((prevParams) => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set("skip", skip.toString());
            newParams.set("limit", limit.toString()); // Update limit in searchParams
            return newParams;
        });

        // Smooth scroll to the last product in the list
        if (productsGridRef.current) {
            const lastProduct = productsGridRef.current.lastElementChild as HTMLElement;
            if (lastProduct) {
                lastProduct.scrollIntoView({ behavior: "smooth", block: "end" });
            }
        }
    };

    // Determine if there are more products to load
    const hasMoreProducts = totalProducts > skip + limit;

    return (
        <ButtonWrap
            variant="outlined"
            size="small"
            onClick={showMoreProducts}
            disabled={!hasMoreProducts}
        >
            Show more
        </ButtonWrap>
    );
};
