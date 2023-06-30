import { Card, CardActions, CardContent, CardMedia, Typography, Button, CardActionArea } from "@mui/material";

export default function BlueCards() {
  return (
    <Card sx={{
      transition:"0,25",
      "&:hover":{
        transform: "scale(1.05)"
      },
    }}>
      <CardActionArea>

      <CardMedia component="img" image="https://placehold.co/1000x200"
      height="200"
      alt="una descripcion"
    />
      <CardContent>
        <Typography variant="h5"> Card Title</Typography>
        <Typography
          component="p"
          variant="body2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis ex quisquam sapiente,
          doloribus itaque nesciunt vero sint in ut quam quasi rem corrupti omnis aperiam voluptatum deleniti hic voluptatibus!
          Assumenda?
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained">Add</Button>
        <Button variant="contained" color="error">Remove</Button>
      </CardActions>
    </Card>
  );
}
