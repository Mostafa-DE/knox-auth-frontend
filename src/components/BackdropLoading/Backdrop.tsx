import {Backdrop, Box, CircularProgress, Typography} from "@mui/material";

const BackdropLoading = ({openBackdrop}: any): JSX.Element => {
    return (
            <Box>
                <Backdrop
                    sx={{
                        color: '#fafafa',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        backgroundColor: "rgba(51,51,51,0.83)",
                    }}
                    open={openBackdrop}
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography sx={{margin: "0 0 1rem 0", fontSize: "1.5rem", fontWeight: "bold"}}>
                            Please Wait while we are logging you in...
                        </Typography>
                        <CircularProgress color="primary"/>
                    </Box>
                </Backdrop>
            </Box>
    );
}

export default BackdropLoading;
