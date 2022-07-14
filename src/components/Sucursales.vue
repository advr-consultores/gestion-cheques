<template>
  <!-- <v-select
    v-model="sucursal"
    :items="sucursales[estado][municipio][cliente]"
    label="Sucursales (CR)"
    no-data-text="No hay inmuebles"
  /> -->
  <v-autocomplete
    v-model="sucursal"
    :items="sucursales[estado][municipio][cliente]"
    label="Sucursales"
    chips
    multiple
    no-data-text="No se encontraron sucursales."
  >

  </v-autocomplete>
</template>

<script>
export default {
  props: {
    estado: { type: String, default: '' },
    municipio: { type: String, default: '' },
    cliente: { type: String, default: '' },
    id: { type: String, default: '' }
  },
  data: () => ({
    sucursalSeleccionada: null,
    sucursales: {
      Guerrero: {
        "IGUALA DE LA INDEPENDENCIA": {
          BBVA: ["(125) IGUALA CENTRO", "(4651) GALERIAS"],
          CITI:["SUC. IGUALA/EDIF. (17533)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "CHILPANCINGO DE LOS BRAVO": {
          BBVA: ["(557) CHILPANCINGO OFNA. PRINCIPAL", "(4697) CHILPANCINGO", "(5553) CHILPANCINGO", "(7695) GOBIERNO GUERRERO / EMPRESAS CHILPANCINGO"],
          CITI:[
            "SUC. CHILPANCINGO/EDIF. (17540)",
            "SUC. CIUDAD ADMINISTRATIVA/EDIF. (26750)",
            "SUC. GALERIAS LIVERPOOL CHILPANCINGO (42952)",
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        "ACAPULCO DE JUAREZ": {
          BBVA: ["(580) ACAPULCO CONVENCIONES", "(581) ACAPULCO PROGRESO", "(582) ACAPULCO ZOCALO", "(583) SITE ACAPULCO MIGUEL ALEMAN", "(584) ACAPULCO FLAMBOYANT", "(927) SITE ACAPULCO MIGUEL ALEMAN", "(1548) GALERÍAS DIANA ", "(1559) PATIO ACAPULCO", "(2395) H ACAPULCO", "(3031) CENTRO PYME ACAPULCO", "(4661) PLAZA SENDERO ACAPULCO", "(5053) ACAPULCO DIAMANTE",
          "(5540) ACAPULCO VARIEDADES", "(5543) ACAPULCO EJIDO", "(5544) ACAPULCO CUAUHTEMOC", "(6359) ACAPULCO"],
          CITI:[
            "SUC. COSTERA/EDIF. (17547)",
            "SUC. ACAPULCO/EDIF. (17548)",
            "SUC. PROGRESO (17550)",
            "SUC. COSTA AZUL/EDIF. (17551)",
            "SUC. SABANA (17552)",
            "SUC. EJIDO (17553)",
            "SUC. ACAPULCO DIAMANTE (37360)",
            "SUC. CONSTITUYENTES ACAPULCO (38974)"
          ],
          MOVISTAR:["(12-03040) PARQUE PAPAGALLO"],
          SCOTIABANK:[]
        },
        OMETEPEC: {
          BBVA: ["(874) OMETEPEC OFICINA PRINCIPAL"],
          CITI:["SUC. OMETEPEC (REUB) (50943)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TAXCO DE ALARCON": {
          BBVA: ["(1553) LAS AMERICAS TAXCO", "(5561) TAXCO PLATEROS", "(5562) TAXCO OF. PRINCIPAL"],
          CITI:["SUC. TAXCO (17521)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "SAN MARCOS": {
          BBVA: ["(4637) SAN MARCOS GUERRERO"],
          CITI:["SUC. SAN MARCOS (17523)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TLAPA DE COMONFORT": {
          BBVA: ["(5086) TLAPA"],
          CITI:[
            "SUC. TLAPA DE COMONFORT (17519)"
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        TIXTLA: {
          BBVA: ["(5309) TIXTLA"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "HUITZUCO DE LOS FIGUEROA": {
          BBVA: ["(5555) CHICHIHUALCO"],
          CITI:["SUC. HUITZUCO (REUB) (17536)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "ATOYAC DE ALVAREZ": {
          BBVA: ["(5563) ATOYAC CENTRO"],
          CITI:["SUC. ATOYAC DE ALVAREZ GUERRERO (17545)"], MOVISTAR:[], SCOTIABANK:[]
        },
        PUNGARABATO: {
          BBVA: ["(5565) ALTAMIRANO GRO."],
          CITI:[
            "SUC. CD ALTAMIRANO (NUEVA) (17524)"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        PETATLAN: {
          BBVA: ["(5567) PETATLAN CENTRO"],
          CITI:["SUC. PETATLAN (30232)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TECPAN DE GALEANA": {
          BBVA: ["(5568) TECPAN CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        ARCELIA: {
          BBVA:["(5570) ARCELIA CENTRO"],
          CITI:["SUC. ARCELIA GUERRERO (17546)"], MOVISTAR:[], SCOTIABANK:[]
        },
        TELOLOAPAN: {
          BBVA: ["(5572) TELOLOAPAN"],
          CITI:["SUC. TELOLOAPAN (17520)"], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CHILAPA DE ALVAREZ": {
          BBVA: ["(5574) CHILAPA CENTRO"],
          CITI:["SUC. CHILAPA (17543)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "ZIHUATANEJO DE AZUETA": {
          BBVA: ["(5576) ZIHUATANEJO CENTRO", "(5577) IXTAPA OFICINA PRINCIPAL IXTAPA"],
          CITI:["SUC. ZIHUATANEJO (17527)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "COYUCA DE BENITEZ": {
          BBVA: [],
          CITI:["SUC. COYUCA (17539)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "AYUTLA DE LOS LIBRES": {
          BBVA: [],
          CITI:["SUC. AYUTLA (30227)"], MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Zacatecas: {
        FRESNILLO: {
          BBVA: ["(311) FRESNILLO ALLENDE", "(868) SORIANA FRESNILLO "],
          CITI:[ "(20873) SUC. FRESNILLO" ], MOVISTAR:[], SCOTIABANK:["FRESNILLO"]
        },
        GUADALUPE: {
          BBVA: ["(313) ZACATECAS LOPEZ PORTILLO", "(5967) GUADALUPE CENTRO"],
          CITI:[
            "(20870) SUC. LA FLORIDA",
            "(20872) EDIF. LOPEZ PORTILLO 101",
            "(26545) SUC. GUADALUPE ZAC",
          ],
          MOVISTAR:[], SCOTIABANK:[]  
        },
        JEREZ: {
          BBVA: ["(490) JERÉZ GARCÍA SALINAS"],
          CITI:[ "(20867) SUC. JEREZ"], MOVISTAR:[], SCOTIABANK:[]
        },
        ZACATECAS: {
          BBVA: ["(2335) H ZACATECAS", "(2467) PLAZA ALESSIA", "(5021) ZACATECAS PLAZA TAHONA", "(5952) ZACATECAS CENTRO", "(5953) ZACATECAS OFNA. PRINCIPAL", "(6345) ZACATECAS"],
          CITI:["(20861) SUC. ZACATECAS/EDIF"],
          MOVISTAR:["(732TYO01) CAC ZACATECAS"],
          SCOTIABANK:["COLINAS", "ZACATECAS"]  
        },
        JALPA: {
          BBVA: ["(3963) JALPA CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        JUCHIPILA: {
          BBVA: ["(3964) JUCHIPILA CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "NOCHISTLAN DE MEJIA": {
          BBVA: ["(3966) NOCHISTLAN CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        LORETO: {
          BBVA: ["(3968) LORETO CENTRO"],
          CITI:[ "(20866) SUC. LORETO ZAC"], MOVISTAR:[], SCOTIABANK:[]
        },
        TABASCO: {
          BBVA: ["(3970) TABASCO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        SOMBRERETE: {
          BBVA: ["(5288) SOMBRERETEf"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        PINOS: {
          BBVA: ["(5780) PINOS CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        "RIO GRANDE": {
          BBVA: ["(5956) RIO GRANDE CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "TLALTENANGO DE SANCHEZ ROMAN": {
          BBVA: ["(5961) TLALTENANGO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CALERA": {
          BBVA: ["(5963) CALERA 5 DE MAYO"],
          CITI:[ "(20880) SUC. CALERA", "(39990) SUC. MODELO ZACATECAS]"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "JUAN ALDAMA": {
          BBVA: ["(5965) JUAN ALDAMA CENTENARIO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        OJOCALIENTE: {
          BBVA: ["(5968) OJOCALIENTE CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        VALPARAISO: {
          BBVA: ["(5969) VALPARAISO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "MONTE ESCOBEDO": {
          BBVA: ["(5971) MONTE ESCOBEDO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "TEUL DE GONZALEZ ORTEGA": {
          BBVA: ["(5972) TEUL DE GONZALEZ ORTEGA CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
      },
      "San Luis Potosi": {
        MATEHUALA: {
          BBVA: ["(330) MATEHUALA HIDALGO", "(5283) MATEHUALA"],
          CITI:[ "(20543) SUC. MATEHUALA" ], MOVISTAR:[], SCOTIABANK:[]
        },
        "SAN LUIS POTOSI": {
          BBVA: [
            "(331) SAN LUIS POTOSI MUÑOZ", "(332) SAN LUIS POTOSI GIGANTE", "(335) SAN LUIS POTOSI ABASTOS", "(336) SAN LUIS POTOSI SALVADOR NAVA", "(471) ", "(472) ", "(830) EMPRESAS SAN LUIS POTOSI", "(1431) MERCADO PLAZA AREA", "(2332) H S.L.P.", "(3057) CENTRO PYME SAN LUIS POTOSI FORANEA", "(4787) CITADELLA ( Irregular)", "(5029) LA GRAN LOMA", "(5104) PLAZA SENDERO SAN LUIS POTOSI",
            "(5771) SAN LUIS POTOSI GLORIETA", "(5774) SAN LUIS POTOSI LOMAS", "(5775) SAN LUIS POTOSI PLAZA EL DORADO", "(6391) SAN LUIS POTOSI",
          ],
          CITI:[
            "(20495) SUC. GLORIETA JUAREZ/EDIF",
            "(20499) SUC. PLAZA TANGAMANGA SLP",
            "(20503) SUC. UNIVERSIDAD SLP",
            "(20504) SUC. MEGA CHALITA",
            "(20533) SUC. SAN LUIS POTOSI/EDIF",
            "(20534) SUC. JULIO VERNE/EDIF",
            "(20538) SUC. LOMAS SAN CARLOS",
            "(26806) SUC. JOSE DE GALVEZ",
            "(50784) SUC. CENTRAL DE ABASTOS SLP",
            "(52033) SUC. MABE SLP",
            "(56469) SUC. CHAPULTEPEC 1200",
            "(57402) SUC. SEC BMW SAN LUIS POTOSI"
          ],
          MOVISTAR:["(724TYO01) CAC SAN LUIS POTOSI"],
          SCOTIABANK:[
            "AVENIDA CARRANZA",
            "LOMAS DE SAN LUIS",
            "MACROPLAZA",
            "SENDERO",
            "TANGAMANGA"
          ]
        },
        "RIOVERDE": {
          BBVA: ["(496) "],
          CITI:[ "(20541) SUC. RIO VERDE" ], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CIUDAD VALLES": {
          BBVA: ["(785) CD. VALLES BOULEVARD", "(6529) CD. VALLES HIDALGO"],
          CITI:[ 
            "(20545) SUC. BLVD. CD. VALLES/EDIF.",
            "(20546) SUC. CD. VALLES/REUBICACION"
          ],
          MOVISTAR:[],
          SCOTIABANK:["CD VALLES"]  
        },
        "EL NARANJO": {
          BBVA: ["(4477) EL NARANJO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SOLEDAD DE GRACIANO SANCHEZ": {
          BBVA: ["(5071) S. L. P. SOLEDAD"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        CARDENAS: {
          BBVA: ["(5786) CARDENAS CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "CIUDAD DEL MAIZ": {
          BBVA: ["(5787) CIUDAD DEL MAIZ CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        CERRITOS: {
          BBVA: ["(5789) CERRITOS CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        VENADO: {
          BBVA: ["(5791) VENADO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        TAMAZUNCHALE: {
          BBVA: ["(6530) TAMAZUNCHALE 20 DE NOVIEMBRE"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        EBANO: {
          BBVA: ["(6532) EBANO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SALINAS": {
          BBVA: ["(6829) SALINAS DE HIDALGO CENTRO"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SANTA MARIA DEL RIO": { BBVA: ["(6830) STA. MARIA DEL RIO CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "VILLA DE REYES": {
          BBVA: [],
          CITI:["(37266) SUC. GENERAL MOTORS SLP", "(56711) SUC. SEC GM SAN LUIS POTOSI"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Chiapas: {
        TAPACHULA: {
          BBVA: ['(544) TAPACHULA', "(4745) TAPACHULA GALERÍAS", "(5007) TAPACHULA PLAZA INN", "(5285) TAPACHULA PLAZA COBALTO", "(5391) TAPACHULA"],
          CITI:[
            "SUC. TACANA/EDIF. 7a. PONIENTE 5 (17491)",
            "SUC. TAPACHULA / EDIF. CENTRAL # 31 (17495)",
            "SUC. PUERTO MADERO REU (56186)"
          ],
          MOVISTAR:[ "(507TYO02) CAC TAPACHULA", "(07-03604) OCTAVA ORIENTE" ],
          SCOTIABANK:["TAPACHULA"]
        },
        "SAN CRISTOBAL DE LAS CASAS": {
          BBVA: ['(547) SAN CRISTOBAL CENTRO', "(2297) PYME SAN CRISTOBAL DE LAS CASAS", "(4439) SAN CRISTOBAL OFNA. PRINCIPAL", "(4728) SAN CRISTOBAL EJE VIAL"],
          CITI:["SUC. PLAZA SAN DIEGO (REUB) (38758)", "SUC. SAN CRISTOBAL (REUB) (38972)"],
          MOVISTAR:[],
          SCOTIABANK:["SAN CRISTOBAL DE LAS CASAS"]
        },
        "TUXTLA GUTIERREZ": {
          BBVA:[
            '(896) TERÁN', "(1394) AMBAR FASHION", "(1581) LAS AMERICAS TUXTLA", "(4710) PLAZA LAS PALMAS", "(4785) TUXTLA MIRADOR", "(5009) TUXTLA SORIANA ORIENTE", "(5058) TUXTLA MIRAVALLE", "(5191) TUXTLA PLAZA SAN LUIS", "(5264) PLAZA DEL SOL", "(6697) TUXTLA", "(6698) TUXTLA KRYSTAL", "(6699) MERCADO","(6700) TUXTLA",
          ],
          CITI:[
            "SUC. TUXTLA / EDIF. 1a SUR PTE (17465)",
            "SUC. TERAN / EDIF. BELISARIO DOMINGUEZ (17468)",
            "SUC. BONAMPAK (17469)",
            "SUC. ELECTRICISTAS (REUB) (29117)",
            "SUC. PLAZA TUXTLA SOL (34847)",
            "SUC. PLAZA POLIFORUM TUXTLA (34935)",
            "SUC. 9a. SUR PONIENTE (36628)",
            "SUC. ALBINO CORZO (REUB) (41551)",
            "SUC. LAURELES (56611)"
          ],
          MOVISTAR:[ "(07-03526) LOMAS DEL VALLE" ],
          SCOTIABANK:["TULXTLA GUTIERREZ", "PLAZA BONAMPAK", "POLIFORUM", "QUINTA NORTE"]
        },
        "LAS MARGARITAS": { BBVA: ["(1910) LAS MARGARITAS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        OCOSINGO: { BBVA: ["(2292) OCOSINGO CHIAPAS"], CITI:["SUC. OCOSINGO(17509)"], MOVISTAR:[], SCOTIABANK:[] },
        HUIXTLA: { BBVA: ["(4437) HUIXTLA CENTRO"], CITI:["SUC. HUIXTLA (REUB) (17511)"], MOVISTAR:[], SCOTIABANK:[] },
        "COMITAN DE DOMINGUEZ": {
          BBVA: ["(4441) COMITAN OFNA. PRINCIPAL", "(6703) COMITAN BOULEVARD"],
          CITI:[
            "SUC. COMITAN (17513)",
            "SUC. BALUN CANAN (REUB) (26923)"
          ],
          MOVISTAR:[], SCOTIABANK:[] },
        REFORMA: { BBVA: ["(4645) REFORMA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        MOTOZINTLA: { BBVA: ["(5263) MOTOZINTLA"] },
        ARRIAGA: { BBVA: ["(5394) ARRIAGA CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TONALA: { BBVA: ["(5397) TONALÁ"], CITI:["SUC. TONALA (17489)"], MOVISTAR:[], SCOTIABANK:[] },
        PIJIJIAPAN: { BBVA: ["(5398) PIJIJIAPAN CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "FRONTERA COMALAPA": { BBVA: ["(5404) FRONTERA COMALAPA CENTRO"], CITI:["SUC. FRONTERA COMALAPA (17512)"], MOVISTAR:[], SCOTIABANK:[] },
        "CHIAPA DE CORZO": { BBVA: ["(6709) CHIAPA DE CORZO CENTRO"], CITI:["SUC. CHIAPA DE CORZO (17516)"], MOVISTAR:[], SCOTIABANK:[] },
        VILLAFLORES: {
          BBVA: ["(6711) VILLAFLORES CENTRO"],
          CITI:["SUC. VILLAFLORES (REUB) / EST. (44908)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CINTALAPA: { BBVA: ["(6713) CINTALAPA CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        PALENQUE: {
          BBVA: ["(6715) PALENQUE CENTRO"],
          CITI:["SUC. PALENQUE (REUB) (46443)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        YAJALON: { BBVA: ["(6717) YAJALON CENTRO"], CITI:["SUC. YAJALON (17462)"], MOVISTAR:[], SCOTIABANK:[] },
        "VENUSTIANO CARRANZA": { BBVA: ["(6718) VENUSTIANO CARRANZA CHIAPAS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "OCOZOCOAUTLA DE ESPINOSA": {
          BBVA: [],
          CITI:["SUC. OCOZOCOAUTLA (17508)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "LAS ROSAS": { BBVA: [], CITI: ["SUC. VILLA LAS ROSAS (17510)"], MOVISTAR:[], SCOTIABANK:[] },
        PICHUCALCO: {
          BBVA: [],
          CITI: [
            "SUC. VILLA LAS ROSAS (17510)",
            "SUC. PICHUCALCO (REUB) (36629)"
          ],
          MOVISTAR:[], SCOTIABANK:[] }
      },
      Tlaxcala: {
        "PAPALOTLA DE XICOHTENCATL": {
          BBVA: ["(513) PANZACOLA INDUSTRIAS"],
          CITI:[ "(30248) SUC. PANZACOLA TLAXCALA"], MOVISTAR:[], SCOTIABANK:[]
        },
        HUAMANTLA: {
          BBVA: ["(538) HUAMANTLA JUAREZ"],
          CITI:[
            "(26518) SUC. HUAMANTLA"
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        CHIAUTEMPAN: {
          BBVA: ["(690) SANTA ANA CHIAUTEMPAN", "(5259) PLAZA DIAMANTE"],
          CITI:["(18652) SANTA ANA CHIAUTEMPAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TLAXCALA: {
          BBVA: ["(5882) OFICINAPRINCIPAL"],
          CITI:[ "(18643) SUC. TLAXCALA / EDIF."],
          MOVISTAR:[], SCOTIABANK:[]
        },
        APIZACO: {
          BBVA: ["(5884) APIZACO"],
          CITI:["(18653) SUC. APIZACO", "(18654) SUC. BLVD. MADERO (REUB)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CALPULALPAN: { BBVA: ["(5888) CALPULALPAN CENTRO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TLAXCO: { BBVA: ["(5890) TLAXCO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        ZACATELCO: { BBVA: ["(5891) ZACATELCO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        NATIVITAS: { BBVA: ["(5892) NATIVITAS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
      },
      Nayarit: {
        COMPOSTELA: { BBVA: ["(661) COMPOSTELA", "(5674) LAS VARAS", "(5678) LA PEÑITA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TEPIC: { BBVA: ["(765) PLAZA LA CANTERA", "(767) AUTOSERVICIO FORUM TEPIC", "(911) INSURGENTES", "(912) MOLOLOA", "(913) PRINCIPAL TEPIC", "(4602) TEPIC XALISCO", "(5297) NAYAR ABASTOS TEPIC", "(6373) TEPIC"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "BAHIA DE BANDERAS": { BBVA: ["(5224) BUCERIAS", "(8137) MEZCALES"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        ACAPONETA: { BBVA: ["(5659) ACAPONETA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "SANTIAGO IXCUINTLA": { BBVA: ["(5661) SANTIAGO IXCUINTLA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TUXPAN: { BBVA: ["(5663) TUXPAN"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TECUALA: { BBVA: ["(5665) TECUALA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "IXTLAN DEL RIO": { BBVA: ["(5669) IXTLAN"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "SAN BLAS": { BBVA: ["(5671) VILLA HIDALGO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
      },
      "Quintana Roo": {
        "BENITO JUAREZ": {
          BBVA: [
            "(850) CANCUN AV. TULUM", "(851) CANCUN ZONA HOTELERA", "(1073) CANCÚN PLAZA LAS AMÉRICAS", "(1367) GRAN PLAZA CANCÚN", "(1487) PLAZA HEROES CANCUN", "(1488 MULTIPLAZA CANCÚN)", "(1571) CANCUN MALL", "(1572) CENTRO MAYA", "(1575) FORUM BY THE SEA", "(1577) LA ISLA CANCÚN E ISLA II", "(1580) LAS AMERICAS PLAYA DEL CARMEN", "(1582) MALECÓN AMÉRICAS CANCÚN",
            "(1583) PABELLÓN CUMBRES CANCÚN", "(1591) PUNTA LANGOSTA", "(1807) EMPRESAS Y GOBIERNO CANCUN", "(2366) HIPOTECARIA CANCUN", "(2821) CENTRO CORPORATIVO CANCÚN", "(4640) PASEO CANCUN", "(4675) PABELLON CUMBRES CANCUN", "(5035) LA LUNA CANCUN", "(5057) CANCUN KABAH", "(5103) PLAZA HOLLYWOOD", "(5762) CANCUN PLAZA PORTALES",
            "(5764) CANCUN OFNA. PRINCIPAL/CANCUN", "(6351) CANCUN",
          ],
          CITI:[],
          MOVISTAR:["(523MCA08) MINICAC PLAZA LAS AMERICAS CANCUN", "(23-03004) YAXCHILAN - KABAH"],
          SCOTIABANK:[]
        },
        COZUMEL: { BBVA: ["(854) COZUMEL CENTRO", "(5284) COZUMEL PLAZA NORTE"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "PUERTO MORELOS": { BBVA: ["(873) PUERTO MORELOS"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        SOLIDARIDAD: {
          BBVA: ["(1840) EMPRESAS Y GOBIERNO PLAYA DEL CARMEN", 2050, "(2272) PUERTO AVENTURAS", "(2372) ", "(2609) SITE PLAYA DEL CARMEN", "(4762) CONSTITUYENTES PLAYA DEL CARMEN", "(5133) PLAYACAR CENTRO MAYA", "(5765) COZUMEL PLAZA NORTE"],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "FELIPE CARRILLO PUERTO": { BBVA: ["(1913) FELIPE CARILLO"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TULUM: { BBVA: ["(2277) PYME TULUM", "(5089) TULUM RIVIERA MAYA"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "OTHON P. BLANCO": { BBVA: ["(5031) LAS AMERICAS CHETUMAL", "(5757) CHETUMAL PRINCIPAL"], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
      },
      Aguascalientes: {
        "JESUS MARIA": {
          BBVA: [],CITI:["SUC. JESUS MARIA (19792)"], MOVISTAR:[], SCOTIABANK:[]
        },
        AGUASCALIENTES: {
          BBVA: [],
          CITI:[
            "SUC. AGUASCALIENTES (19801)",
            "SUC. PULGAS PANDAS (19802)",
            "SUC. PLAZA SAN MARCOS (19804)",
            "SUC. CIRCUNVALACION SUR (19805)",
            "SUC. JARDINES DE ASUNCION CITI (19806)",
            "SUC. SANTA ANITA (19807)",
            "SUC. CORPORATIVO AGS/EDIF (19827)",
            "SUC. GALERIAS AGS (28723)",
            "SUC. SENSATA AGS (34355)",
            "SUC. ALTARIA (36515)",
            "SUC. INEGI EDIF SEDE (43264)",
            "SUC. INEGI PARQUE HEROES (43265)",
            "SUC. NUEVA SIGLO XXI (56470)",
            "SUC ESPACIO AGUASCALIENTES (56961)",
            "SUC. MODELO TRES CENTURIA (56983)",
          ],
          MOVISTAR:[
            "(701TND01) CAC CALLE MORELOS AGUASCALIENTES",
            "(701TYO01) CAC  AGUASCALIENTES",
            "(01-05701) MSC L. PONCE",
          ],
          SCOTIABANK:[]
        },
      },
      "Baja California Sur": { },
      "Baja California": { },
      Campeche: {
        CAMPECHE: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["CAMPECHE"]
        },
        CARMEN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["PLAZA AVIACIÓN"]
        }
      },
      Coahuila: {
        ACUNA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["CD ACUÑA"]
        },
        MONCLOVA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["MONCLOVA", "NODRIZA CONSTITUCIÓN"]
        },
        MUZQUIZ: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["MELCHOR MÚZQUIZ"]
        },
        "PIEDRAS NEGRAS":{
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["PIEDRAS NEGRAS"]
        },
        SABINAS: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["SABINAS"]
        },
        SALTILLO: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "FRANCISCO COSS",
            "REPUBLICA",
            "SAN PATRICIO",
            "LA NOGALERA",
            "GALERIAS SALTILLO",
            "SENDERO SALTILLO",
            "TERRENO CUATRO CIENEGAS"
          ]
        },
        TORREON: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "TORREON", "INDEPENDENCIA", "COLON", "LA ROSITA", "EL FRESNO (GARCÍA LORCA)"]
        }
      },
      Colima: {
        MANZANILLO: {
          BBVA: [], CITI:[],
          MOVISTAR:[ "(606TND01) MINI CAC MANZANILLO"], SCOTIABANK:[]
        }
      },
      Chihuahua: {
        "NUEVO CASAS GRANDES": {
          BBVA: [],
          CITI:[ "SUC. NVO. CASAS GRANDES (17243)", ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        NAMIQUIPA: {
          BBVA: [],
          CITI:[ "SUC. NAMIQUIPA (17244)", ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        JUAREZ: {
          BBVA: [],
          CITI:[
            "SUC. RIO GRANDE (17246)",
            "SUC. PASO DEL NORTE (17247)",
            "SUC. PUENTE INTERNACIONAL (17248)",
            "SUC. CD. JUAREZ (17249)",
            "SUC. SENECU (REUB) (17251)",
            "EDIF. P.TRIUNFO DE LA REP. # 3980 (17252)",
            "SUC. AEROPUERTO (17255)",
            "SUC. HENEQUEN (17257)",
            "SUC. SEC. SCIENTIFIC ATLANTA (17278)",
            "SUC. TOMAS FERNANDEZ (26600)",
            "SUC. LAS TORRES (26900)",
            "SUC. ZARAGOZA (26982)",
            "SUC. LAS MISIONES (27051)",
            "SUC. PASEO (33208)",
            "SUC. SAN LORENZO (36962)",
            "SUC. CORTIJO (38712)",
            "SUC. SEC MUNICIPIO CIUDAD JUAREZ (44943)",
            "SUC. MINA REUB. (57035)",
            "SUC. SEC MOLEX JUAREZ (57407)"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        GUERRERO: {
          BBVA: [],
          CITI:[ "SUC. CD. GUERRERO (17327)" ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CUAUHTEMOC: {
          BBVA: [],
          CITI:[
            "SUC. CUAUHTEMOC REUB. (17331)",
            "SUC. SAN ANTONIO (29088)",
            "SUC. MANITOBA (45414)",
            "ATM. ALSUPER 3 CULTURAS (55675)",
            "ATM. ALSUPER MANZANEROS (51807)"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CHIHUAHUA: {
          BBVA: [],
          CITI:[
            "EDIF. ZARCO (17337)",
            "SUC. CHIHUAHUA/EDIF. (17339)",
            "SUC. BLVD. ORTIZ MENA/EDIF. (17340)",
            "SUC. PROVINCIAL/EDIF. (17341)",
            "SUC. SICOMOROS (17342)",
            "SUC. JUVENTUD (17349)",
            "SUC. SHAKESPEARE (17353)",
            "SUC. INDEPENDENCIA CENTRO CITI/EDIF. (17354)",
            "SUC. SEC FORD CHIH (17356)",
            "SUC. SEC MOTOROLA CHIHUAHUA (17357)",
            "SUC. SAN FRANCISCO (26595)",
            "SUC. INDUSTRIAS (26596)",
            "SUC. NUEVA ESPANA (26597)",
            "SUC. LEONES (32886)",
            "SUC. SANTO NINO (32888)",
            "SUC. SEC TRW SAUCITO (39845)",
            "SUC. SEC. FORD CHIHUAHUA (56527)",
            "SUC. PACHECO REUB. (59523)",
            "ATM. AL SUPER LA CANTERA (41863)",
            "ATM. AL SUPER NOGALES (17372)",
            "ATM. AL SUPER ANTHONY QUINN (43766)",
            "ATM. AL SUPER (17348)",
            "ATM. AL SUPER FLORES MAGON (17367)",
            "ATM. SORIANA FUENTES MARES (17364)",
            "ATM. BAHIAS FUTURAMA (34870)",
            "ATM. ALSUPER ROBINSON (51806)",
            "ATM. ALSUPER ARBOLEDAS (55388)",
            "ATM. AL SUPER CAMPUS (48709)",
            "ATM. AL SUPER CERRO GRANDE (47892)",
            "ATM. AL SUPER LA FUENTE (47723)"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        DELICIAS: {
          BBVA: [],
          CITI:[ "SUC. DELICIAS REUBIC (17409)", "SUC. DELICIAS (26894)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CAMARGO: {
          BBVA: [],
          CITI:[ "SUC. CD. CAMARGO (17411)" ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "HIDALGO DEL PARRAL": {
          BBVA: [],
          CITI:[ "SUC. ALTAVISTA (26985)"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      "Ciudad de Mexico": {
        "ALVARO OBREGON": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "AVENIDA TOLUCA",
            "GARDEN SANTA FE",
            "GUADALUPE INN",
            "PORTAL SAN ANGEL",
            "PEDREGAL",
            "PLAZA INN",
            "SAN JERONIMO",
            "SANTA TERESA"
          ]
        },
        COYOACAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "CAFETALES  MÓDULO",
            "CALZADA DEL HUESO",
            "CAMPESTRE CHURUBUSCO",
            "COYOACAN",
            "DIVISION DEL NORTE PACIFICO",
            "GRAN SUR",
            "MIGUEL ANGEL DE QUEVEDO",
            "MIRAMONTES",
            "PERISUR",
            "SAN LUCAS COYOACAN",
            "UNIVERSIDAD COPILCO"
          ]
        },
        "UNIVERSIDAD COPILCO": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "ARCOS BOSQUES",
            "CUAJIMALPA",
            "EUROCENTER SANTA FE",
            "PABELLÓN BOSQUES",
            "SANTA FE"
          ],
          "GUSTAVO A. MADERO": {
            BBVA: [], CITI:[], MOVISTAR:[],
            SCOTIABANK:[
              "LINDAVISTA",
              "PARQUE LINDAVISTA",
              "SAN JUAN DE ARAGON",
              "VILLA CONSULADO"
            ],
          },
          IZTACALCO: {
            BBVA: [], CITI:[], MOVISTAR:[],
            SCOTIABANK:[
              "GRANJAS MEXICO"
            ],
          },
          IZTAPALAPA: {
            BBVA: [], CITI:[], MOVISTAR:[],
            SCOTIABANK:[
              "ALTA TENSION",
              "LA VIGA CHURUBUSCO",
              "PARQUE TEZONTLE",
              "PLAZA ERMITA",
              "TAXQUEÑA Culhuacan",
              "TLAHUAC"
            ],
          },
          TLALPAN: {
            BBVA: [], CITI:[], MOVISTAR:[],
            SCOTIABANK:[
              "CLUB DE GOLF MÉXICO",
              "INSURGENTES LA JOYA",
              "JARDINES DE LA MONTAÑA",
              "PASEO ACOXPA",
              "TLALPAN SAN FERNANDO",
              "TLALPÁN SUR",
              "VILLA COAPA"
            ],
          }
        }
      },
      Durango: { },
      Guanajuato: { },
      Jalisco: { },
      "Estado de Mexico": {
        "COACALCO DE BERRIOZABAL": {
          BBVA: [],
          CITI:[ "(915MCA19) SMART STORE PLAZA COSMOPOL", "(915TND16) PLAZA COACALCO"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Michoacan: { },
      "Nuevo Leon": {
        GUADALUPE: {
          BBVA: [],
          CITI:[
            "SUC. MADERO ORIENTE 18405)",
            "SUC. EXPO GUADALUPE (19399)",
            "SUC. PASEO DE LAS AMERICAS (19400)",
            "SUC. NUEVA LINDA VISTA (19401)",
            "SUC. PABLO LIVAS (26973)",
            "SUC. ACAPULCO (26991)",
            "SUC. SANTA CRUZ (36971)"
          ],
          MOVISTAR:[],
          SCOTIABANK:["CONTRY", "GUADALUPE CENTRO", "LINDAVISTA", "PLAZA SANTA MARÍA", "RUIZ CORTINES"]
        },
        MONTERREY: {
          BBVA: [],
          CITI:[
            "(18406) SUC. GONZALITOS",
            "(18407) SUC. MONTERREY 400",
            "(18412) SUC. REVOLUCION",
            "(18414) SUC. GARZA SADA",
            "(18419) SUC. PASEO DE LOS LEONES",
            "(18420) SUC. PINO SUAREZ (REUB)",
            "(18421) SUC. CUMBRES (REUB)",
            "(18422) SUC. FELIX U. GOMEZ",
            "(18423) SUC. LINCOLN",
            "(18424) SUC. FIDEL VELAZQUEZ",
            "(18425) SUC. BRISAS (REUB)",
            "(18439) SUC. HEROES CITI",
            "(19386) SUC. S CUMBRES (REUBICACION)",
            "(19413) SUC. CHAPULTEPEC",
            "(26606) SUC. SATELITE",
            "(26607) SUC. MITRAS",
            "(26994) SUC. SIMON BOLIVAR",
            "(29087) SUC. MACROPLAZA REUB.",
            "(36774) SUC. SENDERO LINCOLN",
            "(45369) SUC. TORRE CIVICA",
            "(51298) SUC. BUENOS AIRES",
            "(51299) SUC. PLAZA REAL MTY",
            "(51383) SUC. PLAZA ADANA",
            "(51792) SUC. MULTIPLAZA LINCOLN",
            "(52924) SUC. FUNDADORES 14",
            "(53999) SUC. VALLE ALTO",
            "(55803) SUC. OBISPADO (REUB)",
            "(56381) EDIF. PASEO DE LOS LEONES 100",
            "(56990) SUC. SAN JERONIMO COLINAS R.",
            "(57163) SUC. PLAZA SERENA",
            "(57925) EDIF. CITICA",
            "(54004) SUC. PLAZA QU",
            "(51788) SUC. PASEO TEC"
          ],
          MOVISTAR:["(19-00105) JIMENEZ - CANAL 6 - PEGASO"],
          SCOTIABANK:[
            "ANILLO SAN JERÓNIMO",
            "COLINAS PONIENTE",
            "CUMBRES",
            "GALERÍAS",
            "LEONES",
            "Madero Oriente",
            "MITRAS",
            "PADRE MIER",
            "PASEO LA RIOJA",
            "NUEVO SUR",
            "TECNOLÓGICO DE MONTERREY",
          ]
        },
        "SAN PEDRO GARZA GARCIA": {
          BBVA: [],
          CITI:[
            "(18494) SUC. VALLE/EDIF.",
            "(18495) SUC. SAN PEDRO/EDIF.",
            "(18497) SUC. SAN AGUSTIN",
            "(18508) SUC. VASCONCELOS CITI",
            "(28899) SUC. GOMEZ MORIN",
            "(29089) SUC. VALLE OTE.",
            "(32913) SUC. CENTRITO",
            "(52188) SUC. DUENDES",
            "(53994) SUC. UDEM",
            "(57164) SUC. CHROMA"
          ],
          MOVISTAR:[
            "(419MYC01) OFICINA REGIONAL MONTERREY",
            "(19-02228) MSC SEMINARIO"
          ],
          SCOTIABANK:[
            "CALZADA DEL VALLE",
            "CHIPINQUE",
            "CORPORATIVO MONTERREY",
            "PLAZA CUMBRES",
            "PUNTO VALLE",
            "SAN AGUSTÍN",
            "VASCONCELOS"
          ]
        },
        "SAN NICOLAS DE LOS GARZA": {
          BBVA: [],
          CITI:[
            "(18514) SUC. IND. CONDUCTORES",
            "(18518) SUC. MANUEL BARRAGAN",
            "(18527) SUC. DIEGO DIAZ DE BERLANGA",
            "(33003) SUC. LAS PUENTES",
            "(33638) SUC. CENTRO SAN NICOLAS",
            "(34292) SUC. LA FE (REUB.)",
            "(45410) SUC. ABASTOS ESTRELLA",
            "(56902) SUC. SAN NICOLAS/EDIF",
            "(57092) SUC. PASEO LA FE"
          ],
          MOVISTAR:["(419TND15) PASEO LA FE NUEVO LEON"],
          SCOTIABANK:[
            "MANUEL BARRAGAN",
            "UNIVERSIDAD"
          ]
        },
        MONTEMORELOS: {
          BBVA: [],
          CITI:["(19396) SUC. MONTEMORELOS"],
          MOVISTAR:[],
          SCOTIABANK:["MONTEMORELOS"]
        },
        LINARES: {
          BBVA: [],
          CITI:["(19398) SUC. LINARES"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "CADEREYTA JIMENEZ": {
          BBVA: [],
          CITI:[
            "(19443) SUC. CADEREYTA",
            "(19444) SUC. SEC PEMEX CADEREYTA"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        APODACA: {
          BBVA: [],
          CITI:[
            "(19460) SUC. APODACA",
            "(19463) SUC. SEC CELESTICA",
            "(27054) SUC. S LOS FRESNOS",
            "(36963) SUC. HUINALA",
            "(40010) SUC. SENDERO APODACA",
            "(45990) EDIF. SALON BEYOND MTY",
            "(51418) SUC. AEROPUERTO MONTERREY",
            "(56490) SUC. SEC SCHNEIDER"
          ],
          MOVISTAR:[],
          SCOTIABANK:["APODACA"]
        },
        ALLENDE: {
          BBVA: [],
          CITI:["(19471) SUC. ALLENDE"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        SANTIAGO: {
          BBVA: [],
          CITI:["(19475) SUC. CERCADO"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "GENERAL ESCOBEDO": {
          BBVA: [],
          CITI:[
            "(26603) SUC. ESCOBEDO",
            "(51790) SUC. VILLAS ESCOBEDO",
            "(51791) SUC. PASEO SENDERO"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "SANTA CATARINA": {
          BBVA: [],
          CITI:[
            "(19478) SUC. LA FAMA",
            "(26978) SUC. SANTA CATARINA",
            "(38021) SUC. LA PUERTA 2"
          ],
          MOVISTAR:[],
          SCOTIABANK:["PASEO LA HUASTECA"]
        },
        PESQUERIA: {
          BBVA: [],
          CITI:[
            "(55745) SUC. SEC KIA MONTERREY"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Hidalgo: {
        "TULANCINGO DE BRAVO": {
          BBVA: [],
          CITI:["SUC. TULANCINGO (20255)", "SUC. JARDINES DE TULANCINGO (26793)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "TULA DE ALLENDE": {
          BBVA: [],
          CITI:["SUC. TULA (20264)", "SUC. PEMEX TULA (20266)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TIZAYUCA:{
          BBVA: [],
          CITI:["SUC. TIZAYUCA (20271)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        Tepeapulco: {
          BBVA: [],
          CITI:["SUC. CD SAHAGUN (20275)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "PROGRESO DE OBREGON": {
          BBVA: [],
          CITI:["SUC. PROGRESO DE OBREGON /ATM (20276)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "PACHUCA DE SOTO": {
          BBVA: [],
          CITI:[
            "SUC. SAN JAVIER CITI (20278)",
            "SUC. MADERO HIDALGO (20279)",
            "SUC. SEPH (20282)",
            "SUC. PACHUCA MADERO CITI (20284)",
            "SUC. FELIPE ANGELES/EDIF (20302)",
            "SUC. PACHUCA/EDIF (20303)",
            "SUC. GALERIAS PACHUCA (26797)",
            "SUC. TULIPANES PACHUCA (28719)",
            "SUC. GOBIERNO DE HIDALGO (33043)",
            "SUC. GRAN PATIO PACHUCA (40890)",
            "EDIF. JUAREZ 1105 (42414)",
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        IXMIQUILPAN: {
          BBVA: [],
          CITI:["SUC. IXMIQUILPAN (20308)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        HUICHAPAN: {
          BBVA: [],
          CITI:["SUC. HUICHAPAN (20309)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "HUEJUTLA DE REYES": {
          BBVA: [],
          CITI:["SUC. HUEJUTLA (20312)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "ATOTONILCO EL GRANDE": {
          BBVA: [],
          CITI:["SUC. ATOTONILCO (20314)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        APAN: {
          BBVA: [],
          CITI:["SUC. APAN (20317)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        ACTOPAN: {
          BBVA: [],
          CITI:["SUC. ACTOPAN (20318)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TLAXCOAPAN: {
          BBVA: [],
          CITI:["SUC. TLAXCOAPAN (26824)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "TEPEJI DEL RIO DE OCAMPO": {
          BBVA: [],
          CITI:["SUC. TEPEJI DEL RIO (35150)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TECOZAUTLA: {
          BBVA: [],
          CITI:["SUC. TECOZAUTLA (46131)"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Morelos: {
        Yautepec: {
          BBVA: [],
          CITI:["SUC. OAXTEPEC (17834)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "PUENTE DE IXTLA": {
          BBVA: [],
          CITI:["SUC. PUENTE DE IXTLA CITI (17839)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        JOJUTLA: {
          BBVA: [],
          CITI:["SUC. ANTIGUA ESTACION (17841)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CUERNAVACA: {
          BBVA: [],
          CITI: [
            "SUC. BAXTER (17842)",
            "EDIF. MOTOLINIA (17848)",
            "SUC. CUERNAVACA/EDIF. (17849)",
            "SUC. CIVAC (17850)",
            "SUC. VISTA HERMOSA (17853)",
            "SUC. CASA BLANCA (17854)",
            "SUC. BUENAVISTA (17855)",
            "SUC. LAS PALMAS CITI (17862)",
            "SUC. ACAPATZINGO CITI (17863)",
            "SUC. LA LUNA (17865)",
            "SUC. YAUTEPEC (17868)",
            "SUC. TEMIXCO (17869)",
            "SUC. GALERIAS LIVERPOOL (26519)",
            "SUC. RIO MAYO / EDIF. (50233)",
            "SUC. AVERANDA (56958)"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        JIUTEPEC: {
          BBVA: [],
          CITI:[ "SUC. JIUTEPEC (17843)", "SUC. MODULO NISSAN (36972)" ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CUAUTLA: {
          BBVA: [],
          CITI:[
            "SUC. CUAUTLA / EDIF. (18938)",
            "SUC. MANANTIALES (18939)",
            "SUC. PLAZA LOS ARCOS CUAUTLA (37361)",
          ],
          MOVISTAR:["(917MCA02) MINI CAC PLAZA ATRIOS"],
          SCOTIABANK:[]
        },
        HIDALGO: {
          BBVA: [],
          CITI:[
            "SUC. ZACATEPEC MORELOS (29115)",
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        XOCHITEPEC: {
          BBVA: [],
          CITI:[
            "SUC. XOCHITEPEC (46161)",
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        YECAPIXTLA: {
          BBVA: [],
          CITI:[
            "SUC. SEC BURLINGTON (47889)",
          ],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Oaxaca: { },
      Puebla: {
        "SAN PEDRO CHOLULA": {
          BBVA: [], CITI:[],
          MOVISTAR:["(821TND12) EXPLANADA PUEBLA"],
          SCOTIABANK:["CHOLULA"]
        },
        CUAUTLANCINGO: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["CRUZ DEL SUR"]
        },
        PUEBLA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "ANGELOPOLIS",
            "ANZURES",
            "CATEDRAL",
            "CHULAVISTA",
            "ESMERALDA",
            "INDUSTRIAL 2000 (REUBICACIÓN)",
            "LA PAZ",
            "PLAZA DORADA",
            "PLAZA LAS ANIMAS",
            "VALSEQUILLO",
            "ZAVALETA",
            "BANCA PRIVADA  TRIÁNGULO",
          ]
        },
        "SAN ANDRES CHOLULA": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["BLVD ATLIXCAYOTL"]
        },
        TEHUACAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["PASEO TEHUACÁN", "TEHUACÁN"]
        }
      },
      Queretaro: { },
      Sinaloa: {
        AHOME: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:["LOS MOCHIS", "RÍO FUERTE"]
        },
        CULIACAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "CABALLITO",
            "COUNTRY CLUB  MÓDULO",
            "GUADALUPE-CULIACÁN",
            "LAS QUINTAS",
            "MONTEBELLO",
            "TRES RÍOS"
          ]
        },
        MAZATLAN: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "EL TOREO MAZATLÁN", "MAZATLÁN" ]
        },
        GUASAVE: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "GUASAVE" ]
        },
        "SALVADOR ALVARADO": {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[ "GUAMUCHIL" ]
        }
      },
      Sonora: { },
      Tamaulipas: {
        REYNOSA: {
          BBVA: [], CITI:[],
          MOVISTAR:[
            "(428COR01) OFC REYNOSA",
            "(28-02341) REYNOSA TELMEX"
          ],
          SCOTIABANK:[]
        },
        MATAMOROS: {
          BBVA: [], CITI:[],
          MOVISTAR:[ "(428TYO04) CAC MATAMOROS", "(28-02350) MSC MATAMOROS" ],
          SCOTIABANK:[]
        },
        "NUEVO LAREDO": {
          BBVA: [], CITI:[],
          MOVISTAR:[ "(28-02381) LAREDO SWITCH" ],
          SCOTIABANK:[]
        }
      },
      Veracruz: { },
      Yucatan: {
        MERIDA: {
          BBVA: [], CITI:[], MOVISTAR:[],
          SCOTIABANK:[
            "ALTABRISA",
            "CAMPESTRE",
            "CENTRO MÉRIDA",
            "FRANCISCO DE MONTEJO",
            "GALERÍAS MÉRIDA",
            "JARDÍNES DE MÉRIDA",
            "MONTECRISTO",
            "PASEO MONTEJO",
            "PLAZA LAS AMÉRICAS"
          ]
        }
      },
      "": { "": { BBVA: [], CITI:[], MOVISTAR:[], SCOTIABANK:[] } },
    },
  }),
  computed: {
    cheque() {
      if(this.id){
        return this.$store.getters.getCheque(this.id);
      } return null
    },
    sucursal: {
      set(newValue){
        this.sucursalSeleccionada = newValue
      },
      get(){
        if (this.cheque != null){
          this.sucursalSeleccionada = this.cheque.sucursal
          return this.cheque.sucursal
        } return null
      }
    },
  },
  watch: {
    sucursalSeleccionada(val) {
      this.$emit('eventSucursal', { 'sucursal': val })
    },
  }
};
</script>