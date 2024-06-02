import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white h-20">
      <div className="flex items-center">
        <img src="../../assets/MovieHubOscar.png" alt="Oscar" className="h-8 w-8 mr-2" />
        <h1 className='text-xl text-center pl-4'>MovieHub</h1>
      </div>
      <div>
        <img src="../../assets/icons8-usuario-64.png" alt="User Logo" className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;