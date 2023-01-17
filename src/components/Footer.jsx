function Footer() {
  return (
    <div className='font-base flex justify-center'>
      <div className='text-xs text-center text-gray-700 sm:flex sm:text-lg'>
        &copy; {new Date().getFullYear()}
        <p className='hover:underline hover:text-teal-600 ml-1 duration-500'>React & Tailwind CSS Portfolio</p><p className='font-medium uppercase hover:underline hover:text-teal-600 ml-1 duration-500'>Jéssica Florentino</p>
      </div>
    </div>
  );
}

export default Footer;
