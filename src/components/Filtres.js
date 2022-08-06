import React from 'react';
import { GiFishbone, GiFishEggs, GiDoubleFish } from "react-icons/gi";
import { TbLetterR } from "react-icons/tb";
import { MdOutlineLocalHospital, MdBuild} from "react-icons/md";
import { useSelector } from 'react-redux';
import { isEmpty } from './Utils';
import { useDispatch } from 'react-redux';
import ItemFiltre from './ItemFiltre';

const Filtres = () => {

    const dispatch = useDispatch();
    const items_filtre = useSelector((state) => state.listpoisson);

    return (   
    <div className='filtres'>
          Filtre(s) :
      <div className='list_bouton'>
      {!isEmpty(items_filtre)&& items_filtre
                    .map((itemlistfiltre, index) => (
                        <ItemFiltre itemlistfiltre={itemlistfiltre} key={index}/>
                    ))
    }
      </div> 

    </div>
  );
};

export default Filtres;