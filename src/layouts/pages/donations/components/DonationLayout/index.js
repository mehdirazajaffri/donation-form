// @asseinfo/react-kanban components

// react-html-parser components

// uuid is a library for generating unique id

// @mui material components
// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "shared/LayoutContainers/DashboardLayout";
import PropTypes from "prop-types";
import DashboardNavbar from "../../../../../shared/Navbars/DashboardNavbar";

// Kanban application components

function DonationLayout({ stickyNavbar, children }) {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute={!stickyNavbar} isMini />
      <MDBox mt={stickyNavbar ? 3 : 10}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <AppBar position="static">{children}</AppBar>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

DonationLayout.defaultProps = {
  stickyNavbar: false,
};

// Typechecking props for BaseLayout
DonationLayout.propTypes = {
  stickyNavbar: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default DonationLayout;
