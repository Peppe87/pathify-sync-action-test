const loadBackEndOrder = async context => {
  //In the probject this action reload the order data via a GET from the backend server
  console.log(context);
  //context.commit('SET_ORDER', order);
};

const setOrderShippingWarranty = async (context, payload) => {
  // In the  probject this action updates
  // the order's warranty field in the backend server via a Post Action
  // and then call that other store action to reload all order data
  console.log("I'm called!!");
  console.log(payload);

  await loadBackEndOrder(context);
};

export { loadBackEndOrder, setOrderShippingWarranty };
