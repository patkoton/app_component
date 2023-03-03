import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const AddCustomer = (props) => {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');

  // Reading from the parent(Customers)
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={props.toggleShow} className="block m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"> + Add Customer </button>

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form onSubmit={(e) => {
        // To prevent it from reloading
        e.preventDefault();
        // To refresh values everytime we add
        setName('')
        setIndustry('')
        // console.log('Hello from edit employee')
        // console.log(props.id , name, role)
        props.newCustomer( name, industry );
      }} 
      id='editmodal' class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div className='md:w-1/3'>
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
              Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"   
                    id="name" 
                    type="text" 
                    placeholder="Google" 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div className='md:w-1/3'>
            <label class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="industry">
              Industry
            </label>
          </div>
          <div className='md:w-2/3'>
            <input  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="industry" 
                    type="text" 
                    placeholder="Computing" 
                    value={industry}
                    onChange={(e) => {setIndustry(e.target.value)}}
            />
          </div>
        </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded' onClick={props.toggleShow}>Close</button>
        <button form='editmodal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Add</button>
      </Modal.Footer>
      </Modal>
  </>
  )
}

export default AddCustomer
