import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gradient">Великобритания 🇬🇧</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'История', 'Города', 'Кухня', 'Культура', 'Праздники', 'Мечта'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="главная" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
              Великобритания
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Страна традиций, королевской роскоши и вдохновляющей истории
            </p>
            <Button size="lg" onClick={() => scrollToSection('история')} className="hover-lift">
              Начать путешествие <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="медиа" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Галерея</h3>
          <Tabs defaultValue="фото" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="фото">Фото</TabsTrigger>
              <TabsTrigger value="видео">Видео</TabsTrigger>
              <TabsTrigger value="аудио">Аудио</TabsTrigger>
            </TabsList>
            <TabsContent value="фото" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Биг-Бен', desc: 'Символ Лондона' },
                  { title: 'Тауэрский мост', desc: 'Разводной мост через Темзу' },
                  { title: 'Букингемский дворец', desc: 'Резиденция королевской семьи' }
                ].map((item, i) => (
                  <Card key={i} className="hover-lift overflow-hidden group cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon name="Image" size={48} className="text-primary/50 group-hover:scale-110 transition-transform" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="видео" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Тур по Великобритании', duration: '20 мин' },
                  { title: 'Достопримечательности', duration: '15 мин' }
                ].map((item, i) => (
                  <Card key={i} className="hover-lift overflow-hidden group">
                    <div className="h-56 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <Icon name="Play" size={64} className="text-accent group-hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{item.title}</h4>
                      <Badge variant="secondary">{item.duration}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="аудио" className="mt-8">
              <div className="space-y-4">
                {[
                  { title: 'Звуки Лондона', duration: '10 мин' },
                  { title: 'Британская рок-музыка', duration: '15 мин' }
                ].map((item, i) => (
                  <Card key={i} className="hover-lift">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                        <Icon name="Music" size={32} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.duration}</p>
                      </div>
                      <Button size="icon" variant="outline">
                        <Icon name="Play" size={20} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="ссылки" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Полезные ссылки</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Визы и Посольство</h4>
                    <a href="https://www.gov.uk/government/world/organisations/british-embassy-moscow" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Посольство Великобритании <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Отзывы туристов</h4>
                    <div className="space-y-1">
                      <a href="https://www.tripadvisor.ru/Tourism-g186216-United_Kingdom-Vacations.html" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        TripAdvisor <Icon name="ExternalLink" size={14} />
                      </a>
                      <a href="https://www.tourister.ru/world/europe/united-kingdom/publications" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Tourister.ru <Icon name="ExternalLink" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Туристические агентства</h4>
                    <div className="space-y-1">
                      <a href="https://www.coral.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Coral Travel <Icon name="ExternalLink" size={14} />
                      </a>
                      <a href="https://www.tez-tour.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Tez Tour <Icon name="ExternalLink" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Hotel" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Бронирование отелей</h4>
                    <div className="space-y-1">
                      <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Booking.com <Icon name="ExternalLink" size={14} />
                      </a>
                      <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                        Hotels.com <Icon name="ExternalLink" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Plane" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Авиабилеты</h4>
                    <a href="https://www.aviasales.ru" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                      Aviasales - поиск авиабилетов <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="история" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-gradient">История Великобритании</h3>
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    <strong className="text-primary">Великобритания</strong> — островное государство на северо-западе Европы, включающее Англию, Шотландию, Уэльс и Северную Ирландию. Родина парламентской демократии и конституционной монархии.
                  </p>
                  <p>
                    История Великобритании насчитывает тысячелетия — от древних кельтов и римского завоевания до создания величайшей империи в истории, на территории которой «никогда не заходило солнце».
                  </p>
                  <p>
                    Британская империя в период расцвета контролировала четверть земной суши. Промышленная революция XVIII-XIX веков началась именно здесь, изменив мир навсегда.
                  </p>
                  <p>
                    Сегодня Великобритания — <strong className="text-secondary">влиятельная мировая держава</strong>, культурный и финансовый центр, родина Шекспира, The Beatles, Гарри Поттера и бесчисленных научных открытий.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="города" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Города для посещения</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                city: 'Лондон',
                description: 'Столица с королевскими дворцами, всемирно известными музеями и современными небоскрёбами.',
                attractions: ['Биг-Бен', 'Тауэр', 'Букингемский дворец', 'Британский музей'],
                icon: 'Building2'
              },
              {
                city: 'Эдинбург',
                description: 'Столица Шотландии с величественным замком, средневековыми улицами и фестивалями.',
                attractions: ['Эдинбургский замок', 'Королевская миля', 'Холируд', 'Артурс Сит'],
                icon: 'Castle'
              },
              {
                city: 'Оксфорд',
                description: 'Университетский город с архитектурой, вдохновившей создателей Гарри Поттера.',
                attractions: ['Оксфордский университет', 'Бодлианская библиотека', 'Крайст-Черч', 'Рэдклифф Камера'],
                icon: 'GraduationCap'
              }
            ].map((item, i) => (
              <Card key={i} className="hover-lift animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{item.city}</h4>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Достопримечательности:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.attractions.map((attr, j) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {attr}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="кухня" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Кухня Великобритании</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Icon name="UtensilsCrossed" size={40} className="text-accent mb-4" />
                  <h4 className="text-xl font-bold mb-3">О кухне</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Британская кухня — это сочетание традиций и комфорта. Несмотря на стереотипы, современная британская гастрономия переживает ренессанс с множеством ресторанов, отмеченных звёздами Мишлен. Традиционные пабы предлагают сытные блюда, а afternoon tea — это настоящая церемония.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <Icon name="ChefHat" size={40} className="text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-3">Популярные блюда</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Fish and Chips', desc: 'Рыба в кляре с картофелем фри' },
                      { name: 'Sunday Roast', desc: 'Воскресное жаркое с йоркширским пудингом' },
                      { name: 'Full English Breakfast', desc: 'Полный английский завтрак' },
                      { name: 'Shepherd\'s Pie', desc: 'Пирог пастуха с мясом и картофелем' }
                    ].map((dish, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-secondary mt-1" />
                        <div>
                          <p className="font-semibold">{dish.name}</p>
                          <p className="text-sm text-muted-foreground">{dish.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="культура" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Музыка и Кинематограф</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Music" size={32} className="text-secondary" />
                    <h4 className="text-xl font-bold">Музыка</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Великобритания — родина британского вторжения 1960-х и бесчисленных музыкальных революций. От The Beatles и Rolling Stones до современных артистов — британская музыка формирует мировую культуру уже более полувека.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Легендарные группы:</strong> The Beatles, Queen, Pink Floyd, Led Zeppelin</p>
                    <p className="text-sm"><strong>Современные артисты:</strong> Adele, Ed Sheeran, Coldplay</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Film" size={32} className="text-primary" />
                    <h4 className="text-xl font-bold">Кинематограф</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Британское кино славится своей изысканностью и мастерством. От экранизаций классики до франшиз о Джеймсе Бонде и Гарри Поттере — UK кино покорило весь мир. Pinewood и Shepperton Studios — одни из крупнейших киностудий Европы.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Известные франшизы:</strong> Джеймс Бонд, Гарри Поттер, Шерлок</p>
                    <p className="text-sm"><strong>Режиссёры:</strong> Christopher Nolan, Ridley Scott, Danny Boyle</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="праздники" className="py-20 bg-gradient-to-r from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">Главные праздники</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'День рождения королевы',
                date: 'Вторая суббота июня',
                description: 'Официальное празднование с парадом Trooping the Colour и салютом в честь монарха.',
                icon: 'Crown'
              },
              {
                name: 'Рождество',
                date: '25 декабря',
                description: 'Главный зимний праздник с традиционным обедом, крекерами и рождественскими пудингами.',
                icon: 'Gift'
              },
              {
                name: 'Ночь костров',
                date: '5 ноября',
                description: 'Bonfire Night — фейерверки и костры в память о провале Порохового заговора 1605 года.',
                icon: 'Flame'
              },
              {
                name: 'День святого Патрика',
                date: '17 марта',
                description: 'Ирландский праздник, широко отмечаемый в Северной Ирландии и по всей Британии.',
                icon: 'Clover'
              },
              {
                name: 'Пасха',
                date: 'Март-Апрель',
                description: 'Пасхальные яйца, шоколад и Hot Cross Buns — традиционные символы весеннего праздника.',
                icon: 'Egg'
              },
              {
                name: 'Новый год',
                date: '1 января',
                description: 'Hogmanay в Шотландии и празднования на Трафальгарской площади в Лондоне.',
                icon: 'Sparkles'
              }
            ].map((holiday, i) => (
              <Card key={i} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={holiday.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{holiday.name}</h4>
                      <Badge variant="outline" className="mb-2">{holiday.date}</Badge>
                      <p className="text-sm text-muted-foreground">{holiday.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="мечта" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Heart" size={64} className="text-accent mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-8 text-gradient">Почему Великобритания — моя мечта?</h3>
            <Card className="hover-lift">
              <CardContent className="p-8 text-left">
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Великобритания для меня — это <strong className="text-primary">живая история, которую можно почувствовать на каждом шагу</strong>. Здесь средневековые замки соседствуют с инновационными стартапами, а вековые традиции гармонично сочетаются с современностью.
                  </p>
                  <p>
                    Меня восхищает, как эта страна <strong className="text-secondary">подарила миру английский язык, парламентскую демократию, промышленную революцию</strong> и оказала огромное влияние на мировую культуру — от литературы Шекспира до музыки The Beatles.
                  </p>
                  <p>
                    <strong className="text-accent">Уважение к традициям, стремление к образованию, культура дебатов и джентльменство</strong> — вот что делает Британию особенной. Это страна, где ценят историю, но смотрят в будущее.
                  </p>
                  <p className="text-center pt-4 text-muted-foreground italic">
                    Для меня Великобритания — это не просто страна, это мост между прошлым и будущим, где каждый камень хранит историю.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto hover-lift">
            <CardContent className="p-8 text-center">
              <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">О разработчике</h4>
              <p className="text-lg mb-2">
                <strong>Захар Куратов</strong>
              </p>
              <p className="text-muted-foreground">
                Студент Хакасского государственного университета
              </p>
              <Badge variant="secondary" className="mt-3">Группа 225</Badge>
            </CardContent>
          </Card>
          <div className="text-center mt-8 text-muted-foreground">
            <p className="text-sm">© 2024 Путеводитель по Великобритании</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
