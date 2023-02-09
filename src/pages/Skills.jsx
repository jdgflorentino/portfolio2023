import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Skills extends Component {
  render() {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 1 }} exit={{ opacity: 0 }} className='container mx-auto max-w-screen-xl'>
        <div className='sm:gap-10 mt-10 sm:mt-20'>
          <h3 className='uppercase text-teal-600 tracking-[.25em]'>Minhas habilidades</h3>
          <div className='border-t-2 border-teal-600 pt-5 mt-5 pb-5'>
            <h1 className='text-5xl font-light text-teal-600 tracking-[.1em] leading-normal'>Tecnologias com as quais trabalho</h1>
            <p className='text-gray-600 tracking-[.1em] mt-6 leading-loose text-base'>
              Minha formação em desenvolvimento web foi construída principalmente com o conteúdo do curso da Trybe, com alguns cursos da plataforma Frontend Masters. Atualmente estou estudando Python e aqui estão algumas tecnologias com as quais venho trabalhado recentemente:
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 pb-8'></div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 pb-8'>
            <div className='shadow p-5'>
              <h4 className='uppercase text-teal-600 text-xl font-bold pl-4 mb-0'>Foco</h4>
              <div className='border-l-2 border-l-teal-600 pl-5 ml-4 pt-0 mt-0'>
                <ul className='text-gray-700 mt-2 leading-loose tracking-[.1em]'>
                  <li>Frontend</li>
                  <li>Testes/QA</li>
                  <li>Ciências de Dados</li>
                  <li>Backend</li>
                </ul>
              </div>
            </div>
            <div className='shadow p-5'>
              <h4 className='uppercase text-teal-600 text-xl font-bold pl-4 mb-0'>Tech</h4>
              <div className='border-l-2 border-l-teal-600 pl-5 ml-4 pt-0 mt-0'>
                <ul className='text-gray-700 mt-2 leading-loose tracking-[.1em]'>
                  <li>HTML, CSS, Tailwind,</li>
                  <li>JavaScript, TypeScript, React.js,</li>
                  <li>Jest, Testing Library, Cypress, Mocha, Chai, Sinon,</li>
                  <li>Python, Node.js, Express.js, MySQL, Sequelize, Docker</li>
                </ul>
              </div>
            </div>
            <div className='shadow p-5'>
              <h4 className='uppercase text-teal-600 text-xl font-bold pl-4 mb-0'>Tools</h4>
              <div className='border-l-2 border-l-teal-600 pl-5 ml-4 pt-0 mt-0'>
                <ul className='text-gray-700 mt-2 leading-loose tracking-[.1em]'>
                  <li>VsCode</li>
                  <li>Docker</li>
                  <li>Trello</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
            <div className='shadow p-5'>
              <h4 className='uppercase text-teal-600 text-xl font-bold pl-4 mb-0'>Mindset</h4>
              <div className='border-l-2 border-l-teal-600 pl-5 ml-4 pt-0 mt-0'>
                <ul className='text-gray-700 mt-2 leading-loose tracking-[.1em]'>
                  <li>Gosto de aprender coisas novas</li>
                  <li>Adepta ao desenvolvimento de relacionamentos positivos entre as pessoas</li>
                  <li>Detalhista, exigente e organizada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Skills;
