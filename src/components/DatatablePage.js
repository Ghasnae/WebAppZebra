import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { MDBDataTable } from "mdbreact";
import { isEmpty } from "./Utils";
import {
  GiFishbone,
  GiFishEggs,
  GiDoubleFish,

} from "react-icons/gi";
import { TbLetterR } from "react-icons/tb";
import { MdBuild, MdOutlineLocalHospital } from "react-icons/md";
import { addListPoisson, getListPoisson } from "../actions/data";
import moment from "moment";

const DatatablePage = () => {
  //const dispatch = useDispatch();

  const itemsList = useSelector((state) => state.recupData);
  const items_filtre = useSelector((state) => state.listpoisson);
  const list_mort = useSelector((state) => state.recupMort);
  const list_accouplement = useSelector((state) => state.recupAccouplement);
  const list_souffrance = useSelector((state) => state.recupSouffrance);
  const list_ponte = useSelector((state) => state.recupPonte);

  var table_row = [];

  const handle_mort = (e) => {
    var res = "MORT\n";
    !isEmpty(list_mort) &&
      list_mort.map((item) => {
        if (e === item.Key) {
          res =
            res +
            moment(item.Date).format("DD/MM/YYYY hh:mm:ss") +
            "     " +
            item.SumMorts +
            "\n";
        }
      });
    alert(res);
  };

  const handle_accouplement = (e) => {
    var res = "ACCOUPLEMENT\n\n";
    !isEmpty(list_accouplement) &&
      list_accouplement.map((item) => {
        if (e === item.Key || e === item.Key2) {
          res =
            res + moment(item.Date).format("DD/MM/YYYY hh:mm:ss") + "     \n";
          res = res + item.NbMale + "♂" + item.LigneeM + "    " + "    \n";
          res =
            res + item.NbFemelle + "♀" + item.LigneeF + "    " + "     \n\n";
        }
      });
    alert(res);
  };

  const handle_ponte = (e) => {
    var res = "OEUFS\n\n";
    !isEmpty(list_ponte) &&
      list_ponte.map((item) => {
        if (e === item.Key || e === item.Key2) {
          res =
            res +
            moment(item.Date).format("DD/MM/YYYY hh:mm:ss") +
            "\n" +
            item.NbMale +
            "♂" +
            item.NbFemelle +
            "♀" +
            "Mis en Accouplement " +
            "\n" +
            item.NbMalesFeconde +
            "♂" +
            item.NbfemellesFeconde +
            "♀" +
            "Accouplés " +
            "\nQualité: " +
            item.quantite +
            "\nNombre d'oeufs: " +
            item.NbOeufs +
            "\n\n";
        }
      });
    alert(res);
  };

  const handle_souffrance = (e) => {
    var res = "SOUFFRANCE\n\n";
    !isEmpty(list_souffrance) &&
      list_souffrance.map((item) => {
        if (e === item.Key) {
          res =
            res +
            moment(item.Date).format("DD/MM/YYYY hh:mm:ss") +
            "     " +
            item.PoissonSouffrance +
            "\n";

          if (item.PositionInhabituelle !== 0) {
            res = res + "- Position inhabituelle\n";
          }
          if (item.NageAnormale !== 0) {
            res = res + "- Nage anormale\n";
          }
          if (item.TroubleAlimentaire !== 0) {
            res = res + "- Trouble alimentaire\n";
          }
          if (item.Prostration !== 0) {
            res = res + "- Prostration\n";
          }
          if (item.AltérationNageoire !== 0) {
            res = res + "- Altération de nageoire\n";
          }
          if (item.Maigreur !== 0) {
            res = res + "- Maigreur\n";
          }
          if (item.Obésité !== 0) {
            res = res + "- Obésité\n";
          }
          if (item.Blessure_Lesion !== 0) {
            res = res + "- Blessure ou lésion\n";
          }
          if (item.Ulcère_Mycose_Saignement !== 0) {
            res = res + "- Altération de nageoire\n";
          }
          if (item.Exophtalmie_DéformationFaciale !== 0) {
            res = res + "- Exophtalmie, déformation ou faciale\n";
          }
          if (item.Scoliose !== 0) {
            res = res + "- Scoliose\n";
          }
          if (item.OperculesOuvertes !== 0) {
            res = res + "- Opercules ouvertes\n";
          }
          if (item.ChangementCouleur !== 0) {
            res = res + "- Changement de couleur\n";
          }
          res = res + "\n";
        }
      });
    alert(res);
  };

  !isEmpty(itemsList) &&
    itemsList.map((item) => {
      var res_accouplement;
      var res_souffrance;
      var res_mort;
      var res_peril;
      var res_ponte;

      if (item.peril === true) {
        res_peril = <TbLetterR id="peril"></TbLetterR>;
      }
      if (item.accouplement !== "false") {
        res_accouplement = (
          <button onClick={() => handle_accouplement(item.key)}>
            <GiDoubleFish id="accouplement"></GiDoubleFish>
          </button>
        );
      }
      if (item.mort !== "false") {
        res_mort = (
          <button onClick={() => handle_mort(item.key)}>
            <GiFishbone id="mort"></GiFishbone>
          </button>
        );
      }
      if (item.souffrance !== "false") {
        res_souffrance = (
          <button onClick={() => handle_souffrance(item.key)}>
            <MdOutlineLocalHospital id="souffrance"></MdOutlineLocalHospital>
          </button>
        );
      }
      if (item.ponte !== "false") {
        res_ponte = (
          <button onClick={() => handle_ponte(item.key)}>
            <GiFishEggs id="ponte"></GiFishEggs>
          </button>
        );
      }

      var tab_item = {
        lignee: item.lignee,
        lot: item.lot,
        responsable: item.responsable,
        age: item.age,
        bac: item.bac,
        icons: (
          <div>
            {res_peril}
            {res_accouplement}
            {res_ponte}
            {res_mort}
            {res_souffrance}
          </div>
        ),
      };

      !isEmpty(items_filtre) &&
        items_filtre.map((item) => {
          if (
            (res_accouplement != null && item.nom === "Accouplement") ||
            (res_souffrance != null && item.nom === "Souffrance") ||
            (res_mort != null && item.nom === "Mort") ||
            (res_peril != null && item.nom === "En péril") ||
            (res_ponte != null && item.nom === "Ponte")
          ) {
            table_row.push(tab_item);
          }
        });

      if (isEmpty(items_filtre)) {
        table_row.push(tab_item);
      }
    });

  const data = {
    columns: [
      {
        label: "Lignée",
        field: "lignee",
        sort: "asc",
        width: 100,
      },
      {
        label: "Lot",
        field: "lot",
        sort: "asc",
        width: 150,
      },
      {
        label: "Responsable",
        field: "responsable",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Bac",
        field: "bac",
        sort: "asc",
        width: 250,
      },
      {
        label: "Synthèse",
        field: "icons",
        width: 150,
      },
    ],
    rows: table_row,
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default DatatablePage;