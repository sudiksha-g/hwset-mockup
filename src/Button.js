import React, { useState } from 'react';
import { Button as MUIButton } from '@mui/material';

function Button({ children, ...props }) {
    // State to manage the number of clicks
    const [clickCount, setClickCount] = useState(0);

    // Define the custom internal event handler
    const handleInternalClick = (event) => {
        // Update the click count state
        setClickCount(clickCount + 1);

        // Log the click count
        console.log(`Button has been clicked ${clickCount + 1} times`);

        // If an onClick prop is provided, call it
        if (props.onClick) {
            props.onClick(event);
        }
    };

    return (
        <MUIButton onClick={handleInternalClick} {...props}>
            {children}
        </MUIButton>
    );
}

export default Button;
