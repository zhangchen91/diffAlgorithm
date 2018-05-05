<script>
import addFlag from "./addFlag.js";
import {zhang, chen, renderApp} from "./common";
import Span from "./Span.vue";

export default {
  name: 'App',
  data: () => ({
    name: [zhang, chen]
  }),
  computed: {
    reverseName() {
      return [...this.name].reverse();
    }
  },
  methods: {
    handleChange() {
      this.name.reverse();
    }
  },
  mounted() {
    addFlag("#H2", 5);
    addFlag("#H3", 4);
  },
  render() {
    let { name, reverseName } = this;
    name = name.join("").split("");
    reverseName = reverseName.join("").split("");
    return renderApp(name, reverseName, Span, this.handleChange)
  }
}
</script>

<style>
@import "./index.css";
</style>
