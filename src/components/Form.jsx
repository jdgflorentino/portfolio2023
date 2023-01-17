import { useForm } from 'react-hook-form';
import { formResolver } from '../validations';
import emailjs from '@emailjs/browser';

export function Form() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({ resolver: formResolver });

  function sendEmail(values) {
    const templateParams = {
      from_name: values.name,
      email: values.email,
      message: values.message,
    };
    emailjs.send('service_23l09ft', 'template_a9wzdyo', templateParams, 'EpCbBOy09fprpRT_V').then(
      (response) => {
        if (response.status === 200) {
          reset();
        }
        console.log('Mensagem enviada', response.status, response.text);
      },
      (err) => {
        console.log('Erro', err);
      }
    );

    reset();
  }
  return (
    <div className='w-full lg:w-1/2'>
      <div className='leading-loose'>
        <form onSubmit={handleSubmit(sendEmail)} className='max-w-xl m-4 p-6 sm:p-10 rounded-xl shadow-xl text-left'>
          <div className='font-general-regular'>
            <input className='w-full px-5 py-2 border border-teal-600 border-opacity-50 rounded-md shadow-sm text-md' id='name' name='name' type='text' required placeholder='Nome' aria-label='Name' {...register('name')} />
            {errors?.name?.message && (
              <div className='bg-red-100 border-l-4 border-red-600 text-red-600 p-4 mt-4'>
                <p className=''>{errors?.name?.message}</p>
              </div>
            )}
          </div>
          <div className='mt-6'>
            <input className='w-full px-5 py-2 border border-teal-600 border-opacity-50 rounded-md shadow-sm text-md' id='email' name='email' type='text' required placeholder='Email' aria-label='Email' {...register('email')} />
            {errors?.email?.message && (
              <div className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-4'>
                <p className=''>{errors?.email?.message}</p>
              </div>
            )}
          </div>
          <div className='mt-6'>
            <textarea className='w-full px-5 py-2 border border-teal-600 border-opacity-50 rounded-md shadow-sm text-md' id='message' name='message' cols='14' rows='6' placeholder='Mensagem' aria-label='Message' {...register('message')}></textarea>
            {errors?.message?.message && (
              <div className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-4'>
                <p>{errors?.message?.message}</p>
              </div>
            )}
          </div>
          <div className='font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-teal-500 hover:bg-teal-600 focus:ring-1 focus:ring-teal-900 rounded-lg mt-6 duration-500'>
            <button type='submit'> Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
