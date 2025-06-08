import { useState} from 'react'
import './App.css'

import Swal from 'sweetalert2'

function App() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [uf, setUf] = useState(null);
  const [localidade, setLocalidade] = useState(null);

  const [exibeResultado, setExibeResultado] = useState(false);


  const handleChange = (e) => {
    setCep(e.target.value);
  };
  
  async function searchCep() {
    if (!cep) {
      Swal.fire({
        icon: "error",
        title: "Nenhum valor digitado!",
        text: "É nescessario inserir um CEP para consulta",
      });
      return;
    }
    if (cep.length != 8) {
      Swal.fire({
        icon: "error",
        title: "CEP Invalido!",
        text: "O CEP deve conter 8 digitos", 
      });
      return;
    }

    try {
      const data = await fetch(`https://viacep.com.br/ws/${cep}/json`).then(res => res.json())
      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setLocalidade(data.localidade);
      setUf(data.uf);
      console.log(data)
      if (data.erro){
        Swal.fire({
        icon: "error",
        title: "CEP não encontrado!",
        text: "Não encontramos nenhum endereço atribuido a este CEP", 
      });
        return
      }


    } catch (error) {
      Swal.fire({
        icon: "info",
        title: "Tente novamento!",
        text: "Falha ao consultar, Tente novmente! ", 
      });
      console.log(error)
      return
    }
    
    setExibeResultado(true)
    
  
  }


  return (
    <div className="content">
      <div className="title">
        <h1>Digite o CEP</h1>
      </div>

      <div className="cepForm">
        <form className="">
          <input type="number" value={cep} onChange={handleChange} />
        </form>
        <button id='btn' onClick={searchCep}>Buscar</button>
      </div>
      

      {exibeResultado && (
          <div className="resultBox">
            <h3>Bairro: <a>{bairro}</a></h3>
            <h3>Localidade: <a>{localidade}</a></h3>
            <h3>UF: <a>{uf}</a></h3>
            <h3>Logradouro: <a>{logradouro}</a></h3>
        </div>
      )}
      

    </div>


  )
}

export default App
