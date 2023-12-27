///////////////////////////
//pasindu
//////////////////////
//importing
import { Box, Grid } from "@mui/material";
import { Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InventoryForm from "./Inventory_Form";
import InventoryTable from "./Inventory_Table";
import Axios from "axios";
import { useEffect, useState } from "react";

const Inventory = () => {
  const navigate = useNavigate();

  const [inv, setInv] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectInv, setSelectedInv] = useState({});
  const [isedit, setIsEdit] = useState(false);

  //create get users

  useEffect(() => {
    getInventory();
  }, []);

  const getInventory = () => {
    Axios.get("http://localhost:3001/api/inventory")
      .then((response) => {
        setInv(response.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  //create add users
  const addInventory = (data) => {
    setSubmitted(true);

    const payload = {
      invnt_item: data.invnt_item,
      invnt_code: data.invnt_code,
      qnty: data.qnty,
      price: data.price,
      date: data.date,
    };
    Axios.post("http://localhost:3001/api/createinventory", payload)
      .then(() => {
        getInventory();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  //create update users

  const updateInventory = (data) => {
    setSubmitted(true);

    const payload = {
      invnt_item: data.invnt_item,
      invnt_code: data.invnt_code,
      qnty: data.qnty,
      price: data.price,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/updateinventory", payload)
      .then(() => {
        getInventory();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

  //create delete users
  const deleteInventory = (id) => {
    Axios.post("http://localhost:3001/api/deleteinventory", id)
      .then(() => {
        getInventory();
      })
      .catch((error) => {
        console.error("Axios Error :", error);
      });
  };

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
        <Typography></Typography>
      </Box>

      <Box>
        <Grid></Grid>
        <InventoryForm
          addInventory={addInventory}
          updateInventory={updateInventory}
          submitted={submitted}
          data={selectInv}
          isedit={isedit}
        ></InventoryForm>
        <InventoryTable
          rows={inv}
          selectInv={(data) => {
            setSelectedInv(data);
            setIsEdit(true);
          }}
          deleteInventory={(data) =>
            window.confirm("Are you sure?") && deleteInventory(data)
          }
        ></InventoryTable>
      </Box>
    </Container>
  );
};

export default Inventory;
