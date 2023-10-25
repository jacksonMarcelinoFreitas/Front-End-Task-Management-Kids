import { ColorRing } from "react-loader-spinner";
import { Container } from "./style";
import { IButtonProps } from './type';

export function Button({ Icon, value, type, disabled, onClick, className, isLoading, ...rest }: IButtonProps){

  const buttonClass = disabled ? 'disabled-button' : '';

  return(
    <Container
      type={type}
      onClick={onClick}
      className={`${className} ${buttonClass}`}
      {...rest}
    >

      {!isLoading ?
        <div className="valueButton">
          {Icon&& <Icon size={22}/>} {value}
        </div>
        :
        <div className="loaderButton">
          <ColorRing
            visible={true}
            height="32"
            width="32"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#C88FEB', '#AD49EB', '#F288A4', '#F03F6D', '#31DB9D']}
          />
          <span>loading...</span>
        </div>
      }
    </Container>
  )
}
