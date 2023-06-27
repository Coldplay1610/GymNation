import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">GymNation</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '32px' } }} mb="23px" mt="30px">
    Where Fitness <br />
    Thrives!
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '15px' } }} fontFamily="Alegreya" lineHeight="35px">
    Discover Your Personalized Path to Fitness Excellence: <br/>Uncover the Perfect Exercises!
    </Typography>
    <Stack>
      <a href="#exercises" className="explore-btn" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
