import React from 'react';

const ServiceCard  = ({ title, description, features }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg border border-purple-600 p-6 shadow-md">
      <h2 className="text-purple-400 text-xl font-bold mb-2 uppercase">{title}</h2>
      <p className="mb-4 text-sm text-gray-300">{description}</p>
      <ul className="mb-4 space-y-1 text-sm">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span className="text-purple-400 mr-2">✔️</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button className="text-purple-400 underline">Negotiate</button>
        <a href='#contac' className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded">Place Order</a>
      </div>
    </div>
  );
};

export default ServiceCard;
