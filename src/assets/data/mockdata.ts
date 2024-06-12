import {
  InterfaceIcon,
  CalendarIcon,
  MoneyIcon,
  SettingsIcon,
  FolderOpenIcon,
  QuestionIcon,
  SupportIcon,
  SocialIcon,
  HomeIcon,
} from "assets/icons";

export const sideMenu: SideMenuItem[] = [
  { id: 1, url: "/", title: "Главная", icon: HomeIcon },
  { id: 2, url: "/schedule", title: "Расписание", icon: CalendarIcon },
  { id: 3, url: "/payment", title: "Оплата", icon: MoneyIcon },
  { id: 4, url: "/achivements", title: "Достижения", icon: SocialIcon },
  { id: 5, url: "/trainings", title: "Тренажеры", icon: InterfaceIcon },
  { id: 6, url: "/library", title: "Библиотека", icon: FolderOpenIcon },
  { id: 7, url: "/connections", title: "Проверка связи", icon: SupportIcon },
  { id: 8, url: "/settings", title: "Настройки", icon: SettingsIcon },
  { id: 9, url: "/questions", title: "Вопросы", icon: QuestionIcon },
];

export const homework = [
  { id: 1, title: "Ментальная Арифметика", number: 32 },
  { id: 2, title: "Программирование", number: 0 },
  { id: 3, title: "Скорочтение", number: 4 },
  { id: 4, title: "Ментальная Арифметика", number: 32 },
  { id: 5, title: "Ментальная Арифметика", number: 32 },
  { id: 6, title: "Ментальная Арифметика", number: 32 },
];

export const incomingLessons = [
  {
    id: 1,
    date: { day: 1, month: "май" },
    time: { from: "14:00", to: "14:25" },
    teacher: "Белкина Ирина",
    title: "Ментальная Арифметика",
    number: 32,
  },
  {
    id: 2,
    date: { day: 30, month: "октября" },
    time: { from: "11:00", to: "11:11" },
    teacher: "Животновская Оксана",
    title: "Программирование",
    number: 0,
  },
  {
    id: 3,
    date: { day: 16, month: "ноября" },
    time: { from: "09:00", to: "09:45" },
    teacher: "Мин Елена",
    title: "Скорочтение",
    number: 4,
  },
  {
    id: 4,
    date: { day: 1, month: "май" },
    time: { from: "14:00", to: "14:25" },
    teacher: "Белкина Ирина",
    title: "Ментальная Арифметика",
    number: 32,
  },
  {
    id: 5,
    date: { day: 1, month: "май" },
    time: { from: "14:00", to: "14:25" },
    teacher: "Белкина Ирина",
    title: "Ментальная Арифметика",
    number: 32,
  },
  {
    id: 6,
    date: { day: 1, month: "май" },
    time: { from: "14:00", to: "14:25" },
    teacher: "Белкина Ирина",
    title: "Ментальная Арифметика",
    number: 32,
  },
];

export const subjects = [
  { name: "Ментальная Арифметика", value: "maths" },
  { name: "Программирование", value: "programs" },
  { name: "Скорочтение", value: "speedReading" },
  { name: "Рисование", value: "drawing" },
];
