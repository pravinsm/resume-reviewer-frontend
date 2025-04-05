import { SignUp } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export default function SignUpPage() {
  return (
    <div className="main-app">
      <Box mt={"100px"} mx={"auto"}>
        <SignUp />
      </Box>
    </div>
  );
}
