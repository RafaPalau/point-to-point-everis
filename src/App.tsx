import { useEffect, useState } from "react";
import { api } from "../src/services/api";
import Select from "react-select";
import * as S from "./styles";
import { CityError } from "../src/components/CityError";
import { WaitImage } from "./components/WaitImage";

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
  }

  function handleChangeCitie2(selectOption: any) {
    setCidade2(selectOption.value);
  }
  const distancia = Number(resultByCube) / 1000;

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

                  <h2>{`Distancia de ${Number(resultByPoint).toFixed(
                    0
                  )} milhas`}</h2>

                  </div>

                  <div>

                  <h2>{`Distancia de ${Number(distancia).toFixed(0)} km`}</h2>
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
