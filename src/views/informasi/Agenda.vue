<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Kalender from "@/components/Kalender.vue";

const store = useStore();
const agenda = computed(() => store.state.Informasi.agenda);

const agendaToday = computed(() => {
  return agenda.value.find((item) => item.date === "2025-06-12");
});
</script>

<template>
  <div class="max-w-6xl mx-auto py-8">
    <div
      class="rounded-2xl bg-blue-800 flex flex-col sm:flex-row items-center justify-between px-8 py-4 mb-8"
    >
      <div>
        <div class="text-white">Hari ini</div>
        <div class="font-bold text-lg text-white">Kamis, 12 Juni 2025</div>
      </div>
      <div class="border-l border-white h-12 mx-4 hidden sm:block"></div>
      <div>
        
        <div class="font-semibold text-white">
          {{ agendaToday ? agendaToday.events.join(" & ") : "" }}
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Kalender -->
      <div class="flex-3">
        <h2 class="text-blue-800 font-bold text-2xl mb-4">Pilih Tanggal</h2>
        <Kalender :modelValue="new Date('2025-06-12')" />
      </div>
      <!-- Agenda Bulan Ini -->
      <div class="flex-1">
        <h2 class="text-blue-800 font-bold text-2xl mb-4">Agenda bulan ini</h2>
        <div class="rounded-tl-2xl rounded-bl-2xl bg-gray-100 py-4 px-0">
          <div
            v-for="item in agenda"
            :key="item.date"
            class="flex border-b last:border-b-0 mb-6 "
          >
            <div
              class="w-48 min-w-[12rem] flex items-center px-6 py-4 font-semibold text-blue-800"
            >
              {{
                new Date(item.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            </div>
            <ul class="flex-1 px-4 py-4 text-gray-700 list-decimal space-y-1">
              <li v-for="(ev, i) in item.events" :key="i">
                {{ ev }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>