import Container from './Container'
import MyContext from './Context/index'
function App() {
  return (
    <MyContext>
      <Container/>
    </MyContext>
  );
}

export default App;
