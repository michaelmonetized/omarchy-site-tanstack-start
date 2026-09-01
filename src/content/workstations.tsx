import { useState } from "react";

export const WORKSTATION_IMAGES: string[] = [
  "/assets/workstations/P1554011.jpg",
  "/assets/workstations/6a74444a-0a73-46bc-817d-bce9c9c6c0e6.webp",
  "/assets/workstations/20250717_0355s50.webp",
  "/assets/workstations/20250728_142207.jpg",
  "/assets/workstations/20250729_150758.webp",
  "/assets/workstations/20250730_154811.jpg",
  "/assets/workstations/20250731_001547.webp",
  "/assets/workstations/20250805_210210.webp",
  "/assets/workstations/20250809_093527.webp",
  "/assets/workstations/20250809_093628.webp",
  "/assets/workstations/20250809_171842.webp",
  "/assets/workstations/20250809_171946.webp",
  "/assets/workstations/20250811_002205.webp",
  "/assets/workstations/20250819_130901.webp",
  "/assets/workstations/20250831_101137.webp",
  "/assets/workstations/20250906_0750391.webp",
  "/assets/workstations/1000001077.webp",
  "/assets/workstations/1000002829.webp",
  "/assets/workstations/AP1GczMavNW8EaWfHU4UmZNfqeu70P2RHVYjHZbM_6FtIpeoL92gDy_93QVXIAw1502.jpg",
  "/assets/workstations/AP1GczNlx6FUkYeYXmMqZ1g3fCTRcK9ISkqOoul7Yq9E18Sj1k3EJPVXNhqY.jpg",
  "/assets/workstations/Battlestation_-_1_1.webp",
  "/assets/workstations/c9373bba-9f10-42cf-9e26-5ce6dde7087c.webp",
  "/assets/workstations/Clockwork_Omarchy.webp",
  "/assets/workstations/desk (1).webp",
  "/assets/workstations/desk.webp",
  "/assets/workstations/DSCF0576.webp",
  "/assets/workstations/fdfe53d1-8d98-41ac-872c-661b7d646882.webp",
  "/assets/workstations/Gwgz4X9XEAAy33W.webp",
  "/assets/workstations/GxrFYwQXUAAe0zI.jpg",
  "/assets/workstations/image.jpg",
  "/assets/workstations/image0 (1).webp",
  "/assets/workstations/image0 (2).webp",
  "/assets/workstations/image0.webp",
  "/assets/workstations/IMG_0643.webp",
  "/assets/workstations/IMG_0746.webp",
  "/assets/workstations/IMG_1244.webp",
  "/assets/workstations/IMG_1341.webp",
  "/assets/workstations/IMG_1582.webp",
  "/assets/workstations/IMG_1649.webp",
  "/assets/workstations/IMG_1733.webp",
  "/assets/workstations/IMG_1745.webp",
  "/assets/workstations/IMG_1981.webp",
  "/assets/workstations/IMG_1989.webp",
  "/assets/workstations/IMG_2568.webp",
  "/assets/workstations/IMG_3207.webp",
  "/assets/workstations/IMG_4361.webp",
  "/assets/workstations/IMG_4760_togo.webp",
  "/assets/workstations/IMG_5347.webp",
  "/assets/workstations/IMG_5471.webp",
  "/assets/workstations/IMG_6661.webp",
  "/assets/workstations/IMG_6694.webp",
  "/assets/workstations/IMG_7357.webp",
  "/assets/workstations/IMG_8684.webp",
  "/assets/workstations/IMG_8686.webp",
  "/assets/workstations/IMG_9129.webp",
  "/assets/workstations/IMG_9631.webp",
  "/assets/workstations/IMG_20250730_114329551.webp",
  "/assets/workstations/IMG_20250731_011115.webp",
  "/assets/workstations/IMG_20250809_2048117022.webp",
  "/assets/workstations/IMG_20250818_091522853_1.webp",
  "/assets/workstations/IMG_20250904_215408.webp",
  "/assets/workstations/img_1755747110535.webp",
  "/assets/workstations/IMG20250828104558.webp",
  "/assets/workstations/krbdg3hltfmf1.jpg",
  "/assets/workstations/L1020621.webp",
  "/assets/workstations/new-omarchy-setup.webp",
  "/assets/workstations/omarchy_cat.webp",
  "/assets/workstations/PXL_20250728_155911110.MP.webp",
  "/assets/workstations/PXL_20250728_164020388-EDIT.webp",
  "/assets/workstations/PXL_20250801_104910508.RAW-01.COVER.webp",
  "/assets/workstations/PXL_20250805_105323887.RAW-01.COVER.webp",
  "/assets/workstations/PXL_20250810_141950367.jpg",
  "/assets/workstations/PXL_20250812_063009857.RAW-01.MP.COVER.webp",
  "/assets/workstations/PXL_20250827_105330558.webp",
  "/assets/workstations/PXL_20250910_192624503.webp",
  "/assets/workstations/rn_image_picker_lib_temp_c303fde1-ff27-4a13-b59e-c393c29a3e63.webp",
  "/assets/workstations/rose-pine-dark.webp",
  "/assets/workstations/signal-2025-08-11-103847_002.webp",
  "/assets/workstations/thumbnail.jpg",
  "/assets/workstations/IMG_20250911_100847608.jpg",
];

export function WorkstationsContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8">
      <h1 className="font-heading mb-8 text-xl font-extrabold text-foreground">
        <a
          href="https://discord.com/channels/1390012484194275541/1399365919293051010"
          className="text-foreground no-underline hover:text-terminal-cyan"
        >
          #omarchy-workstations
        </a>
      </h1>

      <main>
        <div className="workstations__images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSTATION_IMAGES.map((imgSrc, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(imgSrc)}
              className="workstations__image group aspect-[4/3] w-full rounded-xl overflow-hidden border border-[var(--border-color,rgba(65,72,104,0.8))] bg-black hover:border-[var(--color-terminal-cyan,#7dcfff)] transition-all cursor-pointer relative"
              aria-label="View workstation photo"
            >
              <figure className="w-full h-full m-0">
                <img
                  src={imgSrc}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </figure>
            </button>
          ))}
        </div>
      </main>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Workstation full view"
              className="max-w-full max-h-[85vh] rounded-xl object-contain border border-white/20 shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 shadow"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default WorkstationsContent;
