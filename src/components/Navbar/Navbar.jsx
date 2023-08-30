import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorPropietarios, setAnchorPropietarios] = React.useState(null);
  const [anchorInquilinos, setAnchorInquilinos] = React.useState(null);
  const [anchorFacturacion, setAnchorFacturacion] = React.useState(null);
  const [anchorCartera, setAnchorCartera] = React.useState(null);
  const [anchorRips, setAnchorRips] = React.useState(null);
  const [anchorInformes, setAnchorInformes] = React.useState(null);
  const [anchorAdministracion, setAnchorAdministracion] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate()


  const handleClickPropietarios = (event) => {
    setAnchorPropietarios(event.currentTarget);
  };

  const handleClosePropietarios = () => {
    anchorPropietarios(null);
  };

  const handleClickInquilinos = (event) => {
    setAnchorInquilinos(event.currentTarget);
  };

  const handleCloseInquilinos = () => {
    anchorInquilinos(null);
  };

  const handleClickAdministracion = (event) => {
    setAnchorAdministracion(event.currentTarget);
  };

  const handleCloseAdministracion = () => {
    setAnchorAdministracion(null);
  };





  return (
    <AppBar position="static" sx={{ marginBottom: 5 }}>
      <Toolbar>
        {isMobile ? (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        ) : null}
        {/* Resto del código del componente */}
        {isMobile ? (
          <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            <Button color="inherit" onClick={handleClickPropietarios} sx={{ fontSize: '1rem' }}>
              Propietarios
            </Button>
            <Menu
              anchorEl={anchorPropietarios}
              open={Boolean(anchorPropietarios)}
              onClose={handleClosePropietarios}
            >
              <MenuItem onClick={handleClosePropietarios}>Agregar Paciente</MenuItem>
              <MenuItem onClick={handleClosePropietarios}>Maestro Pacientes</MenuItem>
              <MenuItem onClick={handleClosePropietarios}>Eventos por Paciente</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleClickPropietarios} sx={{ fontSize: '1rem' }}>
              Inquilinos
            </Button>
            <Menu
              anchorEl={anchorInquilinos}
              open={Boolean(anchorInquilinos)}
              onClose={handleCloseInquilinos}
            >
              <MenuItem onClick={handleClosePropietarios}>Agregar Paciente</MenuItem>
              <MenuItem onClick={handleClosePropietarios}>Maestro Pacientes</MenuItem>
              <MenuItem onClick={handleClosePropietarios}>Eventos por Paciente</MenuItem>
            </Menu>


            <Button color="inherit" onClick={handleClickAdministracion} sx={{ fontSize: '1rem' }}>
              Administracion
            </Button>
            <Menu
              anchorEl={anchorAdministracion}
              open={Boolean(anchorAdministracion)}
              onClose={handleCloseAdministracion}
            >
              <MenuItem onClick={() => navigate('/user-add')} >Registrar Usuario</MenuItem>
              <MenuItem onClick={() => navigate('/user-list')}>Maestro de Usuarios</MenuItem>
            </Menu>

          </Drawer>
        ) : (
          <>
            <Button color="inherit" onClick={handleClickPropietarios} sx={{ fontWeight: "bold", textTransform: 'capitalize', fontSize: '1rem' }}>
              Propietarios
            </Button>
            <Menu
              anchorEl={anchorPropietarios}
              open={Boolean(anchorPropietarios)}
              onClose={handleClosePropietarios}
            >
              <MenuItem onClick={() => navigate('/propietarios')}>Listado de Propietarios</MenuItem>
              <MenuItem onClick={() => navigate('/propietarios/add')}>Agregar Propietario</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleClickInquilinos} sx={{ fontWeight: "bold", textTransform: 'capitalize', fontSize: '1rem' }}>
              Inquilinos
            </Button>
            <Menu
              anchorEl={anchorInquilinos}
              open={Boolean(anchorInquilinos)}
              onClose={handleCloseInquilinos}
            >
              <MenuItem onClick={() => navigate('/inquilinos')}>Listado de Inquilinos</MenuItem>
              <MenuItem onClick={() => navigate('/inquilinos/add')}>Agregar Inquilinos</MenuItem>
            </Menu>




            <Button color="inherit" onClick={handleClickAdministracion} sx={{ fontWeight: "bold", textTransform: 'capitalize', fontSize: '1rem' }}>
              Administración
            </Button>
            <Menu
              anchorEl={anchorAdministracion}
              open={Boolean(anchorAdministracion)}
              onClose={handleCloseAdministracion}
            >
              <MenuItem onClick={() => navigate('/user-add')} >Registrar Usuario</MenuItem>
              <MenuItem onClick={() => navigate('/user-list')}>Maestro de Usuarios</MenuItem>
            </Menu>
          </>
        )}
        {/* Resto del código del componente */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
