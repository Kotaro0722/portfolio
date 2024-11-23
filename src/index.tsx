import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./page/footer";
import { Header } from "./page/header";
import { Internship } from "./page/internship";
import { Profile } from "./page/profile";
import { Project } from "./page/project";
import { Skill } from "./page/skill";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans JP"',
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);
