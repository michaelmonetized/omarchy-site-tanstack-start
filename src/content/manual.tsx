export { MANUAL_CHAPTERS, type ManualChapter } from "./manual/chapters";
export { ManualChapterView } from "./manual/chapter-view";
export { ManualToc } from "./manual/toc";

import { MANUAL_CHAPTERS } from "./manual/chapters";
import { ManualChapterView } from "./manual/chapter-view";

export function ManualContent() {
  return <ManualChapterView chapter={MANUAL_CHAPTERS[0]} />;
}

export default ManualContent;
