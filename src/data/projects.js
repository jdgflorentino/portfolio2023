import { getAllRepos, getImages } from '../services/api';

const categories = [
  'Fundamentos',
  'Frontend',
  'Backend',
  'Testes/QA',
  'Ciências da Computação'
];

async function optimizeRepos() {
	const data = await getAllRepos();
	const repos = data.map(function (repo) {
		const description = repo[0].description;
		const category = description.substring(description.lastIndexOf("[") + 1, description.lastIndexOf("]"));
		const newDescription = description.split("] ")[1]
		const title = repo[0].name.replaceAll('-', ' ')
		let newRepo = {};
		newRepo = { name: title, description: newDescription, url: repo[0].url, category: category, tags: repo[0].tags }
		return newRepo;
	})
	return repos;
}

async function getRepos() {
	const repos = await optimizeRepos();
	const result = repos.filter(repo => categories.includes(repo.category));	
	return result;
}

export async function putImages() {
	const repos = await getRepos();
	const images = await getImages(repos.length);
	const result = repos.map((repo, index) => {
		const { name, description, url, category, tags } = repo;
		let newRepo = {};
		newRepo = { name, description, image: images[index].src.landscape, url, category, tags }
		return newRepo;
		})
	return result;
};
