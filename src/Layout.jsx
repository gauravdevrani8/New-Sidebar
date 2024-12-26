// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar'; // Import Sidebar component
// import Header from './Header';

// const Layout = () => {
//   return (
//     <div className="layout">
//       <Header/>
//       <div className="main">
//         <nav className="sidebar">
//           <Sidebar /> {/* Sidebar component */}
//         </nav>
//         <div className="content">
//           <Outlet /> {/* The nested route content will be rendered here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './Header';

const Layout = () => {
  return (
    <div className="layout">
      <div className="main">
        <nav className="sidebar">
          <Sidebar /> {/* Sidebar component */}
        </nav>
        <div className=" content">
          <Header /> {/* Header component */}
          <Outlet /> {/* The nested route content will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
