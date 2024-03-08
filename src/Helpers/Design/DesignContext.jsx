import React, { createContext, useState, useContext, useEffect } from 'react';

const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
    const [design, setDesign] = useState(localStorage.getItem('design') || '1');

    useEffect(() => {
        if (localStorage.getItem('design') === null) {
            setDesign('0');
        } else {
            setDesign(localStorage.getItem('design'));
        }

    }, [design]);

    const changeDesign = (newDesign) => {
        setDesign(newDesign);
        localStorage.setItem('design', newDesign);
    };

    return (
        <DesignContext.Provider value={{ design, changeDesign }}>
            {children}
        </DesignContext.Provider>
    );
};

export const useDesign = () => {
    return useContext(DesignContext);
};