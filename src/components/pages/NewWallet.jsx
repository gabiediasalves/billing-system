import { useNavigate } from "react-router-dom"
import WalletForm from "../wallet/WalletForm"

function NewWallet(){

const navigate = useNavigate();

function createPost(project){
  
  fetch('http://localhost:5000/wallets', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(project)
  })
  .then((resp) => resp.json())
  .then((data) => {
  console.log(data)
    navigate('/wallet', { state: { message: 'Projeto criado com sucesso!' } })
  })
  .catch(err => console.log(err))

}
  return (
  <div>
    <p>Criar carteira</p>
    <WalletForm handleSubmit={createPost} btnText="Criar projetos" />
  </div>
    )
}

export default NewWallet