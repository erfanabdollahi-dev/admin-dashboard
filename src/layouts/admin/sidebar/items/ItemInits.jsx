export const dashboard = {
    title: "داشبورد",
    icon: "bx bxs-dashboard",
};

export const shop = {
    title: "فروشگاه",
    name: "shop",
    icon: "bx bxs-shopping-bag-alt",
    children: [
        { title: "مدیریت گروه محصول", icon: "bxr bx-tag" },
        { title: "مدیریت محصول", icon: "bx bx-box" },
        { title: "مدیریت برند ها", icon: "bxr bx-crown" },
        { title: "مدیریت گارانتی ها", icon: "bxr bx-badge-check" },
        { title: "مدیریت رنگ ها", icon: "bx bx-palette" },
        { title: "مدیریت تخفیف ها", icon: "bx bx-discount" },
    ],
};
export const cart = {
    title: "سفارشات و سبد",
    name: "cart",
    icon: "bx bxs-purchase-tag",
    children: [
        { title: "مدیریت سبد ها", icon: "bxr  bx-basket" },
        { title: "مدیریت سفارشات", icon: "bx bx-box" },
        { title: "مدیریت نحوه ارسال", icon: "bxr bx-truck" },
    ],
};
export const community = {
    title: "کاربران و همکاران",
    name: "community",
    icon: "bxr bxs-community",
    children: [
        { title: "مشاهده کاربران", icon: "bxr bx-user-search" },
        { title: "نقش ها", icon: "bxr bx-scan-face" },
        { title: "مجوز ها", icon: "bxr bx-shield" },
    ],
};
export const connections = {
    title: "ارتباطات",
    name: "connections",
    icon: "bx bxs-share-alt",
    children: [
        { title: "سوال ها", icon: "bx-help-circle" },
        { title: "نظرات", icon: "bx bx-message-alt-detail" },
    ],
};
