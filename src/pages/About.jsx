import React, { Component } from 'react';
import foto from '../images/foto-port.png';
import { motion } from 'framer-motion';

class About extends Component {
  render() {
    return (
      <main className='container mx-auto max-w-screen-xl'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }} className='flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 mb-6'>
          <div className='w-full md:w-1/3 text-left'>
            <p className='text-lg font-bold tracking-[.25em] text-teal-600 mb-3 text-center sm:text-left'>Seja Bem Vindo!</p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.1,
              }}
              className='font-bold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-gray-500'
            >
              Olá, sou <br />
              Jéssica Florentino!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.2,
              }}
              className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500'
            >
              Desenvolvedora Frontend
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.3,
              }}
              className='flex justify-center gap-5 sm:justify-start md:flex'
            >
              <a
                href='https://www.linkedin.com/in/jéssica-florentino'
                target='_blank'
                rel='noreferrer'
                className='font-medium flex justify-center items-center w-28 md:w-48 mt-12 mb-6 md:mb-0 text-lg border border-teal-600 py-2.5 md:py-3 shadow-lg rounded-lg bg-teal-50 focus:ring-1 focus:ring-teal-700 hover:bg-teal-600 text-gray-600 hover:text-white duration-500'
              >
                <span className='text-sm md:text-base lg:text-lg font-medium duration-100'>Linkedin</span>
              </a>
              <a
                href='https://github.com/jdgflorentino'
                target='_blank'
                rel='noreferrer'
                className='font-medium flex justify-center items-center w-28 md:w-48 mt-12 mb-6 md:mb-0 text-lg border border-teal-600 py-2.5 sm:py-3 shadow-lg rounded-lg bg-teal-50 focus:ring-1 focus:ring-teal-700 hover:bg-teal-600 text-gray-600 hover:text-white duration-500'
              >
                <span className='text-sm md:text-base lg:text-lg font-medium duration-100'>GitHub</span>
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }} className='w-full md:w-1/2 text-right float-right mt-8 sm:mt-0'>
            <img src={foto} alt='Foto Jéssica Florentino' />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 1 }} exit={{ opacity: 0 }} className='border-t-2 border-teal-600 pt-5 mt-5 pb-5'>
          <h2 className='uppercase text-teal-600 tracking-[.25em]'>Um pouco sobre mim</h2>
          <p className='text-gray-700 tracking-[.1em] mt-6 text-sm md:text-base  lg:text-lg leading-loose'>
            Meu nome é Jéssica, nascida e criada no interior de São Paulo. Sou graduada em Engenharia de Bioprocessos e Biotecnologia pela UNESP/Botucatu e trabalho como perita contábil desde 2017, prestando serviços para advogados e escritórios. No momento estou em transição de carreira para área
            de desenvolvimento web e buscando uma posição como desenvolvedora Frontend.
          </p>
        </motion.div>
      </main>
    );
  }
}

export default About;
