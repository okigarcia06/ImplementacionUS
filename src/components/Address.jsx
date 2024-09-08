import { styled } from '@mui/material/styles';
import React from 'react';
import {Box, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, TextField} from '@mui/material'
import Grid from '@mui/material/Grid2';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export const Address = () => {

    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('')
    const handleProvinceChange = (event) => {setProvince(event.target.value);}
    const handleCityChange = (event) => {setCity(event.target.value);}


    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={8}>
                    <Item>
                        <TextField
                            fullWidth
                            required
                            labelId="street=label"
                            id="street"
                            label="Calle"
                            variant="outlined" />
                    </Item>
                </Grid>
                <Grid size={4}>
                    <Item>
                        <TextField
                            fullWidth
                            required
                            labelId="number-label"
                            id="number"
                            label="Numero"
                            variant="outlined" />
                    </Item>
                </Grid>
                <Grid size={6}>
                    <Item>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Provincia</InputLabel>
                            <Select
                                required
                                id="province-select"
                                value={province}
                                label="Provincia"
                                onChange={handleProvinceChange}
                                variant="outlined">
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </Item>
                </Grid>
                <Grid size={6}>
                    <Item>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-helper-label">Localidad</InputLabel>
                            <Select
                                required
                                labelId="city-select-label"
                                id="city-select"
                                value={city}
                                label="Localidad"
                                onChange={handleCityChange}
                            >
                                <MenuItem value={1}>Cordoba</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </Item>
                </Grid>
                <Grid size={12}>
                    <Item>
                        <TextField
                            fullWidth
                            id="optional-reference"
                            label="Referencia Opcional"
                            variant="outlined" />
                    </Item>
                </Grid>
            </Grid>
        </Box>

    </>);
}



