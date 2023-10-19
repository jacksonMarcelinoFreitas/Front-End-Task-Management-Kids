export const confirmDeleteChild = (`
<html>
    <head>
        <style>
          h1{
            font-size: 24px;
            font-family: 'Inter', sans-serif;
            color: #74309D;
            width: 100%;
            text-align: center;

            margin-bottom: 8px;
          }
          p{
            font-family: 'Inter', sans-serif;
            color: white;
            font-size: 16px;
            text-align: center;
            line-height: 22px;
          }
        </style>
    </head>
    <body>
        <h1>Deseja realmente excluir?</h1>
        <p>Obs: A exclusão desta criança incorrerá na exclusão das tarefas relacionadas a ela!</p>
    </body>
</html>

`
);

export const customModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.452)',
  },

  content: {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as 'column',
    backgroundColor: 'transparent',
    borderRadius: '16px',
    border: 'none',
  },
}