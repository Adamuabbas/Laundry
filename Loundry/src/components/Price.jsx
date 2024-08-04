import React from 'react';

const price = [
    { 
        id: 1,
        plan: 'Basic Plan',
        price: 10.99,
        service: ["Dry Cleaning", "Laundry", "Leather Cleaning"]
    },
    { 
        id: 2,
        plan: 'Standard Plan', 
        price: 20.99,
        service: ["Dry Cleaning", "Laundry", "Leather Cleaning", "Carpet Cleaning"]
    },
    { 
        id: 3, 
        plan: 'Premium Plan', 
        price: 30.99,
        service: ["Dry Cleaning", "Laundry", "Leather Cleaning", "Carpet Cleaning","Iron & Folding", "Pickup & Delivery"]
    }
];

const Price = () => {
  return (
    <div id='price'>
      <h1 className='text-center text-2xl text-teal-700'>PRICING PLAN</h1>
       <div className="max-w-7xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      
      
      {price.map(plan => (
        <div key={plan.id} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-white bg-teal-800 p-5">{plan.plan}</h2>
        <div className='flex justify-center items-center'>
        <p className="text-2xl font-semibold bg-teal-500 w-20 h-20 text-white rounded-full flex items-center justify-center  mb-4">${plan.price.toFixed(2)}</p>
        </div>
          <ul className="mb-4 ">
            {plan.service.map((service, index) => (
              <li key={index} className="text-gray-700 flex justify-center items-center ">
                {service}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    </div>
   
  );
};

export default Price;
