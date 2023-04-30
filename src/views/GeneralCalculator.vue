<template>
  <div class="grid p-4">
    <div class="col-12 md:col-9 p-1">
      <Card class="shadow-7 border-round-3xl">
        <!-- <template #header>
          <div class="px-3">
            <h2>
              {{ $t("appName") }}
            </h2>
          </div>
        </template> -->
        <template #content>
          <div class="grid">
            <Divider>
              {{ $t("sectionTitles.GeneralData") }}
            </Divider>
            <div class="col-12 md:col-3 mb-3">
              <span class="p-float-label">
                <Dropdown
                  @change="changeSex"
                  :options="sexOptions"
                  optionValue="value"
                  class="w-full"
                  id="username"
                  v-model="sex"
                >
                  <template #option="slotProps">
                    <span v-if="slotProps.option.value == 'M'">
                      {{ $t("sexMale") }}
                    </span>

                    <span v-if="slotProps.option.value == 'F'">
                      {{ $t("sexFemale") }}
                    </span>
                  </template>
                  <template #value="slotProps">
                    <span v-if="slotProps.value == 'M'">
                      {{ $t("sexMale") }}
                    </span>

                    <span v-if="slotProps.value == 'F'">
                      {{ $t("sexFemale") }}
                    </span>
                  </template>
                </Dropdown>
                <label for="username">{{ $t("sex") }}</label>
              </span>
            </div>
            <div class="col-12 md:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeAge"
                  id="age"
                  v-model="age"
                  class="w-full"
                  inputId="minmax"
                  :min="0"
                ></InputNumber>
                <label for="age">{{ $t("age") }}</label>
              </span>
            </div>
            <div class="col-12 md:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeHeight"
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
            <div class="col-12 md:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeWeight"
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
            <Divider>
              {{ $t("sectionTitles.Skinfolds") }}
            </Divider>
            <div class="col-12 md:col-3 lg:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeTricepsSkinfold"
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
            <div class="col-12 md:col-3 lg:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeSubscapularSkinfold"
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
            <div class="col-12 md:col-3 lg:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeSuprailiacSkinfold"
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
            <div class="col-12 md:col-3 lg:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeBicepsSkinfold"
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
            <Divider>
              {{ $t("sectionTitles.Diameters") }}
            </Divider>
            <div class="col-12 md:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeWristDiameter"
                  id="wristDiameter"
                  v-model="wristDiameter"
                  suffix=" cm"
                  class="w-full"
                  :min="0"
                  :minFractionDigits="2"
                  :maxFractionDigits="2"
                ></InputNumber>
                <label for="wristDiameter"
                  >{{ $t("wristDiameter") }} (cm)</label
                >
              </span>
            </div>
            <div class="col-12 md:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeFemurDiameter"
                  id="femurDiameter"
                  v-model="femurDiameter"
                  class="w-full"
                  suffix=" cm"
                  :min="0"
                  :minFractionDigits="2"
                  :maxFractionDigits="2"
                ></InputNumber>
                <label for="femurDiameter"
                  >{{ $t("femurDiameter") }} (cm)</label
                >
              </span>
            </div>
            <Divider>
              {{ $t("sectionTitles.Circumferences") }}
            </Divider>
            <div class="col-12 md:col-3 mb-3">
              <span class="p-float-label">
                <InputNumber
                  @blur="changeArmCircumference"
                  id="armCircumference"
                  v-model="armCircumference"
                  class="w-full"
                  suffix=" cm"
                  :min="0"
                  :minFractionDigits="2"
                  :maxFractionDigits="2"
                ></InputNumber>
                <label for="armCircumference"
                  >{{ $t("armCircumference") }} (cm)</label
                >
              </span>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-12 md:col-3 p-1">
      <Card class="shadow-7 border-round-3xl">
        <template #content>
          <div class="flex flex-column">
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("bodyDensity") }}</span
              ><span v-if="bodyDensity" class="font-bold ml-2">{{
                bodyDensity.toPrecision(5)
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("bodyFatPercentage") }}</span
              ><span v-if="bodyFatPercentage" class="font-bold ml-2">{{
                bodyFatPercentage.toPrecision(5)
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("fatMass") }}</span
              ><span v-if="fatMass" class="font-bold ml-2">{{
                fatMass.toPrecision(5)
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("bodyFatPercentagePercentile") }}</span
              ><span
                v-if="bodyFatPercentagePercentile"
                class="font-bold ml-2"
                >{{ bodyFatPercentagePercentile }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("residualMass") }}</span
              ><span v-if="residualMass" class="font-bold ml-2">{{
                residualMass.toPrecision(5)
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("boneMass") }}</span
              ><span v-if="boneMass" class="font-bold ml-2">{{
                boneMass.toPrecision(5)
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("muscleMass") }}</span
              ><span v-if="muscleMass" class="font-bold ml-2">{{
                muscleMass.toPrecision(5)
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("muscularArmArea") }}</span
              ><span v-if="muscularArmArea" class="font-bold ml-2">{{
                muscularArmArea.toPrecision(5)
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
            <span
              class="flex justify-content-between align-items-start flex-wrap mb-4 flex-column"
            >
              <span>{{ $t("muscularArmAreaPercentile") }}</span
              ><span v-if="muscularArmAreaPercentile" class="font-bold ml-2">{{
                muscularArmAreaPercentile
              }}</span
              ><span v-else class="font-bold ml-2">--</span>
            </span>
          </div>
        </template>
      </Card>
    </div>
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
const armCircumference = ref()

const bodyFatPercentage = ref()
const bodyDensity = ref()
const residualMass = ref()
const boneMass = ref()
const muscleMass = ref()
const muscularArmArea = ref()
const muscularArmAreaPercentile = ref()
const bodyFatPercentagePercentile = ref()

function changeSex() {
  calcBodyDensity()
  calcResidualMass()
  calcMuscleMass()
  calcMuscularArmArea()
  calcBodyFatPercentagePercentile()
}

function changeAge() {
  calcBodyDensity()
  calcMuscleMass()
  calcMuscularArmArea()
  calcBodyFatPercentagePercentile()
}

function changeTricepsSkinfold() {
  calcBodyDensity()
  calcMuscleMass()
  calcMuscularArmArea()
}

function changeSubscapularSkinfold() {
  calcBodyDensity()
  calcMuscleMass()
}

function changeSuprailiacSkinfold() {
  calcBodyDensity()
  calcMuscleMass()
}

function changeBicepsSkinfold() {
  calcBodyDensity()
  calcMuscleMass()
}

function changeWeight() {
  calcResidualMass()
  calcBoneMass()
  calcMuscleMass()
}

function changeHeight() {
  calcBodyDensity()
  calcMuscleMass()
}

function changeWristDiameter() {
  calcBoneMass()
  calcMuscleMass()
}

function changeFemurDiameter() {
  calcBoneMass()
  calcMuscleMass()
}

function changeArmCircumference() {
  calcMuscularArmArea()
}

function calcBodyDensity() {
  bodyDensity.value = null
  if (sex.value == "M") {
    if (age.value >= 17 && age.value <= 19) {
      bodyDensity.value =
        1.162 -
        0.063 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value,
            Math.log10(40)
          )
    } else if (age.value >= 20 && age.value <= 29) {
      bodyDensity.value =
        1.1631 -
        0.0632 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else if (age.value >= 30 && age.value <= 39) {
      bodyDensity.value =
        1.1422 -
        0.0544 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else if (age.value >= 40 && age.value <= 49) {
      bodyDensity.value =
        1.162 -
        0.07 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else if (age.value >= 50) {
      bodyDensity.value =
        1.1715 -
        0.0779 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else {
      bodyDensity.value = null
    }
  } else if (sex.value == "F") {
    if (age.value >= 17 && age.value <= 19) {
      bodyDensity.value =
        1.1549 -
        0.0678 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else if (age.value >= 20 && age.value <= 29) {
      bodyDensity.value =
        1.1599 -
        0.0717 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else if (age.value >= 30 && age.value <= 39) {
      bodyDensity.value =
        1.1423 -
        0.0632 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else if (age.value >= 40 && age.value <= 49) {
      bodyDensity.value =
        1.1333 -
        0.0612 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else if (age.value >= 50) {
      bodyDensity.value =
        1.1339 -
        0.0645 *
          Math.log10(
            tricepsSkinfold.value +
              subscapularSkinfold.value +
              suprailiacSkinfold.value +
              bicepsSkinfold.value
          )
    } else {
      bodyDensity.value = null
    }
  } else {
    bodyDensity.value = null
  }
  calcBodyFatPercentage()
}

function calcBodyFatPercentage() {
  if (bodyDensity.value) {
    bodyFatPercentage.value = 495 / bodyDensity.value - 450
    calcBodyFatPercentagePercentile()
    return
  }
  bodyFatPercentage.value = null
}

const fatMass = computed(() => {
  if (bodyFatPercentage.value && weight.value) {
    return (weight.value / 100) * bodyFatPercentage.value
  }
  return 0
})

function calcBodyFatPercentagePercentile() {
  let percentiles = [5, 10, 15, 25, 50, 75, 85, 90, 95]

  let percentilesTable = {
    M: [
      [8, 9, 10, 12, 16, 20, 23, 25, 28],
      [9, 10, 11, 13, 18, 23, 25, 26, 29],
      [16, 17, 18, 20, 23, 26, 27, 28, 30],
      [15, 17, 18, 20, 23, 25, 27, 27, 29],
      [14, 16, 18, 21, 26, 30, 32, 34, 36],
      [15, 17, 19, 21, 26, 30, 32, 34, 36],
      [15, 17, 19, 22, 27, 31, 33, 35, 37],
      [15, 18, 20, 22, 27, 31, 33, 35, 37],
      [16, 18, 20, 22, 27, 31, 33, 35, 37],
      [13, 16, 18, 21, 26, 30, 33, 35, 37],
      [13, 16, 18, 21, 26, 30, 33, 34, 36],
    ],
    F: [
      [17, 19, 21, 23, 27, 33, 35, 37, 40],
      [18, 20, 21, 24, 29, 34, 37, 39, 41],
      [21, 23, 25, 27, 31, 36, 38, 40, 42],
      [22, 24, 25, 28, 32, 37, 39, 40, 42],
      [25, 28, 29, 31, 35, 39, 41, 42, 43],
      [26, 28, 29, 32, 36, 39, 41, 42, 44],
      [27, 30, 32, 35, 39, 43, 46, 47, 48],
      [27, 30, 32, 35, 39, 44, 45, 47, 49],
      [28, 31, 32, 35, 40, 43, 45, 46, 48],
      [27, 30, 32, 34, 38, 42, 44, 46, 47],
      [26, 29, 31, 34, 38, 42, 44, 45, 47],
    ],
  }

  if (age.value && fatMass.value) {
    let ageLine = []

    if (age.value >= 18 && age.value < 25) {
      ageLine.push(...percentilesTable[sex.value][0])
    }
    if (age.value >= 25 && age.value < 30) {
      ageLine.push(...percentilesTable[sex.value][1])
    }
    if (age.value >= 30 && age.value < 35) {
      ageLine.push(...percentilesTable[sex.value][2])
    }
    if (age.value >= 35 && age.value < 40) {
      ageLine.push(...percentilesTable[sex.value][3])
    }
    if (age.value >= 40 && age.value < 45) {
      ageLine.push(...percentilesTable[sex.value][4])
    }
    if (age.value >= 45 && age.value < 50) {
      ageLine.push(...percentilesTable[sex.value][5])
    }
    if (age.value >= 50 && age.value < 55) {
      ageLine.push(...percentilesTable[sex.value][6])
    }
    if (age.value >= 55 && age.value < 60) {
      ageLine.push(...percentilesTable[sex.value][7])
    }
    if (age.value >= 60 && age.value < 65) {
      ageLine.push(...percentilesTable[sex.value][8])
    }
    if (age.value >= 65 && age.value < 70) {
      ageLine.push(...percentilesTable[sex.value][9])
    }
    if (age.value >= 70 && age.value < 75) {
      ageLine.push(...percentilesTable[sex.value][10])
    }

    for (let i = 0; i < 9; i++) {
      if (i == 0) {
        if (fatMass.value < ageLine[i]) {
          bodyFatPercentagePercentile.value = percentiles[i]
          return
        } else {
          bodyFatPercentagePercentile.value = null
        }
      } else if (i >= 1) {
        if (fatMass.value >= ageLine[i - 1] && fatMass.value < ageLine[i]) {
          bodyFatPercentagePercentile.value = percentiles[i]
          return
        } else {
          bodyFatPercentagePercentile.value = null
        }
      }
    }
  } else {
    bodyFatPercentagePercentile.value = null
  }
}

function calcResidualMass() {
  if (weight.value) {
    if (sex.value == "M") {
      residualMass.value = weight.value * 0.241
    }
    if (sex.value == "F") {
      residualMass.value = weight.value * 0.209
    }
    return
  }
  residualMass.value = null
}

function calcBoneMass() {
  if (height.value && wristDiameter.value && femurDiameter.value) {
    boneMass.value =
      3.02 *
      (height.value ** 2 *
        (wristDiameter.value / 100) *
        (femurDiameter.value / 100) *
        400) **
        0.712
    return
  }
  boneMass.value = null
}

function calcMuscleMass() {
  if (weight.value && fatMass.value && boneMass.value && residualMass.value) {
    muscleMass.value =
      weight.value - (fatMass.value + boneMass.value + residualMass.value)
    return
  }
  muscleMass.value = null
}

function calcMuscularArmArea() {
  if (age.value < 18) {
    muscularArmArea.value =
      (armCircumference.value - Math.PI * tricepsSkinfold.value) ** 2 /
      (4 * Math.PI)
    calcMuscularArmAreaPercentile()
    return
  } else if (age.value >= 18) {
    if (sex.value == "M") {
      muscularArmArea.value =
        (armCircumference.value - Math.PI * tricepsSkinfold.value) ** 2 /
          (4 * Math.PI) -
        10
      calcMuscularArmAreaPercentile()
      return
    } else if (sex.value == "F") {
      muscularArmArea.value =
        (armCircumference.value - Math.PI * tricepsSkinfold.value) ** 2 /
          (4 * Math.PI) -
        6.5
      calcMuscularArmAreaPercentile()
      return
    }
  }
  muscularArmArea.value = null
  calcMuscularArmAreaPercentile()
}

function calcMuscularArmAreaPercentile() {
  let percentiles = [5, 10, 15, 25, 50, 75, 85, 90, 95]
  let percentilesTable = {
    M: [
      [9.7, 10.4, 10.8, 11.6, 13, 14.6, 15.4, 16.3, 17.2],
      [10.1, 10.9, 11.3, 12.4, 13.9, 15.6, 16.4, 16.9, 18.4],
      [11.2, 12, 12.6, 13.5, 15, 16.4, 17.4, 18.3, 19.5],
      [12, 12.9, 13.5, 14.5, 16.2, 17.9, 18.8, 19.8, 20.9],
      [13.2, 14.2, 14.7, 15.7, 17.6, 19.5, 20.7, 21.7, 23.2],
      [14.4, 15.3, 15.8, 16.8, 18.7, 21.3, 22.9, 23.8, 25.7],
      [15.1, 16.2, 17, 18.5, 20.6, 22.6, 24.5, 25.2, 28.6],
      [16.3, 17.8, 18.5, 19.5, 21.6, 24, 25.5, 26.6, 29],
      [18.2, 19.3, 20.3, 21.7, 23.5, 26.7, 28.7, 30.4, 32.9],
      [19.6, 20.7, 21.6, 23, 25.7, 29, 32.2, 34, 37.1],
      [21, 22, 23, 24.8, 27.7, 31.6, 33.6, 36.1, 40.3],
      [22.6, 24.1, 25.3, 26.9, 30.4, 35.9, 39.3, 40.9, 44.9],
      [24.5, 26.7, 28.1, 30.4, 35.7, 41.3, 45.3, 48.1, 52.5],
      [28.3, 31.3, 33.1, 36.1, 41.9, 47.4, 51.3, 54, 57.5],
      [31.9, 34.9, 36.9, 40.3, 46.3, 53.1, 56.3, 57.7, 63],
      [37, 40.9, 42.4, 45.9, 51.9, 57.8, 63.6, 66.2, 70.5],
      [39.6, 42.6, 44.8, 48, 53.4, 60.4, 64.3, 67.9, 73.1],
      [34.2, 37.3, 39.6, 42.7, 49.4, 57.1, 61.8, 65, 72], //18
      [34.2, 37.3, 39.6, 42.7, 49.4, 57.1, 61.8, 65, 72],
      [34.2, 37.3, 39.6, 42.7, 49.4, 57.1, 61.8, 65, 72],
      [34.2, 37.3, 39.6, 42.7, 49.4, 57.1, 61.8, 65, 72],
      [34.2, 37.3, 39.6, 42.7, 49.4, 57.1, 61.8, 65, 72],
      [34.2, 37.3, 39.6, 42.7, 49.4, 57.1, 61.8, 65, 72],
      [34.2, 37.3, 39.6, 42.7, 49.4, 57.1, 61.8, 65, 72],
      [36.6, 39.9, 42.4, 46, 53, 61.4, 66.1, 68.9, 74.5],
      [36.6, 39.9, 42.4, 46, 53, 61.4, 66.1, 68.9, 74.5],
      [36.6, 39.9, 42.4, 46, 53, 61.4, 66.1, 68.9, 74.5],
      [36.6, 39.9, 42.4, 46, 53, 61.4, 66.1, 68.9, 74.5],
      [36.6, 39.9, 42.4, 46, 53, 61.4, 66.1, 68.9, 74.5],
      [37.9, 40.9, 43.4, 47.3, 54.4, 63.2, 67.6, 70.8, 76.1],
      [37.9, 40.9, 43.4, 47.3, 54.4, 63.2, 67.6, 70.8, 76.1],
      [37.9, 40.9, 43.4, 47.3, 54.4, 63.2, 67.6, 70.8, 76.1],
      [37.9, 40.9, 43.4, 47.3, 54.4, 63.2, 67.6, 70.8, 76.1],
      [37.9, 40.9, 43.4, 47.3, 54.4, 63.2, 67.6, 70.8, 76.1],
      [38.5, 42.6, 44.6, 47.9, 55.3, 64, 69.1, 72.7, 77.6],
      [38.5, 42.6, 44.6, 47.9, 55.3, 64, 69.1, 72.7, 77.6],
      [38.5, 42.6, 44.6, 47.9, 55.3, 64, 69.1, 72.7, 77.6],
      [38.5, 42.6, 44.6, 47.9, 55.3, 64, 69.1, 72.7, 77.6],
      [38.5, 42.6, 44.6, 47.9, 55.3, 64, 69.1, 72.7, 77.6],
      [38.4, 42.1, 45.1, 48.7, 56, 64, 68.5, 71.6, 77],
      [38.4, 42.1, 45.1, 48.7, 56, 64, 68.5, 71.6, 77],
      [38.4, 42.1, 45.1, 48.7, 56, 64, 68.5, 71.6, 77],
      [38.4, 42.1, 45.1, 48.7, 56, 64, 68.5, 71.6, 77],
      [38.4, 42.1, 45.1, 48.7, 56, 64, 68.5, 71.6, 77],
      [37.7, 41.3, 43.7, 47.9, 55.2, 63.3, 68.4, 72.2, 76.2],
      [37.7, 41.3, 43.7, 47.9, 55.2, 63.3, 68.4, 72.2, 76.2],
      [37.7, 41.3, 43.7, 47.9, 55.2, 63.3, 68.4, 72.2, 76.2],
      [37.7, 41.3, 43.7, 47.9, 55.2, 63.3, 68.4, 72.2, 76.2],
      [37.7, 41.3, 43.7, 47.9, 55.2, 63.3, 68.4, 72.2, 76.2],
      [36, 40, 42.7, 46.6, 54, 62.7, 67, 70.4, 77.4],
      [36, 40, 42.7, 46.6, 54, 62.7, 67, 70.4, 77.4],
      [36, 40, 42.7, 46.6, 54, 62.7, 67, 70.4, 77.4],
      [36, 40, 42.7, 46.6, 54, 62.7, 67, 70.4, 77.4],
      [36, 40, 42.7, 46.6, 54, 62.7, 67, 70.4, 77.4],
      [36.5, 40.8, 42.7, 46.7, 54.3, 61.9, 66.4, 69.6, 75.1],
      [36.5, 40.8, 42.7, 46.7, 54.3, 61.9, 66.4, 69.6, 75.1],
      [36.5, 40.8, 42.7, 46.7, 54.3, 61.9, 66.4, 69.6, 75.1],
      [36.5, 40.8, 42.7, 46.7, 54.3, 61.9, 66.4, 69.6, 75.1],
      [36.5, 40.8, 42.7, 46.7, 54.3, 61.9, 66.4, 69.6, 75.1],
      [34.5, 38.7, 41.2, 44.9, 52.1, 60, 64.8, 67.5, 71.6],
      [34.5, 38.7, 41.2, 44.9, 52.1, 60, 64.8, 67.5, 71.6],
      [34.5, 38.7, 41.2, 44.9, 52.1, 60, 64.8, 67.5, 71.6],
      [34.5, 38.7, 41.2, 44.9, 52.1, 60, 64.8, 67.5, 71.6],
      [34.5, 38.7, 41.2, 44.9, 52.1, 60, 64.8, 67.5, 71.6],
      [31.4, 35.8, 38.4, 42.3, 49.1, 57.3, 61.2, 64.3, 69.4],
      [31.4, 35.8, 38.4, 42.3, 49.1, 57.3, 61.2, 64.3, 69.4],
      [31.4, 35.8, 38.4, 42.3, 49.1, 57.3, 61.2, 64.3, 69.4],
      [31.4, 35.8, 38.4, 42.3, 49.1, 57.3, 61.2, 64.3, 69.4],
      [31.4, 35.8, 38.4, 42.3, 49.1, 57.3, 61.2, 64.3, 69.4],
      [29.7, 33.8, 36.1, 40.2, 47, 54.6, 59.1, 62.1, 67.3],
    ],
    F: [
      [8.9, 9.7, 10.1, 10.8, 12.3, 13.8, 14.6, 15.3, 16.2],
      [10.1, 10.6, 10.9, 11.8, 13.2, 14.7, 15.6, 16.4, 17.3],
      [10.8, 11.4, 11.8, 12.6, 14.3, 15.8, 16.7, 17.4, 18.8],
      [11.2, 12.2, 12.7, 13.6, 15.3, 17, 18, 18.6, 19.8],
      [12.4, 13.2, 13.9, 14.8, 16.4, 18.3, 19.4, 20.6, 22.1],
      [13.5, 14.1, 14.6, 15.6, 17.4, 19.5, 21, 22, 24.2],
      [14.4, 15.2, 15.8, 16.7, 18.9, 21.2, 22.6, 23.9, 25.3],
      [15.2, 16, 16.8, 18.2, 20.8, 23.2, 24.6, 26.5, 28],
      [17, 17.9, 18.7, 19.8, 21.9, 25.4, 27.2, 28.3, 31.1],
      [17.6, 18.5, 19.3, 20.9, 23.8, 27, 29.1, 31, 33.1],
      [19.5, 21, 21.7, 23.2, 26.4, 30.7, 33.5, 35.7, 39.2],
      [20.4, 21.8, 23.1, 25.5, 29, 33.2, 36.3, 37.8, 40.5],
      [22.8, 24.5, 25.4, 27.1, 30.8, 35.3, 38.1, 39.6, 43.7],
      [24, 26.2, 27.1, 29, 32.8, 36.9, 39.8, 42.3, 47.5],
      [24.4, 25.8, 27.5, 29.2, 33, 37.3, 40.2, 41.7, 45.9],
      [25.2, 26.8, 28.2, 30, 33.6, 38, 40.2, 43.7, 48.3],
      [25.9, 27.5, 28.9, 30.7, 34.3, 39.6, 43.4, 46.2, 50.8],
      [19.5, 21.5, 22.8, 24.5, 28.3, 33.1, 36.4, 39, 44.2], // 18
      [19.5, 21.5, 22.8, 24.5, 28.3, 33.1, 36.4, 39, 44.2],
      [19.5, 21.5, 22.8, 24.5, 28.3, 33.1, 36.4, 39, 44.2],
      [19.5, 21.5, 22.8, 24.5, 28.3, 33.1, 36.4, 39, 44.2],
      [19.5, 21.5, 22.8, 24.5, 28.3, 33.1, 36.4, 39, 44.2],
      [19.5, 21.5, 22.8, 24.5, 28.3, 33.1, 36.4, 39, 44.2],
      [19.5, 21.5, 22.8, 24.5, 28.3, 33.1, 36.4, 39, 44.2],
      [20.5, 21.9, 23.1, 25.2, 29.4, 34.9, 38.5, 41.9, 47.8],
      [20.5, 21.9, 23.1, 25.2, 29.4, 34.9, 38.5, 41.9, 47.8],
      [20.5, 21.9, 23.1, 25.2, 29.4, 34.9, 38.5, 41.9, 47.8],
      [20.5, 21.9, 23.1, 25.2, 29.4, 34.9, 38.5, 41.9, 47.8],
      [20.5, 21.9, 23.1, 25.2, 29.4, 34.9, 38.5, 41.9, 47.8],
      [21.1, 23, 24.2, 26.3, 30.9, 36.8, 41.2, 44.7, 51.3],
      [21.1, 23, 24.2, 26.3, 30.9, 36.8, 41.2, 44.7, 51.3],
      [21.1, 23, 24.2, 26.3, 30.9, 36.8, 41.2, 44.7, 51.3],
      [21.1, 23, 24.2, 26.3, 30.9, 36.8, 41.2, 44.7, 51.3],
      [21.1, 23, 24.2, 26.3, 30.9, 36.8, 41.2, 44.7, 51.3],
      [21.1, 23.4, 24.7, 27.3, 31.8, 38.7, 43.1, 46.1, 54.2],
      [21.1, 23.4, 24.7, 27.3, 31.8, 38.7, 43.1, 46.1, 54.2],
      [21.1, 23.4, 24.7, 27.3, 31.8, 38.7, 43.1, 46.1, 54.2],
      [21.1, 23.4, 24.7, 27.3, 31.8, 38.7, 43.1, 46.1, 54.2],
      [21.1, 23.4, 24.7, 27.3, 31.8, 38.7, 43.1, 46.1, 54.2],
      [21.3, 23.4, 25.5, 27.5, 32.3, 39.8, 45.8, 49.5, 55.8],
      [21.3, 23.4, 25.5, 27.5, 32.3, 39.8, 45.8, 49.5, 55.8],
      [21.3, 23.4, 25.5, 27.5, 32.3, 39.8, 45.8, 49.5, 55.8],
      [21.3, 23.4, 25.5, 27.5, 32.3, 39.8, 45.8, 49.5, 55.8],
      [21.3, 23.4, 25.5, 27.5, 32.3, 39.8, 45.8, 49.5, 55.8],
      [21.6, 23.1, 24.8, 27.4, 32.5, 39.5, 44.7, 48.4, 56.1],
      [21.6, 23.1, 24.8, 27.4, 32.5, 39.5, 44.7, 48.4, 56.1],
      [21.6, 23.1, 24.8, 27.4, 32.5, 39.5, 44.7, 48.4, 56.1],
      [21.6, 23.1, 24.8, 27.4, 32.5, 39.5, 44.7, 48.4, 56.1],
      [21.6, 23.1, 24.8, 27.4, 32.5, 39.5, 44.7, 48.4, 56.1],
      [22.2, 24.6, 25.7, 28.3, 33.4, 40.4, 46.1, 49.6, 55.6],
      [22.2, 24.6, 25.7, 28.3, 33.4, 40.4, 46.1, 49.6, 55.6],
      [22.2, 24.6, 25.7, 28.3, 33.4, 40.4, 46.1, 49.6, 55.6],
      [22.2, 24.6, 25.7, 28.3, 33.4, 40.4, 46.1, 49.6, 55.6],
      [22.2, 24.6, 25.7, 28.3, 33.4, 40.4, 46.1, 49.6, 55.6],
      [22.8, 24.8, 26.5, 28.7, 33.7, 42.3, 47.3, 52.1, 58.8],
      [22.8, 24.8, 26.5, 28.7, 33.7, 42.3, 47.3, 52.1, 58.8],
      [22.8, 24.8, 26.5, 28.7, 33.7, 42.3, 47.3, 52.1, 58.8],
      [22.8, 24.8, 26.5, 28.7, 33.7, 42.3, 47.3, 52.1, 58.8],
      [22.8, 24.8, 26.5, 28.7, 33.7, 42.3, 47.3, 52.1, 58.8],
      [22.4, 24.5, 26.3, 29.2, 34.5, 41.1, 45.6, 49.1, 55.1],
      [22.4, 24.5, 26.3, 29.2, 34.5, 41.1, 45.6, 49.1, 55.1],
      [22.4, 24.5, 26.3, 29.2, 34.5, 41.1, 45.6, 49.1, 55.1],
      [22.4, 24.5, 26.3, 29.2, 34.5, 41.1, 45.6, 49.1, 55.1],
      [22.4, 24.5, 26.3, 29.2, 34.5, 41.1, 45.6, 49.1, 55.1],
      [21.9, 24.5, 26.2, 28.9, 34.6, 41.6, 46.3, 49.6, 56.5],
      [21.9, 24.5, 26.2, 28.9, 34.6, 41.6, 46.3, 49.6, 56.5],
      [21.9, 24.5, 26.2, 28.9, 34.6, 41.6, 46.3, 49.6, 56.5],
      [21.9, 24.5, 26.2, 28.9, 34.6, 41.6, 46.3, 49.6, 56.5],
      [21.9, 24.5, 26.2, 28.9, 34.6, 41.6, 46.3, 49.6, 56.5],
      [22.2, 24.4, 26, 28.8, 34.3, 41.8, 46.4, 49.2, 54.6],
    ],
  }

  if (sex.value && age.value) {
    let ageLine = percentilesTable[sex.value][age.value]

    for (let i = 0; i < 9; i++) {
      if (i == 0) {
        if (muscularArmArea.value <= ageLine[i]) {
          muscularArmAreaPercentile.value = percentiles[i]
          return
        } else {
          muscularArmAreaPercentile.value = null
        }
      } else if (i >= 1) {
        if (
          muscularArmArea.value <= ageLine[i] &&
          muscularArmArea.value > ageLine[i - 1]
        ) {
          muscularArmAreaPercentile.value = percentiles[i]
          return
        }
      }
    }
    muscularArmAreaPercentile.value = null
  } else {
    muscularArmAreaPercentile.value = null
  }
}
</script>
