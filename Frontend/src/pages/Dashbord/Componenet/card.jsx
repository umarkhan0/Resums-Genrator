import React from 'react';
import { Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
const CardDesh = (props) => {
     let {image , title , discription , button} = props;
    return (
        <Card sx={{ display: 'flex', padding: 2, borderRadius: '10px', boxShadow: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{  display: "flex" , justifyContent: "center" , alignItems: "center"}}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%' ,height: 180, objectFit: 'contain'  , borderRadius: "10px" , padding: "4px" }}
                        image={image} // Replace with your image path
                        alt="Resume"
                    />
                </Grid>
                <Grid item xs={12} md={8} container direction="column" justifyContent="center">
                    <CardContent>
                        <Typography component="h5" variant="h5" fontWeight="bold">
                            {title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" mt={2}>
                           {discription}
                        </Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            {button}
                        </Button>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default CardDesh;
