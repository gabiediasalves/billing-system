import LinkButton from "../layout/LinkButton"

function Home() {
  return (
    <section>
    <h2>Bem vido ao Manager</h2>

    <LinkButton to="/newWallet" text="Criar carteira"/>
    </section>
  )
}

export default Home