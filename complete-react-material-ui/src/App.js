import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Employee from "./pages/Employees/Employee";

const theme = createMuiTheme({
  pallete: {
    primary: {
      main: "blue",
    },
  },
  overrides: {
    MuiAppBar: {
      transform: "translateZ(0)",
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});
const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Employee />
        </div>
        <CssBaseline />
      </div>
    </ThemeProvider>
  );
}

export default App;
