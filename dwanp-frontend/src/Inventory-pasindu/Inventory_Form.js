///////////////////////////
//Pasindu
//////////////////////

import { useEffect, useState } from "react";
import { Button, Grid, Typography, Input, TableContainer } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InventoryForm = ({ addInv, updateInv, submitted, data, isEdit }) => {
  const navigate = useNavigate();

  const [invnt_item, setItem] = useState(0);
  const [invnt_code, setCode] = useState(0);
  const [qnty, setQnt] = useState(0);
  const [price, setPrc] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!submitted) {
      setItem(0);
      setCode(0);
      setQnt(0);
      setPrc("");
      setDate("");
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setItem(data.invnt_item);
      setCode(data.invnt_code);
      setQnt(data.qnty);
      setPrc(data.price);
      setDate(data.date);
    }
  }, [data]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "#ffffff", marginBottom: "30px" }}
    >
      <Grid item xs={12}>
        <Typography component="h1" sx={{ color: "#000000" }}>
          Inventory
        </Typography>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Inventory Item</TableCell>
              <TableCell>
                <Input
                  type="text"
                  id="invnt_item"
                  name="invnt_item"
                  sx={{ width: "400px" }}
                  value={invnt_item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Inventory Code</TableCell>
              <TableCell>
                <Input
                  type="text"
                  id="invnt_code"
                  name="invnt_code"
                  sx={{ width: "400px" }}
                  value={invnt_code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Quantity</TableCell>
              <TableCell>
                <Input
                  type="number"
                  id="qnty"
                  name="qnty"
                  sx={{ width: "400px" }}
                  value={qnty}
                  onChange={(e) => setQnt(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell>
                <Input
                  type="text"
                  id="price"
                  name="price"
                  sx={{ width: "400px" }}
                  value={price}
                  onChange={(e) => setPrc(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
                <Input
                  type="text"
                  id="adrs"
                  name="adrs"
                  sx={{ width: "400px" }}
                  value={adrs}
                  onChange={(e) => setAdrs(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Telephone Number</TableCell>
              <TableCell>
                <Input
                  type="number"
                  id="tel"
                  name="tel"
                  sx={{ width: "400px" }}
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Married Status</TableCell>
              <TableCell>
                <Input
                  type="text"
                  id="civil"
                  name="civil"
                  sx={{ width: "400px" }}
                  value={civil}
                  onChange={(e) => setCivil(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button
                  sx={{
                    margin: "auto",
                    marginBottom: "20px",
                    backgroundColor: "#00c6e6",
                    color: "#000000",
                    marginLeft: "15px",
                    marginTop: "20px",
                    "&:hover": {
                      opacity: 0.7,
                      backgroundColor: "#00c6e6",
                    },
                  }}
                  onClick={() => {
                    addEmp({
                      emp_code,
                      emp_name,
                      bdate,
                      nic,
                      adrs,
                      tel,
                      civil,
                    });
                  }}
                >
                  Add
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  sx={{
                    margin: "auto",
                    marginBottom: "20px",
                    backgroundColor: "#00c6e6",
                    color: "#000000",
                    marginLeft: "15px",
                    marginTop: "20px",
                    "&:hover": {
                      opacity: 0.7,
                      backgroundColor: "#00c6e6",
                    },
                  }}
                  onClick={() => {
                    updateEmp({
                      emp_code,
                      emp_name,
                      bdate,
                      nic,
                      adrs,
                      tel,
                      civil,
                    });
                  }}
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Tab>
    </Grid>
  );
};
export default InventoryForm;
