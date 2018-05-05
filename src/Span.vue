<script>
import {renderSpan} from "./common";
export default {
  name: 'Span',
  props: {
    name: String
  },
  data: () => ({
    old: ""
  }),
  mounted() {
    console.log("Mount", this.name);
  },
  watch: {
    name(val, oldV) {
      this.old = oldV;
      console.log(`Re-render from ${oldV} to ${val}`);
    }
  },
  render() {
    const { name, old } = this;
    return renderSpan(name, old)
  }
}
</script>
