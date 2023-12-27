import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const InventoryTable = ({ rows, selectInv, deleteInventory }) => {
  return (
    <TableContainer component={Paper}>
      <Typography
        component="h1"
        sx={{
          color: "#000000",
          fontWeight: "bold",
          fontFamily: "Roboto, sans-serif",
          fontSize: "40px",
        }}
      >
        Inventory Details
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
              Item Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
              Item Code
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
              Quantity
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
              Price
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.invnt_item}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.invnt_code}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.qnty}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.price}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ margin: "0px 10px" }}
                    className="action-btn"
                    onClick={() =>
                      selectInv({
                        invnt_item: row.invnt_item,
                        invnt_code: row.invnt_code,
                        qnty: row.qnty,
                        price: row.price,
                        date: row.date,
                      })
                    }
                  >
                    Update
                  </Button>

                  <Button
                    sx={{ margin: "0px 10px" }}
                    className="action-btn"
                    onClick={() =>
                      deleteInventory({ invnt_code: row.invnt_code })
                    }
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventoryTable;
