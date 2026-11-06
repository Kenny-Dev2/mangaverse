export function StoreHeader() {
  return (
    <header>
      <div>
        <div>
           <span>BR</span>
           <span>FRETE GRÁTIS ACIMA DE R$ 199 PARA TODO O BRASIL</span>
           <span>ENVIO EXPRESSO</span>
        </div>
        <div>
          <div>
            <span>{/* Icone garantia */}</span>
            <span>Autenticidade Garantida</span>
          </div>
          <span>|</span>
          <div>
            <span>{/* Icone sac */}</span>
            <span>SAC 24/7 </span>
          </div>
        </div>
      </div>
      <div>
        {/* Logo */}
        <input type="search" name="search" placeholder="Procure pelo seu mangá" aria-label="Pesquisar mangás" /> 
        <div>
          <div>
            <span>{/* Icone perfil  */}</span>
            <div>
              <span>MINHA CONTA</span>
              <span>Entrar / Criar Conta</span>
            </div>
          </div>
          <div>
            <span>{/* Icone sacola */}</span>
          </div>
        </div>
      </div> 
    </header>
  );
}