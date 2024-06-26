import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import axios, { Axios } from "axios";
  import { useState } from "react";
  
   interface Props {
     openModal: any;
     setOpenModal: any;
   }

  
  export default function ModalDatos(props: any) {
    const { openModal, setOpenModal, FetchData } = props;
    const [fecha, setFecha] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [tipo, setTipo] = useState("");
  

  
    const closeModal = () => {
      setOpenModal(false);
    };
  
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
  
    const saveDatos = async () => {
      let data = {
        fecha: fecha,
        cantidad: cantidad,
        descripcion: descripcion,
        Tipo: tipo
      };
      console.log(data);
      const response = await axios.post(
        "https://localhost:7280/Registro",data
      );
      console.log(response); 
      if(response.status == 200){
        closeModal()
        FetchData()
      }
    };
  
    return (
      <>
        <Modal open={openModal} onClose={closeModal}>
          <Box
            sx={{
              ...style,
              width: 400,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  fullWidth
                  placeholder="Fecha"
                  type="date"
                  value={fecha}
                  onChange={(event) => setFecha(event.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <FormControl fullWidth>
                  <InputLabel>Tipo</InputLabel>
                  <Select
                    value={tipo}
                    onChange={(event) => setTipo(event.target.value)}
                  >
                    <MenuItem value={"Entrada"}>Entrada</MenuItem>
                    <MenuItem value={"Salida"}>Salida</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  placeholder="Cantidad"
                  type="number"
                  value={cantidad}
                  onChange={(event) => setCantidad(event.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <TextField
                  fullWidth
                  placeholder="Descripcion"
                  multiline
                  rows={2}
                  value={descripcion}
                  onChange={(event) => setdescripcion(event.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={saveDatos}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </>
    );
  }