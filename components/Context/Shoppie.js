import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

const api = "https://ig-food-menus.herokuapp.com";

const AppContext = createContext();

const Shoppie = ({ children }) => {
  //Arrays states
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [favData, setFavData] = useLocalStorageState("fav_list", {
    defaultValue: [],
  });
  const [cartData, setCartData] = useLocalStorageState("cart_list", {
    defaultValue: [],
  });

  // Filtering states
  const [foodValue, setFoodValue] = useState("burgers");
  const [priceValue, setPriceValue] = useState(null);
  const [rateValue, setRateValue] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [sortValue, setSortValue] = useState("");

  //Page number states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(12);

  //List items view
  const [view, setView] = React.useState("grid");

  // Drawer states
  const [openDrawer, setOpenDrawer] = useState(false);

  //  Fetching states
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [waiting, setWaiting] = useState(true);

  // fetching all data and add quantity object
  const [foodMenuId, setFoodMenuId] = useState("our-foods");
  useEffect(() => {
    fetchData(foodMenuId);
  }, [foodMenuId]);

  let fetchData = async (foodMenu) => {
    setError(false);
    setLoading(true);

    try {
      const res = await fetch(
        `https://ig-food-menus.herokuapp.com/${foodMenu}`
      );
      if (res) {
        const resData = await res.json();
        if (resData.length > 0) {
          const dataWithQuantityValue = resData.map((data) => ({
            ...data,
            quantity: 1,
          }));
          setData(dataWithQuantityValue);
          setFilteredData(dataWithQuantityValue);
          setLoading(false);
          setWaiting(false);
          setError(false);
        } else {
          setWaiting(true);
          setError(true);
        }
      } else {
        setWaiting(true);
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  // Get current item
  const indexOfLastPost = currentPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;
  const currentItem = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  // Get pages number
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemPerPage); i++) {
    pageNumber.push(i);
  }

  // Filtering functionality
  const applyFilters = () => {
    let updatedData = data;

    updatedData = updatedData.sort((a, b) => {
      if (sortValue === 1) {
        return b.price - a.price;
      }
      if (sortValue === 2) {
        return a.price - b.price;
      }
      if (sortValue === 3) {
        return b.rate - a.rate;
      }
      if (sortValue === 4) {
        return a.rate - b.rate;
      }
    });

    if (searchInput) {
      updatedData = updatedData.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    if (rateValue) {
      updatedData = updatedData.filter((item) => {
        if (rateValue == 0) {
          return item;
        }
        if (rateValue == 5) {
          return item.rate === 5;
        }
        if (rateValue == 4) {
          return item.rate === 4;
        }
        if (rateValue == 3) {
          return item.rate === 3;
        }
      });
    }

    if (priceValue) {
      updatedData = updatedData.filter((item) => {
        if (priceValue == 1) {
          return item;
        }
        if (priceValue == 2) {
          return item.price < 100;
        }
        if (priceValue == 3) {
          return item.price > 50 && item.price < 100;
        }
        if (priceValue == 4) {
          return item.price < 50;
        }
        if (priceValue == 5) {
          return item.price > 100;
        }
      });
    }
    setFilteredData(updatedData);
  };

  // Add and Remove to/from fav list func

  const addToFavHandler = (meal) => {
    const newFavList = [...favData, meal];
    setFavData(newFavList);
  };
  const removeFromFavHandler = (meal) => {
    const newFavList = favData.filter((fav) => fav.id !== meal.id);
    setFavData(newFavList);
  };

  // Empty fav list
  const emptyFavList = () => {
    setFavData([]);
  };

  // Add and Remove to/from cart list fun
  const addToCartHandler = (meal) => {
    const newCartList = [...cartData, meal];
    setCartData(newCartList);
  };
  const removeFromCartHandler = (meal) => {
    const newCartList = cartData.filter((cart) => cart.id !== meal.id);
    setCartData(newCartList);
  };

  // Empty cart list
  const emptyCartList = () => {
    setCartData([]);
  };

  // Find total price of cart items
  const totalPriceHandler = () => {
    let sum = 0;
    cartData.map((item) => (sum += item.quantity * item.price));
    setTotalPrice(Math.round((sum + Number.EPSILON) * 100) / 100);
  };

  // Finf total price of a single item in cart
  // Increment and Decrement quiantity func
  const incrementHandler = (cart_id) => {
    setCartData((cart) =>
      cart.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              quantity: item.quantity + (item.quantity < 100 ? 1 : 0),
            }
          : item
      )
    );
  };
  const decrementHandler = (cart_id) => {
    setCartData((cart) =>
      cart.map((item) =>
        cart_id === item.id
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };

  // Render after filter is changed
  useEffect(() => {
    applyFilters();
  }, [rateValue, priceValue, searchInput, sortValue]);

  // Render after food menu is changed
  // useEffect(() => {
  //   fetchData();
  // }, [foodValue]);

  // Render total cart price
  useEffect(() => {
    totalPriceHandler();
  });

  // Drawer funcs
  const drawerOpenHandler = () => {
    setOpenDrawer(true);
  };

  const drawerCloseHandler = () => {
    setOpenDrawer(false);
  };

  let sharedState = {
    data,
    waiting,
    error,
    loading,
    filteredData,
    currentItem,
    pageNumber,
    currentPage,
    setCurrentPage,
    foodValue,
    setFoodValue,
    rateValue,
    setRateValue,
    priceValue,
    setPriceValue,
    searchInput,
    setSearchInput,
    sortValue,
    setSortValue,
    favData,
    addToFavHandler,
    removeFromFavHandler,
    emptyFavList,
    cartData,
    addToCartHandler,
    removeFromCartHandler,
    emptyCartList,
    decrementHandler,
    incrementHandler,
    totalPrice,
    view,
    setView,
    drawerOpenHandler,
    drawerCloseHandler,
    setOpenDrawer,
    openDrawer,
    setFoodMenuId,
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export default Shoppie;

export function useAppContext() {
  return useContext(AppContext);
}
