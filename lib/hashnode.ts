const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "ayushsoni1010") {
            publication {
                posts(page: $page) {
                    title
                    slug
                    dateAdded
                    coverImage
                    contentMarkdown
                    brief
                }
            }
        }
    }
`;

async function gql(query = GET_USER_ARTICLES, variables = { page: 0 }) {
  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.HASNODE_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  return data;
}

async function getHashnodeBlogsData() {
  return await gql(GET_USER_ARTICLES, { page: 0 })
    .then((response) => {
      return response?.data?.user?.publication?.posts;
    })
    .catch((err) => {
      console.log(err);
    });
}

export { gql, getHashnodeBlogsData };
