<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Books</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/">
        <span class="mr-2">Main</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- 현재 라우터가 제공하는 컴포넌트가 렌더링된다. -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
