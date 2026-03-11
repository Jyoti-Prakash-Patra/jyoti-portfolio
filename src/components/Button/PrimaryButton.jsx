import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const PrimaryButton = ({ text }) => {
  return (
    <Button
      startIcon={<DownloadIcon />}
      href="#"
      // download
      sx={{
        px: 3,
        py: 1,
        borderRadius: "10px",
        background: "linear-gradient(90deg,#7c3aed,#9333ea)",
        color: "#fff",
        transition: "all 0.3s ease",

        "&:hover": {
          background: "linear-gradient(90deg,#6d28d9,#7e22ce)"
        },
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
