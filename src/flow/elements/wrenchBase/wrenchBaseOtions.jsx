import React from 'react';

const wrenchBaseOtions = () => {
  return (
    <menu className=' w-r21 bg-darkgrey rounded-l-xl flex flex-col gap-5'>
      <section className=' border-b-1 border-white text-white px-3 py-2 '>
        <h1 className=' text-white font-bold text-xl'>
          <span className=' text-blue font-black '>Settings </span> - Your API Name
        </h1>
      </section>

      <menusection className=' px-3'>
        <section className='text-white border-b-1 border-grey pb-2'>
          <h1 className=' font-bold '>
            Your API settings
          </h1>
          <p className='text-grey text-xs font-semibold pb-2'>
            Drag and drop <span className='text-blue'> Actions </span> and 
            <span className='text-purple'> Requirements </span> to add them to
            your API. Connect each nodes of corrosponding colors to create your API.
          </p>
          <div className=' flex flex-col gap-0 text-grey text-xs font-semibold'>
            <p> 
              <span className=' text-purple'> Requirements </span> are required to use the API.
            </p>
            <p> 
              <span className=' text-blue'> Actions </span> returns API responses.
            </p>
          </div>
        </section>
      </menusection>

    </menu>
  )
}

export default wrenchBaseOtions
