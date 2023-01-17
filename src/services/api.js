import axios from 'axios';

const key = '563492ad6f917000010000010a330c747ea8468880a56f561a8b9b96';

const url = axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: key
    }
})

export async function getImages(qnt) {
  const response = await url.get(`/v1/search`, {
            params: {
                query: 'code',
                per_page: qnt,
                page: 1
            }
  });
  return response.data.photos;
}

export async function getAllRepos() {
  const url = 'https://api.github.com/users/jdgflorentino/repos';
  const response = await fetch(url);
  const repos = await response.json();
  let data = [];
  for (let i = 0; i < repos.length; i++) {
    const { name, description, html_url, topics } = repos[i];
    const newData = [];
    newData.push({ name, description, url: html_url, tags: topics });
    data = [...data, newData];
  }
  return data;
}



