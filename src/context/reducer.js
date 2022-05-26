export const initialState = {
  basket: [
    {
      rating: 4,
      pricing: 24,
      id: 1234,
      title: "Gaming accessories",
      images: ["image1.jpg"],
    },
    {
      rating: 4,
      pricing: 24,
      id: 1234,
      title: "Gaming accessories again",
      images: ["image2.jpg"],
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //state.basket.findIndex()..tryint to check if basket as particular item

      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        //item exist in basket

        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
