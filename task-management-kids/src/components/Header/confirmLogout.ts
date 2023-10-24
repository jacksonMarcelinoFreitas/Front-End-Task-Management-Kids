//content logout modal
export const confirmLogout = (`
<html>
    <head>
        <style>
          div{
            z-index: 2;
          }
          h1{
            font-size: 24px;
            font-family: 'Inter', sans-serif;
            color: #74309D;
            width: 100%;
            text-align: center;
          }
        </style>
    </head>
    <body>
        <h1>Deseja realmente sair?</h1>
    </body>
</html>

`
);

export const customModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.452)',
  },

  content: {
    className: 'custom-modal',
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