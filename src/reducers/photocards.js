const photocards = (state = [], action) => {
  switch (action.type) {

    case 'LOAD_MOCK_FEED':
        console.log("in reducers/photocards switch statement for LOAD_MOCK_FEED state="); console.log(state);

        //return state;
        let xxxnewState = [
            ...state,
            //{
             [{id:10, title: 'Mock10'},{id:11, title: 'Mock11'}]
            //}
        ]

        let newState = [{id: 100, title: "Mock100"}, {id: 101, title: "Mock101"} ];

        console.log("endo of LOAD_MOCK_FEED switch newState="); console.log(newState);
        return newState;
    
    default:
      return state;
  }
}

export default photocards
