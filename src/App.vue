<template>
  <div class="preview">
    <h1 class="preview__title">Webpack Template</h1>
    <a class="preview__link" href="#">Repository link</a>
    <img class="preview__image" src="./assets/images/nature.jpg" />
    <router-link to="/author">Show author</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import './assets/styles/styles.css';

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style>
.preview {
  width: 100%;
  min-height: 100vh;
  color: white;
  background: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: cetner;
  align-items: center;
}

.preview__title {
  margin: 20px 0 60px;
  font-weight: 600;
  font-size: 32px;
}

.preview__link {
  color: white;
  margin-bottom: 30px;
}

.preview__image {
  width: 640px;
  height: 480px;
  border-radius: 30px;
}
</style>
