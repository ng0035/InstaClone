//reducers take in two things
//1.info about what happened
//2.copy of current state
function postComments(state =[],action){
  switch(action.type){
    case 'ADD_COMMENT':
      //return the new state with the new comment
      
      return[... state,{
        user: action.author,
        text: action.comment,
      }];

    case 'REMOVE_COMMENT': 
      console.log('removing a comment!');
      //we need to return the new state without the deleted comments.
      return[
        //return comments from state 0 to i
        ...state.slice(0,action.i),
        //return comments from i+1 to end
        ...state.slice(action.i+1),
      ]
      return state;
    default: return state;
  }
  return state;
}

function comments(state =[],action){
  if(typeof action.postId !== 'undefined'){
    return{
      //return the current state
      ... state,
      //override this post with the new one

      [action.postId]: postComments(state[action.postId],action)
    }
  }
  return state;
}

export default comments;
