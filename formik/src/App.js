import { theme, ThemeProvider } from "@chakra-ui/react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm />
        <br />
        {/* <RegistrationForm /> */}
        {/* <YoutubeForm /> */}
        {/* <FormikContainer /> */}
        {/* <CourseEnrollment /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
