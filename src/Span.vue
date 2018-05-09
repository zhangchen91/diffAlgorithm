<script>
import {renderSpan} from "./common";

let once
export default {
  name: 'Span',
  props: {
    letter: String
  },
  data: () => ({
    old: ""
  }),
  mounted() {
    once = true
    console.log("Mount", this.letter);
  },
  watch: {
    letter(val, oldV) {
      this.old = oldV;
      console.log(`Re-render from ${oldV} to ${val}`);
    }
  },
  render() {
    const { letter, old } = this;
    return renderSpan(letter, once, old)
  }
}
</script>
