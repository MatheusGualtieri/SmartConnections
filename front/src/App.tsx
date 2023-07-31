import { AuthProvider } from "./Providers/AuthProvider";
import { ContactProvider } from "./Providers/ContactProvider";
import { UserProvider } from "./Providers/UserProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import Reset from "./styles/Reset";

export const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <AuthProvider>
        <UserProvider>
          <ContactProvider>
            <RoutesMain />;
          </ContactProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
};

export default App;
