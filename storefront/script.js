const recommendations = {
  "Work & Study": {
    title: "Quntis Focus Series",
    copy: "For focused work and study with eye-friendly, non-distracting lighting.",
    link: "./monitor-light-bar-focus.html",
  },
  "Immersive Gaming": {
    title: "Quntis IM Series",
    copy: "Front light plus RGB backlight for immersive gaming without washing out your screen.",
    link: "./monitor-light-bar-im.html",
  },
  "Creative & Design": {
    title: "Quntis Studio Series",
    copy: "Wide, stable lighting for color-sensitive design, photo, video, and creator work.",
    link: "./desk-lamp-studio.html",
  },
  "Crafting Setup": {
    title: "Quntis Studio Series",
    copy: "Bright, focused task lighting for hands-on projects and detailed work.",
    link: "./desk-lamp-studio.html",
  },
  "Everyday All-Round": {
    title: "Quntis Glow Series",
    copy: "A balanced choice for daily work, browsing, reading, and relaxed evenings.",
    link: "./monitor-light-bar-glow.html",
  },
};

function activateWithinGroup(button, selector) {
  button
    .closest("[data-choice-group]")
    ?.querySelectorAll(selector)
    .forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-pressed", item === button ? "true" : "false");
    });
}

document.querySelectorAll(".monitor-card").forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  button.addEventListener("click", () => activateWithinGroup(button, ".monitor-card"));
});

document.querySelectorAll(".choice").forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  button.addEventListener("click", () => {
    activateWithinGroup(button, ".choice");

    const recommendation = recommendations[button.dataset.value];
    const titleEl = document.getElementById("recommendTitle");
    const copyEl = document.getElementById("recommendCopy");
    const linkEl = document.getElementById("recommendLink");

    if (!recommendation || !titleEl || !copyEl) return;

    titleEl.textContent = recommendation.title;
    copyEl.textContent = recommendation.copy;
    if (linkEl) linkEl.href = recommendation.link;
    window.applyPreviewLanguage?.(window.getPreviewLanguage?.() || "en");
  });
});

