import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Button} from 'react-bootstrap';
import { GiFishbone, GiFishEggs, GiDoubleFish } from "react-icons/gi";
import { TbLetterR } from "react-icons/tb";
import { MdBuild ,MdOutlineLocalHospital} from "react-icons/md";
import { addFiltre, getListPoisson} from '../actions/data';
import { isEmpty } from './Utils';

const Header = () => {

  const dispatch = useDispatch();
  const items_filtre = useSelector((state) => state.listpoisson);

  var ajout = true;

  const reply_click = async (event) => {  
    event.preventDefault();
    const nom = event.target.name
    const id = event.target.id

      // vérification si la formation a deja été ajouté
         !isEmpty(items_filtre) && id!=="" && items_filtre.map( item => {
              if(item.id_button === id){
                  ajout=false;
              }
            }
        )

    if(ajout && id!=="" && nom!==""){
      const data = { 
            "nom": nom,
            "id_button": id
      };

    await dispatch(addFiltre(data));
    dispatch(getListPoisson()); 

    }
    ajout = true;
  }

    return (   
    <div className='header d-flex justify-content-center my-5'>
      <div className='list_bouton'>
        <Button variant="success" id="1" name="Ponte" onClick={ (event) => reply_click(event) }><GiFishEggs className='icon'></GiFishEggs>   Ponte</Button>{' '}
        <Button variant="warning" id="2" name="Accouplement" onClick={(event) => reply_click(event)}><GiDoubleFish className='icon'></GiDoubleFish>  Accouplement</Button>{' '}
        <Button variant="danger" id="6" name="Souffrance" onClick={(event) => reply_click(event)}><MdOutlineLocalHospital className='icon'></MdOutlineLocalHospital>  Souffrance</Button>{' '}
        <Button variant="info" id="4" name="Action" onClick={(event) => reply_click(event)}><MdBuild className='icon'></MdBuild> Action</Button>{' '}
        <Button variant="dark" id="5" name="Mort" onClick={(event) => reply_click(event)}><GiFishbone className='icon'></GiFishbone>  Mort</Button>{' '}
        <Button variant="secondary"  id="3" name="En péril" onClick={(event) => reply_click(event)}><TbLetterR className='icon'></TbLetterR>  En péril</Button> 

      </div> 
    </div>
  );
};

export default Header;