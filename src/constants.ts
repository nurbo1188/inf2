import { 
  HardDrive, 
  Cpu, 
  Usb, 
  Smartphone, 
  Disc, 
  Cloud, 
  Info, 
  Binary, 
  Monitor, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  BookOpen,
  Image as ImageIcon,
  Music,
  Video,
  Database
} from 'lucide-react';

export interface Slide {
  id: number;
  title: string;
  content: string | string[];
  type: 'title' | 'content' | 'list' | 'comparison' | 'grid' | 'final';
  icon?: any;
  image?: string;
  explanation?: string;
  highlights?: string[];
}

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Цифровые носители информации",
    content: "Понятно и просто для школьников",
    type: 'title',
    icon: Database,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    explanation: "Вводный слайд. Приветствие учеников и оглашение темы."
  },
  {
    id: 2,
    title: "Что такое информация?",
    content: "Информация — это любые сведения об окружающем мире.",
    type: 'grid',
    highlights: ["Текст (книги, сообщения)", "Изображения (фото)", "Звук (музыка)", "Видео"],
    icon: Info,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    explanation: "Объясняем базовое понятие информации через привычные примеры."
  },
  {
    id: 3,
    title: "Что такое цифровые носители?",
    content: [
      "Цифровые носители информации — это устройства, которые хранят данные в виде чисел (0 и 1).",
      "Просто: 👉 это устройства, где хранятся файлы"
    ],
    type: 'content',
    icon: Binary,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    explanation: "Даем определение цифровым носителям."
  },
  {
    id: 4,
    title: "Как работает хранение данных?",
    content: "Любая информация в компьютере превращается в код: 0 и 1 (бинарный код).",
    type: 'list',
    highlights: [
      "Текст → кодируется в цифры",
      "Фото → разбивается на пиксели",
      "Видео → набор кадров и звуков"
    ],
    icon: Binary,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    explanation: "Объясняем принцип двоичного кодирования."
  },
  {
    id: 5,
    title: "Основные виды носителей",
    content: "Сегодня существует множество способов хранить файлы:",
    type: 'grid',
    highlights: [
      "HDD (жёсткий диск)",
      "SSD накопитель",
      "USB-флешка",
      "Карта памяти",
      "CD/DVD диски",
      "Облако (интернет)"
    ],
    icon: Database,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    explanation: "Обзор всех типов носителей, о которых пойдет речь далее."
  },
  {
    id: 6,
    title: "Жёсткий диск (HDD)",
    content: "Внутри вращаются магнитные диски, а специальная головка записывает данные.",
    type: 'comparison',
    highlights: ["Плюсы: большой объём", "Минусы: медленный, боится ударов"],
    icon: HardDrive,
    image: "https://images.unsplash.com/photo-1531492746076-1a1bd9b29fc0?auto=format&fit=crop&q=80&w=800",
    explanation: "HDD — классический накопитель. Важно упомянуть про хрупкость из-за механики."
  },
  {
    id: 7,
    title: "SSD накопитель",
    content: "Хранит данные в микросхемах (чипах) без движущихся частей.",
    type: 'comparison',
    highlights: ["Плюсы: очень быстрый, надёжный", "Минусы: дороже чем HDD"],
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
    explanation: "SSD — современный стандарт. Быстрее и тише HDD."
  },
  {
    id: 8,
    title: "Флешка (USB)",
    content: "Хранит данные в памяти (как SSD) и подключается через USB-порт.",
    type: 'content',
    highlights: ["Маленькая", "Удобная", "Всегда с собой"],
    icon: Usb,
    image: "https://images.unsplash.com/photo-1622533051079-47fd1f26f7a6?auto=format&fit=crop&q=80&w=800",
    explanation: "Самый популярный переносной носитель."
  },
  {
    id: 9,
    title: "Карта памяти",
    content: "Используется в телефонах, камерах и планшетах для хранения фото и видео.",
    type: 'content',
    highlights: ["microSD — самая частая", "Очень компактная"],
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1558244402-286dd748c593?auto=format&fit=crop&q=80&w=800",
    explanation: "Объясняем, где дети чаще всего встречают карты памяти (смартфоны)."
  },
  {
    id: 10,
    title: "CD и DVD диски",
    content: "Лазер считывает данные с зеркальной поверхности диска.",
    type: 'content',
    highlights: ["Устарели", "Легко царапаются", "Мало места"],
    icon: Disc,
    image: "https://images.unsplash.com/photo-1526733169359-81173c67555f?auto=format&fit=crop&q=80&w=800",
    explanation: "История носителей. Сейчас используются редко, но знать о них нужно."
  },
  {
    id: 11,
    title: "Облачные хранилища",
    content: "Данные хранятся на мощных серверах в интернете. Доступ из любой точки мира!",
    type: 'list',
    highlights: ["Google Drive", "iCloud", "Яндекс Диск"],
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    explanation: "Современный способ хранения без физического устройства в руках."
  },
  {
    id: 12,
    title: "Где используются?",
    content: "Цифровые носители окружают нас повсюду:",
    type: 'grid',
    highlights: ["Компьютеры", "Телефоны", "Интернет", "Школы и работа"],
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    explanation: "Примеры применения в повседневной жизни."
  },
  {
    id: 13,
    title: "Почему это важно?",
    content: "Без них мы бы не смогли:",
    type: 'list',
    highlights: ["Хранить важную информацию", "Передавать данные друзьям", "Учиться и развиваться"],
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
    explanation: "Подчеркиваем значимость технологий."
  },
  {
    id: 14,
    title: "Правила безопасности",
    content: "Как не потерять свои файлы:",
    type: 'list',
    highlights: [
      "Делай резервные копии (бэкапы)",
      "Не удаляй важные файлы без спроса",
      "Используй пароли для защиты"
    ],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    explanation: "Важный блок про цифровую гигиену."
  },
  {
    id: 15,
    title: "Итог",
    content: "Цифровые носители — это основа хранения информации в современном мире.",
    type: 'final',
    icon: CheckCircle2,
    explanation: "Краткое резюме всей презентации."
  },
  {
    id: 16,
    title: "Вопросы",
    content: "Спасибо за внимание! Есть ли у вас вопросы?",
    type: 'title',
    icon: HelpCircle,
    image: "https://images.unsplash.com/photo-1531256456869-ce942a665e80?auto=format&fit=crop&q=80&w=800",
    explanation: "Завершение презентации и время для обсуждения."
  }
];
