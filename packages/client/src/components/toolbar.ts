import { defineComponent } from 'vue';

export default defineComponent({
  name: 'toolbar',
  props: ['title', 'description'],
  template: `
    <div class="p-6 max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-md flex items-center space-x-4">
      <div class="text-xl font-medium text-black">{{ title }}</div>
      <p class="text-gray-500">{{ description }}</p>
    </div>
  `,
});
