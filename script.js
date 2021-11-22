const Heather = {
  data() {
    return {
      value: "myheater",
    };
  },
  template: `
  <section class="myheaterbanniere">
  <h1>MétéOAnthony</h1> <p>La météo présentée par MétéoAnthony</p>
    </section>
`,
};

const Content = {
  data() {
    return {
      value: "mycontent",
    };
  },
  template: `
  <section class="texteprincipale1">
    <h3>Météo</h3>
      <p>L'application de météo par excellence pour vous presenter les conditions météorologiques de Nice et de Marseille.</p>
      </section>
  `,
};

const Content2 = {
  data() {
    return {
      temperature: 0,
      temperaturemin: "",
      temperaturemax: "",
      nomVille: "",
      humidite: "",
      vent: "",
    };
  },

  async mounted() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=06200,fr&appid=4ae022c2b26e92c886bc55b909123bad&units=metric"
    );
    const weatherData = await response.json();
    this.temperature = weatherData.main.temp;
    this.temperaturemin = weatherData.main.temp_min;
    this.temperaturemax = weatherData.main.temp_max;
    this.nomVille = weatherData.name;
    this.humidite = weatherData.main.humidity;
    this.vent = weatherData.wind.speed;
  },
  template: `
    <div class="blockoptions">
        <h3>{{nomVille}}</h3>
        <p>Il fait {{temperature}}°C</p>
        <p>Min : {{temperaturemin}}°C</p>
        <p>Max : {{temperaturemax}}°C</p>
        <p>{{humidite}} %</p>
        <p>{{vent}} km/h</p>
    </div>
    `,
};

const Content3 = {
  data() {
    return {
      temperature: 0,
      temperaturemin: "",
      temperaturemax: "",
      nomVille: "",
      humidite: "",
      vent: "",
    };
  },

  async mounted() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=13000,fr&appid=4ae022c2b26e92c886bc55b909123bad&units=metric"
    );
    const weatherData = await response.json();
    this.temperature = weatherData.main.temp;
    this.temperaturemin = weatherData.main.temp_min;
    this.temperaturemax = weatherData.main.temp_max;
    this.nomVille = weatherData.name;
    this.humidite = weatherData.main.humidity;
    this.vent = weatherData.wind.speed;

    console.log(weatherData);
  },

  template: `
    <div class="blockoptions">
        <h3>{{nomVille}}</h3>
        <p>Il fait {{temperature}}°C</p>
        <p>Min : {{temperaturemin}}°C</p>
        <p>Max : {{temperaturemax}}°C</p>
        <p>{{humidite}} %</p>
        <p>{{vent}} km/h</p>
    </div>
    `,
};

const Content4 = {
  data() {
    return {
      temperature: 0,
      temperaturemin: "",
      temperaturemax: "",
      nomVille: "",
      humidite: "",
      vent: "",
      weatherLocation: "",
      city: "",
    };
  },

  methods: {
    async getWeatherByLocation() {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const url =
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lng +
          "&appid=4ae022c2b26e92c886bc55b909123bad&units=metric";
        const response = await fetch(url);
        const weatherData = await response.json();
        this.weatherLocation = weatherData.name;
        this.temperature = weatherData.main.temp;
        this.temperaturemin = weatherData.main.temp_min;
        this.temperaturemax = weatherData.main.temp_max;
        this.nomVille = weatherData.name;
        this.humidite = weatherData.main.humidity;
        this.vent = weatherData.wind.speed;
      });
    },
  },

  /* Template */
  template: `
  <div class="blockoptions">
        <h3>{{weatherLocation}}</h3>
        <p>Il fait {{temperature}}°C</p>
        <p>Min : {{temperaturemin}}°C</p>
        <p>Max : {{temperaturemax}}°C</p>
        <p>{{humidite}} %</p>
        <p>{{vent}} km/h</p>
        <button @click="getWeatherByLocation">Localisez-moi</button>
        </div>
    `,
};

const Footer = {
  data() {
    return {
      value: "my-footer",
    };
  },
  template: `
    
      <p> &copy Tout droits reservées </p>
  `,
  /* mounted() {
    console.log("Le composant est monté");
  },*/ //montage du composant //
};

const RootComponent = {
  components: {
    myheater: Heather,
    mycontent: Content,
    mycontent2: Content2,
    mycontent3: Content3,
    mycontent4: Content4,
    "my-footer": Footer,

    //il faut mettre des guillemets quand y'a un tiret dans le compenent//
  },
  template: `
    <myheater /> 
    <mycontent /> 
    <mycontent2 /> 
    <mycontent3 />
    <mycontent4 />
    <my-footer />

  `,
};

const app = Vue.createApp(RootComponent).mount("#root");
