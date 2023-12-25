///////////////////////////
//Pasindu
//////////////////////

import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input } from "@mui/material";
//import { useNavigate } from 'react-router-dom';

const InventoryForm = ({ submitted }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);
};
export default InventoryForm;
