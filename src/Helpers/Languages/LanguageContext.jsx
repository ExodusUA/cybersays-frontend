import React, { createContext, useState, useContext, useEffect } from 'react';
import API from '../API';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    useEffect(() => {
        if (localStorage.getItem('language') === null) {
            const country = API.getUserCountry();
            country
                .then((result) => {
                    let userLang;
                    switch (result) {
                        case 'EN':
                            userLang = 'en';
                            break;
                        case 'ES':
                            userLang = 'es';
                            break;
                        case 'PT':
                            userLang = 'pt';
                            break;
                        default:
                            userLang = 'en';
                            break;
                    }

                    setLanguage(userLang);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setLanguage(localStorage.getItem('language'));
        }

    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};