//  import Message from "../layout/message"
 import Container from "../layout/Container"
 import ProjectCard from "../wallet/WalletCard"
 import { useState, useEffect } from "react"


function Wallet() {
  const [wallets, setWallets] = useState([])


  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/wallets', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(resp => resp.json())
        .then(data => {
          console.log(data)
          setWallets(data)
        })
        .catch(err => console.log(err))
    }, 300)
  }, [])

  return (
    <div>
    <div>
      <h1>Meus projetos</h1>
      {/* <LinkButton to="/newproject" text="Criar projetos" /> */}
    </div>
    {/* {message && <Message type="sucess" msg={message} />} */}
    <Container>
      {wallets.length > 0 &&
        wallets.map((wallet => (
          <ProjectCard
            name={wallet.name}
            CNPJ={wallet.CNPJ}
            endereco={wallet.endereco}
          />
        )))
      }
   
    </Container>
  </div>

  )
}

export default Wallet