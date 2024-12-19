// // // // // // // // // // // // // // correct

// // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // import './StockPrediction.css';

// // // // // // // // // // // // const StockPrediction = () => {
// // // // // // // // // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // // // // // // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL'); // Store stock for value
// // // // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // // // //   const [stockValue, setStockValue] = useState(null);
// // // // // // // // // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false); // Track button click

// // // // // // // // // // // //   const handlePredictionSubmit = async () => {
// // // // // // // // // // // //     const apiUrl = `https://rrnmpvu2l6.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;
    
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // // // //       const data = await response.json(); // Parse the response as JSON
// // // // // // // // // // // //       console.log("Response from API:", data); // Log the response for debugging
  
// // // // // // // // // // // //       // Extract the base64 image string
// // // // // // // // // // // //       setImage(`data:image/png;base64,${data.image}`);
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Error fetching prediction:", error);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleStockValueSubmit = async () => {
// // // // // // // // // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // // // //       const data = await response.json(); // Parse the response as JSON
// // // // // // // // // // // //       console.log("Response from API:", data); // Log the response for debugging
  
// // // // // // // // // // // //       // Set the stock value data
// // // // // // // // // // // //       setStockValue(data);  // Assuming `data` contains the stock information you provided
// // // // // // // // // // // //       setSelectedStockSymbol(stockSymbol); // Update title only when button is clicked
// // // // // // // // // // // //       setIsStockValueClicked(true); // Set to true when the button is clicked
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Error fetching stock value:", error);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };
  

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="stock-prediction-container">
// // // // // // // // // // // //       <select 
// // // // // // // // // // // //         value={stockSymbol} 
// // // // // // // // // // // //         onChange={(e) => setStockSymbol(e.target.value)}
// // // // // // // // // // // //         id="stockSelect"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <option value="AAPL">Apple</option>
// // // // // // // // // // // //         <option value="GOOGL">Google</option>
// // // // // // // // // // // //         <option value="MSFT">Microsoft</option>
// // // // // // // // // // // //         <option value="META">Meta</option>
// // // // // // // // // // // //         <option value="JNJ">Johnson & Johnson</option>
// // // // // // // // // // // //         <option value="TSLA">Tesla</option>
// // // // // // // // // // // //         <option value="NVDA">NVIDIA</option>
// // // // // // // // // // // //         <option value="NFLX">Netflix</option>
// // // // // // // // // // // //         {/* Add more options as needed */}
// // // // // // // // // // // //       </select>

// // // // // // // // // // // //       <button onClick={handlePredictionSubmit} id="predictBtn">Generate Prediction</button>
// // // // // // // // // // // //       <button onClick={handleStockValueSubmit} id="stockValueBtn">Stock Value</button>

// // // // // // // // // // // //       <div id="resultContainer">
// // // // // // // // // // // //         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// // // // // // // // // // // //           {image && (
// // // // // // // // // // // //             <div style={{ maxWidth: '1100px', marginBottom: '00px' }}>
// // // // // // // // // // // //               <img src={image} alt={`Prediction for ${stockSymbol}`} style={{ width: '200%' }} />
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
          
// // // // // // // // // // // //           {isStockValueClicked && stockValue && (
// // // // // // // // // // // //             <div style={{ marginLeft: '00px', marginTop: '0px' }}>
// // // // // // // // // // // //               <h2>Stock Value for {selectedStockSymbol}</h2> {/* Use selectedStockSymbol for the title */}
// // // // // // // // // // // //               <table style={{ borderCollapse: 'collapse', width: '90%' }}>
// // // // // // // // // // // //                 <thead>
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <th>Attribute</th>
// // // // // // // // // // // //                     <th>Value</th>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                 </thead>
// // // // // // // // // // // //                 <tbody>
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <td>Date</td>
// // // // // // // // // // // //                     <td>{stockValue.date}</td>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <td>Open</td>
// // // // // // // // // // // //                     <td>{stockValue.open}</td>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <td>High</td>
// // // // // // // // // // // //                     <td>{stockValue.high}</td>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <td>Low</td>
// // // // // // // // // // // //                     <td>{stockValue.low}</td>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <td>Close</td>
// // // // // // // // // // // //                     <td>{stockValue.close}</td>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                   <tr>
// // // // // // // // // // // //                     <td>Volume</td>
// // // // // // // // // // // //                     <td>{stockValue.volume}</td>
// // // // // // // // // // // //                   </tr>
// // // // // // // // // // // //                 </tbody>
// // // // // // // // // // // //               </table>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default StockPrediction;




// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import './StockPrediction.css';

// // // // // // // // // // // const StockPrediction = () => {
// // // // // // // // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // // // // // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // // //   const [stockValue, setStockValue] = useState(null);
// // // // // // // // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
// // // // // // // // // // //   const [news, setNews] = useState([]);
  
// // // // // // // // // // //   const API_KEY_NEWSAPI = 'af637e957cb249c794a21a72ac7b1276'; // Replace with your NewsAPI key
// // // // // // // // // // //   const NEWS_API_URL = 'https://newsapi.org/v2/everything'; // News API endpoint

// // // // // // // // // // //   // Fetch stock prediction image
// // // // // // // // // // //   const handlePredictionSubmit = async () => {
// // // // // // // // // // //     const apiUrl = `https://rrnmpvu2l6.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;
    
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // // // // //       setImage(`data:image/png;base64,${data.image}`);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error fetching prediction:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Fetch stock value data
// // // // // // // // // // //   const handleStockValueSubmit = async () => {
// // // // // // // // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // // // // //       setStockValue(data);  
// // // // // // // // // // //       setSelectedStockSymbol(stockSymbol);
// // // // // // // // // // //       setIsStockValueClicked(true);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error fetching stock value:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Fetch stock news based on selected ticker
// // // // // // // // // // //   const fetchStockNews = async () => {
// // // // // // // // // // //     const params = {
// // // // // // // // // // //       q: stockSymbol, // Query by stock symbol
// // // // // // // // // // //       apiKey: API_KEY_NEWSAPI, // NewsAPI key
// // // // // // // // // // //       pageSize: 2, // Limit to 2 news articles
// // // // // // // // // // //     };

// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch(`${NEWS_API_URL}?${new URLSearchParams(params)}`);
// // // // // // // // // // //       const data = await response.json();
      
