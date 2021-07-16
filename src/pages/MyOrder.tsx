import '../styles/myorder.scss';


export function MyOrder() {


    return(
        <>
          <div className="geral-container">
              <h1 className="title">Carrinho de Compra</h1>
              <div className="itens-container">
              <div className="block-itens">
                  <div className="block-item">
                      <div className="description-item">
                          <img src="" alt="" />
                          <div className="about-item">
                              <span></span>
                              <span></span>
                          </div>
                      </div>
                      <div className="qtde-item"></div>
                  </div>
              </div>
              </div>
          </div>

        </>
    )
}