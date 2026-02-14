/**
 * Naive UI Theme Overrides
 * Reference: https://www.naiveui.com/zh-CN/os-theme/docs/customize-theme
 */
import type { GlobalThemeOverrides } from 'naive-ui'

const commonFontFamily = "'Noto Sans TC', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

// --- Light Theme ---
export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: commonFontFamily,

    // 基礎與背景色
    baseColor: '#ECF0F5', // 用於某些組件的底色 (Muted)
    bodyColor: '#F6F7F9', // 全域背景色
    cardColor: '#FFFFFF', // 卡片背景色
    modalColor: '#FFFFFF', // 彩窗背景色
    popoverColor: '#FFFFFF', // 氣泡框背景色

    // 品牌色 (Primary)
    primaryColor: '#1F3D7A',
    primaryColorHover: '#1F3D7A',
    primaryColorPressed: '#1F3D7A',
    primaryColorSuppl: '#1F3D7A', // 用於某些特殊狀態

    // 輔助色
    infoColor: '#20B6D9', // Accent
    infoColorHover: '#40C4E3',
    infoColorPressed: '#1992AD',

    errorColor: '#E34343',
    errorColorHover: '#EB6666',
    errorColorPressed: '#B53636',

    // 文字顏色
    textColorBase: '#121721', // 基礎文字
    textColor1: '#121721', // 主要文字
    textColor2: '#334155', // 次要文字 (稍淡)
    textColor3: '#647087', // 再次要文字 (Muted)

    // 邊框與圓角
    borderColor: '#DCE3EB',
    borderRadius: '8px', // 基底圓角 (sm)
    borderRadiusSmall: '4px',
  },

  // 針對 Card 元件覆寫
  Card: {
    borderRadius: '12px', // 卡片圓角 (lg)
    borderColor: '#DCE3EB', // 卡片邊框
    paddingSmall: '0', // 卡片內距 (sm)
    // 注意: Naive UI Card 的陰影通常由 CSS 控制，或在 light/dark theme 預設中已有
    // 若要強制陰影，可以嘗試 box-shadow (但並非所有版本都支援此變數，建議用 class)
  },

  // 針對 Button 元件覆寫
  Button: {
    // 圓角與字重
    borderRadiusMedium: '12px',
    borderRadiusLarge: '12px',
    borderRadiusSmall: '8px',
    fontWeight: '600',

    // -- Primary Type --
    // 主要按鈕的變數通常繼承 common.primaryColor，若要特規可在此覆寫
    // 例如文字顏色：
    textColorPrimary: '#FFFFFF',
    textColorHoverPrimary: '#FFFFFF',
    textColorPressedPrimary: '#FFFFFF',
    textColorFocusPrimary: '#FFFFFF',

    // -- Default (Secondary) Type --
    // 邊框
    border: '1px solid #DCE3EB',
    borderHover: '1px solid #DCE3EB', // Hover 時保持邊框
    borderPressed: '1px solid #DCE3EB',
    borderFocus: '1px solid #DCE3EB',
    // 背景
    color: '#FFFFFF',
    colorHover: '#F5F7FA', // Hover 變淺灰 (Muted)
    colorPressed: '#ECF0F5',
    colorFocus: '#FFFFFF',
    // 文字
    textColor: '#121721',
    textColorHover: '#121721',
    textColorPressed: '#121721',

    heightLarge: '46px', // 大按鈕高度

    // -- Tertiary (Ghost) Type --
    // Ghost 按鈕通常對應 type="tertiary" 或 ghost 屬性
    textColorText: '#647087', // Muted Foreground
    textColorTextHover: '#20B6D9', // Hover Accent Color
    textColorTextPressed: '#1992AD',
    // 注意：Naive UI Button 的 ghost 背景變色通常依賴樣式，
    // 純變數可能無法完全模擬 Tailwind `hover:bg-accent` 效果，
    // 但可以嘗試設定 colorHoverText (若支援) 或是用 CSS class 輔助。
  },
}

// --- Dark Theme ---
export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: commonFontFamily,

    // 基礎與背景色 (黑灰系)
    baseColor: '#171B26',
    bodyColor: '#0E111B',
    cardColor: '#171B26',
    modalColor: '#1F2433',
    popoverColor: '#1F2433',

    // 品牌色 (Dark Mode 通常較亮)
    primaryColor: '#26D9D9',
    primaryColorHover: '#52E0E0',
    primaryColorPressed: '#1AB3B3',
    primaryColorSuppl: '#26D9D9',

    // 輔助色
    infoColor: '#26D9D9', // 與 Primary 同色系
    infoColorHover: '#52E0E0',
    infoColorPressed: '#1AB3B3',

    // 文字顏色
    textColorBase: '#EBF0F5',
    textColor1: '#EBF0F5', // 主要文字
    textColor2: '#CBD5E1', // 次要文字
    textColor3: '#94A3B8', // Muted

    // 邊框與圓角
    borderColor: '#29303D',
    borderRadius: '8px',
  },

  Card: {
    borderRadius: '12px',
    borderColor: '#29303D',
    paddingSmall: '0', // 卡片內距 (sm)
  },

  Button: {
    borderRadiusMedium: '12px',
    borderRadiusLarge: '12px',
    borderRadiusSmall: '8px',
    fontWeight: '600',

    // -- Primary Type (Dark) --
    textColorPrimary: '#0E111B', // 深色模式的主按鈕文字用深色

    // -- Default Type (Dark) --
    border: '1px solid #29303D',
    borderHover: '1px solid #29303D',
    borderPressed: '1px solid #29303D',
    borderFocus: '1px solid #29303D',

    color: '#171B26',
    colorHover: '#1F2532',
    colorPressed: '#0E111B',

    textColor: '#EBF0F5',
    textColorHover: '#EBF0F5',

    // -- Tertiary (Ghost) --
    textColorText: '#94A3B8',
    textColorTextHover: '#FFFFFF',

    heightLarge: '46px', // 大按鈕高度
  },
}

export const breakpoints = {
  sm: 640, // 字級放大、雙欄
  md: 768, // 桌面導覽列
  lg: 1024, // 多欄網格
  xl: 1280,
  '2xl': 1536,
}