// // // // // // // // // // //       if (data.status === 'ok' && data.articles) {
// // // // // // // // // // //         setNews(data.articles); // Set the news articles in the state
// // // // // // // // // // //       } else {
// // // // // // // // // // //         console.error('Error fetching news:', data);
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error('Error fetching news:', error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Trigger news fetch whenever the stockSymbol changes
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchStockNews();
// // // // // // // // // // //   }, [stockSymbol]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="stock-prediction-container">
// // // // // // // // // // //       <select 
// // // // // // // // // // //         value={stockSymbol} 
// // // // // // // // // // //         onChange={(e) => setStockSymbol(e.target.value)}
// // // // // // // // // // //         id="stockSelect"
// // // // // // // // // // //       >
// // // // // // // // // // //         <option value="AAPL">Apple</option>
// // // // // // // // // // //         <option value="GOOGL">Google</option>
// // // // // // // // // // //         <option value="MSFT">Microsoft</option>
// // // // // // // // // // //         <option value="META">Meta</option>
// // // // // // // // // // //         <option value="JNJ">Johnson & Johnson</option>
// // // // // // // // // // //         <option value="TSLA">Tesla</option>
// // // // // // // // // // //         <option value="NVDA">NVIDIA</option>
// // // // // // // // // // //         <option value="NFLX">Netflix</option>
// // // // // // // // // // //         {/* Add more options as needed */}
// // // // // // // // // // //       </select>

// // // // // // // // // // //       <button onClick={handlePredictionSubmit} id="predictBtn">Generate Prediction</button>
// // // // // // // // // // //       <button onClick={handleStockValueSubmit} id="stockValueBtn">Stock Value</button>
// // // // // // // // // // //       {/* No need for a news button now, as it triggers automatically based on dropdown change */}
      
// // // // // // // // // // //       <div id="resultContainer">
// // // // // // // // // // //         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// // // // // // // // // // //           {image && (
// // // // // // // // // // //             <div style={{ maxWidth: '1100px', marginBottom: '00px' }}>
// // // // // // // // // // //               <img src={image} alt={`Prediction for ${stockSymbol}`} style={{ width: '200%' }} />
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
          
// // // // // // // // // // //           {isStockValueClicked && stockValue && (
// // // // // // // // // // //             <div style={{ marginLeft: '00px', marginTop: '0px' }}>
// // // // // // // // // // //               <h2>Stock Value for {selectedStockSymbol}</h2>
// // // // // // // // // // //               <table style={{ borderCollapse: 'collapse', width: '90%' }}>
// // // // // // // // // // //                 <thead>
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <th>Attribute</th>
// // // // // // // // // // //                     <th>Value</th>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 </thead>
// // // // // // // // // // //                 <tbody>
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <td>Date</td>
// // // // // // // // // // //                     <td>{stockValue.date}</td>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <td>Open</td>
// // // // // // // // // // //                     <td>{stockValue.open}</td>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <td>High</td>
// // // // // // // // // // //                     <td>{stockValue.high}</td>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <td>Low</td>
// // // // // // // // // // //                     <td>{stockValue.low}</td>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <td>Close</td>
// // // // // // // // // // //                     <td>{stockValue.close}</td>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                   <tr>
// // // // // // // // // // //                     <td>Volume</td>
// // // // // // // // // // //                     <td>{stockValue.volume}</td>
// // // // // // // // // // //                   </tr>
// // // // // // // // // // //                 </tbody>
// // // // // // // // // // //               </table>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}

// // // // // // // // // // //           {/* Display News Articles */}
// // // // // // // // // // //           {news.length > 0 && (
// // // // // // // // // // //             <div style={{ marginTop: '20px' }}>
// // // // // // // // // // //               <h2>Top News for {selectedStockSymbol}</h2>
// // // // // // // // // // //               <div>
// // // // // // // // // // //                 {news.map((article, index) => (
// // // // // // // // // // //                   <div key={index} style={{ marginBottom: '15px' }}>
// // // // // // // // // // //                     <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
// // // // // // // // // // //                     <p>{article.description}</p>
// // // // // // // // // // //                     <p><strong>Source:</strong> {article.source.name}</p>
// // // // // // // // // // //                     <p><strong>Published at:</strong> {article.publishedAt}</p>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 ))}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default StockPrediction;


// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import './StockPrediction.css';

// // // // // // // // // // // const StockPrediction = () => {
// // // // // // // // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // // // // // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // // //   const [stockValue, setStockValue] = useState(null);
// // // // // // // // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
// // // // // // // // // // //   const [news, setNews] = useState([]);
// // // // // // // // // // //   const [isNewsFetched, setIsNewsFetched] = useState(false); // Track if news is fetched
  
// // // // // // // // // // //   const API_KEY_NEWSAPI = 'af637e957cb249c794a21a72ac7b1276'; // Replace with your NewsAPI key
// // // // // // // // // // //   const NEWS_API_URL = 'https://newsapi.org/v2/everything'; // News API endpoint

// // // // // // // // // // //   // Fetch stock prediction image
// // // // // // // // // // //   const handlePredictionSubmit = async () => {
// // // // // // // // // // //     const apiUrl = `https://rrnmpvu2l6.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;
    
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // // // // //       setImage(`data:image/png;base64,${data.image}`);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error fetching prediction:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Fetch stock value data
// // // // // // // // // // //   const handleStockValueSubmit = async () => {
// // // // // // // // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // // //       const data = await response.json();
// // // // // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // // // // //       setStockValue(data);  
// // // // // // // // // // //       setSelectedStockSymbol(stockSymbol);
// // // // // // // // // // //       setIsStockValueClicked(true);
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Error fetching stock value:", error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Fetch stock news based on selected ticker
// // // // // // // // // // //   const fetchStockNews = async () => {
// // // // // // // // // // //     const params = {
// // // // // // // // // // //       q: stockSymbol, // Query by stock symbol
// // // // // // // // // // //       apiKey: API_KEY_NEWSAPI, // NewsAPI key
// // // // // // // // // // //       pageSize: 2, // Limit to 2 news articles
// // // // // // // // // // //     };

// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch(`${NEWS_API_URL}?${new URLSearchParams(params)}`);
// // // // // // // // // // //       const data = await response.json();
      
// // // // // // // // // // //       if (data.status === 'ok' && data.articles) {
// // // // // // // // // // //         setNews(data.articles); // Set the news articles in the state
// // // // // // // // // // //         setIsNewsFetched(true);  // Set news as fetched
// // // // // // // // // // //       } else {
// // // // // // // // // // //         console.error('Error fetching news:', data);
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error('Error fetching news:', error);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="stock-prediction-container">
// // // // // // // // // // //       <select 
// // // // // // // // // // //         value={stockSymbol} 
// // // // // // // // // // //         onChange={(e) => setStockSymbol(e.target.value)}
// // // // // // // // // // //         id="stockSelect"
// // // // // // // // // // //       >
// // // // // // // // // // //         <option value="AAPL">Apple</option>
// // // // // // // // // // //         <option value="GOOGL">Google</option>
// // // // // // // // // // //         <option value="MSFT">Microsoft</option>
// // // // // // // // // // //         <option value="META">Meta</option>
// // // // // // // // // // //         <option value="JNJ">Johnson & Johnson</option>
// // // // // // // // // // //         <option value="TSLA">Tesla</option>
// // // // // // // // // // //         <option value="NVDA">NVIDIA</option>
// // // // // // // // // // //         <option value="NFLX">Netflix</option>
// // // // // // // // // // //         {/* Add more options as needed */}
// // // // // // // // // // //       </select>

// // // // // // // // // // //       <button onClick={handlePredictionSubmit} id="predictBtn">Generate Prediction</button>
// // // // // // // // // // //       <button onClick={handleStockValueSubmit} id="stockValueBtn">Stock Value</button>
// // // // // // // // // // //       <button onClick={fetchStockNews} id="fetchNewsBtn">Fetch News</button>

// // // // // // // // // // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // // // // // // // // // //         {/* Image Section */}
// // // // // // // // // // //         {image && (
// // // // // // // // // // //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// // // // // // // // // // //             <img src={image} alt={`Prediction for ${stockSymbol}`} style={{ width: '100%', maxWidth: '100px' }} />
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}

// // // // // // // // // // //         {/* Stock Value Table */}
// // // // // // // // // // //         {isStockValueClicked && stockValue && (
// // // // // // // // // // //           <div style={{ flex: 2 }}>
// // // // // // // // // // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // // // // // // // // // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // // // // // // // // // //               <thead>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <th>Attribute</th>
// // // // // // // // // // //                   <th>Value</th>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //               </thead>
// // // // // // // // // // //               <tbody>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <td>Date</td>
// // // // // // // // // // //                   <td>{stockValue.date}</td>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <td>Open</td>
// // // // // // // // // // //                   <td>{stockValue.open}</td>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <td>High</td>
// // // // // // // // // // //                   <td>{stockValue.high}</td>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <td>Low</td>
// // // // // // // // // // //                   <td>{stockValue.low}</td>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <td>Close</td>
// // // // // // // // // // //                   <td>{stockValue.close}</td>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //                 <tr>
// // // // // // // // // // //                   <td>Volume</td>
// // // // // // // // // // //                   <td>{stockValue.volume}</td>
// // // // // // // // // // //                 </tr>
// // // // // // // // // // //               </tbody>
// // // // // // // // // // //             </table>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Display News Articles in a Small Rectangular Box */}
// // // // // // // // // // //       {isNewsFetched && news.length > 0 && (
// // // // // // // // // // //         <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px', width: '100%', maxWidth: '1100px', backgroundColor: '#f9f9f9', margin: 'auto' }}>
// // // // // // // // // // //           <h3>Top News for {selectedStockSymbol}</h3>
// // // // // // // // // // //           <div>
// // // // // // // // // // //             {news.map((article, index) => (
// // // // // // // // // // //               <div key={index} style={{ marginBottom: '10px' }}>
// // // // // // // // // // //                 <h4><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h4>
// // // // // // // // // // //                 <p>{article.description}</p>
// // // // // // // // // // //                 <p><strong>Source:</strong> {article.source.name}</p>
// // // // // // // // // // //                 <p><strong>Published at:</strong> {article.publishedAt}</p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default StockPrediction;
// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import './StockPrediction.css';

// // // // // // // // // // const StockPrediction = () => {
// // // // // // // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // // // // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // //   const [stockValue, setStockValue] = useState(null);
// // // // // // // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
// // // // // // // // // //   const [news, setNews] = useState([]);
// // // // // // // // // //   const [isNewsFetched, setIsNewsFetched] = useState(false); // Track if news is fetched
  
// // // // // // // // // //   const API_KEY_NEWSAPI = 'af637e957cb249c794a21a72ac7b1276'; // Replace with your NewsAPI key
// // // // // // // // // //   const NEWS_API_URL = 'https://newsapi.org/v2/everything'; // News API endpoint

// // // // // // // // // //   // Fetch stock prediction image
// // // // // // // // // //   const handlePredictionSubmit = async () => {
// // // // // // // // // //     const apiUrl = `https://rrnmpvu2l6.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;
    
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // // // //       setImage(`data:image/png;base64,${data.image}`);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error fetching prediction:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // Fetch stock value data
// // // // // // // // // //   const handleStockValueSubmit = async () => {
// // // // // // // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // // // //       const data = await response.json();
// // // // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // // // //       setStockValue(data);  
// // // // // // // // // //       setSelectedStockSymbol(stockSymbol);
// // // // // // // // // //       setIsStockValueClicked(true);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error fetching stock value:", error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // Fetch stock news based on selected ticker
// // // // // // // // // //   const fetchStockNews = async () => {
// // // // // // // // // //     const params = {
// // // // // // // // // //       q: stockSymbol, // Query by stock symbol
// // // // // // // // // //       apiKey: API_KEY_NEWSAPI, // NewsAPI key
// // // // // // // // // //       pageSize: 2, // Limit to 2 news articles
// // // // // // // // // //     };

// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch(`${NEWS_API_URL}?${new URLSearchParams(params)}`);
// // // // // // // // // //       const data = await response.json();
      
// // // // // // // // // //       if (data.status === 'ok' && data.articles) {
// // // // // // // // // //         setNews(data.articles); // Set the news articles in the state
// // // // // // // // // //         setIsNewsFetched(true);  // Set news as fetched
// // // // // // // // // //       } else {
// // // // // // // // // //         console.error('Error fetching news:', data);
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Error fetching news:', error);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="stock-prediction-container">
// // // // // // // // // //       <select 
// // // // // // // // // //         value={stockSymbol} 
// // // // // // // // // //         onChange={(e) => setStockSymbol(e.target.value)}
// // // // // // // // // //         id="stockSelect"
// // // // // // // // // //       >
// // // // // // // // // //         <option value="AAPL">Apple</option>
// // // // // // // // // //         <option value="GOOGL">Google</option>
// // // // // // // // // //         <option value="MSFT">Microsoft</option>
// // // // // // // // // //         <option value="META">Meta</option>
// // // // // // // // // //         <option value="JNJ">Johnson & Johnson</option>
// // // // // // // // // //         <option value="TSLA">Tesla</option>
// // // // // // // // // //         <option value="NVDA">NVIDIA</option>
// // // // // // // // // //         <option value="NFLX">Netflix</option>
// // // // // // // // // //         {/* Add more options as needed */}
// // // // // // // // // //       </select>

// // // // // // // // // //       <div className="button-container">
// // // // // // // // // //         <button onClick={handlePredictionSubmit} id="predictBtn">Generate Prediction</button>
// // // // // // // // // //         <button onClick={handleStockValueSubmit} id="stockValueBtn">Stock Value</button>
// // // // // // // // // //         <button onClick={fetchStockNews} id="fetchNewsBtn">Fetch News</button>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // // // // // // // // //         {/* Image Section */}
// // // // // // // // // //         {image && (
// // // // // // // // // //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// // // // // // // // // //             <img src={image} alt={`Prediction for ${stockSymbol}`} style={{ width: '100%', maxWidth: '1000px' }} />
// // // // // // // // // //           </div>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* Stock Value Table */}
// // // // // // // // // //         {isStockValueClicked && stockValue && (
// // // // // // // // // //           <div style={{ flex: 1, maxWidth: '400px' }}>
// // // // // // // // // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // // // // // // // // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // // // // // // // // //               <thead>
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <th>Attribute</th>
// // // // // // // // // //                   <th>Value</th>
// // // // // // // // // //                 </tr>
// // // // // // // // // //               </thead>
// // // // // // // // // //               <tbody>
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <td>Date</td>
// // // // // // // // // //                   <td>{stockValue.date}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <td>Open</td>
// // // // // // // // // //                   <td>{stockValue.open}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <td>High</td>
// // // // // // // // // //                   <td>{stockValue.high}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <td>Low</td>
// // // // // // // // // //                   <td>{stockValue.low}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <td>Close</td>
// // // // // // // // // //                   <td>{stockValue.close}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //                 <tr>
// // // // // // // // // //                   <td>Volume</td>
// // // // // // // // // //                   <td>{stockValue.volume}</td>
// // // // // // // // // //                 </tr>
// // // // // // // // // //               </tbody>
// // // // // // // // // //             </table>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Display News Articles in a Small Rectangular Box */}
// // // // // // // // // //       {isNewsFetched && news.length > 0 && (
// // // // // // // // // //         <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px', width: '100%', maxWidth: '1100px', backgroundColor: '#f9f9f9', margin: 'auto' }}>
// // // // // // // // // //           <h3>Top News for {selectedStockSymbol}</h3>
// // // // // // // // // //           <div>
// // // // // // // // // //             {news.map((article, index) => (
// // // // // // // // // //               <div key={index} style={{ marginBottom: '10px' }}>
// // // // // // // // // //                 <h4><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h4>
// // // // // // // // // //                 <p>{article.description}</p>
// // // // // // // // // //                 <p><strong>Source:</strong> {article.source.name}</p>
// // // // // // // // // //                 <p><strong>Published at:</strong> {article.publishedAt}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default StockPrediction;
// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import './StockPrediction.css';

// // // // // // // // const StockPrediction = () => {
// // // // // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // //   const [stockValue, setStockValue] = useState(null);
// // // // // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
// // // // // // // //   const [news, setNews] = useState([]);
// // // // // // // //   const [isNewsFetched, setIsNewsFetched] = useState(false);
  
// // // // // // // //   const API_KEY_NEWSAPI = 'af637e957cb249c794a21a72ac7b1276'; // Replace with your NewsAPI key
// // // // // // // //   const NEWS_API_URL = 'https://newsapi.org/v2/everything'; // News API endpoint

// // // // // // // //   // Fetch stock prediction image
// // // // // // // //   const handlePredictionSubmit = async () => {
// // // // // // // //     const apiUrl = `https://rrnmpvu2l6.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;
    
// // // // // // // //     try {
// // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // //       const data = await response.json();
// // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // //       setImage(`data:image/png;base64,${data.image}`);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error fetching prediction:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Fetch stock value data
// // // // // // // //   const handleStockValueSubmit = async () => {
// // // // // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // // // //     try {
// // // // // // // //       const response = await fetch(apiUrl);
// // // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // // //       const data = await response.json();
// // // // // // // //       console.log("Response from API:", data);
  
// // // // // // // //       setStockValue(data);  
// // // // // // // //       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
// // // // // // // //       setIsStockValueClicked(true);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error fetching stock value:", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Fetch stock news based on selected ticker
// // // // // // // //   const fetchStockNews = async () => {
// // // // // // // //     const params = {
// // // // // // // //       q: stockSymbol, // Query by stock symbol
// // // // // // // //       apiKey: API_KEY_NEWSAPI, // NewsAPI key
// // // // // // // //       pageSize: 2, // Limit to 2 news articles
// // // // // // // //     };

// // // // // // // //     try {
// // // // // // // //       const response = await fetch(`${NEWS_API_URL}?${new URLSearchParams(params)}`);
// // // // // // // //       const data = await response.json();
      
// // // // // // // //       if (data.status === 'ok' && data.articles) {
// // // // // // // //         setNews(data.articles); // Set the news articles in the state
// // // // // // // //         setIsNewsFetched(true);  // Set news as fetched
// // // // // // // //         setSelectedStockSymbol(stockSymbol); // Update the selected stock symbol when news is fetched
// // // // // // // //       } else {
// // // // // // // //         console.error('Error fetching news:', data);
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error fetching news:', error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="stock-prediction-container">
// // // // // // // //       <select 
// // // // // // // //         value={stockSymbol} 
// // // // // // // //         onChange={(e) => {
// // // // // // // //           setStockSymbol(e.target.value); // Update stock symbol
// // // // // // // //           setIsNewsFetched(false); // Reset news fetched when changing the stock
// // // // // // // //         }}
// // // // // // // //         id="stockSelect"
// // // // // // // //       >
// // // // // // // //         <option value="AAPL">Apple</option>
// // // // // // // //         <option value="GOOGL">Google</option>
// // // // // // // //         <option value="MSFT">Microsoft</option>
// // // // // // // //         <option value="META">Meta</option>
// // // // // // // //         <option value="JNJ">Johnson & Johnson</option>
// // // // // // // //         <option value="TSLA">Tesla</option>
// // // // // // // //         <option value="NVDA">NVIDIA</option>
// // // // // // // //         <option value="NFLX">Netflix</option>
// // // // // // // //         {/* Add more options as needed */}
// // // // // // // //       </select>

// // // // // // // //       <div className="button-container">
// // // // // // // //         <button onClick={handlePredictionSubmit} id="predictBtn">Generate Prediction</button>
// // // // // // // //         <button onClick={handleStockValueSubmit} id="stockValueBtn">Stock Value</button>
// // // // // // // //         <button onClick={fetchStockNews} id="fetchNewsBtn">Fetch News</button>
// // // // // // // //       </div>

// // // // // // // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // // // // // // //         {/* Image Section */}
// // // // // // // //         {image && (
// // // // // // // //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// // // // // // // //             <img src={image} alt={`Prediction for ${stockSymbol}`} style={{ width: '100%', maxWidth: '1000px' }} />
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {/* Stock Value Table */}
// // // // // // // //         {isStockValueClicked && stockValue && (
// // // // // // // //           <div style={{ flex: 1, maxWidth: '400px' }}>
// // // // // // // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // // // // // // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // // // // // // //               <thead>
// // // // // // // //                 <tr>
// // // // // // // //                   <th>Attribute</th>
// // // // // // // //                   <th>Value</th>
// // // // // // // //                 </tr>
// // // // // // // //               </thead>
// // // // // // // //               <tbody>
// // // // // // // //                 <tr>
// // // // // // // //                   <td>Date</td>
// // // // // // // //                   <td>{stockValue.date}</td>
// // // // // // // //                 </tr>
// // // // // // // //                 <tr>
// // // // // // // //                   <td>Open</td>
// // // // // // // //                   <td>{stockValue.open}</td>
// // // // // // // //                 </tr>
// // // // // // // //                 <tr>
// // // // // // // //                   <td>High</td>
// // // // // // // //                   <td>{stockValue.high}</td>
// // // // // // // //                 </tr>
// // // // // // // //                 <tr>
// // // // // // // //                   <td>Low</td>
// // // // // // // //                   <td>{stockValue.low}</td>
// // // // // // // //                 </tr>
// // // // // // // //                 <tr>
// // // // // // // //                   <td>Close</td>
// // // // // // // //                   <td>{stockValue.close}</td>
// // // // // // // //                 </tr>
// // // // // // // //                 <tr>
// // // // // // // //                   <td>Volume</td>
// // // // // // // //                   <td>{stockValue.volume}</td>
// // // // // // // //                 </tr>
// // // // // // // //               </tbody>
// // // // // // // //             </table>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       {/* Display News Articles in a Small Rectangular Box */}
// // // // // // // //       {isNewsFetched && news.length > 0 && (
// // // // // // // //         <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px', width: '100%', maxWidth: '1100px', backgroundColor: '#f9f9f9', margin: 'auto' }}>
// // // // // // // //           <h3>Top News for {selectedStockSymbol}</h3>
// // // // // // // //           <div>
// // // // // // // //             {news.map((article, index) => (
// // // // // // // //               <div key={index} style={{ marginBottom: '10px' }}>
// // // // // // // //                 <h4><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h4>
// // // // // // // //                 <p>{article.description}</p>
// // // // // // // //                 <p><strong>Source:</strong> {article.source.name}</p>
// // // // // // // //                 <p><strong>Published at:</strong> {article.publishedAt}</p>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default StockPrediction;


// // // // // // // import React, { useState } from 'react';
// // // // // // // import './StockPrediction.css';

// // // // // // // const StockPrediction = () => {
// // // // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // // // // //   const [image, setImage] = useState(null);
// // // // // // //   const [stockValue, setStockValue] = useState(null);
// // // // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
// // // // // // //   const [news, setNews] = useState([]);
// // // // // // //   const [isNewsFetched, setIsNewsFetched] = useState(false);
  
// // // // // // //   // const API_KEY_NEWSAPI = 'af637e957cb249c794a21a72ac7b1276'; // Replace with your NewsAPI key
// // // // // // //   // const NEWS_API_URL = 'https://newsapi.org/v2/everything'; // News API endpoint

// // // // // // //   // Fetch stock prediction image
// // // // // // //   const handlePredictionSubmit = async () => {
// // // // // // //     const apiUrl = `https://rrnmpvu2l6.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;
// // // // // // //     // const apiUrl = ` https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

// // // // // // //     try {
// // // // // // //       const response = await fetch(apiUrl);
// // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // //       const data = await response.json();
// // // // // // //       console.log("Response from API:", data);
  
// // // // // // //       setImage(`data:image/png;base64,${data.image}`);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error fetching prediction:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Fetch stock value data
// // // // // // //   const handleStockValueSubmit = async () => {
// // // // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // // //     try {
// // // // // // //       const response = await fetch(apiUrl);
// // // // // // //       if (!response.ok) throw new Error('Network response was not ok');
      
// // // // // // //       const data = await response.json();
// // // // // // //       console.log("Response from API:", data);
  
// // // // // // //       setStockValue(data);  
// // // // // // //       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
// // // // // // //       setIsStockValueClicked(true);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error fetching stock value:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Fetch stock news based on selected ticker
// // // // // // //   // const fetchStockNews = async () => {
// // // // // // //   //   const params = {
// // // // // // //   //     q: stockSymbol, // Query by stock symbol
// // // // // // //   //     apiKey: API_KEY_NEWSAPI, // NewsAPI key
// // // // // // //   //     pageSize: 2, // Limit to 2 news articles
// // // // // // //   //   };

// // // // // // //   //   try {
// // // // // // //   //     const response = await fetch(`${NEWS_API_URL}?${new URLSearchParams(params)}`);
// // // // // // //   //     const data = await response.json();
      
// // // // // // //   //     if (data.status === 'ok' && data.articles) {
// // // // // // //   //       setNews(data.articles); // Set the news articles in the state
// // // // // // //   //       setIsNewsFetched(true);  // Set news as fetched
// // // // // // //   //       setSelectedStockSymbol(stockSymbol); // Update the selected stock symbol when news is fetched
// // // // // // //   //     } else {
// // // // // // //   //       console.error('Error fetching news:', data);
// // // // // // //   //     }
// // // // // // //   //   } catch (error) {
// // // // // // //   //     console.error('Error fetching news:', error);
// // // // // // //   //   }
// // // // // // //   // };

// // // // // // //   // Fetch stock news based on selected ticker (via API Gateway and Lambda)
// // // // // // // const fetchStockNews = async () => {
// // // // // // //   const apiUrl = `https://h1wusbnqv2.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // // //   try {
// // // // // // //     const response = await fetch(apiUrl);
// // // // // // //     if (!response.ok) throw new Error('Network response was not ok');
    
// // // // // // //     const data = await response.json();
// // // // // // //     setNews(data); // Set the news articles in the state
// // // // // // //     setIsNewsFetched(true);  // Set news as fetched
// // // // // // //     setSelectedStockSymbol(stockSymbol); // Update the selected stock symbol when news is fetched
// // // // // // //   } catch (error) {
// // // // // // //     console.error('Error fetching news:', error);
// // // // // // //   }
// // // // // // // };


// // // // // // //   return (
// // // // // // //     <div className="stock-prediction-container">
// // // // // // //       <div className="controls-container">
// // // // // // //         <select 
// // // // // // //           value={stockSymbol} 
// // // // // // //           onChange={(e) => {
// // // // // // //             setStockSymbol(e.target.value); // Update stock symbol
// // // // // // //             setIsNewsFetched(false); // Reset news fetched when changing the stock
// // // // // // //           }}
// // // // // // //           id="stockSelect"
// // // // // // //         >
// // // // // // //           <option value="AAPL">Apple</option>
// // // // // // //           <option value="GOOGL">Google</option>
// // // // // // //           <option value="MSFT">Microsoft</option>
// // // // // // //           <option value="AMZN">Amazon</option>
// // // // // // //           <option value="META">Meta</option>
// // // // // // //           <option value="JNJ">Johnson & Johnson</option>
// // // // // // //           <option value="TSLA">Tesla</option>
// // // // // // //           <option value="NVDA">NVIDIA</option>
// // // // // // //           <option value="NFLX">Netflix</option>
// // // // // // //         </select>

// // // // // // //         <button onClick={handlePredictionSubmit} id="predictBtn">Generate Prediction</button>
// // // // // // //         <button onClick={handleStockValueSubmit} id="stockValueBtn">Stock Value</button>
// // // // // // //         <button onClick={fetchStockNews} id="fetchNewsBtn">Fetch News</button>
// // // // // // //       </div>

// // // // // // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // // // // // //         {/* Image Section */}
// // // // // // //         {image && (
// // // // // // //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// // // // // // //             <img src={image} alt={`Prediction for ${stockSymbol}`} style={{ width: '100%', maxWidth: '1000px' }} />
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Stock Value Table */}
// // // // // // //         {isStockValueClicked && stockValue && (
// // // // // // //           <div style={{ flex: 1, maxWidth: '400px' }}>
// // // // // // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // // // // // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // // // // // //               <thead>
// // // // // // //                 <tr>
// // // // // // //                   <th>Attribute</th>
// // // // // // //                   <th>Value</th>
// // // // // // //                 </tr>
// // // // // // //               </thead>
// // // // // // //               <tbody>
// // // // // // //                 <tr>
// // // // // // //                   <td>Date</td>
// // // // // // //                   <td>{stockValue.date}</td>
// // // // // // //                 </tr>
// // // // // // //                 <tr>
// // // // // // //                   <td>Open</td>
// // // // // // //                   <td>{stockValue.open}</td>
// // // // // // //                 </tr>
// // // // // // //                 <tr>
// // // // // // //                   <td>High</td>
// // // // // // //                   <td>{stockValue.high}</td>
// // // // // // //                 </tr>
// // // // // // //                 <tr>
// // // // // // //                   <td>Low</td>
// // // // // // //                   <td>{stockValue.low}</td>
// // // // // // //                 </tr>
// // // // // // //                 <tr>
// // // // // // //                   <td>Close</td>
// // // // // // //                   <td>{stockValue.close}</td>
// // // // // // //                 </tr>
// // // // // // //                 <tr>
// // // // // // //                   <td>Volume</td>
// // // // // // //                   <td>{stockValue.volume}</td>
// // // // // // //                 </tr>
// // // // // // //               </tbody>
// // // // // // //             </table>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {/* Display News Articles in a Small Rectangular Box */}
// // // // // // //       {isNewsFetched && news.length > 0 && (
// // // // // // //         <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px', width: '100%', maxWidth: '1100px', backgroundColor: '#f9f9f9', margin: 'auto' }}>
// // // // // // //           <h3>Top News for {selectedStockSymbol}</h3>
// // // // // // //           <div>
// // // // // // //             {news.map((article, index) => (
// // // // // // //               <div key={index} style={{ marginBottom: '10px' }}>
// // // // // // //                 <h4><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h4>
// // // // // // //                 <p>{article.description}</p>
// // // // // // //                 <p><strong>Source:</strong> {article.source.name}</p>
// // // // // // //                 <p><strong>Published at:</strong> {article.publishedAt}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default StockPrediction;






