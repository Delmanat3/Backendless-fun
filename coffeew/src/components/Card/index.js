import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid,Divider} from '@mui/material';


export  function Cards(props) {

if(Object.keys(props).length===0) return "Loading..."
   const {data}=props
  return (
      <>
      <Grid container sx={{ pt:"1rem",justifyContent:"space-between"}}>
      {data.map((item)=>(
    <Box key={item.name} sm={12} sx={{
      py:"3rem" ,px:"5rem", width: 440 }}>
      <Card id="shopItems"   variant="outlined">
      <CardContent>
      <Typography sx={{}} variant="h5" component="div">
      {item.name}
      </Typography>
      <Divider/>
      <Typography sx={{pt:'.5rem', mb: 1.5 }} color="white">
       ${item.price}
      </Typography>
      <Typography paragraph variant="body2">
      {item.description }
      </Typography>
      <Typography sx={{pt:'.5rem', mb: 1.5 }} color="white">
      {/* {item.category.name} */}
      </Typography>
    </CardContent>
    <CardActions>
    </CardActions>
      </Card>
    </Box>

      ))} 
      </Grid>
    </>
  );
}