document.querySelectorAll(".nav-parent-button").forEach((button) => {
  const parentItem = button.closest(".primary-item");
  button.setAttribute("aria-expanded", parentItem?.classList.contains("open") ? "true" : "false");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (!parentItem) return;

    const shouldOpen = !parentItem.classList.contains("open");
    document.querySelectorAll(".primary-item.open").forEach((item) => {
      if (item === parentItem) return;
      item.classList.remove("open");
      item.querySelector(".nav-parent-button")?.setAttribute("aria-expanded", "false");
    });

    parentItem.classList.toggle("open", shouldOpen);
    button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  });
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".primary-nav")) return;

  document.querySelectorAll(".primary-item.open").forEach((item) => {
    item.classList.remove("open");
    item.querySelector(".nav-parent-button")?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".back-to-top").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.replaceState(null, "", "#top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const previewTranslationMap = {
  "Quntis Amazon Storefront": "Quntis Amazon Storefront 审查",
  "Quntis": "Quntis",
  "Follow": "关注",
  "Home": "首页",
  "Featured & Deals": "精选与优惠",
  "Find Your Light": "找到适合你的灯",
  "By Monitor Type": "按显示器类型",
  "By Purpose": "按用途",
  "By Scenarios": "按场景",
  "By Scenario": "按场景",
  "By Light Bar Shape": "按灯条形态",
  "By Color": "按颜色",
  "Monitor Light Bar": "屏幕挂灯",
  "Desk Lamp": "桌面灯",
  "More": "更多",
  "Real User Setups": "真实用户桌面",
  "Desk Setup Accessories": "桌面配件",
  "Other Items": "其他产品",
  "Quntis Focus Series": "Quntis Focus Series（Focus 系列）",
  "Quntis Glow Series": "Quntis Glow Series（Glow 系列）",
  "Quntis IM Series": "Quntis IM Series（IM 系列）",
  "Quntis Studio Series": "Quntis Studio Series（Studio 系列）",
  "Focus Series": "Focus Series（Focus 系列）",
  "Glow Series": "Glow Series（Glow 系列）",
  "IM Series": "IM Series（IM 系列）",
  "Studio Series": "Studio Series（Studio 系列）",
  "Eye-care front lighting for long focused hours.": "适合长时间专注使用的护眼前向照明。",
  "Eye-care front light with soft ambient backlight glow.": "护眼前光搭配柔和环境背光。",
  "Even task lighting for wider work surfaces, creators, readers, and hands-on projects.": "为更宽工作台、创作者、阅读者和手工项目提供均匀任务照明。",
  "Space Lit": "Space Lit",
  "Deals": "优惠",
  "Featured": "精选",
  "& Deals": "与优惠",
  "Smart lighting. Better focus. Limited-time offers on selected picks.": "智能照明，更好专注。精选产品限时优惠。",
  "Shop Now": "立即查看",
  "Shop now": "立即查看",
  "Shop Studio": "查看 Studio",
  "Shop Focus": "查看 Focus",
  "Shop Glow": "查看 Glow",
  "Shop IM": "查看 IM",
  "Start matching": "开始匹配",
  "Choose monitor": "选择显示器类型",
  "Choose purpose": "选择用途",
  "Choose scenario": "选择场景",
  "Choose shape": "选择形态",
  "Choose color": "选择颜色",
  "Learn more": "了解更多",
  "View all": "查看全部",
  "View all →": "查看全部 →",
  "View all work & study products": "查看所有工作与学习产品",
  "View all gaming products": "查看所有游戏产品",
  "View all creative products": "查看所有创作产品",
  "View all crafting products": "查看所有手工产品",
  "View all daily products": "查看所有日常产品",
  "View all small desk products": "查看所有小桌面产品",
  "View all multi-screen products": "查看所有多屏产品",
  "View all dorm products": "查看所有宿舍产品",
  "View all home office products": "查看所有家庭办公产品",
  "View all gaming desk products": "查看所有游戏桌产品",
  "View all black products": "查看所有黑色产品",
  "View all grey products": "查看所有灰色产品",
  "View all white products": "查看所有白色产品",
  "View all pink products": "查看所有粉色产品",
  "View straight products": "查看直条产品",
  "View curved products": "查看弧形产品",
  "View 3-stage products": "查看三段折叠产品",
  "View foldable products": "查看可折叠产品",
  "View Amazon product": "查看 Amazon 商品",
  "Open Amazon listing": "打开 Amazon 商品页",
  "Share": "分享",
  "Share this page with your friends.": "分享此页面给你的朋友。",
  "Best Seller": "热销产品",
  "Bundle & Save": "套装优惠",
  "Monitor Light Bar Bundle": "屏幕挂灯套装",
  "Free Shipping": "免运费",
  "30-Day Returns": "30 天退换",
  "2-Year Warranty": "2 年质保",
  "Over 2M Units Sold": "全球销量超过 200 万件",
  "Loved Worldwide": "全球用户喜爱",
  "Thoughtful Design": "用心设计",
  "User Choice": "用户之选",
  "Trusted by desk users across global markets.": "受到全球多个市场桌面用户信赖。",
  "Chosen by desk users for work, study, gaming, and creative setups.": "被工作、学习、游戏和创意桌面的用户选择。",
  "Built around real desk setups, daily comfort, and modern workspace needs.": "围绕真实桌面配置、日常舒适度和现代工作空间需求打造。",
  "A trusted choice for desk lighting around the world.": "全球桌面照明用户信赖的选择。",
  "Awards": "奖项",
  "As Seen On": "媒体报道",
  "Find the light that fits your setup and preferences best.": "按照你的桌面配置和偏好，找到更合适的灯。",
  "By Setup": "按配置",
  "By Shape": "按形态",
  "PRODUCT SUPPORT": "产品支持",
  "Product": "产品",
  "Support": "支持",
  "Product Support": "产品支持",
  "Product Support Hub": "产品支持中心",
  "Quntis Support Hub": "Quntis 支持中心",
  "includes setup videos, user guides, warranty help, and after-sales support resources.": "包含安装视频、用户指南、保修帮助和售后支持资源。",
  "Setup Guides": "安装指南",
  "Video Tutorials": "视频教程",
  "User Manual": "用户手册",
  "Quntis: Space Lit": "Quntis: Space Lit",
  "One desk.": "一张桌面。",
  "Three layers of light.": "三层光。",
  "A three-layer lighting system that blends eye-care science and desk-setup aesthetics.": "三层照明系统，兼顾护眼科学与桌面美学。",
  "Core layer: Light for your primary task zone": "核心层：主要任务区域照明",
  "Inner ring: Extending light across the desk": "内环：延展到桌面范围的照明",
  "Outer ring: Atmosphere, depth, and immersion": "外环：氛围、层次与沉浸感",
  "Core layer": "核心层",
  "Inner ring": "内环",
  "Outer ring": "外环",
  "See the difference": "查看对比",
  "See how balanced lighting": "查看均衡照明如何",
  "transforms your workspace.": "改变你的工作空间。",
  "Real desk.": "真实桌面。",
  "Real lighting.": "真实照明。",
  "No filters.": "无滤镜。",
  "Before": "之前",
  "After": "之后",
  "Choose by monitor type, purpose, scenario, shape, or color.": "按显示器类型、用途、场景、形态或颜色筛选。",
  "Monitor fit": "显示器适配",
  "Match flat, curved, dual, or ultrawide screens.": "匹配平面屏、曲面屏、双屏或超宽屏。",
  "Main use": "主要用途",
  "Choose work, gaming, creative, crafting, or daily use.": "选择工作、游戏、创作、手工或日常使用。",
  "Desk context": "桌面场景",
  "Choose small desk, multi-screen, dorm, home office, or gaming desk.": "选择小桌面、多屏、宿舍、家庭办公或游戏桌面。",
  "Physical form": "物理形态",
  "Straight, curved, or foldable light bar form.": "直条、弧形或可折叠灯条形态。",
  "Finish": "颜色/外观",
  "Compare black, grey, white, pink, and RGB looks.": "对比黑色、灰色、白色、粉色和 RGB 光效。",
  "Start by matching your monitor setup to ensure perfect fit and coverage.": "先按显示器配置匹配，确认适配和照明覆盖范围。",
  "Flat": "平面屏",
  "Curved": "曲面屏",
  "Dual": "双屏",
  "Ultrawide": "超宽屏",
  "For standard flat-screen monitors.": "适合标准平面显示器。",
  "Fits curved and flat monitors.": "适合曲面屏和平面屏。",
  "For dual-screen desks with wider coverage or multi-light control.": "适合需要更宽覆盖或多灯控制的双屏桌面。",
  "Longer light bars or desk-edge lamps for wide workspaces.": "适合宽桌面使用的长灯条或桌边灯。",
  "For flat-screen setups. Includes flat-only models and selected flat/curved-compatible models.": "适合平面屏配置。包含仅适配平面屏的型号，以及部分平面屏/曲面屏兼容型号。",
  "Desk coverage": "桌面覆盖",
  "Wide workspace": "宽工作区",
  "Choose a light based on how you use your desk.": "根据你使用桌面的方式选择灯具。",
  "Work & Study": "工作与学习",
  "Work & study": "工作与学习",
  "Focused light for reading, typing, and long desk sessions.": "适合阅读、打字和长时间桌面工作的专注照明。",
  "Gaming": "游戏",
  "RGB backlight and immersive lighting for gaming setups.": "用于游戏桌面的 RGB 背光和沉浸式照明。",
  "Creative": "创作",
  "Wide, even lighting for design, drawing, music production, and creative workstations.": "适合设计、绘画、音乐制作和创意工作台的宽范围均匀照明。",
  "Crafting": "手工",
  "Flexible task lighting for detailed manual work.": "适合精细手工操作的灵活任务照明。",
  "Daily": "日常",
  "Balanced lighting for everyday desk use.": "适合日常桌面使用的均衡照明。",
  "Pick a light that fits your desk space, setup, and lighting environment.": "选择适合桌面空间、屏幕配置和照明环境的灯。",
  "Small Desk": "小桌面",
  "Small desk": "小桌面",
  "Save space": "节省空间",
  "Multi-screen": "多屏",
  "Wider coverage": "更宽覆盖",
  "Dorm": "宿舍",
  "Focused study": "专注学习",
  "Home Office": "家庭办公",
  "Home office": "家庭办公",
  "Long work hours": "长时间工作",
  "Gaming Desk": "游戏桌",
  "Gaming desk": "游戏桌",
  "RGB setup": "RGB 配置",
  "Save space with monitor-mounted light bars or desk-edge lamps.": "使用屏幕挂灯或桌边灯，减少桌面占用。",
  "Wider, foldable, or multi-light-control options for multi-monitor desks.": "适合多屏桌面的更宽、可折叠或多灯控制选择。",
  "Front light for focused study, with rotatable desk lamps for shared spaces.": "适合专注学习的前向照明，也可搭配适合共享空间的可旋转桌面灯。",
  "Focus and Glow options for long work hours and softer screen-to-room contrast.": "Focus 与 Glow 适合长时间工作，并让屏幕与环境光过渡更柔和。",
  "IM RGB backlight for immersive setups, with desk-edge lamps to keep gear space clear.": "IM RGB 背光适合沉浸式配置；桌边灯可帮助保留桌面设备空间。",
  "Choose by physical form, coverage, and setup flexibility.": "按物理形态、覆盖范围和桌面灵活性选择。",
  "Straight": "直条",
  "Flat-screen friendly": "适合平面屏",
  "Curved-screen fit": "适合曲面屏",
  "3-Stage Foldable": "三段折叠",
  "Flexible adjustment": "灵活调节",
  "Foldable": "可折叠",
  "Dual & ultrawide": "双屏与超宽屏",
  "Straight light bar": "直条灯条",
  "Curved light bar": "弧形灯条",
  "A close fit for curved monitors, with a shape that follows the screen more naturally.": "更贴合曲面屏，形态更自然地顺应屏幕弧度。",
  "3-stage foldable": "三段折叠",
  "Flexible lighting that adjusts to different tasks, desk depths, and coverage needs.": "可根据不同任务、桌面深度和覆盖需求灵活调整。",
  "A wider adjustable form for dual-screen and ultrawide setups.": "更宽、可调的形态，适合双屏和超宽屏配置。",
  "Choose a finish that matches your desk setup.": "选择与桌面配置匹配的机身颜色。",
  "Black": "黑色",
  "Classic desk": "经典桌面",
  "Grey": "灰色",
  "Professional": "专业风格",
  "White": "白色",
  "Clean setup": "清爽桌面",
  "Pink": "粉色",
  "Aesthetic setup": "美学桌面",
  "Black setups": "黑色桌面",
  "Classic finish that blends with most dark monitors and setups.": "经典颜色，适合大多数深色显示器和桌面。",
  "Grey setups": "灰色桌面",
  "Modern and minimal finish for professional desk environments.": "现代简洁的颜色，适合专业桌面环境。",
  "White setups": "白色桌面",
  "Clean and bright finish for minimal and light-colored desk setups.": "清爽明亮，适合浅色或极简桌面。",
  "Pink setups": "粉色桌面",
  "Soft and aesthetic finish for stylish desk spaces.": "柔和、有风格，适合更具装饰感的桌面空间。",
  "Internal classification guide": "内部分类操作规范",
  "Recommended product range by monitor type": "按显示器类型推荐的产品范围",
  "Recommended product range by purpose": "按用途推荐的产品范围",
  "Recommended product range by scenario": "按场景推荐的产品范围",
  "Recommended product range by light bar shape": "按灯条形态推荐的产品范围",
  "Recommended product range by finish color": "按机身颜色推荐的产品范围",
  "Explore Quntis monitor light bar series by lighting role: focused front light, soft back glow, or immersive RGB backlight.": "按照明角色浏览 Quntis 屏幕挂灯系列：专注前光、柔和背光或沉浸式 RGB 背光。",
  "Front light for long focused hours, everyday work, study, and screen comfort.": "适合长时间专注、日常办公、学习和屏幕使用的前向照明。",
  "Front light plus soft white backlight for balanced desk atmosphere.": "前向照明加柔和白色背光，让桌面氛围更均衡。",
  "Eye-care front light with immersive RGB backlight for gaming and entertainment.": "护眼前光搭配沉浸式 RGB 背光，适合游戏与娱乐。",
  "Choose by lighting role": "按照明角色选择",
  "Quntis desk lamps focus on wider task lighting for creators, readers, and large work surfaces.": "Quntis 桌面灯侧重更宽的任务照明，适合创作者、阅读者和大桌面。",
  "Wide task lighting for piano rooms, craft desks, creative work, and larger work surfaces.": "适合琴房、手工桌、创意工作和较大工作台的宽范围任务照明。",
  "Eye-care lighting": "护眼照明",
  "Designed for comfortable screen-time lighting.": "为舒适的屏幕使用照明而设计。",
  "Designed for comfortable task lighting.": "为舒适的任务照明而设计。",
  "Front light only": "仅前向照明",
  "Focused task light for the desk surface.": "面向桌面的专注任务照明。",
  "Front light + soft backlight": "前向照明 + 柔和背光",
  "Task light with gentle ambient depth.": "任务照明，同时带来柔和环境层次。",
  "Front light + RGB backlight": "前向照明 + RGB 背光",
  "Task light with color accent lighting.": "任务照明，同时提供彩色氛围光。",
  "Wide task lighting": "宽范围任务照明",
  "Broad illumination for larger work surfaces.": "为更大的工作表面提供更宽照明。",
  "Best for": "适合",
  "Focused work, study, and everyday productivity.": "专注工作、学习和日常效率场景。",
  "Work, reading, and relaxed evening use.": "工作、阅读和放松的夜间使用。",
  "Gaming, movies, streaming, and immersive desk setups.": "游戏、电影、直播和沉浸式桌面配置。",
  "Creative work, design, craft desks, piano rooms, and wide desks.": "创意工作、设计、手工桌、琴房和宽桌面。",
  "Video Timeline": "Video Timeline（视频时间线）",
  "Concept timeline if this module uses video": "如果此模块使用视频，可参考此概念时间线",
  "Explore the Full Focus Series": "浏览完整 Focus 系列",
  "Explore the Full Glow Series": "浏览完整 Glow 系列",
  "Explore the Full IM Series": "浏览完整 IM 系列",
  "Explore the Full Studio Series": "浏览完整 Studio 系列",
  "Different sizes. Smarter lighting. Perfect for every setup.": "多种尺寸与更智能的照明，适配不同桌面配置。",
  "Balanced light. Softer atmosphere. Designed for everyday desk setups.": "均衡照明与更柔和氛围，适合日常桌面。",
  "Eye-care front light with immersive RGB backlight.": "护眼前光搭配沉浸式 RGB 背光。",
  "Best for gaming desks and immersive entertainment setups.": "适合游戏桌面和沉浸式娱乐配置。",
  "Amazon product module": "Amazon 商品模块",
  "Amazon module": "Amazon 模块",
  "Generated from Product Link": "由 Product Link 生成",
  "Real Amazon data": "真实 Amazon 数据",
  "★★★★★ Real Amazon rating": "★★★★★ 真实 Amazon 评分",
  "Add to Cart": "Add to Cart",
  "Screen compatibility": "屏幕适配",
  "Multi-light control": "多灯控制",
  "Screen type": "屏幕类型",
  "Key function": "主要功能",
  "Workspace compatibility": "工作空间适配",
  "Mount type": "安装方式",
  "Light type": "照明类型",
  "Front Light Only": "仅前向照明",
  "Soft ambient backlight": "柔和环境背光",
  "Auto dimming": "自动调光",
  "Wider soft backlight": "更宽的柔和背光",
  "Curved / foldable form": "弧形 / 可折叠形态",
  "Piano / desktop use": "钢琴 / 桌面使用",
  "Sits on table": "桌面放置",
  "All / wide desks": "通用 / 宽桌面",
  "Clamps to desk edge": "夹在桌边",
  "Foldable task lighting": "可折叠任务照明",
  "No": "否",
  "Yes": "是",
  "Flat & Curved": "平面屏 & 曲面屏",
  "Curved / Flat": "曲面屏 / 平面屏",
  "Portable Screens": "便携屏",
  "Amazon link needed": "需补 Amazon 链接",
  "ASIN needed": "需补 ASIN",
  "Needs ASIN confirmation": "需确认 ASIN",
  "No valid product link in naming sheet": "命名表中暂无有效产品链接",
  "Rating pending": "评分待确认",
  "Prime pending": "Prime 状态待确认",
  "Confirm before upload": "上线前确认",
  "Needs confirmation": "需确认",
  "Fits laptop 11\"–14\"": "适配 11\"–14\" 笔记本",
  "Explore Quntis featured picks, limited-time offers, best sellers, new arrivals, and setup bundles.": "浏览 Quntis 精选产品、限时优惠、热销款、新品和套装。",
  "Limited-time Offers": "限时优惠",
  "Discover current Quntis offers on selected desk lighting products while they are available.": "查看当前精选桌面照明产品的 Quntis 优惠。",
  "Limited stock. Limited time.": "库存有限，限时优惠。",
  "Limited time deal": "限时优惠",
  "Prime Day Deal": "Prime Day 优惠",
  "Event pick": "活动精选",
  "Best Sellers": "热销产品",
  "Top-rated picks loved by customers.": "客户喜爱的高评分产品。",
  "Amazon listing": "Amazon 商品页",
  "New Arrivals": "新品",
  "Fresh products, innovative lighting.": "新产品与创新照明。",
  "Multi-Light Bundles": "多灯套装",
  "Control both lights together with a single remote.": "用一个遥控器同时控制两盏灯。",
  "Bundle": "套装",
  "Dual Monitor Lighting Bundle": "双屏照明套装",
  "One compatible light bar + one remote. Control both lights together with a single remote.": "一条兼容灯条 + 一个遥控器，用一个遥控器同时控制两盏灯。",
  "FREE delivery": "免费配送",
  "Dual Curved Monitor Bundle": "双曲面屏套装",
  "Horizontal + Vertical Monitor Bundle": "横屏 + 竖屏套装",
  "Eye-care Technology": "护眼技术",
  "Reduce eye strain with comfortable, flicker-free light.": "使用舒适、无频闪照明减少眼部压力。",
  "One-Controller Control": "单遥控器控制",
  "Dual-Monitor Compatibility": "双屏兼容",
  "Designed for seamless dual-screen setups and clean desk layouts.": "适合整洁的双屏桌面配置。",
  "Save more when you buy compatible lights together.": "组合购买兼容灯具可节省更多。",
  "Use the series pages for product modules, video placement, product cards, and comparison tables. This keeps the primary page clean while preserving a clear path to purchase.": "使用各系列页面承载产品模块、视频位置、产品卡和对比表，让一级页面保持简洁，同时保留清晰的购买路径。",
  "Browse real monitor layouts by screen type, screen count, and placement.": "按屏幕类型、数量和摆放方式浏览真实桌面配置。",
  "Product points indicate the matching Quntis item and link to Amazon.": "产品点位标示对应的 Quntis 产品，并链接到 Amazon。",
  "needs product mapping confirmation": "需确认产品匹配",
  "Curved Monitor Setup": "曲面屏配置",
  "Quntis Pink Light Bar": "Quntis Pink Light Bar",
  "Single Monitor with Pink Light Bar": "单显示器 + 粉色灯条",
  "Curved compatible light bar": "曲面屏兼容灯条",
  "Quntis White Light Bar": "Quntis White Light Bar",
  "Single Flat Monitor Setup": "单平面屏配置",
  "Pink light bar for curved monitor": "曲面屏粉色灯条",
  "Curved Monitor with Pink Light Bar": "曲面屏 + 粉色灯条",
  "Foldable light bar / desk lamp": "可折叠灯条 / 桌面灯",
  "Monitor + Laptop Setup": "显示器 + 笔记本配置",
  "Stacked Screen Setup": "上下叠放屏幕配置",
  "Monitor light bar": "屏幕挂灯",
  "Webcam-Friendly Monitor Light Bar": "适合搭配摄像头的屏幕挂灯",
  "Webcam-friendly monitor light bar": "适合搭配摄像头的屏幕挂灯",
  "Foldable light bar for dual monitor setup": "适合双屏配置的可折叠灯条",
  "Dual Monitor Setup": "双屏配置",
  "Desk lamp": "桌面灯",
  "Ultrawide Monitor with Desk Lamp": "超宽屏 + 桌面灯",
  "Desk lamp for vertically stacked monitor": "适合上下叠放屏幕的桌面灯",
  "Vertically Stacked Monitor Setup": "上下叠放屏幕配置",
  "Real setups, reserved accessories, and other Quntis products. Each item opens as its own Amazon Store second-level page.": "真实桌面、预留配件和其他 Quntis 产品。每个入口对应一个 Amazon Store 二级页面。",
  "Real desk scenes with shoppable product points.": "带可购物产品点位的真实桌面场景。",
  "Reserved page structure for future accessories.": "为后续配件预留的页面结构。",
  "Quntis products outside the core desk lighting system.": "核心桌面照明体系之外的 Quntis 产品。",
  "Product Grid 相关生成，内部备注：Other Items 只登记有真实 Amazon 链接的非核心产品；当前资料中未找到对应 model number，需销售确认后再补。": "Product Grid 相关生成，内部备注：Other Items 只登记有真实 Amazon 链接的非核心产品；当前资料中未找到对应 model number，需销售确认后再补。",
  "OTHER ITEMS": "其他产品",
  "Seasonal & Holiday": "季节与节日",
  "Holiday lighting products that can remain available as secondary cross-sell items.": "可作为二级交叉销售项保留的节日照明产品。",
  "Product Link": "Product Link",
  "Seasonal lighting": "节日照明",
  "Model number: needs sales confirmation": "型号：需销售确认",
  "Amazon native module will generate the product image, price, rating, Prime status, and Add to Cart.": "正式 Amazon 原生模块会生成产品图、价格、评分、Prime 状态和 Add to Cart。",
  "Outdoor & Yard Lights": "户外与庭院灯",
  "Utility lighting products that belong in More rather than the desk lighting navigation.": "属于更多区域的实用照明产品，不归入桌面照明导航。",
  "Outdoor utility lighting": "户外实用照明",
  "Focus 前光任务照明，或 Glow 前光 + 柔和背光且页面用途为 reading / typing / long desk sessions。": "Focus 前向任务照明，或 Glow 前光 + 柔和背光；页面用途为阅读、打字或长时间桌面使用。",
  "Studio 夹桌边或可调角度工作灯，适合 detailed manual work / craft desks。": "Studio 夹桌边或可调角度工作灯，适合精细手工和手工桌。",
  "两段式弧形 / 双翼折叠 / foldable light bar；不要把三段式 Studio 产品放进 Foldable。": "两段式弧形、双翼折叠或可折叠灯条；不要把三段式 Studio 产品放进 Foldable。",
  "主数据或产品名称明确为 3-Stage Foldable / 三段折叠 / Studio 三段调角。": "主数据或产品名称明确为 3-Stage Foldable、三段折叠或 Studio 三段调角。",
  "产品名称为 Curved Monitor Light Bar，或页面当前形态明确归入曲条/曲面屏灯条。": "产品名称为 Curved Monitor Light Bar，或页面当前形态明确归入弧形灯条/曲面屏灯条。",
  "只在印度有售、未归入系列、缺少有效平台链接，或主数据与快速查询存在冲突的产品不进入当前 US Store 推荐范围；如需加入，需销售或产品负责人确认。": "只在印度有售、未归入系列、缺少有效平台链接，或主数据与快速查询存在冲突的产品，不进入当前美国站旗舰店推荐范围；如需加入，需销售或产品负责人确认。",
  "只在印度有售、未归入系列、缺少有效平台链接，或场景标签需销售确认的产品不进入当前 Scenario 推荐范围。": "只在印度有售、未归入系列、缺少有效平台链接，或场景标签需销售确认的产品，不进入当前场景推荐范围。",
  "只在印度有售、未归入系列、缺少有效平台链接，或用途标签需销售确认的产品不进入当前 Purpose 推荐范围。": "只在印度有售、未归入系列、缺少有效平台链接，或用途标签需销售确认的产品，不进入当前用途推荐范围。",
  "命名表、页面备注或产品定位支持 multi-light control、dual-screen、wider coverage 或双屏桌面场景；Studio 系列中适合宽桌面 / 双屏桌面的款式可加入，Piano Light 不进入 Dual。": "命名表、页面备注或产品定位支持多灯控制、双屏、更宽覆盖或双屏桌面场景；Studio 系列中适合宽桌面/双屏桌面的款式可加入，Piano Light 不进入双屏分类。",
  "命名表或主数据表标记 Fits Curved/Flat Monitors，或产品名称本身为 Curved Monitor Light Bar。": "命名表或主数据表标记适合曲面屏/平面屏，或产品名称本身为曲面屏灯条。",
  "紧凑型 Focus 或可节省桌面空间的 Studio Flex；避免把大尺寸 wide workspace 产品默认放入宿舍场景。": "紧凑型 Focus 或可节省桌面空间的 Studio Flex；避免把大尺寸宽桌面产品默认放入宿舍场景。",
  "适合 design、drawing、music production、creative workstation，或 Studio / Glow 页面定位为更柔和、更宽的桌面照明。": "适合设计、绘画、音乐制作、创意工作台，或 Studio / Glow 页面定位为更柔和、更宽的桌面照明。",
  "适合日常办公、阅读、视频会议和长期桌面使用的 Focus / Glow 产品；不按屏幕厚度参数筛选。": "适合日常办公、阅读、视频会议和长期桌面使用的 Focus / Glow 产品；不按屏幕厚度参数筛选。",
  "面向平面屏用户；可放命名表或主数据表明确标记 Flat only / Fits Flat Monitors 的产品，也可放明确标记 flat/curved compatible、且销售确认适合平面屏推荐的产品；不体现屏幕厚度参数。": "面向平面屏用户；可放命名表或主数据表明确标记仅适配平面屏/适合平面屏的产品，也可放明确标记平面屏/曲面屏兼容、且销售确认适合平面屏推荐的产品；不体现屏幕厚度参数。",
  "页面图形与产品形态为直条屏幕挂灯；不把折叠、弧形、平置桌面钢琴灯归入 Straight。": "页面图形与产品形态为直条屏幕挂灯；不把折叠、弧形、平置桌面钢琴灯归入 Straight。",
};

const previewEnglishExactMap = {
  "桌面配件": "Desk Setup Accessories",
  "桌面配件 - Quntis Amazon Storefront": "Desk Setup Accessories - Quntis Amazon Storefront",
  "这里将用于放置摄像头适配配件和其他桌面配件。当前暂无产品，后续可直接添加真实 Amazon 产品链接模块。": "This page is reserved for webcam-friendly accessories and other desk setup accessories. No products are listed yet; future products should be added through real Amazon Product Link modules.",
  "预留区域：等待真实产品链接 / Product Link Module": "Reserved area: waiting for real product links / Product Link Module.",
  "亚马逊官网要求尺寸规范和格式要求：": "Amazon official size and format requirements:",
  "本清单定义每个分类下可推荐的产品范围。实际展示哪些产品、展示数量和排序，由销售负责人根据站点上架情况与推广优先级决定；添加产品时应从对应分类清单中选择。": "This list defines the recommended product range for each category. Actual products, quantity, and order are decided by the sales owner based on site availability and promotion priority; products should be selected from the matching category list.",
  "筛选依据：": "Selection basis:",
  "需销售确认：": "Needs sales confirmation:",
  "暂不进入当前范围：": "Not included in the current range:",
  "备注：不确定允许的视频时长；当前 Video Timeline 作为视频规划示意保留，每个产品预留 40 秒。如果正式视频时长放不下，可改成一款产品的视频，或者只放静态图；上线前再决定是否隐藏 timeline。": "Note: The allowed video duration is not confirmed. The current Video Timeline is kept as a video planning concept, with 40 seconds reserved per product. If the final video duration does not fit, use one product video or a static image only; decide before launch whether to hide the timeline.",
  "Video timeline：当前为视频概念规划，不代表已接入视频文件；每个产品预留 40 秒。正式上传前需按 Amazon Store video module 允许时长、文件大小和最终产品选择同步调整。": "Video timeline: this is a video concept plan, not an embedded video file. Reserve 40 seconds per product. Before final upload, adjust based on Amazon Store video module duration, file size, and final product selection.",
  "数据来源：Quntis 产品主数据总表、护眼灯产品命名快速查询、当前 By Monitor Type 页面产品卡。产品识别按产品英文名 + model number，不写 variant code。": "Data source: Quntis product master data, monitor light bar naming quick reference, and current By Monitor Type product cards. Identify products by English product name + model number; do not use variant code.",
  "数据来源：Quntis 产品主数据总表、护眼灯产品命名快速查询、当前 By Purpose 页面产品卡。产品识别按产品英文名 + model number，不写 variant code。": "Data source: Quntis product master data, monitor light bar naming quick reference, and current By Purpose product cards. Identify products by English product name + model number; do not use variant code.",
  "数据来源：Quntis 产品主数据总表、护眼灯产品命名快速查询、当前 By Scenarios 页面产品卡。产品识别按产品英文名 + model number，不写 variant code。By Scenario 相关 claim 已有授权和证明。": "Data source: Quntis product master data, monitor light bar naming quick reference, and current By Scenarios product cards. Identify products by English product name + model number; do not use variant code. By Scenario claims are authorized and supported.",
  "数据来源：Quntis 产品主数据总表、护眼灯产品命名快速查询、当前 By Light Bar Shape 页面产品卡。产品识别按产品英文名 + model number，不写 variant code。": "Data source: Quntis product master data, monitor light bar naming quick reference, and current By Light Bar Shape product cards. Identify products by English product name + model number; do not use variant code.",
  "数据来源：Quntis 产品主数据总表、护眼灯产品命名快速查询、当前 By Color 页面产品卡。产品识别按产品英文名 + model number，不写 variant code。Grey 相关 claim 已有授权和证明。": "Data source: Quntis product master data, monitor light bar naming quick reference, and current By Color product cards. Identify products by English product name + model number; do not use variant code. Grey-related claims are authorized and supported.",
  "分类主视觉 / 左侧说明卡按 Amazon Stores Image tile / equivalent 模块准备；官方 Image tile 规格包含 Small 最小 750 x 750 px、最大 5 MB，若后台选择 Medium tile 则最小 1500 x 750 px。该说明卡没有完全独立的官方尺寸，正式上线以 Store Builder 选定 tile size、移动端安全区和上传格式校验为准。": "Category hero / left information cards should be prepared as Amazon Stores Image tile or equivalent modules. Official Image tile specs include Small minimum 750 x 750 px, maximum 5 MB; if Medium tile is selected, minimum 1500 x 750 px. This card does not have a fully separate official size; final launch should follow the selected Store Builder tile size, mobile safe area, and upload validation.",
  "顶部分类导航卡片按 Amazon Stores Image tile / equivalent 分类视觉准备；官方 Image tile 规格包含 Small 最小 750 x 750 px、最大 5 MB，若后台选择 Medium tile 则最小 1500 x 750 px。当前预览不是 Amazon 后台单独命名的专用模块，最终以 Store Builder 选定 tile size、移动端安全区和上传格式校验为准。": "Top category navigation cards should be prepared as Amazon Stores Image tile or equivalent category visuals. Official Image tile specs include Small minimum 750 x 750 px, maximum 5 MB; if Medium tile is selected, minimum 1500 x 750 px. This preview is not a separately named Amazon backend module; final launch should follow the selected Store Builder tile size, mobile safe area, and upload validation.",
  "只在印度有售、未归入系列、缺少有效平台链接，或主数据与快速查询存在不一致，暂不放入 Flat / Curved / Dual / Ultrawide：LI-HY-1214-GY-QU、LI-HY-3005-QU、G-zone 45 cm、NW-LI-HY-0128-301SFS、NW-LI-HY-0133-BL、NW-LI-HY-B0025 / B0026 / B0027 / B0028 / B0029 / B0030 / B0031 / B0032 / B0033 / B0034 / B0035，以及阅读灯类未归入系列产品。待销售或产品负责人确认后再加入相应分类。": "Products sold only in India, outside the current series system, missing valid platform links, or inconsistent between master data and quick reference are not included in Flat / Curved / Dual / Ultrawide yet. Add them only after sales or product owner confirmation.",
  "只在印度有售、未归入系列、缺少有效平台链接，或用途标签需销售确认的产品不进入当前 Purpose 推荐范围。": "Products sold only in India, outside the current series system, missing valid platform links, or needing sales confirmation for purpose tags are not included in the current Purpose recommendation range.",
  "只在印度有售、未归入系列、缺少有效平台链接，或场景标签需销售确认的产品不进入当前 Scenario 推荐范围。": "Products sold only in India, outside the current series system, missing valid platform links, or needing sales confirmation for scenario tags are not included in the current Scenario recommendation range.",
  "只在印度有售、未归入系列、缺少有效平台链接，或主数据与快速查询存在冲突的产品不进入当前 US Store 推荐范围；如需加入，需销售或产品负责人确认。": "Products sold only in India, outside the current series system, missing valid platform links, or conflicting between master data and quick reference are not included in the current US Store recommendation range; sales or product owner confirmation is required before adding them.",
  "Quntis Piano Light Studio 60 cm Black 和 Quntis Flex Desk Lamp Studio 78 cm Grey 的形态归类仍按页面现有待确认说明处理；确认前不进入 Shape 推荐范围。": "Quntis Piano Light Studio 60 cm Black and Quntis Flex Desk Lamp Studio 78 cm Grey still require shape classification confirmation; do not include them in Shape recommendations before confirmation.",
  "Quntis Piano Light Studio 60 cm Black、区域/重复款 Focus 41 cm Grey B0DCZ13MSS，以及未提供清晰颜色图或主推站点的产品，确认前不进入当前 Color 推荐范围。": "Quntis Piano Light Studio 60 cm Black, regional/duplicate Focus 41 cm Grey B0DCZ13MSS, and products without clear color images or a confirmed primary marketplace are not included in the current Color recommendation range before confirmation.",
  "40-41 cm 轻量屏幕挂灯，或页面备注明确适合 small desk / compact desk；Studio Flex 仅作为夹桌边释放桌面空间的选择。": "40-41 cm lightweight monitor light bars, or products explicitly noted for small desk / compact desk. Studio Flex is included only as a desk-edge option that frees desk space.",
  "52 cm / 51 cm / 66 cm 长度、multi-light control、wider coverage，或 Studio 大范围桌面照明。": "52 cm / 51 cm / 66 cm length, multi-light control, wider coverage, or Studio wide-area desk lighting.",
  "66 cm 长灯条、Studio 夹桌边工作灯，或页面备注明确用于 wide workspaces / wider coverage。": "66 cm long light bars, Studio desk-edge task lights, or products explicitly noted for wide workspaces / wider coverage.",
  "Focus 前光任务照明，或 Glow 前光 + 柔和背光且页面用途为 reading / typing / long desk sessions。": "Focus front task lighting, or Glow front light + soft backlight where the page purpose is reading / typing / long desk sessions.",
  "Glow 系列适合 everyday desk use、reading 和 relaxed evening use；RGB 光效不作为 Daily 的主要筛选依据。": "Glow Series fits everyday desk use, reading, and relaxed evening use; RGB lighting effects are not the primary basis for Daily.",
  "IM 系列或页面备注明确为 RGB backlight / gaming / immersive desk setups。": "IM Series, or products explicitly noted for RGB backlight / gaming / immersive desk setups.",
  "IM 系列 RGB Backlight / Music Sync，或 Studio desk-edge lamp 用于设备较多的游戏桌面。": "IM Series RGB Backlight / Music Sync, or Studio desk-edge lamps for gaming desks with more gear.",
  "Studio 夹桌边或可调角度工作灯，适合 detailed manual work / craft desks。": "Studio desk-edge or angle-adjustable task lights for detailed manual work / craft desks.",
  "适合 design、drawing、music production、creative workstation，或 Studio / Glow 页面定位为更柔和、更宽的桌面照明。": "Fits design, drawing, music production, creative workstations, or Studio / Glow positioning for softer or wider desk lighting.",
  "适合日常办公、阅读、视频会议和长期桌面使用的 Focus / Glow 产品；不按屏幕厚度参数筛选。": "Focus / Glow products for daily office work, reading, video calls, and long desk sessions; do not filter by screen thickness.",
  "紧凑型 Focus 或可节省桌面空间的 Studio Flex；避免把大尺寸 wide workspace 产品默认放入宿舍场景。": "Compact Focus products or space-saving Studio Flex; avoid defaulting large wide-workspace products into Dorm.",
  "命名表、页面备注或产品定位支持 multi-light control、dual-screen、wider coverage 或双屏桌面场景；Studio 系列中适合宽桌面 / 双屏桌面的款式可加入，Piano Light 不进入 Dual。": "Naming sheet, page notes, or product positioning support multi-light control, dual-screen, wider coverage, or dual-monitor desk scenarios. Studio models suitable for wide desks / dual-screen desks may be included; Piano Light is not included in Dual.",
  "命名表或主数据表标记 Fits Curved/Flat Monitors，或产品名称本身为 Curved Monitor Light Bar。": "Naming sheet or master data marks Fits Curved/Flat Monitors, or the product name itself is Curved Monitor Light Bar.",
  "面向平面屏用户；可放命名表或主数据表明确标记 Flat only / Fits Flat Monitors 的产品，也可放明确标记 flat/curved compatible、且销售确认适合平面屏推荐的产品；不体现屏幕厚度参数。": "For flat-screen users. Include products clearly marked Flat only / Fits Flat Monitors in the naming sheet or master data, plus selected flat/curved-compatible products confirmed by sales for flat-screen recommendations; do not show screen thickness parameters.",
  "页面图形与产品形态为直条屏幕挂灯；不把折叠、弧形、平置桌面钢琴灯归入 Straight。": "Page graphic and product form indicate straight monitor light bars; do not classify foldable, curved, or flat tabletop piano lights as Straight.",
  "主数据或产品名称明确为 3-Stage Foldable / 三段折叠 / Studio 三段调角。": "Master data or product name clearly indicates 3-Stage Foldable / Studio three-stage adjustment.",
  "两段式弧形 / 双翼折叠 / foldable light bar；不要把三段式 Studio 产品放进 Foldable。": "Two-section curved / dual-wing foldable / foldable light bar; do not place three-stage Studio products in Foldable.",
  "产品名称为 Curved Monitor Light Bar，或页面当前形态明确归入曲条/曲面屏灯条。": "Product name is Curved Monitor Light Bar, or the current page form clearly belongs to curved / curved-monitor light bars.",
  "标题、颜色字段或主数据明确为 Black；RGB 是光效，不作为颜色分类。": "Title, color field, or master data clearly indicates Black; RGB is a lighting effect, not a color category.",
  "标题、颜色字段或主数据明确为 Grey / Gray；灰色机身 + RGB 背光仍归入 Grey。": "Title, color field, or master data clearly indicates Grey / Gray; grey body + RGB backlight still belongs in Grey.",
  "标题、颜色字段或主数据明确为 White；产品图正式上线应使用白色机身对应的 Amazon 原生商品图。": "Title, color field, or master data clearly indicates White; final launch should use the Amazon native product image for the white body.",
  "标题、颜色字段或主数据明确为 Pink；粉色机身 + RGB 背光仍归入 Pink。": "Title, color field, or master data clearly indicates Pink; pink body + RGB backlight still belongs in Pink.",
};

const previewEnglishGenericRules = [
  {
    test: (text) => text.startsWith("Product Link / Product Grid：在 Amazon Store Builder 中选择 ASIN；"),
    value:
      "Product Link / Product Grid: Select ASINs in Amazon Store Builder. Product images, prices, ratings, Prime, and Add to Cart are generated by Amazon native modules; do not upload custom price/rating screenshots. Internal note: final product range, availability, and order require sales or product owner confirmation.",
  },
  {
    test: (text) => text.startsWith("Shoppable Image：图片"),
    value:
      "Shoppable Image: image >= 3000 x 1500 px, <= 5MB, maximum 6 product hotspots per shoppable image. Format: PNG/JPG/static GIF. Internal note: hotspots are preview simulations; final implementation should use Amazon product links or native shoppable modules.",
  },
  {
    test: (text) => text.startsWith("Video cover：cover image"),
    value:
      "Video cover: cover image >= 3000 x 1500 px. Format: PNG/JPG/static GIF. Internal note: use the approved series cover style; current pages use static covers only.",
  },
  {
    test: (text) => text.startsWith("Video：视频"),
    value:
      "Video: video >= 1280 x 640 px, <500MB; format avi/mov/mpg/mpeg/mp4/m4a/m4v/m4p; cover image >= 3000 x 1500 px. Internal note: current pages show static covers only; confirm video module requirements before final upload.",
  },
  {
    test: (text) => text.startsWith("Page hero / Image tile："),
    value:
      "Page hero / Image tile: width >= 3000 px, height 16-2400 px. Format: PNG/JPG/static GIF. If exported as an Amazon Store built-in Header, use 3000 x 600 px. Internal note: final visual and safe area depend on the selected Store Builder module.",
  },
  {
    test: (text) => text.startsWith("Image tile / category module："),
    value: "Image tile / category module: width >= 3000 px, height 16-2400 px. Format: PNG/JPG/static GIF.",
  },
  {
    test: (text) => text.startsWith("Image tile："),
    value:
      "Image tile: width >= 3000 px, height 16-2400 px. Format: PNG/JPG/static GIF. Internal note: final ASINs and product imagery should be confirmed before launch.",
  },
  {
    test: (text) => text.startsWith("IM Series image tile："),
    value: "IM Series image tile: width >= 3000 px, height 16-2400 px. Format: PNG/JPG/static GIF.",
  },
  {
    test: (text) => text.startsWith("Header / image strip："),
    value:
      "Header / image strip: recommended export 3000 x 600 px. If used as an Image tile, width >= 3000 px and height 16-2400 px. Format: PNG/JPG/static GIF. Internal note: replace with authorized UGC / Instagram assets.",
  },
  {
    test: (text) => text.startsWith("Header：最终视觉"),
    value:
      "Header: final visual 3000 x 600 px. Format: PNG/JPG/static GIF. If using Background video: 1280 x 640 px, height <= 1500 px, 2-20s, format avi/mov/mpg/mpeg/mp3/m4a/m4v/m4p.",
  },
  {
    test: (text) => text.startsWith("Gallery："),
    value: "Gallery: 3-8 images; each image >= 1500 x 750 px. Format: PNG/JPG/static GIF.",
  },
  {
    test: (text) => text.startsWith("Product Collection："),
    value:
      "Product Collection: image >= 1920 x 640 px, 3:1, <= 5MB. Format: PNG/JPG/static GIF; ASIN, price, and rating are generated by Amazon Store Builder native modules.",
  },
  {
    test: (text) => text.startsWith("Product Grid 相关生成"),
    value:
      "Product Grid related output. Internal note: Other Items only lists non-core products with real Amazon links. Model numbers were not found in the current source materials and need sales confirmation.",
  },
  {
    test: (text) => text.startsWith("以下产品"),
    value:
      "The following products are not included in the current consumer-visible recommendation range until sales or product owner confirms the category tag, primary marketplace, product link, and display order.",
  },
];

const previewPhraseReplacements = [
  ["Amazon Store Builder", "Amazon Store Builder"],
  ["Amazon Store", "Amazon Store"],
  ["Product Link / Product Grid", "Product Link / Product Grid"],
  ["Product Link", "Product Link"],
  ["Product Grid", "Product Grid"],
  ["Prime", "Prime"],
  ["Add to Cart", "Add to Cart"],
  ["needs sales confirmation", "需销售确认"],
  ["needs product image", "需补产品图"],
  ["needs product mapping confirmation", "需确认产品匹配"],
  ["Amazon native module", "Amazon 原生模块"],
  ["Amazon product module", "Amazon 商品模块"],
  ["Amazon listing", "Amazon 商品页"],
  ["Real Amazon rating", "真实 Amazon 评分"],
  ["Real Amazon data", "真实 Amazon 数据"],
  ["View all", "查看全部"],
  ["products", "产品"],
  ["setups", "配置"],
  ["lighting", "照明"],
];

const previewOriginalText = new WeakMap();
const previewOriginalTitle = document.title;

function getPreviewLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get("lang");
  if (queryLang === "zh" || queryLang === "en") return queryLang;
  return window.localStorage.getItem("quntisPreviewLanguage") === "zh" ? "zh" : "en";
}

