import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Education | ${title}`;
    },[title])
};

export default useTitle;