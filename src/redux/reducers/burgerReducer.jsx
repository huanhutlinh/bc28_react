//rxreducer

const initialState = {
    burger: [
        {id:'salad',price:10,quantity:4},
        {id:'cheese',price:5,quantity:5},
        {id:'beef',price:20,quantity:3},
    ]
   
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'CHANGE_TOPPING': {
      //b1: Lấy dữ liệu từ payload ra
      const {id,quantity} = payload;
      //b2: Clone state.burger
      let burgerUpdate  = [...state.burger];
      let item = burgerUpdate.find(it => it.id === id);
      if(item){
        item.quantity += quantity;
        if(item.quantity === 0) {
          alert('Số lượng tối thiểu 1');
          item.quantity = 1;
        }
      }
      //b3: update lại state
      state.burger = burgerUpdate;
      return {...state};
    }

  default:
    return state
  }
}
