import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { useSelector } from 'react-redux';
import { isEmpty } from './Utils';
import { GiFishbone, GiFishEggs, GiDoubleFish, GiMale, GiFemale } from "react-icons/gi";
import { TbLetterR } from "react-icons/tb";
import { MdOutlineSick, MdBuild } from "react-icons/md";


const Tableau = () => {



  var list_poisson=[];
  const itemsList = useSelector((state) => state.recupData);

  const list_mort = useSelector((state) => state.recupMort);


  console.log(itemsList)
  

    return (
      <div className="tab">
        <MDBTable className="MDBtab">
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>Lignée</th>
            <th>Lot</th>
            <th>Responsable</th>
            <th>Age</th>
            <th>Bac</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </MDBTableHead>
      <MDBTableBody className="tabBody">    
          {!isEmpty(itemsList) && itemsList.map( 
            (item, index) => ( 
              <tr key={index} >
                <td>{item.lignee}</td>
                <td>{item.lot}</td>
                <td>{item.responsable}</td>
                <td>{item.age}</td>
                <td>{item.bac}</td>
                <th><CgDanger id="peril"></CgDanger></th>
                <th><GiFishEggs id="ponte"></GiFishEggs></th>
                <th><GiDoubleFish id="accouplement"></GiDoubleFish></th>
                <th><MdBuild id="action"></MdBuild></th>
                <th><GiFishbone id="mort"></GiFishbone></th>
                <th><MdOutlineSick id="souffrance"></MdOutlineSick></th>
              </tr>
            ))
          }
        </MDBTableBody>
      </MDBTable>
      </div>
    );
};

export default Tableau;