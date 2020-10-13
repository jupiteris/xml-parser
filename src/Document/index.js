import React, { useEffect, useState } from 'react';
import convert from 'xml-js';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

import { TitleDivider } from './TitleDivider';
import { FieldList } from './FieldList';
import { CustomTable } from './CustomTable';
import { QRGenerater } from './QRGenerater';
import './document.css';

import { eFacturaXml } from './test';

const generateQRUrl = (CFE) => {
  const { eFact, Signature } = CFE;
  const { Encabezado, Detalle, CAEData } = eFact;
  const { Emisor, Receptor, Totales, IdDoc } = Encabezado;
  let urlQR = 'https://www.efactura.dgi.gub.uy/consultaQR/cfe?';
  urlQR += Emisor['RUCEmisor']?._text;
  urlQR += IdDoc['TipoCFE']?._text;
  urlQR += IdDoc['Serie']?._text;
  urlQR += IdDoc['Nro']?._text;

  //A.Quintana: Mantis 0014891
  // switch(IdDoc['TipoCFE']?._text){
  //   case '181':
  //     urlQR += ',0'
  //     break;
  //     case '181':
  //     urlQR += ',0'
  //     break;
  //     case '181':
  //     urlQR += ',0'
  //     break;
  //     default:
  //       urlQR += ','+ +
  // }

  return urlQR;
};

const emisorStyle = {
  name: { color: '#012255', fontWeight: 'bold' },
  content: {}
};

const idDocStyle = {
  name: {},
  content: {}
};

const receptorStyle = {
  name: { color: '#012255', fontSize: 12, fontWeight: 'bold' },
  content: { fontSize: 12 }
};

const adendaStyle = {
  item: { display: 'flex', justifyContent: 'space-between', padding: '2px 20px' }
};