function setPreviewLanguage(lang, options = {}) {
  const nextLang = lang === "zh" ? "zh" : "en";
  window.localStorage.setItem("quntisPreviewLanguage", nextLang);
  document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.previewLang = nextLang;

  if (options.updateUrl !== false) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", nextLang);
    window.history.replaceState(null, "", url);
  }

  document.querySelectorAll(".language-switcher__option").forEach((button) => {
    const isActive = button.dataset.lang === nextLang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  updateReviewNoticeLanguage(nextLang);
  applyPreviewLanguage(nextLang);
}

function normalizePreviewText(value) {
  return value.replace(/\s+/g, " ").replace(/\u00a0/g, " ").trim();
}

function translatePreviewText(value) {
  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  const core = normalizePreviewText(value);
  if (!core) return value;
  if (previewTranslationMap[core]) return `${leading}${previewTranslationMap[core]}${trailing}`;

  let translated = core;
  previewPhraseReplacements.forEach(([source, target]) => {
    translated = translated.replaceAll(source, target);
  });
  return translated === core ? value : `${leading}${translated}${trailing}`;
}

function translateEnglishPreviewText(value) {
  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  const core = normalizePreviewText(value);
  if (!core) return value;
  if (previewEnglishExactMap[core]) return `${leading}${previewEnglishExactMap[core]}${trailing}`;
  const generic = previewEnglishGenericRules.find((rule) => rule.test(core));
  if (generic) return `${leading}${generic.value}${trailing}`;
  return value;
}

function shouldSkipPreviewNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (!normalizePreviewText(node.nodeValue || "")) return true;
  return Boolean(
    parent.closest(
      "script, style, noscript, svg, canvas, .language-switcher, .review-preview-notice, .media-logo-row, [data-no-i18n]"
    )
  );
}

