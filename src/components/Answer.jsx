import React from "react"
// import { makeStyles } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//     root: {
//     },
// });

const Answer = (props) => {    
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">
                {props.content}
            </Button>
        </Stack>
    );

}

export default Answer