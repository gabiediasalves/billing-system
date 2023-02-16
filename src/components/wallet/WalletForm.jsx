import { useState } from "react"
import Input from "../form/Input"
import Submit from "../form/Submit"


function WalletForm({handleSubmit, btnText, projectData}) {

const [project, setProject] = useState(projectData || {})

const submit = (e) => {
  e.preventDefault()
   console.log(project)
  handleSubmit(project)
}

function handleChange(e) {
  setProject({ ...project, [e.target.name]: e.target.value })
}

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        text="Nome da carteira"
        name="name"
        placeholder="Insira o nome da carteira"
       handleOnChange={handleChange}
       value={project.name ? project.name : ''}
      />

      <Input
        type="number"
        text="CNPJ"
        name="CNPJ"
        placeholder="Insira o CNPJ"
       handleOnChange={handleChange}
        value={project.CNPJ ? project.CNPJ : ''}
      />

      <Input
        type="text"
        text="Endereço"
        name="endereco"
        placeholder="Insira o endereço"
       handleOnChange={handleChange}
       value={project.endereco ? project.endereco : ''}
      />

      <Submit text={btnText} />

    </form>
  )
}

export default WalletForm