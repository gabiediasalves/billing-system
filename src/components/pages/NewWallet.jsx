import { useNavigate } from "react-router-dom"
import WalletForm from "../wallet/WalletForm"

function NewWallet(){
  return (
  <div>
    <p>Criar carteira</p>
    <WalletForm /*handleSubmit={createPost}*/ btnText="Criar projetos" />
  </div>
    )
}

export default NewWallet