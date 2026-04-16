import { DataContext, DataInitialValue } from "@/providers";
import { useContext } from "react";

const useData = () => {
    const {
        pageType,
        setPageType
    } = useContext(DataContext) as DataInitialValue;

    return {
        pageType,
        setPageType
    };
};
export default useData;
