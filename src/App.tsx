import React, { useEffect } from "react";
import Landing from "@/components/templates/Landing";
import GlobalStyle from "@/utils/GlobalStyle";
import i18n from "@/utils/i18n";

const App: React.FC = () => {
  useEffect(() => {
    i18n.changeLanguage(navigator?.language);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Landing />
    </>
  );
};

export default App;
