import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";

export default function NavigationBar({
  buttonName,
  buttonLink,
}: {
  buttonName?: string;
  buttonLink?: string;
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "black",
        border: 1,
        marginBottom: 3,
      }}
    >
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Link sx={{ textDecoration: "none", flexGrow: 1 }} href="/">
            <Typography variant="h6">Web Blog</Typography>
          </Link>
          <Button
            color="inherit"
            href={buttonLink || "/create"}
            variant="outlined"
          >
            {buttonName || "create"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
