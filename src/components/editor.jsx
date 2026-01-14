import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
const ScriptEditorEventLog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [darkmode, setDarkmode]=useState(false);
  const logData = [
    {
      id: 1,
      type: 'event',
    
      event: 'tell application "Finder"',
      level: 0,
      expandable: true,
      children: [
        {
          id: 2,
          type: 'event',
         
          event: 'get version',
          level: 1,
          result: '"10.8.2"'
        }
      ]
    },
    {
      id: 3,
      type: 'reply',
   
      event: 'tell application "System Events"',
      level: 0,
      expandable: true,
      children: [
        {
          id: 4,
          type: 'reply',
        
          event: 'get name of every process',
          level: 1,
          result: '{ "Finder", "Script Editor", "Safari", "Mail" }'
        }
      ]
    },
    {
      id: 5,
      type: 'result',
      
      event: 'Script result',
      level: 0,
      result: 'true'
    }
  ];

  const toggleExpand = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getFilteredData = () => {
    if (activeFilter === 'all') return logData;
    return logData.filter(item => item.type === activeFilter);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'event': return 'text-blue-600';
      case 'reply': return 'text-green-600';
      case 'result': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getTypeBg = (type) => {
    switch (type) {
      case 'event': return 'text-blue-50';
      case 'reply': return 'text-green-50';
      case 'result': return 'text-purple-50';
      default: return 'text-gray-50';
    }
  };
  const toggle=()=>
  {
  
    setDarkmode(!darkmode);
 
  }
  return (
    <div className="hidden md:block w-full max-w-4xl mx-auto absolute md:right-20 rounded shadow-lg">
      {/* Header/Toolbar */}
      <div className={` ${darkmode?'bg-black ':'bg-gray-50'} flex flex-col justify-start p-4  space-y-5`}>
        <div className="flex items-center space-x-4">
          <span className="w-3 h-3 bg-red-400 rounded-full" />
          <span className="w-3 h-3 bg-yellow-300 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          
        </div>
        <div className="flex space-x-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 text-sm rounded  ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button
              onClick={() => setActiveFilter('event')}
              className={`px-3 py-1 text-sm rounded ${activeFilter === 'event' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button
              onClick={() => setActiveFilter('reply')}
              className={`px-3 py-1 text-sm rounded ${activeFilter === 'reply' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            <button
              onClick={() => setActiveFilter('result')}
              className={`px-3 py-1 text-sm rounded  ${activeFilter === 'result' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  {/* Hammer head */}
  <rect x="2" y="8" width="8" height="4" rx="1" strokeWidth="2" />
  {/* Hammer handle */}
  <line x1="6" y1="12" x2="6" y2="20" strokeWidth="2" strokeLinecap="round" />
  {/* Optional: Add some detail lines */}
  <line x1="3" y1="10" x2="9" y2="10" strokeWidth="1" strokeLinecap="round" />
</svg>
            </button>
            <button
              onClick={() => toggle()}
              className={`px-3 py-1 text-sm rounded `}
            >
              {darkmode?<Sun className='text-gray-50'/>:<Moon/>}
            </button>
          </div>
          
      </div>

      {/* Log Content */}
      <div className={`${darkmode ? "bg-black" : "bg-white"} p-4 font-mono text-sm`}>
        <div className="space-y-1">
          {getFilteredData().map((item) => (
            <div key={item.id} className={`${getTypeBg(item.type)} ${darkmode ? "bg-gray-900" : "bg-white"} rounded p-2`}>
              <div className="flex items-start space-x-2">
                
                <div className="flex-shrink-0">
                  {item.expandable && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <svg
                        className={`w-3 h-3 transition-transform ${expandedItems.has(item.id) ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex-1">
                  <div className={`${getTypeColor(item.type)}`}>
                    
                  
                    <span className="ml-2">{item.event}</span>
                  </div>
                  {item.result && (
                    <div className="mt-1 text-gray-600 ml-4">
                      --&gt; {item.result}
                    </div>
                  )}
                  {item.children && expandedItems.has(item.id) && (
                    <div className="mt-2 ml-4 space-y-1">
                      {item.children.map((child) => (
                        <div key={child.id} className={`${getTypeBg(child.type)} rounded p-2`}>
                          <div className="flex items-start space-x-2">
                            
                            <div className="flex-1">
                              <div className={`${getTypeColor(child.type)}`}>
                                <span className="font-semibold">[{child.type.toUpperCase()}]</span>
                                {' '}
                                <span className="ml-2">{child.event}</span>
                              </div>
                              {child.result && (
                                <div className="mt-1 text-gray-600 ml-4">
                                  --&gt; {child.result}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className={`${darkmode?'bg-black':'bg-gray-50'} flex items-center justify-between p-2  text-xs text-gray-600 rounded`}>
        <div className="flex items-center space-x-4">
          <span>Ready</span>
          <span>•</span>
          <span>{getFilteredData().length} events</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Auto-scroll: On</span>
          <span>•</span>
          <span>Clear on run: Off</span>
        </div>
      </div>
    </div>
  );
};

export default ScriptEditorEventLog;