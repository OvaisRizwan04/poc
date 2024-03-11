
import Home from './pages/Home';
import { Suspense, useState } from "react";
import { Box, Typography, styled, Select, MenuItem } from "@mui/material";
import i18n from "./i18n";
import languageContext from "./languageContext";

const SelectLabel = styled(Box)({
  textAlign: "end",
  marginRight: 50,
  marginTop: 10,
  display: "flex-end",
  flexDirection: "row"
});

const Heading = styled(Typography)({
 fontSize: 15,
 fontWeight: "Bold",
});

const Dropdown = styled(Select)({
  marginTop:10,        
  width: 100,
  height: 25,
 });

function Loading() {
  return <>Loading...</>;
}

function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <languageContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
          <SelectLabel>
            <Heading>Change Language</Heading>
            <Dropdown
              value={locale}
              onChange={handleLanguageChange}
            >
              <MenuItem value="french">French</MenuItem>
              <MenuItem value="english">English</MenuItem>
            </Dropdown>
          </SelectLabel>
          <Home/>
        </Suspense>
      </languageContext.Provider>
  );
}

export default App;
