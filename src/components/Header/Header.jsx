const Header = (props) => {

  // Esta função servirá de *****CALLBACK******
  function handleSubmit(event){
    
    // É uma função do javaScript que previne o recarregamento da pagina quando é submetido.
    event.preventDefault();
    
    // A constante criada pega o valor digitado no imput de pesquisa
    const searchValue = event.target[0].value;

    // Passando o valor que voltou do **************event.target*********
    props.onSubmit(searchValue);

    // Limpando o campo de pesquisa
    event.target[0].value = "";

  }

  return (
    <header className="Header">
      <h1>Lista de Filmes</h1>
      {/* Aqui estpou chamando a função *****handleSubmit****** */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
  )
}

export default Header
