import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `ProWriter | ${title}`;
    },[title])
};

export default useTitle;