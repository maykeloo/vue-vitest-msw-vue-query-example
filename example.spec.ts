import {flushPromises} from '@vue/test-utils';
import {useExampleStore} from "./exampleStore";
import {server} from "./mocks/node";
import {createPinia, setActivePinia} from "pinia";
import {useTestQueryWrapper} from "./hooks/useTest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useCustomHook', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  })

  it('fetches data correctly', async () => {
    const store = useExampleStore();
    const { wrapper } = useTestQueryWrapper(store.fetchPosts);
    await flushPromises();
    const query = wrapper.vm.query;
    expect(query.data.value).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: false });
  });
});