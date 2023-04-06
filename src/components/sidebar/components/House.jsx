import React from 'react';
import './House.css'

const House = () => {
    return (
        <ul className='house_list'>
            <li className='house_list_item'>Все</li>
            <li className='house_list_item'>Квартира</li>
            <li className='house_list_item'>Частный дом</li>
            <li className='house_list_item'>Коммерческая</li>
            <li className='house_list_item'>Земельные участки</li>
        </ul>
    );
};

export default House;