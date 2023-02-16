

function WalletCard ({name, CNPJ, endereco}){

  return(
    <div>
      <h4>{name}</h4>
      <p>
        <span>CNPJ: </span> {CNPJ}
      </p>
      <p>
        <span>endereco: </span> {endereco}
      </p>
     
    </div>
  )
}

export default WalletCard