import { TitleNavigation } from "../../components/TitleNavigation";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

import {
  boll_soap_background_right_svg,
  boll_soap_background_left_svg,
  cloud_soap_background_svg,
  girl_cleaning_svg,
  boy_cleaning_svg,
} from "../../assets/name_task_background";

import {
  girl_right_svg,
  girl_left_svg,
} from "../../assets/description_task_background";

import {
  mom_girl_money_right_svg,
  mom_girl_money_left_svg
} from "../../assets/reward_task_background";
import { toast } from "react-toastify";


export function ShowTask(){
  const navigate = useNavigate();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    reward: 0,
    description: '',
  });

  useEffect(()=>{

    async function fetchChild(){
      try {

        setIsLoading(true);
        const response = await api.get(`/v1/task/${id}`);

        const task = response.data;

        setData({
          name: task.name,
          reward: task.reward,
          description: task.description,
        });

        setIsLoading(false);

      } catch (error: any) {
        if (error.response) {
          toast.error('Erro');
          setIsLoading(false);
        }
      }

    }

    fetchChild();

  },[]);

  return(
    <Container>
      <Header />
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#74309D"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={isLoading}
        />
        ) : (
          <div className="wrapper-container">
            <div className="intern-container">
              <TitleNavigation
                titleButton="Voltar"
                onClick={() => navigate('/')}
              />
              <div className="box-container">
                <div className="container-title">
                  <div className="title-name">
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(boy_cleaning_svg)}`} className="boy_image absolute" alt="boy cleanind house image" />
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(girl_cleaning_svg)}`} className="girl_image absolute" alt="girl whashing clothes image" />
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(boll_soap_background_left_svg)}`} className="boll_soap_left_image absolute" alt="boll soap floating" />
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(boll_soap_background_right_svg)}`} className="boll_soap_right_image absolute" alt="bool soap in the right side" />
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(cloud_soap_background_svg)}`} className="cloud_soap_image absolute" alt="cloud soap in the right side" />
                    <div className="floor_cyan absolute"></div>
                    <h2>Nome da atividade</h2>
                  </div>
                  <div className="value">
                    <p>{data.name}</p>
                  </div>
                </div>
                <div className="container-reward">
                  <div className="title-reward">
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(mom_girl_money_left_svg)}`} className="mom_girl_money_left_image absolute" alt="mom with a girl child" />
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(mom_girl_money_right_svg)}`} className="sheet_right_side absolute" alt="sheet in the right side" />
                    <div className="floor_green absolute"></div>
                    <h2>Recompensa</h2>
                  </div>
                  <div className="value">
                    <p>R${data.reward}</p>
                  </div>
                </div>
                <div className="container-description">
                  <div className="title-description">
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(girl_left_svg)}`} className="girl_left_image absolute" alt="girl with notes" />
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(girl_right_svg)}`} className="sheet_girl_right_image absolute" alt="sheet in right side" />
                    <div className="floor_green absolute"></div>
                    <h2>Descrição</h2>
                  </div>
                  <div className="value">
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </Container>
  )
}
