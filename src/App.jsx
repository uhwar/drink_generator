import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(0)}>Reset counter</button>
    </div>
  );

}


function App() {
  const [cocktail, setCocktail] = useState(null)
  const [loading, setLoading] = useState(false)

  const getRandomCocktail = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      const data = await response.json()
      setCocktail(data.drinks[0])
    } catch (error) {
      console.error('Error fetching cocktail:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Random Cocktail Generator</h1>
      <button onClick={getRandomCocktail} disabled={loading}>
        {loading ? 'Loading...' : 'Get Random Cocktail'}
      </button>
      
      {cocktail && (
        <div className="cocktail-info">
          <h2>{cocktail.strDrink}</h2>
          <Counter />
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p><strong>Category:</strong> {cocktail.strCategory}</p>
          <p><strong>Type:</strong> {cocktail.strAlcoholic}</p>
          <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
        </div>
      )}
    </div>
  )
}

export default App
