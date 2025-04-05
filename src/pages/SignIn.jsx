import { SignIn } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export default function SignInPage() {
  return (
    <div className="main-app">
      <Box mt={"100px"} mx={"auto"}>
        <SignIn />
      </Box>
    </div>
  );
}
