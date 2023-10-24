import styled from "styled-components";

export const Container = styled.div`

.box-container{
  display: grid;
  gap: 16px;
  margin-bottom: 32px;
}

.container-title, .container-description, .container-reward{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 4px 4px 8px rgba(0,0,0,0.25);

  text-align: center;

  margin: 0 16px;

  border-radius: 12px;
}

.title-name, .title-description, .title-reward, .value{
  width: 100%;
  padding: 16px;

}

.title-name, .title-description, .title-reward{
  position: relative;

  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 130px;
  font-size: 14px;
  font-weight: bold;

  color: ${({theme}) => theme.COLORS.WHITE};

  box-shadow: rgba(0,0,0,0.25) 0px 6px 4px;

  border-radius: 12px 12px 0 0;

  overflow: hidden;

  font-size: 16px;
}

.title-name{
  background-color: ${({theme}) => theme.COLORS.VIOLET_100};
}
.title-description{
  background-color: ${({theme}) => theme.COLORS.PINK_100};
}
.title-reward{
  background-color: ${({theme}) => theme.COLORS.TURQUOSE_100};
}

.value{
  background-color: ${({theme}) => theme.COLORS.WHITE};

  border-radius: 0 0 12px 12px;

  color: ${({theme}) => theme.COLORS.GRAY_700};
}

.absolute{
  position: absolute;
}

//CARD NAME
.boy_image{
  left: -8px;
  bottom: -2px;
  z-index: -1;
}
.girl_image{
  right: -24px;
  bottom: -2px;
  z-index: -1;
}
.boll_soap_left_image{
  bottom: 0;
  left: -5px;
  z-index: 0;
}
.boll_soap_right_image{
  bottom: -20px;
  right: 0;
  z-index: -4;
}
.cloud_soap_image{
  right: 0;
  bottom: -24px;
}
.floor_cyan, .floor_green{
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;
  height: 32px;
  background-color: ${({theme})=> theme.COLORS.CYAN_700};
  z-index: -6;
}
.floor_green{
  background-color: #0E9262;
}

//DESCRIPTION CARD
.girl_left_image{
  left: -14px;
  bottom: -12px;
  z-index: -1;
}
.sheet_girl_right_image{
  right: 0px;
  bottom: 0px;
  z-index: -1;
}

//REWARD CARD
.mom_girl_money_left_image{
  left: -14px;
  bottom: -12px;
  z-index: -1;
}
.sheet_right_side{
  right: -28px;
  bottom: -24px;
  z-index: -1;
}

.custom-modal{
  position: absolute;
  z-index: 1000;
}

`