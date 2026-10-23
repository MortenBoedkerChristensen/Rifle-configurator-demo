export type Category = {
  name: string;
  count: number;
  icon: "scope" | "mount" | "wrench" | "jacket" | "backpack";
};

export type Product = {
  brand: string;
  name: string;
  chips: string[];
  price: string;
  tag?: string;
  tagTone?: "dark" | "brass";
  art: "scope" | "scope-brass" | "mount" | "mount-tall";
};

export type Guide = {
  title: string;
  topic: string;
  minutes: number;
  num: string;
  art: "a" | "b" | "c";
};

export const navLinks = [
  { label: "Kikkerter", href: "#kategorier" },
  { label: "Montager", href: "#kategorier" },
  { label: "Riffeltilbehør", href: "#kategorier" },
  { label: "Guides", href: "#guides" },
  { label: "Forhandlere", href: "#forhandlere" },
];

export const categories: Category[] = [
  { name: "Kikkerter", count: 128, icon: "scope" },
  { name: "Montager & ringe", count: 64, icon: "mount" },
  { name: "Riffeltilbehør", count: 212, icon: "wrench" },
  { name: "Jagttøj", count: 340, icon: "jacket" },
  { name: "Tasker & transport", count: 96, icon: "backpack" },
];

export const products: Product[] = [
  {
    brand: "Nordlys",
    name: "V4 3–12×56 belyst retikel",
    chips: ["30 mm rør", "56 mm objektiv", "4× zoom"],
    price: "8.495 kr.",
    tag: "Mest solgt",
    tagTone: "brass",
    art: "scope",
  },
  {
    brand: "Fjeld",
    name: "Vantage 2,5–10×50",
    chips: ["30 mm rør", "50 mm objektiv", "Let"],
    price: "4.295 kr.",
    art: "scope-brass",
  },
  {
    brand: "Hald",
    name: "Picatinny 30 mm montage",
    chips: ["Medium", "Stål", "Passer 30 mm"],
    price: "1.195 kr.",
    tag: "Passer din riffel",
    tagTone: "dark",
    art: "mount",
  },
  {
    brand: "Ravn",
    name: "Blaser 34 mm montage",
    chips: ["Høj", "Svingmontage", "34 mm"],
    price: "1.495 kr.",
    tag: "Nyhed",
    tagTone: "dark",
    art: "mount-tall",
  },
];

export const guides: Guide[] = [
  {
    title: "Sådan vælger du kikkert til dansk jagt",
    topic: "Optik",
    minutes: 8,
    num: "01",
    art: "a",
  },
  {
    title: "30 mm eller 34 mm ringe?",
    topic: "Montage",
    minutes: 5,
    num: "02",
    art: "b",
  },
  {
    title: "Øjenafstand: den oversete faktor",
    topic: "Grundviden",
    minutes: 6,
    num: "03",
    art: "c",
  },
];

export const dealers = [
  { name: "Jagt & Hvidt", city: "Aarhus C", distance: "2,4 km" },
  { name: "Vestjysk Våbenhandel", city: "Ringkøbing", distance: "18 km" },
  { name: "Nordisk Optik", city: "Aalborg", distance: "36 km" },
];

export const footerColumns = [
  {
    title: "Butik",
    links: ["Kikkerter", "Montager", "Riffeltilbehør", "Jagttøj", "Tilbud"],
  },
  {
    title: "Vejledning",
    links: ["Konfigurator", "Guides", "Størrelsesguide", "Kontakt"],
  },
  {
    title: "Om SIGTE",
    links: ["Om os", "Forhandlere", "Bæredygtighed", "Jobs"],
  },
  {
    title: "Kundeservice",
    links: ["Levering", "Retur & bytte", "Garanti", "Handelsbetingelser"],
  },
];
