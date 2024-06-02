import React, { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next';

import './LanguageSwitch.module.css';
import styles from './LanguageSwitch.module.css'
    ;
export const LanguageSwitch: React.FC = () => {
    const { i18n } = useTranslation();

    const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
        if (value.target.checked) i18n.changeLanguage('ru'); else i18n.changeLanguage('en')
    }

    return (
        <div className={styles.container}>
            <input type="checkbox" id="switch" onChange={handleChange} />
            <label htmlFor="switch">Toggle</label>
        </div>
    )
}
