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
