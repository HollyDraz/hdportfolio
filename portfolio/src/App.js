import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Container maxWidth="sm">
      <p>hello chat</p>
      {/* Box with some content */}
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Welcome to the Box!</p>
      </Box>
    </Container>
  );
}

export default App;
