
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const loadMockFeed = () => ({
  type: 'LOAD_MOCK_FEED',
});

export const requestPosts = () => ({ //MIKE-A2
  type: 'REQUEST_POSTS',
});

export const receivedPostsSuccess = (json) => ({
  type: 'RECEIVED_POSTS_SUCCESS',
  json: json
//   posts: json, //map it
//   receivedAt: Date.now()
});

