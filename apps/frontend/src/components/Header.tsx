import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
  description?: string;
  element?: React.ReactNode | null;
};

const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  description,
  element,
}) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxHeight: "100px",
          minHeight: "80px",
          height: "80px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="left"
          sx={{ height: "100%" }}
        >
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justifyContent="left"
              sx={{ height: "100%", p: 2 }}
            >
              <Grid item>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="h4"
                    component="p"
                    color={"primary"}
                    align="left"
                    mx={2}
                  >
                    {title}
                  </Typography>
                  {description !== undefined && (
                    <Typography
                      color={"secondary"}
                      style={{ marginTop: "auto" }}
                    >
                      {description}
                    </Typography>
                  )}
                  {element !== undefined && element !== null ? (
                    <>
                      <Divider orientation="vertical" flexItem />
                      <Typography color={"primary"} border={1}>
                        {element}
                      </Typography>
                    </>
                  ) : null}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </div>
  );
};

export default HeaderComponent;
