import React from 'react'
import {Stack, Button,ButtonGroup } from '@mui/material'

export default function LessonBottunGroup() {
  return (
    <div>
<Stack direction={"row"}>
    <ButtonGroup variant="contained" orientation='vertical'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
    </ButtonGroup>
</Stack>
    </div>
  )
}
