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
  const [anchorPropiedades, setAnchorPropiedades] = React.useState(null);
  const [anchorItem, setAnchorItem] = React.useState(null);
  const [anchorAmbientes, setAnchorAmbientes] = React.useState(null);
  const [anchorInventarios, setAnchorInventarios] = React.useState(null);
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

  const handleClickPropiedades = (event) => {
    setAnchorPropiedades(event.currentTarget);
  };


  const handleClosePropiedades = () => {
    anchorPropiedades(null);
  };

  const handleClickItem = (event) => {
    setAnchorItem(event.currentTarget);
  };


  const handleCloseItem = () => {
    setAnchorItem(null);
  };

  const handleClickAmbientes = (event) => {
    setAnchorAmbientes(event.currentTarget);
  };


  const handleCloseAmbientes = () => {
    setAnchorAmbientes(null);
  };

  const handleClickInventarios = (event) => {
    setAnchorInventarios(event.currentTarget);
  };


  const handleCloseInventarios = () => {
    setAnchorInventarios(null);
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

            <Button color="inherit" onClick={handleClickPropiedades} sx={{ fontSize: '1rem' }}>
              Propiedades
            </Button>
            <Menu
              anchorEl={anchorPropiedades}
              open={Boolean(anchorPropiedades)}
              onClose={handleClosePropiedades}
            >
              <MenuItem onClick={() => navigate('/propiedades/add')} >Registrar Usuario</MenuItem>
              <MenuItem onClick={() => navigate('/propiedades')}>Maestro de Usuarios</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleClickItem} sx={{ fontSize: '1rem' }}>
              Items
            </Button>
            <Menu
              anchorEl={anchorItem}
              open={Boolean(anchorItem)}
              onClose={handleCloseItem}
            >
              <MenuItem onClick={() => navigate('/item/add')} >Registrar Usuario</MenuItem>
              <MenuItem onClick={() => navigate('/propiedades')}>Maestro de Usuarios</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleClickAmbientes} sx={{ fontSize: '1rem' }}>
              Ambientes
            </Button>
            <Menu
              anchorEl={anchorAmbientes}
              open={Boolean(anchorAmbientes)}
              onClose={handleCloseAmbientes}
            >
              <MenuItem onClick={() => navigate('/item/add')} >Registrar Usuario</MenuItem>
              <MenuItem onClick={() => navigate('/propiedades')}>Maestro de Usuarios</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleClickInventarios} sx={{ fontSize: '1rem' }}>
              Inventarios
            </Button>
            <Menu
              anchorEl={anchorInventarios}
              open={Boolean(anchorInventarios)}
              onClose={handleCloseInventarios}
            >
              <MenuItem onClick={() => navigate('/item/add')} >Registrar Usuario</MenuItem>
              <MenuItem onClick={() => navigate('/propiedades')}>Maestro de Usuarios</MenuItem>
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

            <Button color="inherit" onClick={handleClickPropiedades} sx={{ fontWeight: "bold", textTransform: 'capitalize', fontSize: '1rem' }}>
              Propiedades
            </Button>
            <Menu
              anchorEl={anchorPropiedades}
              open={Boolean(anchorPropiedades)}
              onClose={handleClosePropiedades}
            >
              <MenuItem onClick={() => navigate('/propiedades/add')}>Agregar Propiedad</MenuItem>
              <MenuItem onClick={() => navigate('/propiedades')}>Lista de Propiedades</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleClickItem} sx={{ fontWeight: "bold", textTransform: 'capitalize', fontSize: '1rem' }}>
              Items
            </Button>
            <Menu
              anchorEl={anchorItem}
              open={Boolean(anchorItem)}
              onClose={handleCloseItem}
            >
              <MenuItem onClick={() => navigate('/item/add')}>Agregar Item</MenuItem>
              <MenuItem onClick={() => navigate('/propiedades')}>Lista de Items</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleClickAmbientes} sx={{ fontWeight: "bold", textTransform: 'capitalize', fontSize: '1rem' }}>
              Ambientes
            </Button>
            <Menu
              anchorEl={anchorAmbientes}
              open={Boolean(anchorAmbientes)}
              onClose={handleCloseAmbientes}
            >
              <MenuItem onClick={() => navigate("/ambientes/add")}>Agregar Ambiente</MenuItem>
              <MenuItem onClick={() => navigate("/ambientes")}>Lista de Ambientes</MenuItem>
            </Menu>


            <Button color="inherit" onClick={handleClickInventarios} sx={{ fontWeight: "bold", textTransform: 'capitalize', fontSize: '1rem' }}>
              Inventarios
            </Button>
            <Menu
              anchorEl={anchorInventarios}
              open={Boolean(anchorInventarios)}
              onClose={handleCloseInventarios}
            >
              <MenuItem onClick={() => navigate("/inventarios/add")}>Programar Inventario</MenuItem>
              <MenuItem onClick={() => navigate("/ambientes")}>Lista de Inventarios</MenuItem>
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
