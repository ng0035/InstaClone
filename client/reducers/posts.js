//reducers take in two things
//1.info about what happened
//2.copy of current state

function posts(state =[],action){
  switch(action.type){
    case 'INCREMENT_LIKES':
    console.log('incrementing likes');
    const i = action.index;
    return[
      ...state.slice(0,i),
      {...state[i] , likes: state[i].likes +1 },
      ...state.slice(i+1),
      //after the update
    ]
    //return updated state by default

    default : return state;
  }
  
  return state;
}

export default posts;
