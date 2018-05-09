<script>
import {first, last, mounted, renderApp} from "./common";
import Span from "./Span.vue";

export default {
  name: 'App',
  data: () => ({
    name: [first, last]
  }),
  computed: {
    reverseName() {
      return [...this.name].reverse();
    }
  },
  methods: {
    letter() {
      const {name} = this
      this.name = [name[0], name[1].split("").reverse().join("")].reverse();
    },
    word() {
      this.name.reverse();
    }
  },
  mounted: mounted,
  render() {
    const { name, reverseName, letter, word} = this;
    return renderApp(name, reverseName, Span, letter, word);
  }
}
</script>

<style>
@import "./index.css";
</style>
