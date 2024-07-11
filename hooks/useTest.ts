import {QueryClient, UseQueryReturnType, VueQueryPlugin} from "@tanstack/vue-query";
import {defineComponent} from "vue";
import {mount} from "@vue/test-utils";

export const useTestQueryWrapper = (queryFunction: () => UseQueryReturnType<any, Error>) => {
  const queryClient = new QueryClient();

  const TestComponent = defineComponent({
    setup() {
      const query = queryFunction();
      return { query };
    },
    template: '<div></div>',
  });

  const wrapper = mount(TestComponent, {
    global: {
      plugins: [[VueQueryPlugin, { queryClient }]],
    },
  });

  return { wrapper }
}