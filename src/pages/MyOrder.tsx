import '../styles/myorder.scss';


export function MyOrder() {


    return(
        <>
          <div className="geral-container">
              <h1 className="title-container">Carrinho de Compra</h1>
              <div className="itens-container">
                <div className="block-itens">
                    <div className="block-item">

                        <div className="description-item">
                        
                            <img className="img-carrinho" src="https://raw.githubusercontent.com/Marlon-Paulo-da-Silva/MartechEcom/main/src/assets/images/10.png" alt="imagemitem" />
                            <div className="about-item">
                                <span>Name: Tenis Nike</span>
                                <span>Preço: 29.99</span>
                            </div>
                        </div>
                        <div className="qtde-item">Quantidade: 3</div>
                    </div>

                     <div className="block-item">

                        <div className="description-item">
                        
                            <img className="img-carrinho" src="https://raw.githubusercontent.com/Marlon-Paulo-da-Silva/MartechEcom/main/src/assets/images/10.png" alt="imagemitem" />
                            <div className="about-item">
                                <span>Nome: Tenis Nike</span>
                                <span>Preço: 29.99</span>
                            </div>
                        </div>
                        <div>
                        <div className="qtde-item">Quantidade: 3</div>
                        <div className="qtde-price">Total: 3</div>
                        </div>
                    </div>
                </div>
                <div className="final-order">
                <div className="qtde-total">Valor total: 6767,00</div>
                <button className="final-order-button">Finalizar Pedido</button>
                </div>
              </div>
          </div>

        </>
    )
}