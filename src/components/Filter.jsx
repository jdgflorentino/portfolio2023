import React, { Component } from 'react';
import PropTypes from 'prop-types';

const selectOptions = ['Fundamentos', 'Frontend', 'Backend', 'Testes/QA', 'Ciências da Computação'];

class Filter extends Component {
  render() {
    const { handleCategory } = this.props;
    return (
      <select onChange={handleCategory} className='font-general-medium px-4 sm:px-6 py-2 border rounded-lg text-sm sm:text-md bg-secondary-light text-primary-dark'>
        <option className='text-sm sm:text-md'>Todos projetos</option>
        {selectOptions.map((option) => (
          <option className='text-normal sm:text-md' key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

Filter.propTypes = {
  handleCategory: PropTypes.func.isRequired,
};

export default Filter;
