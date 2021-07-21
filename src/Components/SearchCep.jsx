import {useState} from 'react';
import { Button } from './Button';
import Inputdiv from './Inputdiv';
import Title from './Title';

function SearchCep(){
    const [data, setData] = useState({})
    const [search, setSearch] = useState('')

    
    function handleTextChange(e){
        document.getElementById("button_search").disabled = true;
       
        let cep = e.target.value
        e.preventDefault()
        if (cep.length === 8){
            setSearch(cep)
            document.getElementById("button_search").disabled = false;
           
        }
    }
    
    function searchData(){
        fetch(`https://viacep.com.br/ws/${search}/json/`)
         .then(res => res.json())
         .then(res => 
         setData(res))
    }

    return(
        <div>
            
            <Title/>
            <section      
            >
            <Button.Inp type="text" placeholder="Digite o seu CEP" onChange = {handleTextChange} />
            <Button.Btn onClick={searchData} id="button_search"  >Pesquisar </Button.Btn>
            </section>
            <div style={{backgroundColor:"#eee", width: "1000px", margin: "auto", borderRadius: "4px", paddingTop: "20px", paddingBottom: "20px"}}>
                <Inputdiv placeholder="Cidade" value={data.localidade} label={"Cidade"}  />
                <Inputdiv placeholder="Bairro" value={data.bairro} label={"Bairro"} />
                <Inputdiv placeholder="Endereço" value={data.logradouro} label={"Endereço"}  />
                <Inputdiv placeholder="UF" value={data.uf} label={"UF"} />
                <Inputdiv placeholder="Complemento" value={data.complemento} label={"Complemento"} />
            </div>
        </div>
    )
}

export default SearchCep;