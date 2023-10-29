import { Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

export default function LessonButton() {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant="text" >Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="text" color="primary" >Primary</Button>
            <Button variant="text" color="secondary">Secondary</Button>
            <Button variant="text" color="success">Success</Button>
            <Button variant="text" color="error">Error</Button>
             <Button variant="text" color="warning">Warning</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary" >Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="outlined" color="primary" >Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" color="success">Success</Button>
            <Button variant="outlined" color="error">Error</Button>
            <Button variant="outlined" color="warning">Warning</Button>
        </Stack>

        <Stack spacing={2} display="block" >
            <Button variant="outlined" color="primary" size="small" >Button</Button>
            <Button variant="outlined" color="secondary" size="medium">Button</Button>
            <Button variant="outlined" color="success" size="large">Button</Button>
        </Stack>

         <Stack spacing={2} direction="row">
            <AddIcon color="error"/>
            <Button variant="contained" startIcon={<AddIcon/>} >Ekle</Button>
        </Stack>
    </Stack>
  )
}
