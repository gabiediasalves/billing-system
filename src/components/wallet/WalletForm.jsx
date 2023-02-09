import Input from "../form/Input"
import Submit from "../form/Submit"

function WalletForm(){
  return (
    <form /*onSubmit={submit}*/>
      <Input
      type="text"
      text="Nome da carteira"
      name="name"
      placeholder="Insira o nome da carteira"
     /* handleOnChange={handleChange}*/
      // value={project.name ? project.name : ''}
      />

    </form>
  )
}

export default WalletForm