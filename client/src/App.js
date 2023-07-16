import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import Home from "./pages/home";
import TicketDetail from "./pages/detailTicket";
import { Routes, Route, useNavigate} from "react-router-dom";
import Navbar from "./components/navbar";
import Invoice from "./pages/InvoicePage";
import ListTransaksi from "./pages/ListTransaksi";
import TambahTiketPage from "./pages/tambahTicketPage";
import {PrivateRoute, PrivateRouteAdmin} from "./components/privateRoute";
import { UserContext } from "./context/usercontext";
import { API, setAuthToken } from "./config/api";
import MyTicketList from "./pages/myTicketList";

function App() {
  const [state, dispatch] = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth")
      console.log("Check user success : ", response)
      let payload =response.data.data;
      payload.token = localStorage.token;

      dispatch({
        type : "USER_SUCCESS",
        payload,
      })
      setIsLoading(false)

    } catch (error) {
      console.log("Check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      })
      setIsLoading(false)
      }
    }
    
    useEffect(() =>{
      if (localStorage.token) {
        setAuthToken(localStorage.token);
        checkUser();
      } else {
        setIsLoading(false);
      };
    }, []);

    useEffect(() => {
      if (!isLoading) {
        if (state.isLogin === false) {
          navigate("/");
        }
      }
    }, [isLoading])

  return (
   <div>
    {isLoading ? null :(
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/ticket/:id" element={<TicketDetail />} />
          <Route path="/invoice/:id" element={<Invoice />} />
          <Route path="/myticket/" element={<MyTicketList />} />
        </Route>
        <Route path="/" element={<PrivateRouteAdmin />}>
          <Route path="/list-transaksi" element={<ListTransaksi />} />
          <Route path="/tambah-ticket" element={<TambahTiketPage />} />
        </Route>
      </Routes>
      </>
    )}
   </div>
  );
}

export default App;
