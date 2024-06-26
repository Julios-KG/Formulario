import { Box, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Tabla(props:any) {
  //const [row2, setRows2] = useState([]);
  const [Show, setShow] = useState(false)
  const {rows2} = props;


  useEffect(() => {
    if(Show === true)
      alert("Update del Componente");
  }, [Show])

  const columns: GridColDef[] = [
    //Field sirve para el nombre de la propiedad del dato a obtener
    { field: "pkRegistro", headerName: "ID", width: 90 },
    {
      field: "fecha",
      headerName: "Fecha",
      width: 100,
    },
    {
      field: "descripcion",
      headerName: "Descripcion",
      width: 150,
    },
    {
      field: "cantidad",
      headerName: "Cantidad",
      width: 100,
    },
    {
      field: "tipo",
      headerName: "Tipo",
      width: 100,
    }
  ];

  return (
    <Box>
      <Paper>
        <Grid item xs={12} md={12} lg={12}>
          <Typography>
            <strong>Movimientos</strong>
          </Typography>
          <button onClick={() => setShow(true)}>Boton</button>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <DataGrid
            rows={rows2}
            columns={columns}
            getRowId={(row) => row.pkRegistro}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Grid>
      </Paper>
    </Box>
  );
}