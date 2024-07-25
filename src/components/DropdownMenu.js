import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ title, poems, type }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-5 border border-gray-300 p-4 rounded-lg bg-orange-100">
      <h2
        className="text-2xl font-bold text-red-700 mb-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {title}
      </h2>
      {isOpen && (
        <div className="ml-4">
          {poems && poems.length > 0 ? (
            poems.map((poem, index) => (
              <div key={index} className="mb-3">
                <Link to={`/${type.toLowerCase()}/${index + 1}`} className="text-lg font-bold text-red-700">
                  {`${index + 1}. ${type}`}
                </Link>
              </div>
            ))
          ) : (
            <p>Veri bulunamadı</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;