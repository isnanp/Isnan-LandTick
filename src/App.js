import React from "react";
import "./styles.css";
import Home from "./pages/home";
import TicketDetail from "./pages/detailTicket";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Invoice from "./pages/InvoicePage";
import ListTransaksi from "./pages/ListTransaksi";
import TambahTiketPage from "./pages/tambahTicketPage";
import PrivateRoute from "./components/privateRoute";
import TicketApproved from "./pages/ticketApproved";

function App() {
  return (
   <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/ticket/:id" element={<TicketDetail />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/list-transaksi" element={<ListTransaksi />} />
          <Route path="/tambah-ticket" element={<TambahTiketPage />} />
          <Route path="/myticket/:id" element={<TicketApproved />} />
        </Route>
      </Routes>
   </div>
  );
}

export default App;
