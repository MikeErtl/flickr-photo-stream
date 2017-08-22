/*
 * action types
 */

// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const LOAD_LIVE_FEED = 'LOAD_LIVE_FEED'
export const LOAD_MOCK_FEED = 'LOAD_MOCK_FEED'
export const LOAD_MOCK_PHOTOCARD = 'LOAD_MOCK_PHOTOCARD'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function loadLiveFeed () {
    return { type: LOAD_LIVE_FEED }
}

export function loadMockFeed () {
    return { type: LOAD_MOCK_FEED }
}

export function loadMockPhotocard () {
    return { type: LOAD_MOCK_PHOTOCARD }
}