// // // // // // import React, { useState } from 'react';
// // // // // // import './StockPrediction.css';

// // // // // // const StockPrediction = () => {
// // // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // // // //   const [image, setImage] = useState(null);
// // // // // //   const [stockValue, setStockValue] = useState(null);
// // // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
// // // // // //   const [news, setNews] = useState([]);
// // // // // //   const [isNewsFetched, setIsNewsFetched] = useState(false);

// // // // // //   // Fetch stock prediction image
// // // // // //   const handlePredictionSubmit = async () => {
// // // // // //     const apiUrl = `https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

// // // // // //     try {
// // // // // //       const response = await fetch(apiUrl);
// // // // // //       if (!response.ok) throw new Error('Network response was not ok');
// // // // // //       const base64Image = await response.text();
// // // // // //       console.log(response);

// // // // // //       const imgElement = document.createElement('img');
// // // // // //       imgElement.src = `data:image/png;base64,${base64Image}`;
// // // // // //       imgElement.alt = `Prediction for ${stockSymbol}`;

// // // // // //       const resultContainer = document.getElementById('resultContainer');
// // // // // //       resultContainer.innerHTML = ''; // Clear previous results
// // // // // //       resultContainer.appendChild(imgElement);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching prediction:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   // Fetch stock value data
// // // // // //   const handleStockValueSubmit = async () => {
// // // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // //     try {
// // // // // //       const response = await fetch(apiUrl);
// // // // // //       if (!response.ok) throw new Error('Network response was not ok');

// // // // // //       const data = await response.json();
// // // // // //       console.log('Response from API:', data);

// // // // // //       setStockValue(data);
// // // // // //       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
// // // // // //       setIsStockValueClicked(true);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching stock value:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   // Fetch stock news based on selected ticker (via API Gateway and Lambda)
// // // // // //   const fetchStockNews = async () => {
// // // // // //     const apiUrl = `https://h1wusbnqv2.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // // //     try {
// // // // // //       const response = await fetch(apiUrl);
// // // // // //       if (!response.ok) throw new Error('Network response was not ok');

// // // // // //       const data = await response.json();
// // // // // //       setNews(data); // Set the news articles in the state
// // // // // //       setIsNewsFetched(true);  // Set news as fetched
// // // // // //       setSelectedStockSymbol(stockSymbol); // Update the selected stock symbol when news is fetched
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching news:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="stock-prediction-container">
// // // // // //       <div className="controls-container">
// // // // // //         <select
// // // // // //           value={stockSymbol}
// // // // // //           onChange={(e) => {
// // // // // //             setStockSymbol(e.target.value); // Update stock symbol
// // // // // //             setIsNewsFetched(false); // Reset news fetched when changing the stock
// // // // // //           }}
// // // // // //           id="stockSelect"
// // // // // //         >
// // // // // //           <option value="AAPL">Apple</option>
// // // // // //           <option value="GOOGL">Google</option>
// // // // // //           <option value="MSFT">Microsoft</option>
// // // // // //           <option value="AMZN">Amazon</option>
// // // // // //           <option value="META">Meta</option>
// // // // // //           <option value="JNJ">Johnson & Johnson</option>
// // // // // //           <option value="TSLA">Tesla</option>
// // // // // //           <option value="NVDA">NVIDIA</option>
// // // // // //           <option value="NFLX">Netflix</option>
// // // // // //         </select>

// // // // // //         {/* Using React's onClick for event handling */}
// // // // // //         <button onClick={handlePredictionSubmit} id="predictBtn">
// // // // // //           Generate Prediction
// // // // // //         </button>
// // // // // //         <button onClick={handleStockValueSubmit} id="stockValueBtn">
// // // // // //           Stock Value
// // // // // //         </button>
// // // // // //         <button onClick={fetchStockNews} id="fetchNewsBtn">
// // // // // //           Fetch News
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // // // // //         {/* Image Section */}
// // // // // //         {image && (
// // // // // //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// // // // // //             <img
// // // // // //               src={image}
// // // // // //               alt={`Prediction for ${stockSymbol}`}
// // // // // //               style={{ width: '100%', maxWidth: '1000px' }}
// // // // // //             />
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* Stock Value Table */}
// // // // // //         {isStockValueClicked && stockValue && (
// // // // // //           <div style={{ flex: 1, maxWidth: '400px' }}>
// // // // // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // // // // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // // // // //               <thead>
// // // // // //                 <tr>
// // // // // //                   <th>Attribute</th>
// // // // // //                   <th>Value</th>
// // // // // //                 </tr>
// // // // // //               </thead>
// // // // // //               <tbody>
// // // // // //                 <tr>
// // // // // //                   <td>Date</td>
// // // // // //                   <td>{stockValue.date}</td>
// // // // // //                 </tr>
// // // // // //                 <tr>
// // // // // //                   <td>Open</td>
// // // // // //                   <td>{stockValue.open}</td>
// // // // // //                 </tr>
// // // // // //                 <tr>
// // // // // //                   <td>High</td>
// // // // // //                   <td>{stockValue.high}</td>
// // // // // //                 </tr>
// // // // // //                 <tr>
// // // // // //                   <td>Low</td>
// // // // // //                   <td>{stockValue.low}</td>
// // // // // //                 </tr>
// // // // // //                 <tr>
// // // // // //                   <td>Close</td>
// // // // // //                   <td>{stockValue.close}</td>
// // // // // //                 </tr>
// // // // // //                 <tr>
// // // // // //                   <td>Volume</td>
// // // // // //                   <td>{stockValue.volume}</td>
// // // // // //                 </tr>
// // // // // //               </tbody>
// // // // // //             </table>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {/* Display News Articles in a Small Rectangular Box */}
// // // // // //       {isNewsFetched && news.length > 0 && (
// // // // // //         <div
// // // // // //           style={{
// // // // // //             marginTop: '20px',
// // // // // //             border: '1px solid #ddd',
// // // // // //             padding: '10px',
// // // // // //             width: '100%',
// // // // // //             maxWidth: '1100px',
// // // // // //             backgroundColor: '#f9f9f9',
// // // // // //             margin: 'auto',
// // // // // //           }}
// // // // // //         >
// // // // // //           <h3>Top News for {selectedStockSymbol}</h3>
// // // // // //           <div>
// // // // // //             {news.map((article, index) => (
// // // // // //               <div key={index} style={{ marginBottom: '10px' }}>
// // // // // //                 <h4>
// // // // // //                   <a href={article.url} target="_blank" rel="noopener noreferrer">
// // // // // //                     {article.title}
// // // // // //                   </a>
// // // // // //                 </h4>
// // // // // //                 <p>{article.description}</p>
// // // // // //                 <p>
// // // // // //                   <strong>Source:</strong> {article.source.name}
// // // // // //                 </p>
// // // // // //                 <p>
// // // // // //                   <strong>Published at:</strong> {article.publishedAt}
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default StockPrediction;



// // // // // import React, { useState } from 'react';
// // // // // import './StockPrediction.css';

// // // // // const StockPrediction = () => {
// // // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // // //   const [image, setImage] = useState(null);
// // // // //   const [stockValue, setStockValue] = useState(null);
// // // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
// // // // //   const [news, setNews] = useState([]);
// // // // //   const [isNewsFetched, setIsNewsFetched] = useState(false);

// // // // //   // Fetch stock prediction image
// // // // //   const handlePredictionSubmit = async () => {
// // // // //     const apiUrl = `https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

// // // // //     try {
// // // // //       const response = await fetch(apiUrl);
// // // // //       if (!response.ok) throw new Error('Network response was not ok');
// // // // //       const base64Image = await response.text();
// // // // //       console.log(response);

// // // // //       const imgElement = document.createElement('img');
// // // // //       imgElement.src = `data:image/png;base64,${base64Image}`;
// // // // //       imgElement.alt = `Prediction for ${stockSymbol}`;

// // // // //       setImage(imgElement.src);  // Set image source for display
// // // // //       setIsStockValueClicked(false);  // Hide stock value table when showing the image
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching prediction:', error);
// // // // //     }
// // // // //   };

// // // // //   // Fetch stock value data
// // // // //   const handleStockValueSubmit = async () => {
// // // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // //     try {
// // // // //       const response = await fetch(apiUrl);
// // // // //       if (!response.ok) throw new Error('Network response was not ok');

// // // // //       const data = await response.json();
// // // // //       console.log('Response from API:', data);

