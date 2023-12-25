///////////////////////////
//Pasindu
//////////////////////

import { useEffect, useState } from "react";
import { Button, Grid, Typography, Input } from "@mui/material";
//import { useNavigate } from 'react-router-dom';

const InventoryForm = ({ submitted, data }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
    }
  });
};
export default InventoryForm;
