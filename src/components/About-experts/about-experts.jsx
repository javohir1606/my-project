import { Typography, Box, Stack, IconButton } from "@mui/material";
import React from "react";
import { MiniFaceBook } from "../../assets/icons/mini-faceBook";
import { MiniTwitter } from "../../assets/icons/mini-Twitter";
import { MiniInstagram } from "../../assets/icons/mini-instagram";
// import Export1 from "../../assets/img/Export1.png";
// import Export2 from "../../assets/img/Export2.png";
// import Export3 from "../../assets/img/Export3.png";
import { Colors } from "../../Config/Colors";
export const AboutExperts = ({ img, title, text }) => {
  return (
    <>
      <Box
        width={"449px"}
        sx={{
          transition: "transform 0.3s ease",
          bgcolor: `${Colors.darkWhite}`,
          cursor: "pointer",
          borderRadius: "30px",
          boxShadow: `0px 29px 44px 0px rgba(150, 150, 150, 0.25)`,
          "&:hover": {
            transform: "translateY(20px)",
            bgcolor: `${Colors.white}`,
          },
        }}
      >
        <Box height={"485px"}>
          <img src={img} alt="#" />
        </Box>
        <Box p={"35px 28px"}>
          <Typography mb={"2px"} variant="h6">
            {title}
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              fontFamily={"YellowTail"}
              color={Colors.lightGreen}
              fontSize={"22px"}
              fontWeight={"400"}
              variant="h6"
            >
              {text}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"17px"}>
              <IconButton>
                <MiniInstagram />
              </IconButton>
              <IconButton>
                <MiniFaceBook />
              </IconButton>
              <IconButton>
                <MiniTwitter />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