function collectPreviewTextNodes(root = document.body) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return shouldSkipPreviewNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!previewOriginalText.has(node)) previewOriginalText.set(node, node.nodeValue);
    nodes.push(node);
  }
  return nodes;
}

function applyPreviewLanguage(lang = getPreviewLanguage()) {
  collectPreviewTextNodes().forEach((node) => {
    const original = previewOriginalText.get(node) || node.nodeValue || "";
    node.nodeValue = lang === "zh" ? translatePreviewText(original) : translateEnglishPreviewText(original);
  });
  document.title = lang === "zh" ? translatePreviewText(previewOriginalTitle) : translateEnglishPreviewText(previewOriginalTitle);
}

function getReviewNoticeMarkup() {
  return `
    <div class="review-preview-notice__inner">
      <strong>请检查页面设计是否有在旗舰店实现不了的地方，以及逻辑设计上是否有缺陷，及有无其他建议</strong>
      <details>
        <summary>审查重点</summary>
        <ul>
          <li>确认哪些设计无法在 Amazon Store Builder 中原样实现。</li>
          <li>检查几个 by 页面的分类逻辑、产品归类和展示数量是否合理。</li>
          <li>内部尺寸规范、分类清单和备注只用于审查版和内部，正式上线前会隐藏。</li>
          <li>确认视频/静态图模块符合 Amazon Store video/image 模块限制；当前 Video Timeline 只是概念示意。</li>
          <li>右上角中英文切换仅为 Netlify 审查预览功能，其他语种后面需要经编辑审核后，单独制作。</li>
        </ul>
      </details>
    </div>
  `;
}

