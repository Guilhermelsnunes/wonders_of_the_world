import { useState, useEffect } from 'react';
import WondersBar from '../components/WondersBar';
import WonderDetail from '../components/WonderDetail';
import './WondersContainer.css';


const WondersContainer = ({ wonders, selectedWonder, onWonderSelected }) => {

    const [filteredWonders, setFilteredWonders] = useState([]);

    useEffect(() => {
        filterWonders()
    }, [wonders]);

    useEffect(() => {
        loadFirstWonder()
    }, [filteredWonders]);

    const loadFirstWonder = () => {
        if (!selectedWonder) {
            const firstWonder = filteredWonders[0];
            onWonderSelected(firstWonder);
        }
    };

    const filterWonders = () => {
        const pathname = window.location.pathname;
        const result = wonders.filter(wonder => wonder.collection === pathname);
        setFilteredWonders(result);
    };

    return (
        <div id="main-container">
            <div className="wonder-bar">
            <WondersBar wonders={filteredWonders} onWonderSelected={onWonderSelected} />
            </div>
            <div id="wonder-detail">
            {selectedWonder ? <WonderDetail wonder={selectedWonder} /> : null}
            </div>
        </div>
    );
};

export default WondersContainer;