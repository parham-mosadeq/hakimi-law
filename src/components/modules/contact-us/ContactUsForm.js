function ContactUsForm() {
  return (
    <form
      className='my-40 overflow-x-hidden flex flex-col items-center justify-center mx-auto xl:w-1/2'
      action='https://getform.io/f/d272413d-22d8-47f8-bc50-62e5459a2fd7'
      method='POST'
    >
      <div className='my-3 w-full'>
        <label htmlFor='name'>
          <input
            className='w-full border-2 border-slate-200 rounded-md px-4 py-1 focus:outline-none focus:border-main_logo_color transform duration-200'
            type='text'
            name='name'
            placeholder='نام'
            required={true}
          />
        </label>
      </div>
      <div className='my-3 w-full'>
        <label htmlFor='email'>
          <input
            className='w-full border-2 border-slate-200 rounded-md px-4 py-1 focus:outline-none focus:border-main_logo_color transform duration-200'
            type='text'
            name='email'
            placeholder='ایمیل'
            required={true}
          />
        </label>
      </div>
      <div className='my-3 w-full'>
        <label htmlFor='message'>
          <input
            className='w-full border-2 border-slate-200 rounded-md px-4 py-1 focus:outline-none focus:border-main_logo_color transform duration-200'
            type='text'
            name='message'
            placeholder='پیام'
            required={true}
          />
        </label>
      </div>

      <button
        className='w-1/2 mx-auto my-12 text-xl bg-main_txt_color rounded-xl py-2 text-main_logo_color
      hover:bg-main_logo_color hover:text-main_txt_color transform duration-200
      '
      >
        ارسال
      </button>
    </form>
  );
}

export default ContactUsForm;