// // // // //       setStockValue(data);
// // // // //       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
// // // // //       setIsStockValueClicked(true); // Show stock value table
// // // // //       setImage(null);  // Hide image when displaying stock value
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching stock value:', error);
// // // // //     }
// // // // //   };

// // // // //   // Fetch stock news based on selected ticker (via API Gateway and Lambda)
// // // // //   const fetchStockNews = async () => {
// // // // //     const apiUrl = `https://h1wusbnqv2.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // // //     try {
// // // // //       const response = await fetch(apiUrl);
// // // // //       if (!response.ok) throw new Error('Network response was not ok');

// // // // //       const data = await response.json();
// // // // //       setNews(data); // Set the news articles in the state
// // // // //       setIsNewsFetched(true);  // Set news as fetched
// // // // //       setSelectedStockSymbol(stockSymbol); // Update the selected stock symbol when news is fetched
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching news:', error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="stock-prediction-container">
// // // // //       <div className="controls-container">
// // // // //         <select
// // // // //           value={stockSymbol}
// // // // //           onChange={(e) => {
// // // // //             setStockSymbol(e.target.value); // Update stock symbol
// // // // //             setIsNewsFetched(false); // Reset news fetched when changing the stock
// // // // //           }}
// // // // //           id="stockSelect"
// // // // //         >
// // // // //           <option value="AAPL">Apple</option>
// // // // //           <option value="GOOGL">Google</option>
// // // // //           <option value="MSFT">Microsoft</option>
// // // // //           <option value="AMZN">Amazon</option>
// // // // //           <option value="META">Meta</option>
// // // // //           <option value="JNJ">Johnson & Johnson</option>
// // // // //           <option value="TSLA">Tesla</option>
// // // // //           <option value="NVDA">NVIDIA</option>
// // // // //           <option value="NFLX">Netflix</option>
// // // // //         </select>

// // // // //         <button onClick={handlePredictionSubmit} id="predictBtn">
// // // // //           Generate Prediction
// // // // //         </button>
// // // // //         <button onClick={handleStockValueSubmit} id="stockValueBtn">
// // // // //           Stock Value
// // // // //         </button>
// // // // //         <button onClick={fetchStockNews} id="fetchNewsBtn">
// // // // //           Fetch News
// // // // //         </button>
// // // // //       </div>

// // // // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // // // //         {/* Image Section */}
// // // // //         {image && (
// // // // //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// // // // //             <img
// // // // //               src={image}
// // // // //               alt={`Prediction for ${stockSymbol}`}
// // // // //               style={{ width: '100%', maxWidth: '1000px' }}
// // // // //             />
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Stock Value Table */}
// // // // //         {isStockValueClicked && stockValue && (
// // // // //           <div style={{ flex: 1, maxWidth: '400px' }}>
// // // // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // // // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // // // //               <thead>
// // // // //                 <tr>
// // // // //                   <th>Attribute</th>
// // // // //                   <th>Value</th>
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 <tr>
// // // // //                   <td>Date</td>
// // // // //                   <td>{stockValue.date}</td>
// // // // //                 </tr>
// // // // //                 <tr>
// // // // //                   <td>Open</td>
// // // // //                   <td>{stockValue.open}</td>
// // // // //                 </tr>
// // // // //                 <tr>
// // // // //                   <td>High</td>
// // // // //                   <td>{stockValue.high}</td>
// // // // //                 </tr>
// // // // //                 <tr>
// // // // //                   <td>Low</td>
// // // // //                   <td>{stockValue.low}</td>
// // // // //                 </tr>
// // // // //                 <tr>
// // // // //                   <td>Close</td>
// // // // //                   <td>{stockValue.close}</td>
// // // // //                 </tr>
// // // // //                 <tr>
// // // // //                   <td>Volume</td>
// // // // //                   <td>{stockValue.volume}</td>
// // // // //                 </tr>
// // // // //               </tbody>
// // // // //             </table>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Display News Articles in a Small Rectangular Box */}
// // // // //       {isNewsFetched && news.length > 0 && (
// // // // //         <div
// // // // //           style={{
// // // // //             marginTop: '20px',
// // // // //             border: '1px solid #ddd',
// // // // //             padding: '10px',
// // // // //             width: '100%',
// // // // //             maxWidth: '1100px',
// // // // //             backgroundColor: '#f9f9f9',
// // // // //             margin: 'auto',
// // // // //           }}
// // // // //         >
// // // // //           <h3>Top News for {selectedStockSymbol}</h3>
// // // // //           <div>
// // // // //             {news.map((article, index) => (
// // // // //               <div key={index} style={{ marginBottom: '10px' }}>
// // // // //                 <h4>
// // // // //                   <a href={article.url} target="_blank" rel="noopener noreferrer">
// // // // //                     {article.title}
// // // // //                   </a>
// // // // //                 </h4>
// // // // //                 <p>{article.description}</p>
// // // // //                 <p>
// // // // //                   <strong>Source:</strong> {article.source.name}
// // // // //                 </p>
// // // // //                 <p>
// // // // //                   <strong>Published at:</strong> {article.publishedAt}
// // // // //                 </p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default StockPrediction;



// // // // import React, { useState } from 'react';
// // // // import './StockPrediction.css';

// // // // const StockPrediction = () => {
// // // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // // //   const [image, setImage] = useState(null);
// // // //   const [stockValue, setStockValue] = useState(null);
// // // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);

// // // //   // Fetch stock prediction image
// // // //   const handlePredictionSubmit = async () => {
// // // //     const apiUrl = `https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

// // // //     try {
// // // //       const response = await fetch(apiUrl);
// // // //       if (!response.ok) throw new Error('Network response was not ok');
// // // //       const base64Image = await response.text();
// // // //       console.log(response);

// // // //       const imgElement = document.createElement('img');
// // // //       imgElement.src = `data:image/png;base64,${base64Image}`;
// // // //       imgElement.alt = `Prediction for ${stockSymbol}`;

// // // //       setImage(imgElement.src);  // Set image source for display
// // // //       setIsStockValueClicked(false);  // Hide stock value table when showing the image
// // // //     } catch (error) {
// // // //       console.error('Error fetching prediction:', error);
// // // //     }
// // // //   };

// // // //   // Fetch stock value data
// // // //   const handleStockValueSubmit = async () => {
// // // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // // //     try {
// // // //       const response = await fetch(apiUrl);
// // // //       if (!response.ok) throw new Error('Network response was not ok');

// // // //       const data = await response.json();
// // // //       console.log('Response from API:', data);

// // // //       setStockValue(data);
// // // //       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
// // // //       setIsStockValueClicked(true); // Show stock value table
// // // //       setImage(null);  // Hide image when displaying stock value
// // // //     } catch (error) {
// // // //       console.error('Error fetching stock value:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="stock-prediction-container">
// // // //       <div className="controls-container">
// // // //         <select
// // // //           value={stockSymbol}
// // // //           onChange={(e) => {
// // // //             setStockSymbol(e.target.value); // Update stock symbol
// // // //             setIsStockValueClicked(false); // Reset stock value visibility when changing the stock
// // // //           }}
// // // //           id="stockSelect"
// // // //         >
// // // //           <option value="AAPL">Apple</option>
// // // //           <option value="GOOGL">Google</option>
// // // //           <option value="MSFT">Microsoft</option>
// // // //           <option value="AMZN">Amazon</option>
// // // //           <option value="META">Meta</option>
// // // //           <option value="JNJ">Johnson & Johnson</option>
// // // //           <option value="TSLA">Tesla</option>
// // // //           <option value="NVDA">NVIDIA</option>
// // // //           <option value="NFLX">Netflix</option>
// // // //         </select>

// // // //         <button onClick={handlePredictionSubmit} id="predictBtn">
// // // //           Generate Prediction
// // // //         </button>
// // // //         <button onClick={handleStockValueSubmit} id="stockValueBtn">
// // // //           Stock Value
// // // //         </button>
// // // //       </div>

// // // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // // //         {/* Image Section */}
// // // //         {image && (
// // // //           <div style={{ flex: 1, maxWidth: '600px', marginRight: '20px' }}>
// // // //             <img
// // // //               src={image}
// // // //               alt={`Prediction for ${stockSymbol}`}
// // // //               style={{ width: '100%', maxWidth: '1000px' }}
// // // //             />
// // // //           </div>
// // // //         )}

// // // //         {/* Stock Value Table */}
// // // //         {isStockValueClicked && stockValue && (
// // // //           <div style={{ flex: 1, maxWidth: '400px' }}>
// // // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // // //               <thead>
// // // //                 <tr>
// // // //                   <th>Attribute</th>
// // // //                   <th>Value</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 <tr>
// // // //                   <td>Date</td>
// // // //                   <td>{stockValue.date}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <td>Open</td>
// // // //                   <td>{stockValue.open}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <td>High</td>
// // // //                   <td>{stockValue.high}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <td>Low</td>
// // // //                   <td>{stockValue.low}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <td>Close</td>
// // // //                   <td>{stockValue.close}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <td>Volume</td>
// // // //                   <td>{stockValue.volume}</td>
// // // //                 </tr>
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default StockPrediction;


