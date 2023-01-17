import React, { Component } from 'react';
import { Form } from '../components/Form';
import { motion } from 'framer-motion';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

class Contact extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.1,
        }}
        className='container mx-auto flex flex-col items-center lg:flex-row lg:py-10 lg:mt-10 max-w-screen-xl'
      >
        <div className='flex flex-col w-1/2'>
          <div className='max-w-md'>
            <h1 className='text-4xl text-gray-600 tracking-[.1em] '>Let's connect 💬</h1>
            <hr className='border rounded border-t-8 border-teal-400 w-56' />
            <p className='text-xl text-gray-600 tracking-[.1em] mt-6 leading-loose'>Se você me considera uma boa candidata, se gostaria de discutir um projeto freelancer , ou ainda, se quiser apenas dizer oi, entre em contato comigo nas redes sociais, ou envie-me uma mensagem!</p>
            <div className='flex justify-around mt-6'>
              <a href='https://www.linkedin.com/in/jéssica-florentino/' rel='noreferrer' target='_blank' aria="A link to Jessica's LinkedIn profile">
                <img className='w-10' src={linkedin} alt='LinkedIn Logo'></img>
              </a>

              <a href='https://github.com/jdgflorentino' rel='noreferrer' target='_blank'>
                <img className='w-10' src={github} alt='GitHub Logo'></img>
              </a>
            </div>
          </div>
        </div>
        <Form />
      </motion.div>
    );
  }
}

export default Contact;
