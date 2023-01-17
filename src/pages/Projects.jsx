import React, { Component } from 'react';
import { putImages } from '../data/projects';
import Filter from '../components/Filter';
import ProjectCard from '../components/ProjectCard';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      category: '',
      filteredProjects: [],
      isFiltered: false,
    };
  }

  async componentDidMount() {
    const reposImages = await putImages();
    this.setState({ projects: reposImages });
  }

  handleCategory = ({ target }) => {
    const { value } = target;
    this.setState({ category: value }, () => {
      this.handleFilter();
    });
  };

  handleFilter = () => {
    const { projects, category } = this.state;
    if (category === 'Todos projetos') {
      this.setState({ isFiltered: false });
    } else {
      const filterProjects = projects.filter((repo) => {
        let project = repo.category.charAt(0).toUpperCase() + repo.category.slice(1);
        return project.includes(category);
      });
      this.setState({ filteredProjects: filterProjects, isFiltered: true });
    }
  };

  render() {
    const { projects, isFiltered, filteredProjects } = this.state;
    return (
      <section className='container mx-auto max-w-screen-xl'>
        <div className='py-5 sm:py-10 mt-5 sm:mt-10'>
          <div className='text-center'>
            <h1 className='text-5xl font-light text-teal-600 tracking-[.1em] leading-normal'>Projetos</h1>
          </div>
          <div className='mt-10 sm:mt-16'>
            <h3 className='font-general-regular text-center text-md sm:text-xl mb-3'>Filtre os projetos por categoria</h3>
            <div className='flex justify-end border-b pb-3 gap-3'>
              <Filter handleCategory={this.handleCategory} />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10'>{isFiltered ? filteredProjects.map((project) => <ProjectCard project={project} />) : projects.map((project) => <ProjectCard project={project} />)}</div>
        </div>
      </section>
    );
  }
}

export default Projects;
