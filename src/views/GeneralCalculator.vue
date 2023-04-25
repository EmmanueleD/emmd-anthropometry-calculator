<template>
  <div class="flex justify-content-center align-items-start p-6">
    <Card class="w-full lg:w-11 shadow-7 border-round-3xl">
      <template #header>
        <div class="px-3">
          <h2>
            {{ $t("appName") }}
          </h2>
        </div>
      </template>
      <template #content>
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <Dropdown
                :options="sexOptions"
                optionValue="value"
                class="w-full"
                id="username"
                v-model="sex"
                style="height: 47px"
              >
                <template #option="slotProps">
                  <div class="flex align-items-center">
                    <span v-if="slotProps.option.value == 'M'">
                      {{ $t("sexMale") }}
                    </span>

                    <span v-if="slotProps.option.value == 'F'">
                      {{ $t("sexFemale") }}
                    </span>
                  </div>
                </template>
                <template #value="slotProps">
                  <div class="flex align-items-center">
                    <span v-if="slotProps.value == 'M'">
                      {{ $t("sexMale") }}
                    </span>

                    <span v-if="slotProps.value == 'F'">
                      {{ $t("sexFemale") }}
                    </span>
                  </div>
                </template>
              </Dropdown>
              <label for="username">{{ $t("sex") }}</label>
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="age"
                v-model="age"
                class="w-full"
                inputId="minmax"
                :min="0"
              ></InputNumber>
              <label for="age">{{ $t("age") }}</label>
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="height"
                v-model="height"
                class="w-full"
                suffix=" m"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="height">{{ $t("height") }} (m)</label>
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="weight"
                v-model="weight"
                class="w-full"
                suffix=" kg"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="weight">{{ $t("weight") }} (kg)</label>
            </span>
          </div>
          <Divider></Divider>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="tricepsSkinfold"
                v-model="tricepsSkinfold"
                class="w-full"
                suffix=" mm"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="tricepsSkinfold"
                >{{ $t("tricepsSkinfold") }} (mm)</label
              >
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="subscapularSkinfold"
                v-model="subscapularSkinfold"
                class="w-full"
                suffix=" mm"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="subscapularSkinfold"
                >{{ $t("subscapularSkinfold") }} (mm)</label
              >
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="suprailiacSkinfold"
                v-model="suprailiacSkinfold"
                class="w-full"
                suffix=" mm"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="suprailiacSkinfold"
                >{{ $t("suprailiacSkinfold") }} (mm)</label
              >
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="bicepsSkinfold"
                v-model="bicepsSkinfold"
                class="w-full"
                suffix=" mm"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="bicepsSkinfold"
                >{{ $t("bicepsSkinfold") }} (mm)</label
              >
            </span>
          </div>
          <Divider></Divider>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="wristDiameter"
                v-model="wristDiameter"
                suffix=" cm"
                class="w-full"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="wristDiameter">{{ $t("wristDiameter") }} (cm)</label>
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <span class="p-float-label">
              <InputNumber
                id="femurDiameter"
                v-model="femurDiameter"
                class="w-full"
                suffix=" cm"
                :min="0"
                :minFractionDigits="2"
                :maxFractionDigits="2"
              ></InputNumber>
              <label for="femurDiameter">{{ $t("femurDiameter") }} (cm)</label>
            </span>
          </div>
          <Divider></Divider>

          <div class="col-12 flex flex-column">
            <span>
              {{ $t("bodyDensity")
              }}<span v-if="bodyDensity" class="font-bold ml-2">{{
                bodyDensity.toPrecision(5)
              }}</span>
            </span>
            <span>
              {{ $t("bodyFatPercentage")
              }}<span v-if="bodyFatPercentage" class="font-bold ml-2">{{
                bodyFatPercentage.toPrecision(5)
              }}</span>
            </span>
            <span>
              {{ $t("fatMass") }}
              <span v-if="fatMass" class="font-bold ml-2">{{
                fatMass.toPrecision(5)
              }}</span>
            </span>
            <span>
              {{ $t("residualMass")
              }}<span v-if="residualMass" class="font-bold ml-2">{{
                residualMass.toPrecision(5)
              }}</span>
            </span>
            <span>
              {{ $t("boneMass") }}
              <span v-if="boneMass" class="font-bold ml-2">{{
                boneMass.toPrecision(5)
              }}</span>
            </span>
            <span>
              {{ $t("muscleMass") }}
              <span v-if="muscleMass" class="font-bold ml-2">{{
                muscleMass.toPrecision(5)
              }}</span>
            </span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const sexOptions = [
  {
    value: "M",
  },
  {
    value: "F",
  },
]
const sex = ref("")
const age = ref()
const height = ref()
const weight = ref()
const tricepsSkinfold = ref()
const subscapularSkinfold = ref()
const suprailiacSkinfold = ref()
const bicepsSkinfold = ref()
const wristDiameter = ref()
const femurDiameter = ref()

const bodyDensity = computed(() => {
  if (sex.value == "M") {
    if (age.value >= 17 && age.value <= 19) {
      return (
        1.162 -
        0.063 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value,
            Math.log10(40)
          )
      )
    } else if (age.value >= 20 && age.value <= 29) {
      return (
        1.1631 -
        0.0632 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else if (age.value >= 30 && age.value <= 39) {
      return (
        1.1422 -
        0.0544 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else if (age.value >= 40 && age.value <= 49) {
      return (
        1.162 -
        0.07 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else if (age.value >= 50) {
      return (
        1.1715 -
        0.0779 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else {
      return 0
    }
  } else if (sex.value == "F") {
    if (age.value >= 17 && age.value <= 19) {
      return (
        1.1549 -
        0.0678 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else if (age.value >= 20 && age.value <= 29) {
      return (
        1.1599 -
        0.0717 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else if (age.value >= 30 && age.value <= 39) {
      return (
        1.1423 -
        0.0632 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else if (age.value >= 40 && age.value <= 49) {
      return (
        1.1333 -
        0.0612 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else if (age.value >= 50) {
      return (
        1.1339 -
        0.0645 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
      )
    } else {
      return 0
    }
  } else {
    return 0
  }
})

const bodyFatPercentage = computed(() => {
  if (bodyDensity.value) {
    return 495 / bodyDensity.value - 450
  }
  return 0
})

const fatMass = computed(() => {
  if (bodyFatPercentage.value && weight.value) {
    return (weight.value / 100) * bodyFatPercentage.value
  }
  return 0
})

const residualMass = computed(() => {
  if (weight.value) {
    if (sex.value == "M") {
      return weight.value * 0.241
    }
    if (sex.value == "F") {
      return weight.value * 0.209
    }
  }
  return 0
})

const boneMass = computed(() => {
  if (height.value && wristDiameter.value && femurDiameter.value) {
    return (
      3.02 *
      (height.value ** 2 *
        (wristDiameter.value / 100) *
        (femurDiameter.value / 100) *
        400) **
        0.712
    )
  }
  return 0
})

const muscleMass = computed(() => {
  if (weight.value && fatMass.value && boneMass.value && residualMass.value) {
    return weight.value - (fatMass.value + boneMass.value + residualMass.value)
  }
  return 0
})
</script>
