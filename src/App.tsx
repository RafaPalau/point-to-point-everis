import { useEffect, useState } from "react";
import { api } from "../src/services/api";
import Select from "react-select";
import * as S from "./styles";
import { CityError } from "../src/components/CityError";
import { WaitImage } from "./components/WaitImage";

import kmImage from "../src/assets/kmImage.svg";
import milhasImage from "../src/assets/milhasImage.svg";
interface CitiesProps {
  id: number;
  name: string;
  uf: number;
  ibge: number;
  geolocation: string;
  location: {
    x: number;
    y: number;
  };
}

export default function App() {
  const [cidade1, setCidade1] = useState(5222);
  const [cidade2, setCidade2] = useState(4855);
  const [resultByPoint, setResultByPoint] = useState();
  const [resultByCube, setResultByCube] = useState();
  const [cities, setCities] = useState<CitiesProps[]>([]);

  useEffect(() => {
    api
      .get(`/cities?size=5000`)
      .then((response) => setCities(response.data.content));
  }, []);
  useEffect(() => {
    api
      .get(`/distances/by-cube?from=${cidade1}&to=${cidade2}`)
      .then(({ data }) => setResultByCube(data));
  }, [cidade1, cidade2]);

  useEffect(() => {
    api
      .get(`/distances/by-points?from=${cidade1}&to=${cidade2}`)
      .then(({ data }) => setResultByPoint(data));
  }, [cidade1, cidade2]);

  const options = cities.map((citie) => ({
    value: citie.id,
    label: citie.name,
  }));

  function handleChangeCitie1(selectOption: any) {
    setCidade1(selectOption.value);
    localStorage.setItem("@desafio-everis:city1", JSON.stringify(cidade1));
  }

  function handleChangeCitie2(selectOption: any) {
    setCidade2(selectOption.value);
    localStorage.setItem("@desafio-everis:city2", JSON.stringify(cidade2));
  }
  const resultKm = (Number(resultByCube) / 1000).toFixed(2);
  const resultMilhas = Number(resultByPoint).toFixed(2);

  return (
    <S.Container>
      <>
        <div>
          {cidade2 === cidade1 ? (
            <CityError />
          ) : (
            <>
              <h1>Escolha duas cidades diferentes</h1>
              <S.Form>
                <Select
                  options={options}
                  onChange={handleChangeCitie1}
                ></Select>
                <Select
                  options={options}
                  onChange={handleChangeCitie2}
                ></Select>
              </S.Form>

              {cidade2 === 4855 || cidade1 === 5222 ? (
                <WaitImage />
              ) : (
                <S.ContainerResult>
                  <div>
                    <S.ResultDistance>
                      {resultMilhas}
                      <span> Milhas</span>
                    </S.ResultDistance>
                    <img src={milhasImage} alt='' />
                  </div>
                  <div>
                    <S.ResultDistance>
                      {resultKm}
                      <span> Quilômetros</span>
                    </S.ResultDistance>
                    <img src={kmImage} alt='' />
                  </div>
                </S.ContainerResult>
              )}
            </>
          )}
        </div>
      </>
    </S.Container>
  );
}
