import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoadingModal from "./components/modals/LoadingModal";
import { persistor, store } from "./redux/Store";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Let's build airbnb",
};

console.log("Home");

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Provider store={store}>
          <PersistGate persistor={persistor}> */}
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <LoadingModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
        {/* </PersistGate>
        </Provider> */}
      </body>
    </html>
  );
}
