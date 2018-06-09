//increment likes
export function increment(index){
  return{
    type : "INCREMENT_LIKES",
    index
  }
}

//add comments
export function addComment(postID,comment,author){
  type : "ADD_COMMENT",
  postId
  comment
  author
}

//remove comments
export function removeComment(postId,i){
  type : "REMOVE_COMMENT",
  postId
  I
}
