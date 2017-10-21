import React from 'react';
import { Link } from 'react-router-dom';

import './Language.css';

const LANG_RE = /^\/[^/]+/;
const switchLanguage = (path, language) => path.replace(LANG_RE, `/${language}`);

export default () => (
    <div className="Language-root">
        <Link to={switchLanguage(window.location.pathname, 'sv')} className="Language-link">Svenska</Link>
        <Link to={switchLanguage(window.location.pathname, 'en')} className="Language-link">English</Link>
    </div>

);
