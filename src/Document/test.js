export const eFacturaXml = `
  <CFE_Empresas_Type xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <CFE version="1.0" xmlns="http://cfe.dgi.gub.uy">
      <eFact>
        <TmstFirma>2020-02-18T14:45:21.3686037-03:00</TmstFirma>
        <Encabezado>
          <IdDoc>
            <TipoCFE>111</TipoCFE>
            <Serie>A</Serie>
            <Nro>39413</Nro>
            <FchEmis>2020-02-18</FchEmis>
            <FmaPago>2</FmaPago>
            <InfoAdicionalDoc />
          </IdDoc>
          <Emisor>
            <RUCEmisor>210154140015</RUCEmisor>
            <RznSoc>Garino Hnos S.A</RznSoc>
            <NomComercial>GARINO HNOS</NomComercial>
            <Telefono>24096395</Telefono>
            <CorreoEmisor>contacto@garino.com.uy</CorreoEmisor>
            <EmiSucursal>GASTON</EmiSucursal>
            <CdgDGISucur>3</CdgDGISucur>
            <DomFiscal>Goes 2096</DomFiscal>
            <Ciudad>Montevideo</Ciudad>
            <Departamento>Montevideo</Departamento>
            <InfoAdicionalEmisor />
          </Emisor>
          <Receptor>
            <TipoDocRecep>2</TipoDocRecep>
            <CodPaisRecep>UY</CodPaisRecep>
            <DocRecep>210639630014</DocRecep>
            <RznSocRecep>BANCO HIPOTECARIO DEL URUGUAY</RznSocRecep>
            <DirRecep>* FERNANDEZ CRESPO 1508</DirRecep>
            <CiudadRecep>MONTEVIDEO</CiudadRecep>
            <DeptoRecep>MONTEVIDEO</DeptoRecep>
          </Receptor>
          <Totales>
            <TpoMoneda>UYU</TpoMoneda>
            <TpoCambio>1.000</TpoCambio>
            <MntNetoIVATasaBasica>2550</MntNetoIVATasaBasica>
            <IVATasaMin>10</IVATasaMin>
            <IVATasaBasica>22</IVATasaBasica>
            <MntIVATasaBasica>561</MntIVATasaBasica>
            <MntTotal>3111.00</MntTotal>
            <MntTotCredFisc>0</MntTotCredFisc>
            <CantLinDet>1</CantLinDet>
            <MntPagar>3111.00</MntPagar>
          </Totales>
        </Encabezado>
        <Detalle>
          <Item>
            <NroLinDet>1</NroLinDet>
            <IndFact>3</IndFact>
            <NomItem>B916##3024##Incremento Mantenimiento</NomItem>
            <DscItem />
            <Cantidad>1</Cantidad>
            <UniMed>N/A</UniMed>
            <PrecioUnitario>2550.00</PrecioUnitario>
            <DescuentoPct>0</DescuentoPct>
            <MontoItem>2550.00</MontoItem>
          </Item>
          <Item>
            <NroLinDet>2</NroLinDet>
            <IndFact>3</IndFact>
            <NomItem>B916##3024##Incremento Mantenimiento</NomItem>
            <DscItem />
            <Cantidad>1</Cantidad>
            <UniMed>N/A</UniMed>
            <PrecioUnitario>2550.00</PrecioUnitario>
            <DescuentoPct>0</DescuentoPct>
            <MontoItem>2550.00</MontoItem>
          </Item>
        </Detalle>
        <SubTotInfo />
        <DscRcgGlobal />
        <MediosPago />
        <Referencia />
        <CAEData>
          <CAE_ID>90191364539</CAE_ID>
          <DNro>39401</DNro>
          <HNro>44400</HNro>
          <FecVenc>2021-12-17</FecVenc>
        </CAEData>
      </eFact>
      <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
        <SignedInfo>
          <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
          <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
          <Reference URI="">
            <Transforms>
              <Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
              <Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
            </Transforms>
            <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />
            <DigestValue>CZOgJZ5YH6R2GHE0zJufRZ5U3+Q=</DigestValue>
          </Reference>
        </SignedInfo>
        <SignatureValue>CRAzc5WmZ5LW799E6B5c8XOiHYwfugQMD+iFL7TPxNWqWGV12G+fkgOU1pbOhUoXI+fBq/WNuciAaOVkebOEoQ3Z2rsSnoJCkUqTswK0Hne1KUp103iX0SjWgFrmQmYSHm+y8uUS9FCRQ3ajVe8mnMfmM0UdFlkjeS6PgLSdYe44WCv0CsirtUOZ6ecTf7TFTk471ILqrCjMuVRpu5kPcb+j3aAEsbpA4jqnJBg7uvarZpLFNTnScERB5eX1OBIkyXW/+WTp0mQlzah1OO8LMTNXWnXlo3ZCfRpX87zmSRZQtWXwPXRA7dBWVnm0kwf4sPl9jBXLAzgQ9ANtCWv7YQ==</SignatureValue>
        <KeyInfo>
          <X509Data>
            <X509IssuerSerial>
              <X509IssuerName>CN=Abitab, OU=ID digital, O=Abitab S.A., L=Montevideo, C=UY</X509IssuerName>
              <X509SerialNumber>52706771094152360768808913859520816024419690310</X509SerialNumber>
            </X509IssuerSerial>
          </X509Data>
        </KeyInfo>
      </Signature>
    </CFE>
    <Adenda xsi:type="xsd:string" xmlns="http://cfe.dgi.gub.uy">
      <DireccionEnrtega>* FERNANDEZ CRESPO 1508</DireccionEnrtega>
      <Departamento>Montevideo</Departamento>
      <Observaciones1>Rubro: 916-140363///OC 112/2019 - CORRESP. AL MES</Observaciones1>
      <Observaciones2>02/2020.</Observaciones2>
      <Observaciones3></Observaciones3>
      <Observaciones4></Observaciones4>
      <OrdenCompra>N</OrdenCompra>
      <Rubro>916</Rubro>
      <CondicionPago>30 DIAS FECHA FACTURA</CondicionPago>
      <Vendedor>FERREIRA</Vendedor>
      <Horario></Horario>
      <CiudadEntrega></CiudadEntrega>
      <DepartamentoEntrega></DepartamentoEntrega>
      <SerieInterno>A</SerieInterno>
      <NumneroInterno>277984</NumneroInterno>
      <NumeroCliente>874</NumeroCliente>
    </Adenda>
  </CFE_Empresas_Type>
`;