// // // import React, { useState } from 'react';
// // // import './StockPrediction.css';

// // // const StockPrediction = () => {
// // //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// // //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// // //   const [image, setImage] = useState(null);
// // //   const [stockValue, setStockValue] = useState(null);
// // //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);

// // //   // Fetch stock prediction image
// // //   const handlePredictionSubmit = async () => {
// // //     const apiUrl = `https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

// // //     try {
// // //       const response = await fetch(apiUrl);
// // //       if (!response.ok) throw new Error('Network response was not ok');
// // //       const base64Image = await response.text();
// // //       console.log(response);

// // //       const imgElement = document.createElement('img');
// // //       imgElement.src = `data:image/png;base64,${base64Image}`;
// // //       imgElement.alt = `Prediction for ${stockSymbol}`;

// // //       setImage(imgElement.src);  // Set image source for display
// // //     } catch (error) {
// // //       console.error('Error fetching prediction:', error);
// // //     }
// // //   };

// // //   // Fetch stock value data
// // //   const handleStockValueSubmit = async () => {
// // //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// // //     try {
// // //       const response = await fetch(apiUrl);
// // //       if (!response.ok) throw new Error('Network response was not ok');

// // //       const data = await response.json();
// // //       console.log('Response from API:', data);

// // //       setStockValue(data);
// // //       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
// // //       setIsStockValueClicked(true); // Show stock value table
// // //     } catch (error) {
// // //       console.error('Error fetching stock value:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="stock-prediction-container">
// // //       <div className="controls-container">
// // //         <select
// // //           value={stockSymbol}
// // //           onChange={(e) => {
// // //             setStockSymbol(e.target.value); // Update stock symbol
// // //             setIsStockValueClicked(false); // Reset stock value visibility when changing the stock
// // //           }}
// // //           id="stockSelect"
// // //         >
// // //           <option value="AAPL">Apple</option>
// // //           <option value="GOOGL">Google</option>
// // //           <option value="MSFT">Microsoft</option>
// // //           <option value="AMZN">Amazon</option>
// // //           <option value="META">Meta</option>
// // //           <option value="JNJ">Johnson & Johnson</option>
// // //           <option value="TSLA">Tesla</option>
// // //           <option value="NVDA">NVIDIA</option>
// // //           <option value="NFLX">Netflix</option>
// // //         </select>

// // //         <button onClick={handlePredictionSubmit} id="predictBtn">
// // //           Generate Prediction
// // //         </button>
// // //         <button onClick={handleStockValueSubmit} id="stockValueBtn">
// // //           Stock Value
// // //         </button>
// // //       </div>

// // //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// // //         {/* Image Section */}
// // //         {image && (
// // //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// // //             <img
// // //               src={image}
// // //               alt={`Prediction for ${stockSymbol}`}
// // //               style={{ width: '100%', maxWidth: '1000px' }}
// // //             />
// // //           </div>
// // //         )}

// // //         {/* Stock Value Table */}
// // //         {isStockValueClicked && stockValue && (
// // //           <div style={{ flex: 1, maxWidth: '400px' }}>
// // //             <h2>Stock Value for {selectedStockSymbol}</h2>
// // //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// // //               <thead>
// // //                 <tr>
// // //                   <th>Attribute</th>
// // //                   <th>Value</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 <tr>
// // //                   <td>Date</td>
// // //                   <td>{stockValue.date}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td>Open</td>
// // //                   <td>{stockValue.open}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td>High</td>
// // //                   <td>{stockValue.high}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td>Low</td>
// // //                   <td>{stockValue.low}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td>Close</td>
// // //                   <td>{stockValue.close}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td>Volume</td>
// // //                   <td>{stockValue.volume}</td>
// // //                 </tr>
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default StockPrediction;



// // import React, { useState } from 'react';
// // import './StockPrediction.css';

// // const StockPrediction = () => {
// //   const [stockSymbol, setStockSymbol] = useState('AAPL');
// //   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
// //   const [image, setImage] = useState(null);
// //   const [stockValue, setStockValue] = useState(null);
// //   const [isStockValueClicked, setIsStockValueClicked] = useState(false);

// //   // Fetch stock prediction image
// //   const handlePredictionSubmit = async () => {
// //     const apiUrl = `https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

// //     try {
// //       const response = await fetch(apiUrl);
// //       if (!response.ok) throw new Error('Network response was not ok');
// //       const base64Image = await response.text();
// //       console.log(response);

// //       const imgElement = document.createElement('img');
// //       imgElement.src = `data:image/png;base64,${base64Image}`;
// //       imgElement.alt = `Prediction for ${stockSymbol}`;

// //       setImage(imgElement.src);  // Set image source for display
// //     } catch (error) {
// //       console.error('Error fetching prediction:', error);
// //     }
// //   };

// //   // Fetch stock value data
// //   const handleStockValueSubmit = async () => {
// //     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

// //     try {
// //       const response = await fetch(apiUrl);
// //       if (!response.ok) throw new Error('Network response was not ok');

// //       const data = await response.json();
// //       console.log('Response from API:', data);

// //       setStockValue(data);
// //       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
// //       setIsStockValueClicked(true); // Show stock value table
// //     } catch (error) {
// //       console.error('Error fetching stock value:', error);
// //     }
// //   };

// //   return (
// //     <div className="stock-prediction-container">
// //       <div className="controls-container">
// //         <select
// //           value={stockSymbol}
// //           onChange={(e) => setStockSymbol(e.target.value)} // Update stock symbol without affecting the table visibility
// //           id="stockSelect"
// //         >
// //           <option value="AAPL">Apple</option>
// //           <option value="GOOGL">Google</option>
// //           <option value="MSFT">Microsoft</option>
// //           <option value="AMZN">Amazon</option>
// //           <option value="META">Meta</option>
// //           <option value="JNJ">Johnson & Johnson</option>
// //           <option value="TSLA">Tesla</option>
// //           <option value="NVDA">NVIDIA</option>
// //           <option value="NFLX">Netflix</option>
// //         </select>

// //         <button onClick={handlePredictionSubmit} id="predictBtn">
// //           Generate Prediction
// //         </button>
// //         <button onClick={handleStockValueSubmit} id="stockValueBtn">
// //           Stock Value
// //         </button>
// //       </div>

// //       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
// //         {/* Image Section */}
// //         {image && (
// //           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
// //             <img
// //               src={image}
// //               alt={`Prediction for ${stockSymbol}`}
// //               style={{ width: '100%', maxWidth: '1000px' }}
// //             />
// //           </div>
// //         )}

// //         {/* Stock Value Table */}
// //         {isStockValueClicked && stockValue && (
// //           <div style={{ flex: 1, maxWidth: '400px' }}>
// //             <h2>Stock Value for {selectedStockSymbol}</h2>
// //             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
// //               <thead>
// //                 <tr>
// //                   <th>Attribute</th>
// //                   <th>Value</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td>Date</td>
// //                   <td>{stockValue.date}</td>
// //                 </tr>
// //                 <tr>
// //                   <td>Open</td>
// //                   <td>{stockValue.open}</td>
// //                 </tr>
// //                 <tr>
// //                   <td>High</td>
// //                   <td>{stockValue.high}</td>
// //                 </tr>
// //                 <tr>
// //                   <td>Low</td>
// //                   <td>{stockValue.low}</td>
// //                 </tr>
// //                 <tr>
// //                   <td>Close</td>
// //                   <td>{stockValue.close}</td>
// //                 </tr>
// //                 <tr>
// //                   <td>Volume</td>
// //                   <td>{stockValue.volume}</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default StockPrediction;



// import React, { useState } from 'react';
// import './StockPrediction.css';

// const StockPrediction = () => {
//   const [stockSymbol, setStockSymbol] = useState('AAPL');
//   const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
//   const [image, setImage] = useState(null);
//   const [stockValue, setStockValue] = useState(null);
//   const [isStockValueClicked, setIsStockValueClicked] = useState(false);
//   const [news, setNews] = useState([]);
//   const [isNewsFetched, setIsNewsFetched] = useState(false);

//   // Fetch stock prediction image
//   const handlePredictionSubmit = async () => {
//     const apiUrl = `https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) throw new Error('Network response was not ok');
//       const base64Image = await response.text();
//       console.log(response);

//       const imgElement = document.createElement('img');
//       imgElement.src = `data:image/png;base64,${base64Image}`;
//       imgElement.alt = `Prediction for ${stockSymbol}`;

//       setImage(imgElement.src);  // Set image source for display
//     } catch (error) {
//       console.error('Error fetching prediction:', error);
//     }
//   };

//   // Fetch stock value data
//   const handleStockValueSubmit = async () => {
//     const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) throw new Error('Network response was not ok');

//       const data = await response.json();
//       console.log('Response from API:', data);

//       setStockValue(data);
//       setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
//       setIsStockValueClicked(true); // Show stock value table
//     } catch (error) {
//       console.error('Error fetching stock value:', error);
//     }
//   };

