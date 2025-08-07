import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const productsPage = [
  {label: 'home', url: '/',}
]

export default function ProductsLayout() {
    return <main className="bg-background text-text">
      <NavBar pages={productsPage}/>
      <Outlet />
    </main>
}