export const Document = () => {
  const [xml, setXml] = useState(null);
  useEffect(() => {
    const options = {
      compact: true,
      spaces: 4,
      ignoreComment: true
    };
    const result = JSON.parse(convert.xml2json(eFacturaXml, options));
    const { CFE } = result['CFE_Empresas_Type'];
    const { eFact, Signature } = CFE;
    const { Encabezado, Detalle, CAEData } = eFact;
    const { Emisor, Receptor, Totales, IdDoc } = Encabezado;
    const emisor = [
      { name: 'Razón Social', content: Emisor['RznSoc']?._text },
      { name: 'RUT', content: Emisor['RUCEmisor']?._text },
      { name: 'Descripción', content: Emisor['DomFiscal']?._text },
      { name: 'Telefax', content: Emisor['Telefono']?._text },
      { name: 'E-mail', content: Emisor['CorreoEmisor']?._text },
      { name: 'Giro', content: Emisor['GiroEmis']?._text }
    ];
    const idDoc = [
      { name: 'N', content: IdDoc['Serie']?._text },
      { name: 'Forma de pago', content: IdDoc['FmaPago']?._text },
      { name: 'Emisión', content: moment(IdDoc['FchEmis']?._text).format('L') },
      { name: 'Vencimiento', content: IdDoc['FchVenc']?._text },
      { name: 'Período desde', content: IdDoc['PeriodoDesde']?._text },
      { name: 'Período hasta', content: IdDoc['PeriodoHasta']?._text }
    ];
    const receptor = [
      { name: 'Señor(es)', content: Receptor['RznSocRecep']?._text },
      { name: 'Dirección', content: Receptor['DirRecep']?._text },
      { name: 'Ciudad', content: Receptor['CiudadRecep']?._text }
    ];
    const totales = [
      { name: 'Moneda', content: Totales['TopMoneda']?._text },
      { name: 'Tipo de cambio', content: Totales['TpoCambio']?._text },
      { name: 'Sub-total', content: Totales['MntTotal']?._text },
      { name: 'I.V.A. T/B', content: Totales['MntNetoIVATasaBasica']?._text },
      { name: 'I.V.A. T/M', content: Totales['MntNetoIVATasaMin']?._text },
      { name: 'I.V.A. O/T', content: Totales['MntNetoIVAOtra']?._text },
      { name: 'Monto NG', content: Totales['MntNoGrv']?._text },
      { name: 'TOTAL', content: Totales['MntPagar']?._text }
    ];
    const detalle = {
      headers: [
        { name: 'N' },
        { name: 'Nombre Item' },
        { name: 'Descripción' },
        { name: 'Cantidad', align: 'center' },
        { name: 'Período unitario', align: 'center' },
        { name: 'Importe', align: 'center' }
      ],
      rows: Detalle?.Item?.length
        ? Detalle?.Item.map((i) => ({
            no: i['NroLinDet']?._text,
            name: i['NomItem']?._text,
            description: i['DscItem']?._text,
            quantity: i['Cantidad']?._text,
            unit: i['PrecioUnitario']?._text,
            imported: i['MontoItem']?._text
          }))
        : []
    };
    const globales = {
      headers: [
        { name: 'N', align: 'center' },
        { name: 'Tipo de movimiento', align: 'center' },
        { name: 'Tipo', align: 'center' },
        { name: 'Código', align: 'center' },
        { name: 'Glosa' },
        { name: 'Indicador de fact', align: 'center' },
        { name: 'Valor', align: 'center' }
      ],
      rows: []
    };
    const caeData = [
      'Puede vrificar el comprobante en ww.dgi.gub.uy',
      '(Constancia de IVA dia)',
      'CAE: ' + CAEData['CAE_ID']?._text,
      'Serie: ' + IdDoc['Serie']?._text,
      'Rango: ' + CAEData['DNro']?._text + ' - ' + CAEData['HNro']?._text,
      'Fecha de vencimiento: ' + CAEData['FecVenc']?._text
    ];
    setXml({
      emisor: emisor,
      idDoc: idDoc,
      receptor: receptor,
      rut: Receptor['DocRecep']._text,
      totales: totales,
      detalle: detalle,
      globales: globales,
      caeData: caeData,
      nomComercial: Emisor['NomComercial']?._text,
      digestValue: Signature['SignedInfo']?.['Reference']?.['DigestValue']?._text,
      url: generateQRUrl(CFE)
    });
  }, []);
  return (
    <div className="doc">
      <p className="doc-type">E-Factura</p>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <TitleDivider text="datos del emisor" />
          <FieldList data={xml?.emisor ?? []} dataStyle={emisorStyle} title={xml?.nomComercial} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TitleDivider text="datos del comprobante" />
          <FieldList data={xml?.idDoc ?? []} dataStyle={idDocStyle} title="e-factura" />
        </Grid>
        <Grid container item xs={12} direction="row" justify="center">
          <Grid item xs={12}>
            <TitleDivider text="datos del receptor" />
          </Grid>
          <Grid item xs={12} md={8}>
            <FieldList data={xml?.receptor ?? []} dataStyle={receptorStyle} />
          </Grid>
          <Grid item xs={12} md={4} className="box rut">
            <span>rut</span>
            <span>{xml?.rut ?? ''}</span>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TitleDivider text="detalle" />
          {xml?.detalle && <CustomTable data={xml?.detalle} />}
        </Grid>
        <Grid item xs={12}>
          <TitleDivider text="descuentos Y recargos globales" />
          {xml?.globales && <CustomTable data={xml?.globales} />}
        </Grid>
        <Grid item xs={12}>
          <TitleDivider text="" />
        </Grid>
        <Grid container item xs={12} direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={8}>
            {xml?.url && <QRGenerater infos={xml?.caeData ?? []} signature={xml?.digestValue} url={xml?.url} />}
          </Grid>
          <Grid item xs={12} md={4} className="box">
            <FieldList data={xml?.totales ?? []} dataStyle={adendaStyle} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TitleDivider text="adenda" />
        </Grid>
        <Grid item xs={12}>
          <TitleDivider />
        </Grid>
      </Grid>
    </div>
  );
};
