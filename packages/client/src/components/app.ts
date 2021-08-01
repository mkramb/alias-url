import { defineComponent } from 'vue';
import Toolbar from './toolbar';

export default defineComponent({
  name: 'app',
  components: {
    toolbar: Toolbar,
  },
  template: `
    <div class="w-full h-screen p-12 bg-gray-200">
      <toolbar title="alias" description="URL shortening service" />
    </div>
  `,
});
