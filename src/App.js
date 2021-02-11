import React from 'react';

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg
">
      <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-300 text-xl mb-2">
          Photo by John Smith
        </div>
        <ul>
          <li>
            <strong>View: </strong>
            5000
          </li>
          <li>
            <strong>Dowloads: </strong>
            3000
          </li>
          <li>
            <strong>Likes: </strong>
            58050
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-sans text-black-300 mr-2">#tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-sans text-black-300 mr-2">#tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-sans text-black-300 mr-2">#tag3</span>
      </div>
    </div>
  );
}

export default App;
