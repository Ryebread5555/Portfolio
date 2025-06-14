import React, { useState } from 'react';

function NavBar(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    const [activeTab, setActiveTab] = useState('About');
  
    const handlePageChange = (tab) => {
      setActiveTab(tab);
      props.handlePageChange(tab);
    };
  
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <ul className="flex justify-center space-x-8 py-4">
          {tabs.map(tab => (
            <li key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => handlePageChange(tab)}
                className={`text-lg font-medium ${
                  activeTab === tab ? 'text-blue-600 underline' : 'text-gray-700'
                }`}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

export default NavBar;
