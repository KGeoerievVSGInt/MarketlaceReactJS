import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <Typography variant="h3" fontSize={120} fontWeight={700} color="#ed1c25">
          404
        </Typography>
        <Typography variant="h5" fontSize={90} >
          Page Not Found
        </Typography>
        <Link style={{marginTop:"30px"}} to="/">BACK</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
