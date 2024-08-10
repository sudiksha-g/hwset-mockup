import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import Button from './Button';  // Make sure the import is correct

function HWSet({ name, score }) {
    const [quantity, setQuantity] = useState('');

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" my={1}>
            <Typography sx={{ width: '25%', flexShrink: 0 }}>{name}: {score}</Typography>
            <TextField
                size="small"
                variant="outlined"
                value={quantity}
                onChange={handleQuantityChange}
                sx={{ width: '25%' }}
                placeholder="Enter qty"
            />
            <Button onClick={() => console.log(`Checked in ${quantity}`)} color="primary" sx={{ width: '20%' }}>Check In</Button>
            <Button onClick={() => console.log(`Checked out ${quantity}`)} color="secondary" sx={{ width: '20%' }}>Check Out</Button>
        </Box>
    );
}

export default HWSet;
