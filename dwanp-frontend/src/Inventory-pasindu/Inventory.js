///////////////////////////
//pasindu
//////////////////////
//importing
import { Box } from "@mui/material";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InventoryForm from "./Inventory_Form";
import InventoryTable from "./Inventory_Table";
import Axios from "axios";
import { useEffect, useState } from "react";

const Inventory = () => {
  const [inv, setInv] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectInv, setSelectedInv] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  //create get users

  useEffect(() => {
    getInv();
  }, []);

  const getInv = () => {
    Axios.get("http://localhost:3001/api/inventory")
      .then((response) => {
        setInv(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  //create add users
  const addInv = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/createinventory", payload)
      .then(() => {
        getInv();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  //create update users

  const updateInv = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/updateinventory", payload)
      .then(() => {
        getInv();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  //create delete users
  const deleteInv = (id) => {
    Axios.post("http://localhost:3001/api/deleteinventory", id)
      .then(() => {
        getInv();
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h5" component="h5">
          <button className="usr-btn" onClick={() => navigate("/")}>
            Back
          </button>
        </Typography>
        <Typography variant="h2" component="h1">
          Inventory page
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Pasindu
        </Typography>

        <InventoryForm
          addInv={addInv}
          updateInv={updateInv}
          submitted={submitted}
          data={selectInv}
          isEdit={isEdit}
        />

        <InventoryTable
          rows={inv}
          selectInv={(data) => {
            setSelectedInv(data);
            setIsEdit(true);
          }}
          deleteUser={(data) =>
            window.confirm("Are you sure?") && deleteInv(data)
          }
        />
      </Box>
    </Container>
  );
};

export default Inventory;
