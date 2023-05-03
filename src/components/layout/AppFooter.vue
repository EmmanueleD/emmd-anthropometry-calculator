<template>
  <div
    class="app-footer flex justify-content-between align-items-center px-4 text-xs"
  >
    <div class="flex align-items-center cursor-pointer">
      <span>made by</span>
      <img
        class="ml-1"
        style="width: 60px"
        @click="openEMMD"
        src="../../assets/img/emmd-logo.png"
      />
    </div>
    <small
      >Derechos de autor © NutriTools 2023. Todos los derechos
      reservados.</small
    >
    <span
      ><label class="mr-2">{{ $t("language.changeTheLanguage") }}</label
      ><select v-model="$i18n.locale">
        <option value="de">{{ $t("language.german") }}</option>
        <option value="en">{{ $t("language.english") }}</option>
        <option value="es">{{ $t("language.spanish") }}</option>
        <option value="fr">{{ $t("language.french") }}</option>
        <option value="it">{{ $t("language.italian") }}</option>
        <option value="pt">{{ $t("language.portuguese") }}</option>
      </select></span
    >
  </div>
</template>

<script setup>
function openEMMD() {
  window.open("https://www.emmd.dev", "_blank")
}
</script>