function updateReviewNoticeLanguage(lang = getPreviewLanguage()) {
  const notice = document.querySelector(".review-preview-notice");
  if (notice) notice.innerHTML = getReviewNoticeMarkup(lang);
}

function injectReviewNotice() {
  if (document.querySelector(".review-preview-notice")) return;
  const notice = document.createElement("section");
  notice.className = "review-preview-notice";
  notice.setAttribute("data-no-i18n", "true");
  notice.setAttribute("aria-label", "Review notice / preview notice");
  document.body.prepend(notice);
  updateReviewNoticeLanguage(getPreviewLanguage());
}

function injectLanguageSwitcher() {
  if (document.querySelector(".language-switcher")) return;
  const target = document.querySelector(".header-balance") || document.querySelector(".header-main");
  if (!target) return;

  target.removeAttribute("aria-hidden");
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("data-no-i18n", "true");
  switcher.setAttribute("aria-label", "Language switcher");
  switcher.innerHTML = `
    <span class="language-switcher__label">Language</span>
    <div class="language-switcher__options" role="group" aria-label="Language">
      <button class="language-switcher__option" type="button" data-lang="en" aria-pressed="false">en</button>
      <button class="language-switcher__option" type="button" data-lang="zh" aria-pressed="false">中文（预览内容用）</button>
    </div>
  `;
  target.appendChild(switcher);

  switcher.querySelectorAll(".language-switcher__option").forEach((button) => {
    button.addEventListener("click", () => setPreviewLanguage(button.dataset.lang));
  });
}

window.getPreviewLanguage = getPreviewLanguage;
window.applyPreviewLanguage = applyPreviewLanguage;
window.setPreviewLanguage = setPreviewLanguage;

injectReviewNotice();
injectLanguageSwitcher();
setPreviewLanguage(getPreviewLanguage(), { updateUrl: false });
