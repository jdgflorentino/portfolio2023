import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.15,
        }}
      >
        <a href={project.url} target='_blank' rel='noreferrer'>
          <div className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0'>
            <div className='overflow-hidden'>
              <img src={project.image} className='rounded-t-xl border-none' alt={project.name} />
            </div>
            <div className='text-start px-4 py-6'>
              <p className='text-xl font-semibold text-teal-600 flex space-x-2 items-center justify-between'>{project.name}</p>
              <p className='mt-6 mb-6 text-sm text-gray-600'>{project.description}</p>
              {project.tags.map((tag) => (
                <span className='mt-6 text-sm text-orange-500 uppercase'>{` ${tag}/`} </span>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      tags: PropTypes.object.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ProjectCard;
