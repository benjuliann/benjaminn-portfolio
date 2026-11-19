import { makePage } from "@keystatic/next/ui/pages";
import keystaticConfig from "../../keystatic.config.js";

// Admin UI at /keystatic. Lives in the Pages router so it doesn't inherit the site's layout.
export default makePage(keystaticConfig);
