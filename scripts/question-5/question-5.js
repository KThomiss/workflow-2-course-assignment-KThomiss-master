import ApolloClient, { gql } from "apollo-boost";
import { orderBy } from "lodash";

async function makeGQLCall() {
  const gqlUrl = "https://graphqlzero.almansi.me/api";

  const client = new ApolloClient({
    uri: gqlUrl,
  });

  const json = await client.query({
    query: gql`
      {
        posts {
          data {
            id
            title
          }
        }
      }
    `,
  });

  const apiData = json.data.posts.data;

  const orderedApiData = orderBy(apiData, ["id"], ["desc"]);
  const ulContainer = document.querySelector(".results-list");

  const slicedArray = orderedApiData.slice(0, 10);

  slicedArray.forEach(function (posts) {
    ulContainer.innerHTML += `<li><span><b>Id:</b> ${posts.id}</span><span><b>Title:</b> ${posts.title}</span></li>`;
  });
}

makeGQLCall();
