import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { RolexDetail } from "./components/RolexDetail";
import { Sidebar } from "./components/Sidebar";
import { ROLEX_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentRolex, setCurrentRolex] = useState(ROLEX_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  const removeFromCart = (productId) => {
    console.log("***", productId);
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };
  const addToCart = (product, qty, color) => {
    if (qty && color) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id,
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].color = color;
      } else {
        updatedCartItems.push({ product, qty, color });
      }

      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="animate-fadeIn p-10 dark:bg-night xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <RolexDetail rolex={currentRolex} onClickAdd={addToCart} />
      <NewArrivalsSection
        items={ROLEX_LIST}
        onClickCard={setCurrentRolex}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          onClickTrash={removeFromCart}
        />
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-full bg-night-50 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
