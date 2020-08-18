<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <v-container class="d-flex">
        <div class="d-flex align-center">
          <span>Jingkai Yu &#8213; A software engineer</span>
        </div>

        <v-spacer></v-spacer>

        <v-tooltip bottom open-delay="1500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              href="https://github.com/VictorYu379"
              target="_blank"
              text
            >
              <v-icon x-large>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>Github</span>
        </v-tooltip>
        <v-tooltip bottom open-delay="1500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              href="https://linkedin.com/in/victor-yu-549aa3113"
              target="_blank"
              text
            >
              <v-icon x-large>mdi-linkedin</v-icon>
            </v-btn>
          </template>
          <span>LinkedIn</span>
        </v-tooltip>
        <v-tooltip bottom open-delay="1500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              href="Resume-Yu Jingkai 2020 fall.pdf"
              target="_blank"
              text
            >
              <v-icon x-large>mdi-file-account</v-icon>
            </v-btn>
          </template>
          <span>Resume</span>
        </v-tooltip>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="mt-10" color="purple">
        <div id="header">
          <h3>Make software that works for people</h3>
        </div>
        <div>
          <span>Currently enrolled in Georgia Tech as a senior CS undergrad student</span>
        </div>
        <div>
          <span>Previously interned &#x40; HubSpot, Revel Systems, Hisense, ICBC</span>
        </div>
        <div>
          <span>Intern projects involved infrastructure and backend development,</span>
        </div>
        <div>
          <span>including Kubernetes, Apache Kafka, DynamoDB, AWS Lambda, AWS Kinesis</span>
        </div>
      </v-container>
      <v-img
        src="./assets/ruihetu-crop.jpeg"
        height="400px"
        gradient="to bottom, rgba(7, 2, 37, 1), rgba(15, 43, 92, 0.0) 20%, rgba(15, 43, 92, 0.0) 80%, rgba(7, 2, 37, 1)"
      />
      <div id="projects">
        <h2>Artifacts</h2>
        <v-card height="300px" raised color="#0C0A54" class="d-flex">
          <v-row align="center" class="white--text fill-height space-between pl-15 pr-15">
            <v-col cols="4">
              <div class="subheading">PDF.js with Vue Cli</div>
              <div class="body-1">A refactoring of Mozilla PDF.js, it replaces the default plain HTML and vanilla JavaScript with Vue framework. This project adopted Vue CLI and Vueetify to streamline development.</div>
              <div>
                <v-btn icon dark href="https://github.com/VictorYu379/pdfjsWithVueCli-demo">
                  <v-icon large>mdi-github</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
              <v-img src="./assets/logo.png" max-height="200px" contain />
            </v-col>
            <v-col cols="2">
              <v-img src="./assets/rightarrow.png" max-height="50px" contain />
            </v-col>
            <v-col cols="2">
              <v-img src="./assets/Pdf-js_logo.svg.png" max-height="200px" contain />
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-card>
        <v-card height="300px" raised color="#0c0a73" class="d-flex">
          <v-row align="center" class="white--text fill-height space-between pl-15 pr-15">
            <v-col cols="3">
              <div class="subheading">Invertor</div>
              <div
                class="body-1"
              >A chrome extension PDF viewer in dark mode. Based on Mozilla PDF.js source code, it can view documents in multiple color themes in order to provide better eye protection.</div>
              <div>
                <v-btn icon dark href="https://github.com/VictorYu379/Invertor">
                  <v-icon large>mdi-github</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
              <v-img src="./assets/invertor-before.png" max-height="200px" contain />
            </v-col>
            <v-col cols="1">
              <v-img src="./assets/rightarrow.png" max-height="50px" contain />
            </v-col>
            <v-col cols="2">
              <v-img src="./assets/invertor_dark.png" max-height="200px" contain />
            </v-col>
            <v-col cols="1">
              <v-img src="./assets/rightarrow.png" max-height="50px" contain />
            </v-col>
            <v-col cols="2">
              <v-img src="./assets/invertor_warm.png" max-height="200px" contain />
            </v-col>
          </v-row>
        </v-card>
        <v-card height="300px" raised color="#012e30" class="d-flex">
          <v-row align="center" class="white--text fill-height space-between pl-15 pr-15">
            <v-col cols="4">
              <div class="subheading">Finanacial Management</div>
              <div
                class="body-1"
              >A web app for managing your personal daily expenditure. Made with Vue.js, MySQL, Express and Node.js. Basic login and expenditure logging have been implemented.</div>
              <div>
                <v-btn icon dark href="https://github.com/VictorYu379/Fin_Man">
                  <v-icon large>mdi-github</v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
              <v-img src="./assets/dollarsign.png" max-height="200px" contain />
            </v-col>
            <v-col cols="1">
              <v-img src="./assets/rightarrow.png" max-height="50px" contain />
            </v-col>
            <v-col cols="2">
              <v-img src="./assets/general-ledger.png" max-height="200px" contain />
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  title: "Jingkai Yu's Space",
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      model: 0,
    };
  },
};
</script>

<style>
.v-app-bar span {
  font-size: 25px;
}

.v-main {
  color: rgb(233, 235, 212);
}

.v-main #header {
  margin-bottom: 20px;
  font-size: 25px;
}

.v-main span {
  margin-bottom: 20px;
  font-size: 15px;
}

.v-main .container {
  width: 60%;
  margin-bottom: 5%;
}

#projects {
  margin-top: 40px;
  margin-left: 8%;
  margin-right: 8%;
  margin-bottom: 40px;
}

#projects h2 {
  margin-bottom: 20px;
}

#projects .v-card {
  margin-bottom: 50px;
}

#projects .subheading {
  margin-bottom: 5%;
  font-size: 28px;
}

#projects .v-btn {
  margin-top: 15px;
}
</style>