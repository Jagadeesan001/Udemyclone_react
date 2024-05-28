import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Searchbar from './component/search';
import Optionbad from './component/option.js';
import Mainimg from './component/maining.js';
import Recomented from './component/reco.js';
import Topic from './component/topic.js';
import Populor from './component/populor.js';
import Footer from './component/footer.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Searchbar/>
    <Optionbad/>
    <Mainimg/>
    <Recomented/>
    <Topic/>
    <Populor/>
    <Footer/>
    </>
);







