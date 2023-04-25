<template>
  <div
    class="app-footer flex justify-content-between align-items-center px-4 text-xs"
  >
    <span>made by <a href="https://www.emmd.dev" target="_blank">emmd</a></span>
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
