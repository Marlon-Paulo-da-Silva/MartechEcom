export function Signinlogin() {

  function handleCreateAccount() { }

  return (
    <div id="page-auth">
      <main>
        <div className="main-content">
          <h2>Cadastrar-se</h2>
          <form action="">
            <input type="text" placeholder="E-mail" />
            <button type="submit" onClick={handleCreateAccount}>Cadastrar</button>
          </form>

          <div className="separator">Já é cadastrado, faça o login </div>

          <form action="">
            <input
              type="text"
              placeholder="E-mail"
            />
            <input
              type="text"
              placeholder="Senha"
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>

    </div>
  );
}