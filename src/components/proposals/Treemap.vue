<script lang="ts" setup>
import { computed } from "vue";
import { Chart, registerables } from "chart.js";

import { createTypedChart } from "vue-chartjs";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";

Chart.register(...registerables, TreemapElement);

type TokenInfo = { name: string; value: number };

const ColorMap = {
  yes: "#8eeefe",
  no: "#f08c8d",
  veto: "#ecb0fe",
  abstain: "#686868",
};

const props = defineProps<{
  data: TokenInfo[];
  type: keyof typeof ColorMap;
}>();

const TreeMap = createTypedChart("treemap", TreemapController);

const dataset = computed(() => {
  return {
    datasets: [
      {
        data: [],
        label: props.type ?? "Unknown",
        key: "value",
        tree: props.data,
        labels: { display: true },
        groups: ["name"],
        spacing: 6,
        captions: {
          display: true,
        },
        borderRadius: 12,
        backgroundColor: ColorMap[props.type],
      },
    ],
  };
});

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};
</script>
<template>
  <TreeMap :data="dataset" :options="options" />
</template>
