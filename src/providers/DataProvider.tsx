import { ChildrenProps, PageType } from "@/types";
import { FC, ReactNode, createContext, useState } from "react";

export type DataInitialValue = {
    pageType: PageType;
    setPageType: (value: PageType) => void;
};

export const DataContext = createContext<DataInitialValue | null>(null);

export const DataProvider: FC<ChildrenProps> = ({ children }) => {
    const [pageType, setPageType] = useState<PageType>(PageType.TEXT_PAGE);

    return (
        <DataContext.Provider
            value={{
                pageType,
                setPageType
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
