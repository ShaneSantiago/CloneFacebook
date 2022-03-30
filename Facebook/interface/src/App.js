import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import FeedPost from './Components/PostFeed/FeedPost';
import Stories from './Components/Stories/Stories';



function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <Feed />
      <FeedPost nome="Henry Cavill" conteudo="Apenas testando para poder implementar tudo certinho"
      horario="16:00" img="https://mixdeseries.com.br/wp-content/uploads/2021/04/Henry-Cavill-verdade-nao-dita-the-witcher.jpg"
      />

      <FeedPost nome="Henry Cavill" conteudo="Mais uma foto só por postar mesmo"
      horario="12:00" img="https://superherobrasil.com.br/wp-content/uploads/2020/09/Henry-Cavill.jpeg"
      />
    </div>
  );
}

export default App;
