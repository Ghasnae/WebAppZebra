import React from 'react';
import { useDispatch } from 'react-redux';
import { FiX } from "react-icons/fi";
import { deleteFiltre } from '../actions/data';


const ItemFiltre = ( {itemlistfiltre} ) => {
    const dispatch = useDispatch();
    return (
            <div id='filtre'>
                <FiX id='sup_1' onClick={ ()=> dispatch(deleteFiltre(itemlistfiltre.id)) }></FiX>
                {itemlistfiltre.nom}
            </div>    
    );

};

export default ItemFiltre;