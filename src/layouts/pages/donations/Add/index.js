/**
 =========================================================
 * Material Dashboard 2 PRO React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
// Settings page components
import BasicInfo from "layouts/pages/donations/Add/components/BasicInfo";
import DonationLayout from "../components/DonationLayout";

function AddDonation() {
  return (
    <DonationLayout>
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={12} xl={12}>
                  <BasicInfo />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DonationLayout>
  );
}

export default AddDonation;
