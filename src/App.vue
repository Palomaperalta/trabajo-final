<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
.copete {
  color: blueviolet;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
  margin: 10px 0px 10px 0px;
}

.carousel {
  max-height: 500px;
  width: 500px;
  height: 500px;
}

.color-parrafo {
  color: blueviolet;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
  margin-top: 20px;
  line-height: 200%;
}

div.card {
  border-color: black;
  border-style: dotted;
  border-radius: 10px;
  font-style: italic;
  background-color: #ececec;
  color: blueviolet;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
  margin: 10px 0px;
  box-shadow: 10px 5px 5px rgb(98, 187, 199);
}

div .row .col {
  color: blueviolet;
  background-color: wheat;
  font-family: cursive;
  font-style: italic;
  border-style: ridge;
  margin: 10px 0px 20px 0px;
}
</style>
