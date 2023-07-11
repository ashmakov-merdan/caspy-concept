import { useState } from "react";

const useToggle = () => {
    const [ show, setShow ] = useState<boolean>(false);

    const toggle = () => {
        setShow(!show);
    };

    return { show, toggle };
};

export default useToggle;