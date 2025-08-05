<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { id } from "date-fns/locale";

// Props dari parent
const props = defineProps({
  modelValue: { type: Date, required: true },
});
const emit = defineEmits(["update:modelValue"]);

const innerDate = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => (innerDate.value = val)
);

watch(innerDate, (val) => emit("update:modelValue", val));
</script>

<template>
  <VueDatePicker
    v-model="innerDate"
    inline
    auto-apply
    :enable-time-picker="false"
    :format="'dd-MM-yyyy'"
    :locale="id"
    :week-start="1"
    class="align-item-center justify-center rounded-lg overflow-hidden ring-1 ring-blue-800 shadow-sm"
  />
</template>