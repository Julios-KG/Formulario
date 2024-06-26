
import "./App.css";
import { Box, Button, Container, Grid } from "@mui/material";
import Header from "./Components/Dashboard/Header";
import SideBar from "./Components/Dashboard/SideBar";
import Informacion from "./Components/Dashboard/Informacion";
import ModalRegistro from "./Components/Dashboard/ModalRegistro";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [rows2, setRows2] = useState([]);
  
    //Cuando el componente esta siendo montado
  useEffect(() => {
    //Funcion para obtener datos de la API
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7280/Registro"
      );
      //const data = response.data.results;
      //console.log(data);
      //setRows2(data);
      console.log(response.data.result);
      var { data: { result } } = response;
      setRows2(result);
    } catch (error) {
      console.error("Error", error);
    }
  };



  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <SideBar />
        <Box
          component="main"
          sx={{
            width: "calc(100% - 260px)",
            flexGrow: 1,
            p: { xs: 0, sm: 1, lg: 2 },
            marginLeft: "260px",
          }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <Header />
          </Grid>
          {/* Otros componentes o contenido pueden ir aquí */}
          <Grid container item spacing={2}>
            <Grid item xs={6} md={6} lg={6}>
              <Informacion rows2={rows2} /> 
              
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Button variant="contained" color="secondary" onClick={() => setOpenModal(true)}>
                Agregar Registro
              </Button>
            </Grid>
          </Grid>
        </Box>
        <ModalRegistro
          openModal={openModal}
          setOpenModal={setOpenModal}
          FetchData={FetchData}
        ></ModalRegistro>
      </Box>
   

    </>
  );
}
export default App;

