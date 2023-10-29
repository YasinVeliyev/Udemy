import { Typography } from "@mui/material"

export default function LessonTypography() {
  return (
    <div>
        <Typography variant="body1">
            Body 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit magni est velit quos a vero ipsam, recusandae sed atque quisquam dolores nisi officiis cumque ullam sapiente harum perferendis maxime temporibus.
        </Typography>
        <Typography variant="body2">
            Body 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit magni est velit quos a vero ipsam, recusandae sed atque quisquam dolores nisi officiis cumque ullam sapiente harum perferendis maxime temporibus.
        </Typography>


         <Typography variant="h1">
            H1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>
        <Typography variant="h2">
            H2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>
        <Typography variant="h3">
            H3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>
        <Typography variant="h4">
            H4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>
        <Typography variant="h5">
            H5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>
         <Typography variant="h6">
            H6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>


         <Typography variant="h1" component={"h4"}>
            H1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>

        <Typography variant="h1" component={"h4"} align="left">
            H1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>

        <Typography variant="h1" component={"h4"} align="right">
            H1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>

        <Typography variant="subtitle1" component={"h4"} align="right" >
            H1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </Typography>
    </div>
  )
}
