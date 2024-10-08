import React, { useContext, useEffect, useState } from 'react'
import { AuthCtx } from "../../contexts/indusphere/Auth";
import { ServiceCtx } from '../../contexts/indusphere/Service'
import axios from "axios";
import { tratandoErro } from '../../functions/tratandoErro';

const RegistraUser = () => {
  const service = useContext(ServiceCtx)
  const { user } = useContext(AuthCtx);

  const [userData, setuserData] = useState({
    nome: "",
    email: "",
    idPapel: "",
    senha: "",
    idPessoa: "1",
    
  });

  const [enderecoData, setenderecoData] = useState({
    estado:"",
    cidade:"",
    bairro:"",
    logradouro:"",
    complemento:"",
    numero:"",
    cep:"",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleChangeEndereco = (e) => {
    const { name, value } = e.target;
    setenderecoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        {
          ...userData,
        }
        
      );

        await axios.post(
        "http://localhost:8080/endereco/create",
        {
          ...enderecoData,
        }
      );

      console.log(response);
      alert('Usuário registrado com sucesso!!!')
    } catch (error) {
      console.error("Error registering user:", error);
      tratandoErro(error)
    }
  };



  return (
    <div>
      
      <form
        style={{
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="nome"
          value={userData.nome}
          onChange={handleChange}
          placeholder="Nome do usuario"
        />
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="email"
        />

        <input
          type="text"
          name="idPapel"
          value={userData.idPapel}
          onChange={handleChange}   
          placeholder="papel"
        />
        <input
          type="text"
          name="senha"
          value={userData.senha}
          onChange={handleChange}
          placeholder="senha"
        />
        <center><div><strong>ENDEREÇO</strong></div></center>
         <input
          type="text"
          name="estado"
          value={userData.estado}
          onChange={handleChangeEndereco}
          placeholder="estado"
        />
        <input
          type="text"
          name="cidade"
          value={userData.cidade}
          onChange={handleChangeEndereco}
          placeholder="cidade"
        />
        <input
          type="text"
          name="bairro"
          value={userData.bairro}
          onChange={handleChangeEndereco}
          placeholder="bairro"
        />
        <input
          type="text"
          name="logradouro"
          value={userData.logradouro}
          onChange={handleChangeEndereco}
          placeholder="logradouro"
        />
        <input
          type="text"
          name="complemento"
          value={userData.complemento}
          onChange={handleChangeEndereco}
          placeholder="complemento"
        />
        <input
          type="text"
          name="numero"
          value={userData.numero}
          onChange={handleChangeEndereco}
          placeholder="numero"
        />
        <input
          type="text"
          name="cep"
          value={userData.cep}
          onChange={handleChangeEndereco}
          placeholder="cep"
        /> 
                
        <button type="submit">Registrar usuario</button>
      </form>
    </div>
  );
};
export default RegistraUser;