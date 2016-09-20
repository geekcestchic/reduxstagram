// reducer takes two things
// action
//copy of current state

function postComments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
    //existing state + comment
    return [...state, {
      user: action.author,
      text: action.comment
    }]
    case 'REMOVE_COMMENT':
      //from start until where we want to delete
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }
  return state
}

function comments (state = [], action) {
  console.log('adding comment')
  if (typeof action.postId !== 'undefined') {
    return {
      //take current state
      ...state,
      //overwrite post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments
