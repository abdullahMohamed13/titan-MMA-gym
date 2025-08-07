import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { HomeIcon } from "flowbite-react";
import { Tooltip } from "@mui/material";

const productsPage = [
  {
    label:
      <Tooltip title='Return to home page'>
        <HomeIcon fontSize={25} color="#ddd" />
      </Tooltip>
    , url: '/',
  },
  {
    label: 'store home', url: '/products',
  },
  {
    label: 'gear', url: '/products/gear',
  },
  {
    label: 'equipment', url: '/products/equipment',
  },
  {
    label: 'supplements', url: '/products/supplements',
  }
]

export default function ProductsLayout() {
    return <main className="bg-background text-text">
      <NavBar pages={productsPage}/>
      <Outlet />
    </main>
}
