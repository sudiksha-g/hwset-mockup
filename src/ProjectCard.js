import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import HWSet from './HWSet';
import Button from './Button'; 

function ProjectCard({ projectName, authorizedUsers, hwSets, isJoined, onToggleJoin }) {
    return (
        <Card sx={{ padding: '20px', marginBottom: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>{projectName}</Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>Authorized Users: {authorizedUsers}</Typography>
            {hwSets.map((hw, index) => (
                <HWSet key={index} name={hw.name} score={hw.score} />
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <Button onClick={onToggleJoin} color={isJoined ? "secondary" : "primary"} sx={{ width: 'auto' }}>
                    {isJoined ? 'Leave' : 'Join'}
                </Button>
            </Box>
        </Card>
    );
}

export default ProjectCard;