//   // Fetch stock news based on selected ticker (via API Gateway and Lambda)
//   const fetchStockNews = async () => {
//     const apiUrl = `https://h1wusbnqv2.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) throw new Error('Network response was not ok');

//       const data = await response.json();
//       setNews(data); // Set the news articles in the state
//       setIsNewsFetched(true);  // Set news as fetched
//       setSelectedStockSymbol(stockSymbol); // Update the selected stock symbol when news is fetched
//     } catch (error) {
//       console.error('Error fetching news:', error);
//     }
//   };

//   return (
//     <div className="stock-prediction-container">
//       <div className="controls-container">
//         <select
//           value={stockSymbol}
//           onChange={(e) => setStockSymbol(e.target.value)} // Update stock symbol without affecting the table visibility
//           id="stockSelect"
//         >
//           <option value="AAPL">Apple</option>
//           <option value="GOOGL">Google</option>
//           <option value="MSFT">Microsoft</option>
//           <option value="AMZN">Amazon</option>
//           <option value="META">Meta</option>
//           <option value="JNJ">Johnson & Johnson</option>
//           <option value="TSLA">Tesla</option>
//           <option value="NVDA">NVIDIA</option>
//           <option value="NFLX">Netflix</option>
//         </select>

//         <button onClick={handlePredictionSubmit} id="predictBtn">
//           Generate Prediction
//         </button>
//         <button onClick={handleStockValueSubmit} id="stockValueBtn">
//           Stock Value
//         </button>
//         <button onClick={fetchStockNews} id="fetchNewsBtn">
//           Fetch News
//         </button>
//       </div>

//       <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
//         {/* Image Section */}
//         {image && (
//           <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
//             <img
//               src={image}
//               alt={`Prediction for ${stockSymbol}`}
//               style={{ width: '100%', maxWidth: '1000px' }}
//             />
//           </div>
//         )}

//         {/* Stock Value Table */}
//         {isStockValueClicked && stockValue && (
//           <div style={{ flex: 1, maxWidth: '400px' }}>
//             <h2>Stock Value for {selectedStockSymbol}</h2>
//             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//               <thead>
//                 <tr>
//                   <th>Attribute</th>
//                   <th>Value</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Date</td>
//                   <td>{stockValue.date}</td>
//                 </tr>
//                 <tr>
//                   <td>Open</td>
//                   <td>{stockValue.open}</td>
//                 </tr>
//                 <tr>
//                   <td>High</td>
//                   <td>{stockValue.high}</td>
//                 </tr>
//                 <tr>
//                   <td>Low</td>
//                   <td>{stockValue.low}</td>
//                 </tr>
//                 <tr>
//                   <td>Close</td>
//                   <td>{stockValue.close}</td>
//                 </tr>
//                 <tr>
//                   <td>Volume</td>
//                   <td>{stockValue.volume}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Display News Articles in a Small Rectangular Box */}
//       {isNewsFetched && news.length > 0 && (
//         <div
//           style={{
//             marginTop: '20px',
//             border: '1px solid #ddd',
//             padding: '10px',
//             width: '100%',
//             maxWidth: '1100px',
//             backgroundColor: '#f9f9f9',
//             margin: 'auto',
//           }}
//         >
//           <h3>Top News for {selectedStockSymbol}</h3>
//           <div>
//           {news.map((article, index) => (
//           <div key={index} style={{ marginBottom: '10px' }}>
//             <h4>
//               <a href={article.url} target="_blank" rel="noopener noreferrer">
//                 {article.title}
//               </a>
//             </h4>
//             <p>{article.description}</p>
//             <p>
//               <strong>Source:</strong> {article.source ? article.source.name : 'Unknown'}
//             </p>
//             <p>
//               <strong>Published at:</strong> {article.publishedAt}
//             </p>
//           </div>
//           ))} 
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StockPrediction;




import React, { useState } from 'react';
import './StockPrediction.css';

const StockPrediction = () => {
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL');
  const [image, setImage] = useState(null);
  const [stockValue, setStockValue] = useState(null);
  const [isStockValueClicked, setIsStockValueClicked] = useState(false);
  const [news, setNews] = useState([]);
  const [isNewsFetched, setIsNewsFetched] = useState(false);

  // Fetch stock prediction image
  const handlePredictionSubmit = async () => {
    const apiUrl = `https://1ewu9ppujf.execute-api.us-east-2.amazonaws.com/dev/predict?stock=${stockSymbol}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const base64Image = await response.text();
      console.log(response);

      const imgElement = document.createElement('img');
      imgElement.src = `data:image/png;base64,${base64Image}`;
      imgElement.alt = `Prediction for ${stockSymbol}`;

      setImage(imgElement.src);  // Set image source for display
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  // Fetch stock value data
  const handleStockValueSubmit = async () => {
    const apiUrl = `https://7e4fhjhlz5.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      console.log('Response from API:', data);

      setStockValue(data);
      setSelectedStockSymbol(stockSymbol); // Update selected stock symbol
      setIsStockValueClicked(true); // Show stock value table
    } catch (error) {
      console.error('Error fetching stock value:', error);
    }
  };

  // Fetch stock news based on selected ticker (via API Gateway and Lambda)
  // const fetchStockNews = async () => {
  //   const apiUrl = `https://h1wusbnqv2.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;

  //   try {
  //     const response = await fetch(apiUrl);
  //     if (!response.ok) throw new Error('Network response was not ok');

  //     const data = await response.json();
  //     // Parse the body to get the news articles
  //     const newsArticles = JSON.parse(data.body); // Assuming the body is a stringified JSON array

  //     // Set the parsed news articles
  //     setNews(newsArticles);
  //     setIsNewsFetched(true);  // Set news as fetched
  //     setSelectedStockSymbol(stockSymbol); // Update the selected stock symbol when news is fetched
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };

  const fetchStockNews = async () => {
    const apiUrl = `https://h1wusbnqv2.execute-api.us-east-1.amazonaws.com/dev?stock=${stockSymbol}`;
  
    try {
      const response = await fetch(apiUrl);
      const rawData = await response.text(); // Get the raw response text
      console.log('Raw Response:', rawData);
  
      if (!response.ok) throw new Error('Network response was not ok');
  
      // Try to parse the response only if it's valid JSON
      const data = rawData ? JSON.parse(rawData) : {}; // Parse only if rawData is not empty
      setNews(data);
      setIsNewsFetched(true);
      setSelectedStockSymbol(stockSymbol);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  

  return (
    <div className="stock-prediction-container">
      <div className="controls-container">
        <select
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)} // Update stock symbol without affecting the table visibility
          id="stockSelect"
        >
          <option value="AAPL">Apple</option>
          <option value="GOOGL">Google</option>
          <option value="MSFT">Microsoft</option>
          <option value="AMZN">Amazon</option>
          <option value="META">Meta</option>
          <option value="JNJ">Johnson & Johnson</option>
          <option value="TSLA">Tesla</option>
          <option value="NVDA">NVIDIA</option>
          <option value="NFLX">Netflix</option>
        </select>

        <button onClick={handlePredictionSubmit} id="predictBtn">
          Generate Prediction
        </button>
        <button onClick={handleStockValueSubmit} id="stockValueBtn">
          Stock Value
        </button>
        <button onClick={fetchStockNews} id="fetchNewsBtn">
          Fetch News
        </button>
      </div>

      <div id="resultContainer" style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Image Section */}
        {image && (
          <div style={{ flex: 1, maxWidth: '1100px', marginRight: '20px' }}>
            <img
              src={image}
              alt={`Prediction for ${stockSymbol}`}
              style={{ width: '100%', maxWidth: '1000px' }}
            />
          </div>
        )}

        {/* Stock Value Table */}
        {isStockValueClicked && stockValue && (
          <div style={{ flex: 1, maxWidth: '400px' }}>
            <h2>Stock Value for {selectedStockSymbol}</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>{stockValue.date}</td>
                </tr>
                <tr>
                  <td>Open</td>
                  <td>{stockValue.open}</td>
                </tr>
                <tr>
                  <td>High</td>
                  <td>{stockValue.high}</td>
                </tr>
                <tr>
                  <td>Low</td>
                  <td>{stockValue.low}</td>
                </tr>
                <tr>
                  <td>Close</td>
                  <td>{stockValue.close}</td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>{stockValue.volume}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Display News Articles in a Small Rectangular Box */}
      {isNewsFetched && news.length > 0 && (
        <div
          style={{
            marginTop: '20px',
            border: '1px solid #ddd',
            padding: '10px',
            width: '100%',
            maxWidth: '1100px',
            backgroundColor: '#f9f9f9',
            margin: 'auto',
          }}
        >
          <h3>Top News for {selectedStockSymbol}</h3>
          <div>
            {news.map((article, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <h4>
                  <a href={article.ArticleID.S} target="_blank" rel="noopener noreferrer">
                    {article.Title.S}
                  </a>
                </h4>
                <p>{article.Description.S}</p>
                <p>
                  <strong>Source:</strong> {article.Source.S}
                </p>
                <p>
                  <strong>Published at:</strong> {article.PublishedAt.S}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StockPrediction;
