<template id="t">
  <div class="container">
   <div class="field">
      <label class="label">
                Copy to Clipboard!
            </label>
      <p class="control">
        <span type="text">{{ message }}</span>
      </p>
    </div>
    <button type="button"
    v-clipboard:copy="message"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">Copy!</button>
  </div>
</template>

<script src='./index.js'></script>

<style lang='scss' src='./index.scss'></style>
