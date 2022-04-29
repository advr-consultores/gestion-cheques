<template>
  <v-select
    v-model="sucursal"
    :items="sucursales[estado][municipio][cliente]"
    label="Sucursales (CR)"
    no-data-text="No hay inmuebles"
  />
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
          BBVA: [125, 4651],
          CITI:["SUC. IGUALA/EDIF. (17533)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "CHILPANCINGO DE LOS BRAVO": {
          BBVA: [557, 4697, 5553, 7695],
          CITI:[
            "SUC. CHILPANCINGO/EDIF. (17540)",
            "SUC. CIUDAD ADMINISTRATIVA/EDIF. (26750)",
            "SUC. GALERIAS LIVERPOOL CHILPANCINGO (42952)",
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        "ACAPULCO DE JUAREZ": {
          BBVA: [580, 581, 582, 583, 584, 927, 1548, 1559, 2395, 3031, 4661, 5053,
          5540, 5543, 5544, 6359],
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
          BBVA: [874],
          CITI:["SUC. OMETEPEC (REUB) (50943)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TAXCO DE ALARCON": {
          BBVA: [1553, 5561, 5562],
          CITI:["SUC. TAXCO (17521)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "SAN MARCOS": {
          BBVA: [4637],
          CITI:["SUC. SAN MARCOS (17523)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TLAPA DE COMONFORT": {
          BBVA: [5086],
          CITI:[
            "SUC. TLAPA DE COMONFORT (17519)"
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        TIXTLA: {
          BBVA: [5309],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "HUITZUCO DE LOS FIGUEROA": {
          BBVA: [5555],
          CITI:["SUC. HUITZUCO (REUB) (17536)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "ATOYAC DE ALVAREZ": {
          BBVA: [5563],
          CITI:["SUC. ATOYAC DE ALVAREZ GUERRERO (17545)"], MOVISTAR:[], SCOTIABANK:[]
        },
        PUNGARABATO: {
          BBVA: [5565],
          CITI:[
            "SUC. CD ALTAMIRANO (NUEVA) (17524)"
          ],
          MOVISTAR:[], SCOTIABANK:[]
        },
        PETATLAN: {
          BBVA: [5567],
          CITI:["SUC. PETATLAN (30232)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "TECPAN DE GALEANA": {
          BBVA: [5568],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        ARCELIA: {
          BBVA:[5570],
          CITI:["SUC. ARCELIA GUERRERO (17546)"], MOVISTAR:[], SCOTIABANK:[]
        },
        TELOLOAPAN: {
          BBVA: [5572],
          CITI:["SUC. TELOLOAPAN (17520)"], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CHILAPA DE ALVAREZ": {
          BBVA: [5574],
          CITI:["SUC. CHILAPA (17543)"], MOVISTAR:[], SCOTIABANK:[]
        },
        "ZIHUATANEJO DE AZUETA": {
          BBVA: [5576, 5577],
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
          BBVA: [311, 868],
          CITI:[ "(20873) SUC. FRESNILLO" ], MOVISTAR:[], SCOTIABANK:["FRESNILLO"]
        },
        GUADALUPE: {
          BBVA: [313, 5967],
          CITI:[
            "(20870) SUC. LA FLORIDA",
            "(20872) EDIF. LOPEZ PORTILLO 101",
            "(26545) SUC. GUADALUPE ZAC",
          ],
          MOVISTAR:[], SCOTIABANK:[]  
        },
        JEREZ: {
          BBVA: [490],
          CITI:[ "(20867) SUC. JEREZ"], MOVISTAR:[], SCOTIABANK:[]
        },
        ZACATECAS: {
          BBVA: [2335, 2467, 5021, 5952, 5953, 6345],
          CITI:["(20861) SUC. ZACATECAS/EDIF"],
          MOVISTAR:["(732TYO01) CAC ZACATECAS"],
          SCOTIABANK:["COLINAS", "ZACATECAS"]  
        },
        JALPA: {
          BBVA: [3963],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        JUCHIPILA: {
          BBVA: [3964],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "NOCHISTLAN DE MEJIA": {
          BBVA: [3966],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        LORETO: {
          BBVA: [3968],
          CITI:[ "(20866) SUC. LORETO ZAC"], MOVISTAR:[], SCOTIABANK:[]
        },
        TABASCO: {
          BBVA: [3970],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        SOMBRERETE: {
          BBVA: [5288],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        PINOS: {
          BBVA: [5780],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        "RIO GRANDE": {
          BBVA: [5956],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "TLALTENANGO DE SANCHEZ ROMAN": {
          BBVA: [5961],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CALERA": {
          BBVA: [5963],
          CITI:[ "(20880) SUC. CALERA", "(39990) SUC. MODELO ZACATECAS]"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        "JUAN ALDAMA": {
          BBVA: [5965],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        OJOCALIENTE: {
          BBVA: [5968],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        VALPARAISO: {
          BBVA: [5969],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "MONTE ESCOBEDO": {
          BBVA: [5971],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "TEUL DE GONZALEZ ORTEGA": {
          BBVA: [5972],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
      },
      "San Luis Potosi": {
        MATEHUALA: {
          BBVA: [330, 5283],
          CITI:[ "(20543) SUC. MATEHUALA" ], MOVISTAR:[], SCOTIABANK:[]
        },
        "SAN LUIS POTOSI": {
          BBVA: [
            331, 332, 335, 336, 471, 472, 830, 1431, 2332, 3057, 4787, 5029, 5104,
            5771, 5774, 5775, 6391,
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
          BBVA: [496],
          CITI:[ "(20541) SUC. RIO VERDE" ], MOVISTAR:[], SCOTIABANK:[]  
        },
        "CIUDAD VALLES": {
          BBVA: [785, 6529],
          CITI:[ 
            "(20545) SUC. BLVD. CD. VALLES/EDIF.",
            "(20546) SUC. CD. VALLES/REUBICACION"
          ],
          MOVISTAR:[],
          SCOTIABANK:["CD VALLES"]  
        },
        "EL NARANJO": {
          BBVA: [4477],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SOLEDAD DE GRACIANO SANCHEZ": {
          BBVA: [5071],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        CARDENAS: {
          BBVA: [5786],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "CIUDAD DEL MAIZ": {
          BBVA: [5787],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        CERRITOS: {
          BBVA: [5789],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        VENADO: {
          BBVA: [5791],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        TAMAZUNCHALE: {
          BBVA: [6530],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]  
        },
        EBANO: {
          BBVA: [6532],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SALINAS": {
          BBVA: [6829],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "SANTA MARIA DEL RIO": { BBVA: [6830], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "VILLA DE REYES": {
          BBVA: [],
          CITI:["(37266) SUC. GENERAL MOTORS SLP", "(56711) SUC. SEC GM SAN LUIS POTOSI"],
          MOVISTAR:[], SCOTIABANK:[]
        }
      },
      Chiapas: {
        TAPACHULA: {
          BBVA: [544, 4745, 5007, 5285, 5391],
          CITI:[
            "SUC. TACANA/EDIF. 7a. PONIENTE 5 (17491)",
            "SUC. TAPACHULA / EDIF. CENTRAL # 31 (17495)",
            "SUC. PUERTO MADERO REU (56186)"
          ],
          MOVISTAR:[ "(507TYO02) CAC TAPACHULA", "(07-03604) OCTAVA ORIENTE" ],
          SCOTIABANK:["TAPACHULA"]
        },
        "SAN CRISTOBAL DE LAS CASAS": {
          BBVA: [547, 2297, 4439, 4728],
          CITI:["SUC. PLAZA SAN DIEGO (REUB) (38758)", "SUC. SAN CRISTOBAL (REUB) (38972)"],
          MOVISTAR:[],
          SCOTIABANK:["SAN CRISTOBAL DE LAS CASAS"]
        },
        "TUXTLA GUTIERREZ": {
          BBVA:[
            896, 1394, 1581, 4710, 4785, 5009, 5058, 5191, 5264, 6697, 6698, 6699,6700,
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
        "LAS MARGARITAS": { BBVA: [1910], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        OCOSINGO: { BBVA: [2292], CITI:["SUC. OCOSINGO(17509)"], MOVISTAR:[], SCOTIABANK:[] },
        HUIXTLA: { BBVA: [4437], CITI:["SUC. HUIXTLA (REUB) (17511)"], MOVISTAR:[], SCOTIABANK:[] },
        "COMITAN DE DOMINGUEZ": {
          BBVA: [4441, 6703],
          CITI:[
            "SUC. COMITAN (17513)",
            "SUC. BALUN CANAN (REUB) (26923)"
          ],
          MOVISTAR:[], SCOTIABANK:[] },
        REFORMA: { BBVA: [4645], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        MOTOZINTLA: { BBVA: [5263] },
        ARRIAGA: { BBVA: [5394], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TONALA: { BBVA: [5397], CITI:["SUC. TONALA (17489)"], MOVISTAR:[], SCOTIABANK:[] },
        PIJIJIAPAN: { BBVA: [5398], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "FRONTERA COMALAPA": { BBVA: [5404], CITI:["SUC. FRONTERA COMALAPA (17512)"], MOVISTAR:[], SCOTIABANK:[] },
        "CHIAPA DE CORZO": { BBVA: [6709], CITI:["SUC. CHIAPA DE CORZO (17516)"], MOVISTAR:[], SCOTIABANK:[] },
        VILLAFLORES: {
          BBVA: [6711],
          CITI:["SUC. VILLAFLORES (REUB) / EST. (44908)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CINTALAPA: { BBVA: [6713], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        PALENQUE: {
          BBVA: [6715],
          CITI:["SUC. PALENQUE (REUB) (46443)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        YAJALON: { BBVA: [6717], CITI:["SUC. YAJALON (17462)"], MOVISTAR:[], SCOTIABANK:[] },
        "VENUSTIANO CARRANZA": { BBVA: [6718], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
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
          BBVA: [513],
          CITI:[ "(30248) SUC. PANZACOLA TLAXCALA"], MOVISTAR:[], SCOTIABANK:[]
        },
        HUAMANTLA: {
          BBVA: [538],
          CITI:[
            "(26518) SUC. HUAMANTLA"
          ], MOVISTAR:[], SCOTIABANK:[]
        },
        CHIAUTEMPAN: {
          BBVA: [690, 5259],
          CITI:["(18652) SANTA ANA CHIAUTEMPAN"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        TLAXCALA: {
          BBVA: [5882],
          CITI:[ "(18643) SUC. TLAXCALA / EDIF."],
          MOVISTAR:[], SCOTIABANK:[]
        },
        APIZACO: {
          BBVA: [5884],
          CITI:["(18653) SUC. APIZACO", "(18654) SUC. BLVD. MADERO (REUB)"],
          MOVISTAR:[], SCOTIABANK:[]
        },
        CALPULALPAN: { BBVA: [5888], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TLAXCO: { BBVA: [5890], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        ZACATELCO: { BBVA: [5891], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        NATIVITAS: { BBVA: [5892], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
      },
      Nayarit: {
        COMPOSTELA: { BBVA: [661, 5674, 5678], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TEPIC: { BBVA: [765, 767, 911, 912, 913, 4602, 5297, 6373], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "BAHIA DE BANDERAS": { BBVA: [5224, 8137], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        ACAPONETA: { BBVA: [5659], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "SANTIAGO IXCUINTLA": { BBVA: [5661], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TUXPAN: { BBVA: [5663], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TECUALA: { BBVA: [5665], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "IXTLAN DEL RIO": { BBVA: [5669], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "SAN BLAS": { BBVA: [5671], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
      },
      "Quintana Roo": {
        "BENITO JUAREZ": {
          BBVA: [
            850, 851, 1073, 1367, 1487, 1488, 1571, 1572, 1575, 1577, 1580, 1582,
            1583, 1591, 1807, 2366, 2821, 4640, 4675, 5035, 5057, 5103, 5762,
            5764, 6351,
          ],
          CITI:[],
          MOVISTAR:["(523MCA08) MINICAC PLAZA LAS AMERICAS CANCUN", "(23-03004) YAXCHILAN - KABAH"],
          SCOTIABANK:[]
        },
        COZUMEL: { BBVA: [854, 5284], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "PUERTO MORELOS": { BBVA: [873], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        SOLIDARIDAD: {
          BBVA: [1840, 2050, 2272, 2372, 2609, 4762, 5133, 5765],
          CITI:[], MOVISTAR:[], SCOTIABANK:[]
        },
        "FELIPE CARRILLO PUERTO": { BBVA: [1913], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        TULUM: { BBVA: [2277, 5089], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
        "OTHON P. BLANCO": { BBVA: [5031, 5757], CITI:[], MOVISTAR:[], SCOTIABANK:[] },
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
        return this.$store.getters.loadedMeetup(this.id);
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