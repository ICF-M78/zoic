// MARK: types
interface FontOption {
  label: string;
  value: string;
  url: string;
}

/**
 * 字体选项
 * @returns FontFace[]
 */
export const fontOptions = [
  { label: "水云篆", value: "ShuiYunZhuan", url: "./fonts/ShuiYunZhuan.ttf" },
  { label: "宋刻", value: "DingLieSongKe", url: "./fonts/DingLieSongKe.ttf" },
  { label: "竹石体", value: "ZhuShi", url: "./fonts/ZhuShi.ttf" },
] as FontOption[];

// MARK: func
/**
 * 加载字体文件
 * @param fontFamily 字体名称
 * @returns Promise<void>
 */
export const loadFont = async (fontFamily: string): Promise<void> => {
  const font = fontOptions.find((f) => f.value === fontFamily);
  if (!font) {
    console.warn(`Font ${fontFamily} not found`);
    return;
  }

  try {
    const fontFace = new FontFace(font.value, `url(${font.url})`);
    const loadedFont = await fontFace.load();
    document.fonts.add(loadedFont);
    console.log(`Font ${fontFamily} loaded successfully`);
  } catch (error) {
    console.error(`Failed to load font ${fontFamily}:`, error);
  }
};

/**
 * 预加载所有字体
 * @returns Promise<void[]>
 */
export const preLoadAllFonts = async (): Promise<void[]> => {
  return Promise.all(fontOptions.map((font) => loadFont(font.value)));
};
