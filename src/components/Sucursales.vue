<template>
  <v-select v-model="sucursal" :items="sucursales[estado][municipio]" label="Sucursales (CR)" no-data-text="No hay inmuebles"></v-select>
</template>

<script>
export default {
  props: {
    estado: { type: String, default: '' },
    municipio: { type: String, default: '' },
    id: { type: String, default: '' }
  },
  data: () => ({
    sucursalSeleccionada: null,
    sucursales: {
      Guerrero: {
        "IGUALA DE LA INDEPENDENCIA": [125, 4651],
        "CHILPANCINGO DE LOS BRAVO": [557, 4697, 5553, 7695],
        "ACAPULCO DE JUAREZ": [
          580, 581, 582, 583, 584, 927, 1548, 1559, 2395, 3031, 4661, 5053,
          5540, 5543, 5544, 6359,
        ],
        OMETEPEC: [874],
        "TAXCO DE ALARCON": [1553, 5561, 5562],
        "SAN MARCOS": [4637],
        "TLAPA DE COMONFORT": [5086],
        TIXTLA: [5309],
        "HUITZUCO DE LOS FIGUEROA": [5555],
        "ATOYAC DE ALVAREZ": [5563],
        PUNGARABATO: [5565],
        PETATLAN: [5567],
        "TECPAN DE GALEANA": [5568],
        ARCELIA: [5570],
        TELOLOAPAN: [5572],
        "CHILAPA DE ALVAREZ": [5574],
        "ZIHUATANEJO DE AZUETA": [5576, 5577],
      },
      Zacatecas: {
        FRESNILLO: [311, 868],
        GUADALUPE: [313, 5967],
        JEREZ: [490],
        ZACATECAS: [2335, 2467, 5021, 5952, 5953, 6345],
        JALPA: [3963],
        JUCHIPILA: [3964],
        "NOCHISTLAN DE MEJIA": [3966],
        LORETO: [3968],
        TABASCO: [3970],
        SOMBRERETE: [5288],
        PINOS: [5780],
        "RIO GRANDE": [5956],
        "TLALTENANGO DE SANCHEZ ROMAN": [5961],
        "CALERA": [5963],
        "JUAN ALDAMA": [5965],
        OJOCALIENTE: [5968],
        VALPARAISO: [5969],
        "MONTE ESCOBEDO": [5971],
        "TEUL DE GONZALEZ ORTEGA": [5972],
      },
      "San Luis Potosi": {
        MATEHUALA: [330, 5283],
        "SAN LUIS POTOSI": [
          331, 332, 335, 336, 471, 472, 830, 1431, 2332, 3057, 4787, 5029, 5104,
          5771, 5774, 5775, 6391,
        ],
        "RIOVERDE": [496],
        "CIUDAD VALLES": [785, 6529],
        "EL NARANJO": [4477],
        "SOLEDAD DE GRACIANO SANCHEZ": [5071],
        CARDENAS: [5786],
        "CIUDAD DEL MAIZ": [5787],
        CERRITOS: [5789],
        VENADO: [5791],
        TAMAZUNCHALE: [6530],
        EBANO: [6532],
        "SALINAS": [6829],
        "SANTA MARIA DEL RIO": [6830],
      },
      Chiapas: {
        TAPACHULA: [544, 4745, 5007, 5285, 5391],
        "SAN CRISTOBAL DE LAS CASAS": [547, 2297, 4439, 4728],
        "TUXTLA GUTIERREZ": [
          896, 1394, 1581, 4710, 4785, 5009, 5058, 5191, 5264, 6697, 6698, 6699,
          6700,
        ],
        "LAS MARGARITAS": [1910],
        OCOSINGO: [2292],
        HUIXTLA: [4437],
        "COMITAN DE DOMINGUEZ": [4441, 6703],
        REFORMA: [4645],
        MOTOZINTLA: [5263],
        ARRIAGA: [5394],
        TONALA: [5397],
        PIJIJIAPAN: [5398],
        "FRONTERA COMALAPA": [5404],
        "CHIAPA DE CORZO": [6709],
        VILLAFLORES: [6711],
        CINTALAPA: [6713],
        PALENQUE: [6715],
        YAJALON: [6717],
        "VENUSTIANO CARRANZA": [6718],
      },
      Tlaxcala: {
        "PAPALOTLA DE XICOHTENCATL": [513],
        HUAMANTLA: [538],
        CHIAUTEMPAN: [690, 5259],
        TLAXCALA: [5882],
        APIZACO: [5884],
        CALPULALPAN: [5888],
        TLAXCO: [5890],
        ZACATELCO: [5891],
        NATIVITAS: [5892],
      },
      Nayarit: {
        COMPOSTELA: [661, 5674, 5678],
        TEPIC: [765, 767, 911, 912, 913, 4602, 5297, 6373],
        "BAHIA DE BANDERAS": [5224, 8137],
        ACAPONETA: [5659],
        "SANTIAGO IXCUINTLA": [5661],
        TUXPAN: [5663],
        TECUALA: [5665],
        "IXTLAN DEL RIO": [5669],
        "SAN BLAS": [5671],
      },
      "Quintana Roo": {
        "BENITO JUAREZ": [
          850, 851, 1073, 1367, 1487, 1488, 1571, 1572, 1575, 1577, 1580, 1582,
          1583, 1591, 1807, 2366, 2821, 4640, 4675, 5035, 5057, 5103, 5762,
          5764, 6351,
        ],
        COZUMEL: [854, 5284],
        "PUERTO MORELOS": [873],
        SOLIDARIDAD: [1840, 2050, 2272, 2372, 2609, 4762, 5133, 5765],
        "FELIPE CARRILLO PUERTO": [1913],
        TULUM: [2277, 5089],
        "OTHON P. BLANCO": [5031, 5757],
      },
      Aguascalientes: {},
      "Baja California Sur": {},
      "Baja California": {},
      Campeche: {},
      Coahuila: {},
      Colima: {},
      Chihuahua: {},
      "Ciudad de Mexico": {},
      Durango: {},
      Guanajuato: {},
      Jalisco: {},
      "Estado de Mexico": {},
      Michoacan: {},
      "Nuevo Leon": {},
      Oaxaca: {},
      Puebla: {},
      Queretaro: {},
      Sinaloa: {},
      Sonora: {},
      Tamaulipas: {},
      Veracruz: {},
      Yucatan: {},
      "": {},
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